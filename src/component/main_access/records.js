import axios from "axios";
import React, { useEffect, useReducer, useState, useTransition } from "react";
import "./records.css";
import { useNavigate } from "react-router-dom";
const Records = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
  
    const goLogin = () => {
        navigate("/login");
    }
    const goRegister = () => {
        navigate("/register");
    }
    
    const checkMailAndPass = () => {
        
        if (user.email == "manish" && user.password == "manish") {
            alert("Yes you are authorozed person and You able to see records");
             axios.get('https://login-page-backend-api.onrender.com/users-record')
            .then(res => {
                setItem(res.data)
                console.log(res.data)
            })
            .catch(err => { 
                console.log(err); 
            })
        }
        else {
            alert("You are not authorozed person");
            console.log(user.email,user.password);
        }
        
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    return (
        <div>
            <div className="loginAndRegister">
                <button className="NavClass button"  onClick={goLogin}> Back to Login</button>
                <button className="NavClass button"  onClick={goRegister}>Back to Register</button>
            </div>
            <div className="centerUser">
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="pasword" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
                <button className="checkMailAndPass" onClick={checkMailAndPass}>Check Records</button>
            </div>
            
            <div className="table" >
                <ul>
                    {item.map((item, index) => <li key={index}> {item.name}</li>)}
                </ul>
                <ul>
                    {item.map((item, index) => <li key={index}> {item.email}</li>)}
                </ul>
                <ul>
                    {item.map((item, index) => <li key={index}> {item.password}</li>)}
                </ul>
            </div>
        </div>
    )
}
export default Records;