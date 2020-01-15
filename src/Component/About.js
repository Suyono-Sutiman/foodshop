import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import hero2 from '../Images/hero-2.jpg';
import hero1 from '../Images/hero-1.jpg';
import './About.css';

function About (){
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <img src={hero2} alt='makanan enak' className='makanan'/>
                </Col>
                <Col md={6}>
                    <p className='ijo' id='about' >About</p>
                    <h2>Welcome To Foodshop</h2>
                    <p>On her way she met a copy. 
                        The copy warned the Little Blind Text, 
                        that where it came from it would have 
                        been rewritten a thousand times and 
                        everything that was left from its origin 
                        would be the word "and" and the Little Blind 
                        Text should turn around and return to 
                        its own, safe country. A small river named 
                        Duden flows by their place and supplies it 
                        with the necessary regelialia. It is a paradisematic country, 
                        in which roasted parts of sentences fly into your mouth.
                    </p>
                    <h3>Special Recipe</h3>
                    <Row>
                        <Col>
                            <img src={hero1} alt='sijiloro' className='makanan1' />
                            <p className='ijo'>Australian Organic Beef</p>
                        </Col>
                        <Col>
                            <img src={hero1} alt='sijiloro' className='makanan1' />
                            <p className='ijo'>Australian Organic Beef</p>
                        </Col>
                        <Col>
                            <img src={hero1} alt='sijiloro' className='makanan1' />
                            <p className='ijo'>Australian Organic Beef</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default About;