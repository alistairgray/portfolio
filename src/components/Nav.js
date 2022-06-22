import React, {useState} from 'react';
import resume from './assets/data/resume.pdf';

const Nav = () => {

    const [mobileView, setMobileView] = useState(false);

    

    return(
        <nav className={mobileView ? "navbar-mobile" : "navbar"}>
            <span><a href="#about">Alistair Gray</a></span>
            <span>
                <ul className="nav-list">
                    <a href="#about">About</a>
                    <a href="#hero">Career</a>
                    <a href="#examples">Examples</a>
                    <a href="#projects">Projects</a>
                    <a href="#publications">Publications</a>
                    <a href="#contact">Contact</a>
                    <a href={resume} download="resume.pdf">Download Resume</a>
                </ul>
            </span>
      </nav>
    )
}

export default Nav;
