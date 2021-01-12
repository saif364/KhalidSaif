import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


class Topbanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TopFixedBanner p-0">
                    <div className="TopBannerOverlay">
                        <Container className="TopContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="TopTitle">SOFTWARE ENGINEER</h1>
                                    <h4 className="TopSubTitle">Mobile And Web Application</h4>
                                    <Button variant="primary">More Info</Button>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Topbanner;