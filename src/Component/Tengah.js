import React from 'react';
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap';
import hero1 from '../Images/hero-1.jpg';
import hero2 from '../Images/hero-2.jpg';
import hero3 from '../Images/hero-3.jpg';
import {FaYoutube, FaRocket, FaLeaf, FaRocketchat} from 'react-icons/fa';
import './Tengah.css';

function Tengah () {
    return (
        <Container id='home'>
            <Row>
                <Col md={6}>
                    <h1 className='judul'>
                        We Love<br/> Delicious Foods!
                    </h1>
                    <Row className='tombol'>
                    <Col >
                    <Button variant="outline-success">Explore Menu</Button>
                    </Col>
                    <Col >
                    <Button variant="outline-success"><FaYoutube/> Play Video</Button>
                    </Col>
                    </Row>
                    <div className='jero'>
                    <Row>
                        <Col xs={{span:3, offset:1}} className='pamer'>
                        <FaRocket className='rocket'/><br/>
                        <p>Fast Delivery</p>
                        </Col>
                        <Col xs={{span:3}} className='pamer siji'>
                        <FaLeaf className='daun' /><br/>
                        <p>Fresh Food</p>
                        </Col>
                        <Col xs={{span:3}} className='pamer'>
                        <FaRocketchat className='chat' /><br/>
                        <p>24/7 Support</p>
                        </Col>
                    </Row>
                    </div>
                </Col>
                <Col md={6}>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={hero1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={hero2}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={hero3}
                        alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Tengah;