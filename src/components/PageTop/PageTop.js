import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="TopFixedPage p-0">
                    <div className="TTopFixedPageOverlay">
                        <Container className="TopPageContent">
                            <Row>
                                <Col className="text-center">

                                    <h4 className="TopFixedSubTitle">{this.props.pageTitle}</h4>


                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;
