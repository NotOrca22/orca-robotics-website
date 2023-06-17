// import logo from './logo.svg';
// import './App.css';

import { Route, BrowserRouter, Link, Routes } from "react-router-dom";

// import LoginDropDown from './Components/LoginDropdown';
import LogOut from './LogOut';
import Members from "./Members";

const LoginDropDown = (isLoggedIn) => {
    return (

        <div className="dropdown">
            <button className="dropbtn">Log In</button>
            <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/login">Register</Link>
            </div>
        </div>


    )
}
export default LoginDropDown