import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom'

const Form =(props)=>{
    console.log(props)
    const {login} = props

    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        email : "",
        rePassword : ""
    })

    const [formError, setFormError] = useState({})
    const [fSubmit, setFSubmit] = useState(false)

    const handleInput =(e)=>{
       let {name, value} =  e.target
       setFormData({
        ...formData, 
        [name] : value
       })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        let errors = validate(formData)
        setFormError(errors);

        let errorKey = Object.keys(errors);
        if(errorKey.length == 0){
            toast("Registraion Successful!")
            window.localStorage.setItem("name" , formData.username)
            setFSubmit(true)
            login(1)
            navigate("/")
        }else{
            setFSubmit(false)
        }


    }



    const validate =(data)=>{
        let error = {}
        if(data.username.trim() == ""){
           error.username = "Please enter the username"
        }
        if(data.password.trim() == ""){
            error.password = "Please enter the password"
        }
        if(data.email.trim() == ""){
            error.email = "Please enter the email"
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = "Please enter a valid email address";
        }
        if(data.rePassword.trim() == "" || data.password != data.rePassword){
            error.rePassword = "Please enter the correct password"
        } else if (data.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
            error.password = "Password should be at least 10 characters long and contain at least one special character";
        }
        console.log(data)
        return error;
    }

    return (
        <>
        <div id="form-page">
        <img id="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
        <div className="form-parent">
            <ToastContainer/>
            <form onSubmit={formSubmit}>

                <h1 id="up">Sign Up</h1>
                <div>
                    {fSubmit && <p>Registration Sucessful!</p> }
                </div>
                <input type="text" name="username" placeholder="Enter User name..."
                onChange={handleInput}
                />
                {formError.username ? <p className="red-col">{formError.username}</p> : ""}
        
                <input type="email" name="email" placeholder="Enter Email....."
                onChange={handleInput}
                />
                {formError.email ? <p className="red-col">{formError.email}</p> : ""}

                <input type="text" name="password" placeholder="Enter Password....."
                onChange={handleInput}
                />
                {formError.password ? <p className="red-col">{formError.password}</p> : ""}

                <input type="text" name="rePassword" placeholder="ReEnter Password....."
                onChange={handleInput}
                /> <br />
                {formError.rePassword 
                ? <p className="red-col iup">{formError.rePassword}</p> : ""}


                <input id="button1" type="submit" value={"Register"} />
            </form>
        </div>
        </div>
       

        </>
    )
}

export default Form;