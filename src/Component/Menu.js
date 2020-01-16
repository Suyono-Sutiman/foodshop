import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import sarapan from '../Images/breakfast-1.jpg';
import {IoIosPricetags} from 'react-icons/io';
import './Menu.css';

function Menu () {
        return (
        <Container className='wadah3'>
                    <h3 className='htiga' >Breakfast</h3>
                    <Row className='makanan3'>
                        <Col className='col3' xs={4} >
                        <img src={sarapan} alt='sarapan' className='gambar3' />
                        </Col>
                        <Col className='col3' xs={4}>
                        <h4>Egg Sandwich</h4>
                        <p>Meat Ball, Mie</p>
                        </Col>
                        <Col className='col3 satu' xs={4}>
                        <h4><IoIosPricetags/> $30</h4>
                        </Col>
                    </Row>
                    <Row className='makanan3'>
                        <Col className='col3' >
                        <img src={sarapan} alt='sarapan' className='gambar3' />
                        </Col>
                        <Col className='col3'>
                        <h4>Egg Sandwich</h4>
                        <p>Meat Ball, Mie</p>
                        </Col>
                        <Col className='col3 satu'>
                        <h4><IoIosPricetags/> $30</h4>
                        </Col>
                    </Row>
                    <Row className='makanan3'>
                        <Col className='col3' >
                        <img src={sarapan} alt='sarapan' className='gambar3' />
                        </Col>
                        <Col className='col3'>
                        <h4>Egg Sandwich</h4>
                        <p>Meat Ball, Mie</p>
                        </Col>
                        <Col className='col3 satu'>
                        <h4><IoIosPricetags/> $30</h4>
                        </Col>
                    </Row>
        </Container>
    )
    }

export default Menu;