import React, {useEffect, useState} from 'react';


const Nav = () => {

    const [mobileView, setMobileView] = useState(false);

    

    return(
        <nav className={mobileView ? "navbar-mobile" : "navbar"}>
            <span><a href="#about">Alistair Gray</a></span>
            <span>
                <ul className="nav-list">
                    <a href="#about">About</a>
                    <a href="#hero">Career</a>
                    <a href="#skillset">Skillset</a>
                    <a href="#projects">Projects</a>
                    <a href="#publications">Publications</a>
                    <a href="#contact">Contact</a>
                </ul>
            </span>
        </nav>
    )
}

export default Nav;
