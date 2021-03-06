import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import steak from '../Images/steak.jpg';
import salmon from '../Images/salmon-zucchini.jpg';
import {IoIosPricetags} from 'react-icons/io';
import './Special.css';

function Special () {
    return (
        <Container className='wadah2' >
            <p className='ijo'>Specialties</p>
            <h2>Special Dishes</h2>
            <Row className='row2' id='steak'>
                <Col md={6} className='col2'  >
                    <h1  >1.</h1>
                    <div className='ket'><hr/>
                    <h3 className='ijo'>Beef Steak Sauce</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Cupiditate, ea vero alias perferendis 
                        quas animi doloribus voluptates. 
                        Atque explicabo ea nesciunt provident 
                        libero qui eum, corporis esse quos excepturi soluta?
                    </p>
                    <h3><IoIosPricetags/>$15.00</h3>
                    <Button variant="success">Book A Table</Button>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={steak} alt='steak' className='gambar1' />
                </Col>
            </Row>
            <Row className='row2' id='salmon'>
                <Col md={{order: 2}} className='col2' >
                    <h1 className='hsiji'  >2.</h1>
                    <div className='ket'><hr/>
                    <h3 className='ijo'>Salmon Zucchini</h3>
                    <p>Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Cupiditate, ea vero alias perferendis 
                        quas animi doloribus voluptates. 
                        Atque explicabo ea nesciunt provident 
                        libero qui eum, corporis esse quos excepturi soluta?
                    </p>
                    <h3><IoIosPricetags/>$12.00</h3>
                    <Button variant="success">Book A Table</Button>
                    </div>
                </Col>
                <Col md={{order: 1}}  >
                    <img src={salmon} alt='steak' className='gambar1' />
                </Col>
            </Row>
        </Container>
    )
}

export default Special;