import React from 'react';
import './homepage.css';
const HomePage=({setLoginUser})=>{
    return (
        <div className='homepage'>
            <div><h1> THIS IS HOME PAGE</h1></div>
            <div className='button' onClick={()=>setLoginUser({})}>Logout </div>

        </div>

    )
}
export default HomePage;
