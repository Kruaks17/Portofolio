import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";


export default function Post() {

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id.
                        url
                    },
                    alt
                }
            } `)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <>
            <main>
                <section className="container-post">
                    <div >
                        {postData && postData.map((post, index) => (
                            <article>
                                <Link
                                    to={/post/ + post.slug.current}
                                    key={post.slug.current}>
                                    <span key={index}>
                                        <img
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                        />
                                        <span>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <a href="https://www.instagram.com/akselkj/" target="_blank" rel="noreferrer" alt="link til instagram"><p>Instagram</p></a>
                <a href="https://www.linkedin.com/in/aksel-kruse-jensen-4a862a1a1/" target="_blank" rel="noreferrer" alt="link til linkedin"><p>LinkedIn</p></a>
                <a href="https://github.com/Kruaks17" target="_blank" rel="noreferrer" alt="link til github"><p>Github</p></a>
            </footer>
        </>
    )
}