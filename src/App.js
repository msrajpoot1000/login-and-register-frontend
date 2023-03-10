import './App.css';
import HomePage from './component/homepage/homepage.js';
import Login from './component/login/login.js';
import Register from './component/register/register.js';
import Records from './component/main_access/records.js';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import React,{useState} from 'react';
function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
         {/* <HomePage/> */}
          <BrowserRouter>
        <Routes>    
          <Route  path="/" exact="true" element={user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />      }></Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/register" exact="true"  element={<Register />}></Route>
          <Route path="/users-record" exact="true"  element={<Records/>}></Route>
          </Routes>
      </BrowserRouter>

        
    
    </div>
  );
}

export default App;
