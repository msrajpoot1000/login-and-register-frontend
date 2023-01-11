import axios from 'axios';
import React, { useState } from 'react';
import './register.css';
import { useNavigate, NavLink } from 'react-router-dom';
// import axios from './axios';
const Register = () => {
    const navigate = useNavigate();

    const [pass, setPass] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        else {
            alert("You have entered an invalid email address!")
            return (false)
        }
    }




    function ValidatePassword(password) {
        // Initialize variables
        var strength = 0;
        var tips = "";
        // Check password length
        (password.length < 8) ? tips += "Make the password longer. " : strength += 1;
        // Check for mixed case
        (password.match(/[a-z]/)) ? strength += 1 : tips += "Use atlest one lowercase";
        (password.match(/[A-Z]/)) ? strength += 1 : tips += "Use atlest one uppercase letters. ";
        // Check for numbers
        (password.match(/\d/)) ? strength += 1 : tips += "Include at least one number. ";
        // Check for special characters
        (password.match(/[^a-zA-Z\d]/)) ? strength += 1 : tips += "Include at least one special character. ";



        // Return results
        if (strength < 2) {
            alert("Easy to guess. " + tips);
            return false;
        } else if (strength === 2) {
            alert("Medium difficulty. " + tips);
            return false;
        } else if (strength === 3) {
            alert("Difficult. " + tips);
            return false;
        } else if(strength === 4) {
            alert("Difficult. But " + tips);
            return false;
        }
        else {
            return true;
        }
     

    }





    const register = () => {
        const { name, email, password, reEnterPassword } = user;
        setPass(password);
        console.log(ValidatePassword(password))
        if (name && email && ValidateEmail(email) && password && ValidatePassword(password) && reEnterPassword && (password === reEnterPassword)) {
            // alert("i complete verify");
            axios.post("https://login-page-backend-api.onrender.com/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login");

                })
                .catch(err => {
                    alert(err, "Something went wrong")
                })
        }
        else {
            // alert("not posted user");
        }

    }
    return (
        <div className='register'><h1> THIS IS Register PAGE</h1>
            <input type="text" name="name" placeholder="Enter your Name" onChange={handleChange} ></input>
            <input type="email" pattern="[^ @]*@[^ @]*" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="pasword" name="password" id="pass" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
            <input type="pasword" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Enter your re-password"></input>
            <button className='button' onClick={register}>Register</button>
            <div className='or'>or</div>
            <NavLink className="NavClass button" to="/login">Login</NavLink>

        </div>
    )
}
export default Register;
