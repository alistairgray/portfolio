import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class About extends React.Component{
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sectionH2">About Me</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={4}>
                            
                                <Card.Img id="heroImg" src="/images/me.jpg" />
                            
                        </Col>
                        <Col xs={6} md={8}>
                            <Card className="charcoal">
                                <Card.Body>
                                <Card.Text>
                                    Hi! My name is Alistair Gray
                                    <br />
                                    <br />
                                    I'm a Junior Software Engineer and Author of Finding Your Fire Within a Burning World.
                                    <br />
                                    <br />
                                    People say that I think differently. Whilst I have a diverse array of skills and experiences over 15 years and 7 industries, what matters is that I can leverage it to find simplicity out of complexity. This is what enables me to challenge what is possible and execute successfully on those ideas.
                                    <br />
                                    <br />
                                    I am motivated by organisations who seek to support the growth of its people and have a desire to make a transformative impact on society. Although I thrive in team based environments, I have demonstrated an ability to produce successful outcomes on my own too.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        ) // return
    } // render()
} // class About

export default About