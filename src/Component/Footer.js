import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { FaCopyright } from 'react-icons/fa';
import Footer3 from './Footer3';

function Footer () {
    return (
        <Container style={{textAlign:'center',
                            paddingTop:'200px'}} >
            <Row>
                <Col md={4}>
                    <Footer1/>
                </Col>
                <Col md={4}>
                    <Footer2/>
                </Col>
                <Col md={4}>
                    <Footer3/>
                </Col>
            </Row>
            <p><FaCopyright/>2020. All Right Reserved.</p>
        </Container>
    )
}

export default Footer;