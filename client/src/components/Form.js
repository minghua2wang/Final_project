import "./form.css";
import { useState } from 'react';
import Axios from 'axios';

function Form() {

    const url = "http://localhost:8000/"
    const [data, setData] = useState({
        name:"",
        number:"",
        email:"",
        skills:"",
        experience:"",
        education:""
    })

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            number: data.number,
            email: data.email,
            skills: data.skills,
            experience: data.experience,
            education: data.education
        })
        .then(res =>{
            console.log(res.data)
        })
    }

    return (
        <div className="form-container">
            <img></img>
            <form className="form" onSubmit={(e) => submit(e)}>

                    <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"></input><br></br>

                    <input onChange={(e)=>handle(e)} id="number" value={data.number} placeholder="phone number"></input><br></br>

                    <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="e-mail"></input><br></br>

                    <textarea onChange={(e)=>handle(e)} id="skills" value={data.skills} placeholder="skills"></textarea><br></br>

                    <textarea onChange={(e)=>handle(e)} id="experience" value={data.experience} placeholder="experience"></textarea><br></br>

                    <textarea onChange={(e)=>handle(e)} id="education" value={data.education} placeholder="education"></textarea><br></br>

                    <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;