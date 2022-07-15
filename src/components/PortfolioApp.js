import React from 'react';

import Nav from './Nav';
import About from './About';
import Intro from './Intro';
import Skillset from './Skillset';
import Examples from './Examples';
import Companies from './Companies';
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
                    <section id="intro" className="intro">
                        <Intro /> 
                    </section>
                    <section id="companies" className="companies">
                        <Companies />
                    </section>
                    <section id="examples" className="examples">
                        <Examples />
                    </section>
                    <section id="skillset" className="skillset">
                        <Skillset />
                    </section>
                    <section id="publications" className="publications">
                        <Publications />
                    </section>
                </main>
                <footer id="contact" className="contact">
                    <Contact />
                </footer>
            </body>
        ) // return
} // PortfolioApp

export default PortfolioApp