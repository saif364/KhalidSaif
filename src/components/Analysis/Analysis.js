import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology:'Asp.Net',Projects:'100'},
                {Technology:'SQL',Projects:'90'},
                {Technology:'Java',Projects:'65'},
                {Technology:'React',Projects:'60'},
                {Technology:'Angular',Projects:'40'},
                {Technology:'Python',Projects:'50'},
                {Technology:'Mysql',Projects:'70'},
                {Technology:'Jquery',Projects:'65'},

            ]
        }
    }

    render() {
        var blue="rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="ServiceTitle">Technology we use</h1>
                    <Row>


                        <Col lg={6} md={12} sm={12} style={{width:'100%',height:'300px'}}>

                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                   <XAxis dataKey="Technology">

                                   </XAxis>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue}>

                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify AnalysisDescription~">
                                To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.

                                Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.

                                According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;