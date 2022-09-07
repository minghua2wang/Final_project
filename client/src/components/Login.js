import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Form from './Form';

function Login() {

    const [ user, setUser ] = useState({});

    function handleCallbackResponse(response) {
    console.log("this: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;

    }

    function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
    }


    useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
        client_id: "910149500469-uc924flosnjjut4mi30d8h7snbpsvhp3.apps.googleusercontent.com",
        callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
    )
    })
    return (
    <div id="login">
        <div id="signInDiv"></div>
        { user &&
        <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
        </div>
        }
        {
        Object.keys(user).length !== 0 &&
        <button onClick={ (e) => handleSignOut(e) }>Sign Out</button>
        }
        {
            Object.keys(user).length !== 0 &&
            <Form></Form>
        }
    </div>
    );
}

export default Login;