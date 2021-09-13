import React from "react";
import { NavLink } from "react-router-dom"; 


export default function NavBar(){

    return (
        <header >
            <div className="header-content">
                <nav >
                    <ul className="menu">
                    <NavLink to="/" exact className="logo"> 
                        AKJ
                    </NavLink>
                    <NavLink to="/post"> 
                        Posts 
                    </NavLink>
                    <NavLink to="/project"> 
                        Projects
                    </NavLink>
                    <NavLink to="/about"> 
                        About
                    </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )

}