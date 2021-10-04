import React, { useEffect, useState } from "react";

import sanityClient  from "../client.js";

export default function Project(){
    const [ projectData, setProjectData ] = useState(null);

    useEffect (() =>{

        sanityClient.fetch(`*[_type == "project"]{
            image,
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
        <main style={{color:"#EBF5DF"}} >
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
                        {/* <img>
                            {project.image}
                        </img> */}
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
        </main>
         <footer> 
         <p>AKJ</p> 
        <a href="https://www.instagram.com/akselkj/" target="_blank" ><p>Instagram</p></a>
        <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank"> <p>LinkedIn</p></a>
        <a href="https://github.com/Kruaks17" target="_blank"><p>Github</p></a>
        </footer>
        </>
    )

}