import React from "react";
import { NavLink } from "react-router-dom"; 


export default function NavBar(){

    return (
        <header className="header-content">
            <NavLink className="logo" to="/" exact > 
                        AKJ
            </NavLink>
            <ul className="menu">
                <nav>
                    <NavLink to="/post"> 
                        Posts 
                    </NavLink>
                    <NavLink to="/project"> 
                        Projects
                    </NavLink>
                    <NavLink to="/about"> 
                        About
                    </NavLink>
                    
                </nav>
            </ul>
        </header>
    )

}