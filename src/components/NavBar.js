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
             display: "",


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
                > {isOpen ? "Lukk" : "Meny"}
                </motion.button>
            </header><motion.ul
                style={{ zIndex: "1" }}
                initial={false}
                variants={popUpVariant}
                animate={isOpen ? "open" : "closed"}
                className="menu">
                <section>
                <NavLink style={{ padding: "20px" }} to="/post">
                    Innlegg
                </NavLink>
                <NavLink style={{ padding: "20px" }} to="/project">
                    Prosjekter
                </NavLink>
                <NavLink style={{ padding: "20px" }} to="/about">
                    Om meg
                </NavLink>
                </section>
                
            </motion.ul>
            

        </>
    )

}