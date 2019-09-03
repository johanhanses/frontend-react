import React from 'react';
import { 
        // BrowserRouter, 
        // Route, 
        Link
        // NavLink 
        } from "react-router-dom";

import logo from "./Sunpraise.png"

const NavBar = ({ user }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/report">Reports</Link></li>
                    {/* <li><Link to="/report/kmom02">Kmom02</Link></li> */}
                    <li><Link to="/about">About</Link></li>
                    {!user && (
                    <React.Fragment>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </React.Fragment> )}
                    {user && (
                    <React.Fragment>
                        <li><Link to="/logout">Log out</Link></li>
                        <li><span>{user.email} is currently logged in</span></li>
                    </React.Fragment> )}
                    

                </ul>
            </nav>
            <div className="banner">
                <div className="leftField"><h1>Hello me</h1></div>
                <div className="rightField"><img src={logo} alt={"logo"}/></div>
            </div>
        </header>
    );
}
 
export default NavBar;
