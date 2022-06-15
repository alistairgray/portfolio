import React from 'react';

import Nav from './Nav';
import About from './About';
import Publications from './Publications';
import Hero from './Hero';
import Skillset from './Skillset';
import Projects from './Projects';
import Contact from './Contact';


const PortfolioApp = () => {
        return(
            <body>
                <Nav />
                <main>
                    <section id="about" className="about">
                        <div id="banner"></div>
                        <About />
                    </section>
                    <section id="hero" className="hero">
                        <Hero />
                    </section>
                    <section id="publications" className="publications">
                        <Publications />
                    </section>
                    <section id="skillset" className="skillset">
                        <Skillset />
                    </section>
                    <section id="projects" className="projects">
                        <Projects />
                    </section>

                </main>
                <footer className="contact">
                    <Contact />
                </footer>
            </body>
        ) // return
} // PortfolioApp

export default PortfolioApp