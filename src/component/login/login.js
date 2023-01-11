import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate, NavLink, Navigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const recordFunction = () => {
    navigate("/users-record")
    }
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleClick = () => navigate('/');

    const login = () => {
        axios.post('https://login-page-backend-api.onrender.com/login', user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user);
                navigate("/");
            })
            .catch(err => {
                alert("Something went wrong")
            })

    }
    return (
        <div>
            <div className='manishLogin'>
                <button onClick={recordFunction} className="sLogin">Manish Login</button>
            </div>
            <div className='login'><h1> THIS IS Login PAGE</h1>
                {/* {console.log(user)} */}
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="pasword" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
                <button className='button' onClick={login}>Login</button>
                <div className='or'>or</div>
                <NavLink className="NavClass button" to="/register">Register</NavLink>
            </div>
        </div>
    )
}
export default Login;
