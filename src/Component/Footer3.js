import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';

function Footer3 () {
    return (
        <Container style={{textAlign:'left', paddingTop:'5%'}}>
            <h3>Newsletter</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Form>
                <Form.Group>
                    <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Button variant="success" type="submit" style={{marginBottom:'16px'}}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Footer3;