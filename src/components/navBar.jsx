import React, { Component } from 'react';
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

import logo from "./Sunpraise.png"

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/report">Reports</Link></li>
                        {/* <li><Link to="/report/kmom02">Kmom02</Link></li> */}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
                <div className="banner">
                    <div className="leftField"><h1>Hello me</h1></div>
                    <div className="rightField"><img src={logo} alt={"logo"}/></div>
                </div>
            </header>
        );
    }
}
 
export default NavBar;
