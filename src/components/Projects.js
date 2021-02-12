import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Projects extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectionH2">Projects</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <CardColumns>
                        <Card className="black" style={{width: '25rem'}}>
                            <Card.Img variant="top" src="/images/convo.png"/>
                            <Card.Body>
                            <Card.Title><strong>Convo</strong></Card.Title>
                            <Card.Text>This is an AI powered chatbot that simulates a networking conversation. Its aim is to help people who are new to networking and give them advice and encouragement for the real thing.</Card.Text>
                            <Card.Link className="notNav" href="https://alistairgray.github.io/convo-react-frontend/" target="_blank">Live Site</Card.Link>
                            <Card.Link className="notNav" href="https://github.com/alistairgray/convo-react-frontend" target="_blank">Github (Frontend)</Card.Link>
                            </Card.Body>
                            <Card.Footer>Tech Stack: React, Node, Express, Axios, IBM Watson (API) and Bootstrap</Card.Footer>
                            
                        </Card>
                        <Card className="pink" style={{width: '25rem'}}>
                            <Card.Img variant="top" src="/images/burning.png"/>
                            <Card.Body>
                            <Card.Title><strong>Burning Airlines</strong></Card.Title>
                            <Card.Text>An airline booking and registration app. Built during a 48hr period. This was a group project testing our resolve.</Card.Text>
                            <Card.Link className="notNav" href="https://github.com/alistairgray/burning-airlines-front-end" target="_blank">Github (Frontend)</Card.Link>
                            </Card.Body>
                            <Card.Footer>Tech Stack: React, Ruby-on-Rails and Axios</Card.Footer>
                        </Card>
                        <Card className="navy" style={{width: '25rem'}}>
                            <Card.Img variant="top" src="/images/krave_orig.png"/>
                            <Card.Body>
                            <Card.Title><strong>Krave</strong></Card.Title>
                            <Card.Text>A restaurant menu app that sought to help people search for dietary requirements.</Card.Text>
                            <Card.Link className="notNav" href="https://github.com/alistairgray/krave-rails-backend" target="_blank">Github (Backend)</Card.Link>
                            <Card.Link className="notNav" href="https://github.com/sam-sjs/ka-react-frontend" target="_blank">Github (Frontend)</Card.Link>
                            </Card.Body>
                            <Card.Footer>Tech Stack: React, Ruby-on-Rails, Google Maps (API), Bootstrap and Axios</Card.Footer>
                        </Card>
                        
                    </CardColumns>
                </Row>
            </Container>
            
        ) // return
    } // render()
} // class Projects

export default Projects