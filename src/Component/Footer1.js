import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

function Footer1 () {
    return (
        <Container style={{textAlign:'left'}}>
                    <h2 style={{fontFamily:'Yatra One, cursive'}}>FoodShop</h2>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Et obcaecati quisquam id sit 
                        omnis explicabo voluptate aut 
                        placeat, soluta, nisi ea magni 
                        facere, itaque incidunt modi? Magni, 
                        et voluptatum dolorem.
                    </p>
                    <Row className="justify-content-left">
                        <Col xs={2}>
                        <h3><FaFacebookSquare/></h3>
                        </Col>
                        <Col xs={2}>
                        <h3><FaTwitterSquare/></h3>
                        </Col>
                        <Col xs={2}>
                        <h3><FaInstagram/></h3>
                        </Col>
                    </Row>
        </Container>
    )
}

export default Footer1;