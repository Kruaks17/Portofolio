import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import sanityClient  from "../client.js";

export default function Project(){
    const [ projectData, setProjectData ] = useState(null);

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

     const cursorX = useMotionValue(-100);
     const cursorY = useMotionValue(-100);

     const springConfig = { damping: 30, stiffness: 800 };
     const cursorXSpring = useSpring(cursorX, springConfig);
     const cursorYSpring = useSpring(cursorY, springConfig);

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

    useEffect (() =>{

        sanityClient.fetch(`*[_type == "project"]{
            Image,
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            
        }`).then((data)=> setProjectData(data))
           .catch((console.error));
    },[]);

    return(
        <>
        <main  style={{color:"#EBF5DF"}} >
        <div className="cursor"
                    style={{
                        transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0) `,
                        translateX: cursorX, translateY: cursorY,
                    }}
                /> 
            <section >
                <h1></h1>
                <h2></h2>
                <section className="container-post">
                    {projectData && projectData.map((project, index)=> (
                    <article >
                        <h1>
                            <a 
                                tabIndex={0}
                                href={project.link}
                                alt={project.title}
                                rel="noreferrer"
                                target="_blank">
                                {project.title}
                            </a>
                        </h1>
                        
                        
                        <div >
                            <span>
                                {project.ProjectType}
                            </span>
                            <p>
                                {project.description}
                            </p>
                            <a tabIndex={0} href={project.link} target={"_blank"} rel="noreferrer">
                                View the project{""}
                            <span role="img" arialabel="right pointer">
                            </span>
                            </a>
                            <span style={{fontFamily:"ObjectSans-Thin"}}>
                                {project.tags}
                            </span>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
            <footer> 
         
        <a href="https://www.instagram.com/akselkj/" target="_blank" rel="noreferrer" alt="link til instagram"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank" rel="noreferrer" alt="link til linkedin"> <p>LinkedIn</p></a>
        <a href="https://github.com/Kruaks17" target="_blank" rel="noreferrer" alt="link til github"><p>Github</p></a>
        </footer>
        </main>
        
        </>
    )

}