import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Publications extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectionH2">Publications</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <CardColumns style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/fire.jpg"/>
                            <Card.Body>
                            <Card.Title><strong>Finding Your Fire Within a Burning World</strong></Card.Title>
                            <Card.Text>This is my first published book which seeks to help people who are going through change amongst the challenges that this world offers.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/dog.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Removing the ambiguity in LinkedIn's application process</strong></Card.Title>
                            <Card.Text>Here I discuss some user experience gaps in the hiring phase for job applicants.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/spacex-heavy.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>The case for a space hub in Geelong</strong></Card.Title>
                            <Card.Text>Here I detail an idea for a space manufacturing and data science hub in the region of Geelong, Victoria.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/vertical-farm.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Modernising our Agricultural Sector</strong></Card.Title>
                            <Card.Text>I talk about how Australia has an incredible advantage utilising renewables and vertical farming.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/rocket-lab.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Why Australia needs a space agency</strong></Card.Title>
                            <Card.Text>As of 2019 we now have an agency. But prior to that announcement I was advocating why it was important to the future of our economy.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/hands.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>The fight against complexity</strong></Card.Title>
                            <Card.Text>The final article in the series exploring information overload at scale.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/iota.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Blockchain and Agile</strong></Card.Title>
                            <Card.Text>I explore the mechanisms of both blockchain and blockless chains alongside agile to adequately scale organisations without compromising cognitive load.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/apps.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Messaging app saturation and how it kills workplace productivity</strong></Card.Title>
                            <Card.Text>This article shows how the number of messaging apps can increase as an organisation scales its digital communication.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/frustrated.png"/>
                            <Card.Body>
                            <Card.Title><strong>Why Email needs to die a fiery death…and be reborn</strong></Card.Title>
                            <Card.Text>I challenge the idea that email and messaging apps need a major rethink.</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{width: '20rem'}}>
                            <Card.Img variant="top" src="/images/brain.jpeg"/>
                            <Card.Body>
                            <Card.Title><strong>Why we need to have a chat about Information Overload</strong></Card.Title>
                            <Card.Text>The original article that outlines why information overload is a major problem that is only being marginally tackled.</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Row>
            </Container>
        ) // return
    } // render()
} // class Publications

export default Publications