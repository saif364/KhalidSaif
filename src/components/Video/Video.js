import React, {Component, Fragment} from 'react';
import  {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {faCheckCircle, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';


class Video extends Component {

    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} sm={12} md={12} className="VideoCard">
                            <div>
                                <p className="Title">
                                    HOW I DO
                                </p>
                                <p className="ParagraphBig">
                                    First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.
                                </p>

                                    <h1>
                                        <FontAwesomeIcon onClick={this.modalOpen} className="VideoSign" icon={faPlayCircle}/>
                                    </h1>


                            </div>
                        </Col>
                    </Row>
                </Container>



                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>

                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                             <BigPlayButton position="center"></BigPlayButton>
                        </Player>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose} >
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>






            </Fragment>
        );
    }
}

export default Video;