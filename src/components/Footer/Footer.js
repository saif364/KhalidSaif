import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faBook, faEnvelope, faHome, faMale, faMoneyCheck, faPen, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="">
                    <Row className="FooterSection">
                        <Col lg={3} md={6} sm={12} className="">
                            <h1 className="Header2">Follow Me</h1>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> Facebook </a></p>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon> Youtube </a></p>

                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h1 className="Header2">Address</h1>
                            <p  className="Paragraph"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> #79/6 Padma Residential Aria, 3rd Floor Front Side, Dhaka</p>
                            <p className="Paragraph"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> saif@gmail.com</p>
                            <p>
                               <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +8801686223244
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <h1 className="Header2">Information </h1>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faMale}></FontAwesomeIcon> About me </a></p>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Contact me </a></p>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <h1 className="Header2">Legal </h1>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> Refund Policy </a></p>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Terms And Condition </a></p>
                            <p className="Paragraph"><a href=""><FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Privacy Policy </a></p>
                        </Col>
                    </Row>

                </Container>

                <Container fluid={true} className="text-center CopyRightSection CopyRightSectionLink">
                    <a className="">KhalidSaif.Com &copy; 2019-20</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;



