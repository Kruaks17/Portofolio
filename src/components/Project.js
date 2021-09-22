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
        <main style={{color:"#EBF5DF", display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)", justifyContent:"center",
        alignContent:"center",
        }} >
            <section>
                <h1></h1>
                <h2></h2>
                <section>
                    {projectData && projectData.map((project, index)=> (
                    <article>
                        
                        <h3>
                            <a 
                                tabIndex={0}
                                href={project.link}
                                alt={project.title}
                                rel="noreferrer"
                                target="_blank">
                                {project.title}
                            </a>
                        </h3>
                        {/* <img>
                            {project.image}
                        </img> */}
                        <div>
                            {/* <span>
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                {project.place}
                            </span> */}
                            <span>
                                {project.ProjectType}
                            </span>
                            <p>
                                {project.description}
                            </p>
                            <a href={project.link} target={"_blank"} rel="noreferrer">
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
    )

}