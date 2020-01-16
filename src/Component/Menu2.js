import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Menu from './Menu';

function Menu2 () {
    return (
        <Container style={{textAlign:'center'}}>
            <p className='ijo' id='menu' >Specialties</p>
            <h2 style={{marginBottom:'0px'}}>Our Menu</h2>
            <Row>
                <Col md={4}>
                    <Menu/>
                </Col>
                <Col md={4}>
                    <Menu/>
                </Col>
                <Col md={4}>
                    <Menu/>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu2;