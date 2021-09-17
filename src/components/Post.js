import React, { useState, useEffect } from "react";
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
        <main>
            <section>

                <div>
                    <article>

                        <span>

                        </span>

                    </article>
                </div>
            </section>
        </main>
    )

}