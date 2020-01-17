import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Reservation.css';

function Reservation () {
    return (
        <Container className='wadah7' id='book' >
            <Container style={{paddingTop: '10%'}} >
            <Row>
                <Col md={5} style={{
                    textAlign:'center',
                    boxShadow:'0 .5rem 1rem rgba(0,0,0,.15)'
                    }} >
                <p className='ijo'>Reservation</p>
                <h2>Book Now</h2>
                <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control type="number" placeholder="Phone" />
                </Form.Group>
                
                <Form.Group>
                <Form.Row>
                    <Col>
                    <Form.Group>
                    <Form.Control type='date' />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                    <Form.Control type='time' />
                    </Form.Group>
                    </Col>
                </Form.Row>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select">
                    <option>Person</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="Your Message..."/>
                </Form.Group>

                <Button variant="success" type="submit" style={{marginBottom:'16px'}} >
                    Submit
                </Button>

                </Form>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default Reservation;