import "./form.css";

function Form() {
    return (
        <div className="form-container">
            <img></img>
            <form className="form">
                <label>
                    Name:
                    <input></input>
                </label><br></br>
                <label>
                    Phone Number:
                    <input></input>
                </label><br></br>
                <label>
                    E-mail:
                    <input></input>
                </label><br></br>
                <label>
                    Skills:
                    <input className="big"></input>
                </label><br></br>
                <label>
                    Experience:
                    <input className="big"></input>
                </label><br></br>
                <labeel>
                    Education:
                    <input className="big"></input>
                </labeel><br></br>
            </form>
        </div>
    )
}

export default Form;