import React, { useState, useEffect } from "react";

import {  useMotionValue, useSpring } from "framer-motion";

export default function Home() {



     const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

     const cursorX = useMotionValue(-100);
     const cursorY = useMotionValue(-100);

     const springConfig = { damping: 30, stiffness: 800 };
    //  const cursorXSpring = useSpring(cursorX, springConfig);
    //  const cursorYSpring = useSpring(cursorY, springConfig);

     useEffect(() => {

         const moveCursor = (e) => {

             cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)

             const x = e.clientX - 16
            const y = e.clientY - 16
             setCursorXY({ x, y })

         }

         window.addEventListener('mousemove', moveCursor);


        return () => {
             window.removeEventListener('mousemove', moveCursor);

         }

     }, []);
    return (
        <>
        <title>Portofolio</title>
         <div className="cursor"
                    style={{
                        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
                        translateX: cursorX, translateY: cursorY,
                    }}
                /> 
        <main>
            <section className="container">
                <span>
                    <h2 style={{ fontFamily: "ObjectSans-Regular" }}
                        className="designer">Designer + Front-end utvikler</h2>
                    <h1 className="navn"> Aksel Kruse-Jensen</h1>
                </span>
                <img className="portrett"
                    alt="portrett bilde"
                    style={{ width: '90%' }}
                    src={process.env.PUBLIC_URL + '../DSC04348.jpg'} />
            </section>
            <section className="about-me">
                <p> Hei jeg er Aksel, designer + front-end utvikler
                    som holder til i Oslo.<br></br><br></br>
                    For øyeblikket holder jeg på med å bygge og utvikle nettsteder, digital design, visuell identitet, redaksjonelt design + emballasjedesign.
                    <br></br><br></br>
                    Interessert i å jobbe sammen? <br></br><br></br>
                    Gi meg beskjed!</p>

            </section>
            <a  tabIndex={0}
                alt="sende meg mail"
                href="mailto:aksel.kj@hotmail.com"
                className="contact">Kontakt meg</a>
        </main>
        <footer> 
        <a href="https://www.instagram.com/akselkj/" target="_blank" rel="noreferrer" alt="link til instagram"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank" rel="noreferrer" alt="link til linkedin"> <p>LinkedIn</p></a>
        <a href="https://github.com/Kruaks17" target="_blank" rel="noreferrer" alt="link til github"><p>Github</p></a>
        </footer>
        </>
    )
}