import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicsLogo from '../../Asset/image/graphics.svg';
import mobileLogo from '../../Asset/image/mobile.svg';
import webLogo from '../../Asset/image/web.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>

                <Container>
                    <h1 className="text-center ServiceTitle">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="ServiceCard text-center">
                                <img src={webLogo}/>
                                <h2 className="ServiceName">Web Development</h2>
                                <p className="ServiceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>

                            <div className="ServiceCard text-center">
                                <img src={mobileLogo}/>
                                <h2 className="ServiceName">Mobile Development</h2>
                                <p className="ServiceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="ServiceCard text-center">
                                <img src={graphicsLogo}/>
                                <h2 className="ServiceName">Graphics Design</h2>
                                <p className="ServiceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;