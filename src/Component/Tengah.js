import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import hero1 from '../Images/hero-1.jpg';
import hero2 from '../Images/hero-2.jpg';
import hero3 from '../Images/hero-3.jpg';

function Tengah () {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h1>
                        We Love Delicious Foods!
                    </h1>
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