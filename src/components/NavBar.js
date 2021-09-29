import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const iconVariants = {
        open: {

            transition: { duration: 0.5 },

        },
        closed: {

            transition: { duration: 0.5 },

        },

    }
    const popUpVariant = {
        open: {

            opacity: 1,
            transition: { duration: 0 },
            display: "inline-flex",
            

        },
        closed: {

            opacity: 0,
            transition: { duration: 0 },
            display: "none",

        }
    }

    return (
        <>
            <header className="header-content">
                <NavLink className="logo" to="/" exact>
                    AKJ
                </NavLink>
                <motion.button
                    className="menuBtn"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={iconVariants}
                    onClick={() => setIsOpen(state => !state)}
                > {isOpen ? "Close" : "Menu"}

                </motion.button>
            </header><motion.ul
                style={{ zIndex: "1" }}
                initial={false}
                variants={popUpVariant}
                animate={isOpen ? "open" : "closed"}
                className="menu">

                <NavLink style={{ padding: "20px" }} to="/post">
                    Posts
                </NavLink>
                <NavLink style={{ padding: "20px" }} to="/project">
                    Projects
                </NavLink>
                <NavLink style={{ padding: "20px" }} to="/about">
                    About
                </NavLink>
            </motion.ul>

        </>
    )

}