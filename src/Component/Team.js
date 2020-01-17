import React from 'react';
import {Card, Container, CardDeck} from 'react-bootstrap';
import ceo from '../Images/chef-1.jpg';
import chef2 from '../Images/chef-2.jpg';
import chef3 from '../Images/chef-3.jpg';
import {FaFacebookSquare, FaTwitter, FaInstagram, FaGooglePlusG} from 'react-icons/fa';

function Team () {
    return (
        <Container style={{textAlign:'center'}} id='team'  >
            <p className='ijo'>Specialties</p>
            <h2 >Our Team</h2>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={ceo} alt='team' />
                    <Card.Body>
                    <Card.Title>Daniel Powter</Card.Title>
                    <Card.Text>
                        CEO
                    </Card.Text>
                    <Card.Link href="#">
                        <FaFacebookSquare/> <FaTwitter/> <FaInstagram/> <FaGooglePlusG/>
                    </Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chef2} alt='team' />
                    <Card.Body>
                    <Card.Title>Edward Collin</Card.Title>
                    <Card.Text>
                        Chef
                    </Card.Text>
                    <Card.Link href="#">
                        <FaFacebookSquare/> <FaTwitter/> <FaInstagram/> <FaGooglePlusG/>
                    </Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={chef3} alt='team' />
                    <Card.Body>
                    <Card.Title>Chris Duff</Card.Title>
                    <Card.Text>
                        Chef
                    </Card.Text>
                    <Card.Link href="#">
                        <FaFacebookSquare/> <FaTwitter/> <FaInstagram/> <FaGooglePlusG/>
                    </Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    )
}

export default Team;