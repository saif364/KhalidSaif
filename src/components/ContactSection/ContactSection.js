import React, {Component, Fragment} from 'react';
import  {Col,Button, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="m-5">
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="Header2">Quick Connect</h1>

                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="Header2">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Type your Name" />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="Header2">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Type your Email" />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="Header2">Message</Form.Label>
                                    <Form.Control as="textarea" rows="4" />

                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>




                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="Header2">Discuss now</h1>
                            <p  className="Paragraph"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> #79/6 Padma Residential Aria, 3rd Floor Front Side, Dhaka</p>
                            <p className="Paragraph"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> saif@gmail.com</p>
                            <p>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +8801686223244
                            </p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ContactSection;
