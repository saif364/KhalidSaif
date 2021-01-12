import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import picBanner from "../../Asset/image/banner.jpg";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="ContainerMargin text-center">
                    <h1 className=" ServiceTitle">Our Courses</h1>

                    <Row className="m-1">
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={picBanner}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify Header2">Web Development</h5>
                                    <p className="text-justify Paragraph">
                                        I build native and cross platfrom mobile app for your business app for your business

                                    </p>
                                    <a href="#" className="text-justify float-left">Details</a>
                                </Col>


                            </Row>


                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={picBanner}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify Header2">Web Development</h5>
                                    <p className="text-justify Paragraph">
                                        I build native and cross platfrom mobile app for your business app for your business

                                    </p>

                                    <a href="#" className="text-justify float-left">Details</a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                    <Row className="m-1">
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={picBanner}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify Header2">Web Development</h5>
                                    <p className="text-justify Paragraph">
                                        I build native and cross platfrom mobile app for your business app for your business

                                    </p>
                                    <a href="#" className="text-justify float-left">Details</a>
                                </Col>


                            </Row>


                        </Col>
                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="CourseImage" src={picBanner}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="text-justify Header2">Web Development</h5>
                                    <p className="text-justify Paragraph">
                                        I build native and cross platfrom mobile app for your business app for your business

                                    </p>

                                    <a href="#" className="text-justify float-left">Details</a>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;
