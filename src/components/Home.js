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
        <main>
            <section className="container">
                {/* <div className="cursor"
                    style={{
                        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
                        translateX: cursorX, translateY: cursorY,
                    }}
                /> */}
                <h1 className="designer">Designer + Front-end developer</h1>
                <h1 className="navn">Aksel <br></br> Kruse-Jensen</h1>
                 {/* <img className="portrett"style={{width:'100%'}} src={process.env.PUBLIC_URL + '../bildeavmeg.jpeg'} />  */}
            </section>
            <section className="about-me">
                <p>I'm Aksel, designer + front-end developer
                    currently looking for a job.<br></br><br></br>
                    At the moment I take pride in building and developing
                    websites, digital design, brand indetity, editorial design + packaging design.
                    <br></br><br></br>
                    Interested in working together? <br></br><br></br>
                    Let me know!</p>
            </section>
            <a tabindex={0} alt="sende meg mail" href="mailto:aksel.kj@hotmail.com" className="contact">Contact me</a>
            
        </main>
    )
}