import React, {useState} from 'react';
import resume from './assets/data/resume.pdf';
import portfolio from './assets/data/portfolio.pdf';

const Nav = () => {

    const [mobileView, setMobileView] = useState(false);

    

    return(
        <nav className={mobileView ? "navbar-mobile" : "navbar"}>
            <span>
                <ul className="nav-list">
                    <a href="#about">About</a>
                    <a href="#companies">Companies</a>
                    <a href="#examples">Examples</a>
                    <a href="#publications">Publications</a>
                    <a href="#contact">Contact</a>
                    
                </ul>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/grayalistair">LinkedIn</a>
                <a href="mailto:alistair.gray@hey.com">Email</a>
                <a href={resume} download="resume.pdf">Resume</a>
                <a href={portfolio} download="portfolio.pdf">Porfolio</a>
            </span>
      </nav>
    )
}

export default Nav;
