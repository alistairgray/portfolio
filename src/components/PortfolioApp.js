import React from 'react';

import SmoothScroll from './SmoothScroll/SmoothScroll';

import Nav from './Nav';
import About from './About';
import Hero from './Hero';
import Skillset from './Skillset';
import Projects from './Projects';
import Publications from './Publications';
import Contact from './Contact';


const PortfolioApp = () => {
        return(
            <body>
                <Nav />
                <main>
                    <section id="about" className="about">
                        <About />
                    </section>
                    <section id="hero" className="hero">
                        <Hero />
                    </section>
                    <section id="skillset" className="skillset">
                        <Skillset />
                    </section>
                    <section id="projects" className="projects">
                        <Projects />
                    </section>
                    <section id="publications" className="publications">
                        <Publications />
                    </section>

                </main>
                <footer className="contact">
                    <Contact />
                </footer>
            </body>
        ) // return
} // class PortfolioApp

export default PortfolioApp