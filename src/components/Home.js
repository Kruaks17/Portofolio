import React from "react";

// import { motion, useMotionValue, useSpring } from "framer-motion";





export default function Home() {



    // const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

    // const cursorX = useMotionValue(-100);
    // const cursorY = useMotionValue(-100);

    // const springConfig = { damping: 30, stiffness: 800 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);

    // useEffect(() => {

    //     const moveCursor = (e) => {

    //         cursorX.set(e.clientX - 16)
    //         cursorY.set(e.clientY - 16)

    //         const x = e.clientX - 16
    //         const y = e.clientY - 16
    //         setCursorXY({ x, y })

    //     }

    //     window.addEventListener('mousemove', moveCursor);


    //     return () => {
    //         window.removeEventListener('mousemove', moveCursor);

    //     }

    // }, []);
    return (
        <>
        {/* <div className="cursor"
                    style={{
                        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
                        translateX: cursorX, translateY: cursorY,
                    }}
                /> */}
        <main>
            <section className="container">
                <span>
                    <h2 style={{ fontFamily: "ObjectSans-Thin" }}
                        className="designer">Designer + Front-end developer</h2>
                    <h1 className="navn"> Aksel Kruse-Jensen</h1>
                </span>
                <img className="portrett"
                    alt="portrett bilde"
                    style={{ width: '90%' }}
                    src={process.env.PUBLIC_URL + '../DSC04348.jpg'} />
            </section>
            <section className="about-me">
                <p>I'm Aksel, designer + front-end developer
                    currently based in Oslo, Norway.<br></br><br></br>
                    At the moment I take pride in building and developing
                    websites, digital design, brand indetity, editorial design + packaging design.
                    <br></br><br></br>
                    Interested in working together? <br></br><br></br>
                    Let me know!</p>
            </section>
            <a tabIndex={0}
                alt="sende meg mail"
                href="mailto:aksel.kj@hotmail.com"
                className="contact">Contact me</a>
        </main>
        <footer> 
                
        <a href="https://www.instagram.com/akselkj/" target="_blank" rel="noreferrer" alt="link til instagram"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank" rel="noreferrer" alt="link til linkedin"> <p>LinkedIn</p></a>
        <a href="https://github.com/Kruaks17" target="_blank" rel="noreferrer" alt="link til github"><p>Github</p></a>
        </footer>
        </>
    )
}