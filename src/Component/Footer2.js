import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Footer2 () {
    return (
        <Container style={{textAlign:'left', paddingTop:'5%'}}>
            <h3>Open Hours</h3>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Monday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Tuesday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Wednesday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Thursday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Friday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Saturday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>9:00 - 24:00</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <p style={{marginBottom:'2px'}}>Sunday</p>
                </Col>
                <Col style={{textAlign:'right'}} >
                <p style={{marginBottom:'2px'}}>Closed</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer2;