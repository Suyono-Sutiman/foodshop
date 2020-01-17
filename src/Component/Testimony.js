import React from 'react';
import {Carousel, Container} from 'react-bootstrap';
import {FaQuoteLeft} from 'react-icons/fa';
import './Testimony.css';

function Testimony () {
    return (
        <Container className='wadah5'>
            <p className='ijo'>Testimony</p>
            <h2 className='limo' >Happy Customer</h2>
            <Carousel style={{height:'250px'}} >
                    <Carousel.Item>
                        <h1 className='limo'> <FaQuoteLeft/> </h1>
                        <p className='limo'>
                        Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                        </p>
                        <p className='limo'>John Doe</p>
                        <p className='limo'>CEO of<span> Get Excepteur</span></p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1 className='limo'> <FaQuoteLeft/> </h1>
                        <p className='limo'>
                        Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.
                        </p>
                        <p className='limo'>John Doe</p>
                        <p className='limo'>CEO of<span> Get Excepteur</span></p>
                    </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Testimony;