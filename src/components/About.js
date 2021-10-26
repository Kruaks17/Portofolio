import React from "react";


export default function About() {

    return (
        <>
            <title>About</title>
            <main>
                <section className="about-container">
                    <div>
                        <h1 style={{ fontSize: "5rem" }}>Om meg</h1>
                        <p> Tok bachelor i grafisk design fra Westerdals 2020. Holder for tiden til i Oslo.
                            For å bli mer fleksibel som designer tok jeg årsstudiumet Front-end utvikling hos Fagskolen Kristiania. Der avsluttet jeg i juni 2021.
                            Jeg trives godt med å bygge og utvikle nettsider,  visuell identitet, redaksjonellt design og pakkningdesing.</p>

                        <h1 style={{fontSize:"2rem"}}> Utdanning </h1>
                        <p>
                            2020 - 2021 ¬ <br></br>
                            Årsstudium i front-end utvikling hos Fagskolen Kristiania. <br></br>
                            Lært koding i JavScript, HTML, CSS og React. Har også lært WCAG og universell utforming.
                        </p>
                        <span></span>
                        <p>
                            2017 - 2020 ¬ <br></br>
                            Bachelor i Grafisk Design hos Westerdals.
                        </p>
                        <h1 style={{fontSize:"2rem"}}>Erfaring</h1>
                        <p>
                            December 2019 - Mars 2020 ¬ <br></br>
                            Praksisplass hos Melkeveien Designkontor AS <br></br>
                            Praksis som en del av bachelorgraden. Jobb som grafisk designer.
                        </p>
                        <p>
                            Oktober 2019 - Desember 2019 ¬ <br></br>
                            Praktikant hos Melkeveien Designkontor AS <br></br>
                            Jobb som grafisk designer ved siden av skole.
                        </p>

                    </div>

                    <div>
                        <img className="portrett"
                            alt="portrett bilde"
                            style={{ width: '100%' }}
                            src={process.env.PUBLIC_URL + '../DSC04348.jpg'} />

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