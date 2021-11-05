import React, { useEffect, useState } from "react";
import { useMotionValue } from "framer-motion";

// import sanityClient  from "../client.js";

export default function Project() {
    // const [projectData, setProjectData] = useState(null);

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // const springConfig = { damping: 30, stiffness: 800 };
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

    // useEffect (() =>{

    //     sanityClient.fetch(`*[_type == "project"]{
    //         Image,
    //         title,
    //         date,
    //         place,
    //         description,
    //         projectType,
    //         link,
    //         tags,

    //     }`).then((data)=> setProjectData(data))
    //        .catch((console.error));
    // },[]);

    return (
        <>
            <main style={{ color: "#EBF5DF" }} >
                <div className="cursor"
                    style={{
                        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
                        translateX: cursorX, translateY: cursorY,
                    }}
                />
                <section className="container-post">
                   
                    
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                             src={process.env.PUBLIC_URL + '../BB.png'} />
                    <h1>Børres Burger</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>Nettside</p>    
                    </div>
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                         src={process.env.PUBLIC_URL + '../Cimera_.png'} />
                    <h1>Cimera_</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>Nettside</p>
                    </div>
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                         src={process.env.PUBLIC_URL + '../PP.png'} />
                    <h1>Paragraph Paragraph</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>Nettside</p>
                    </div>
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                             src={process.env.PUBLIC_URL + '../Artboard 1.jpg'} />
                    <h1>North Men</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>Pakkningdesign</p>
                    </div>
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                             src={process.env.PUBLIC_URL + '../Photolouge.jpg'} />
                    <h1>Photolouge.</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>Redaksjonellt design</p>
                    </div>
                    <div>
                    <img className="prosjekt-bilde"
                             alt="prosjekt-bilde"
                             style={{ width: '70%' }}
                             src={process.env.PUBLIC_URL + '../Kinetic-Animation_v2.gif'} />
                    <h1>Animasjon</h1>
                    <p style={{fontFamily:"ObjectSans-Thin"}}>After Effects</p>
                    </div>
                </section>

            </main>
            <footer>
                <a href="https://www.instagram.com/akselkj/" target="_blank" rel="noreferrer" alt="link til instagram"><p>Instagram</p></a>
                <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank" rel="noreferrer" alt="link til linkedin"> <p>LinkedIn</p></a>
                <a href="https://github.com/Kruaks17" target="_blank" rel="noreferrer" alt="link til github"><p>Github</p></a>
            </footer>

        </>
    )

}