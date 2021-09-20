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
                    <NavLink style={{padding:"10px"}} to="/post"> 
                        Posts 
                    </NavLink>
                    <NavLink style={{padding:"10px"}} to="/project"> 
                        Projects
                    </NavLink>
                    <NavLink  style={{padding:"10px"}}to="/about"> 
                        About
                    </NavLink>
                    
                </nav>
            </ul>
        </header>
    )

}