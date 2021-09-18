import React from "react";
import { NavLink } from "react-router-dom"; 


export default function NavBar(){

    return (
        <header >
            <div className="header-content">
                <nav>
                    <NavLink to="/" exact > 
                      <div className="logo">  AKJ </div>
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
                    
                </nav>
            </div>
        </header>
    )

}