import React, {Component, Fragment} from 'react';
import  {Col,Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import pictrure from '../../Asset/image/banner.jpg'



class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="text-center ServiceTitle">Recent Projects</h1>
                    <Row >
                        <Col lg={4} md={6} sm={12} >
                            <Card  className="ProjectCard">
                                <Card.Img variant="top" src={pictrure} />
                                <Card.Body>
                                    <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="ServiceDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="ButtonCard">Details</Button>
                                </Card.Body>
                            </Card>


                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card  className="ProjectCard">
                                <Card.Img variant="top" src={pictrure} />
                                <Card.Body>
                                    <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="ServiceDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="ButtonCard">Details </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card  className="ProjectCard">
                                <Card.Img variant="top" src={pictrure} />
                                <Card.Body>
                                    <Card.Title className="ProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="ServiceDescription">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button className="ButtonCard" >Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default RecentProjects;