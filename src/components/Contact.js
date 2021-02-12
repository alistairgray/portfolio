import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Contact extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                    <h2 className="sectionH2">Contact</h2>
                    </Col>
                </Row>
                <Row>
                    <CardColumns>
                    <Card style={{width: '16rem', textAlign: 'center'}}>
                            <Card.Img className="contactImg" variant="top" src="/images/GitHub-Mark-32px.png"/>
                            <Card.Body>
                            <Card.Title><strong>Github</strong></Card.Title>
                            <Card.Link href="http://github.com/alistairgray">http://github.com/alistairgray</Card.Link>
                            </Card.Body>                     
                        </Card>
                        <Card style={{width: '16rem', textAlign: 'center'}}>
                            <Card.Img className="contactImg" variant="top" src="/images/linkedin.png"/>
                            <Card.Body>
                            <Card.Title><strong>LinkedIn</strong></Card.Title>
                            <Card.Link href="https://www.linkedin.com/in/grayalistair/">https://www.linkedin.com/in/grayalistair/</Card.Link>
                            </Card.Body>                     
                        </Card>
                        <Card style={{width: '16rem', textAlign: 'center'}}>
                            <Card.Img className="contactImg" variant="top" src="/images/email.png"/>
                            <Card.Body>
                            <Card.Title><strong>Github</strong></Card.Title>
                            <Card.Link href="mailto:alistair.g.gray@gmail.com">alistair.g.gray@gmail.com</Card.Link>
                            </Card.Body>                     
                        </Card>
                    </CardColumns>
                </Row>
            </Container>
        ) // return
    } // render
} // class Contact

export default Contact