import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Publications from './Publications';
import Contact from './Contact';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class PortfolioApp extends React.Component {
    render(){
        return(
            <body id="structure">
                    <Navbar sticky="top" bg="light" variant="light" expand="lg">
                        <Navbar.Brand href="#top">Alistair Gray</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#top">Home</Nav.Link>
                                <Nav.Link href="https://github.com/alistairgray">Github</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#aboutMe">about</Nav.Link>
                                <Nav.Link href="#myProjects">projects</Nav.Link>
                                <Nav.Link href="#publications">publications</Nav.Link>
                                <Nav.Link href="#contact">contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse> 
                    </Navbar>
                <section id="aboutMe">
                    <About />
                </section>
                <section id="myProjects">
                    <Projects />
                </section>
                <section id="publications">
                    <Publications />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                <footer>
                    Copyright &copy; Alistair Gray 2021
                </footer>
            </body>
        ) // return
    } // render()
} // class PortfolioApp

export default PortfolioApp