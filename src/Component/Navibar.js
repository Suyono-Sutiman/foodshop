import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../S_logo.png';
import './Navibar.css';

function Navibar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky='top'>
        <Navbar.Brand href="#home" className='jeneng'>
            <img
            alt=""
            src={logo}
            width="45"
            height="45"
            className="d-inline-block align-top"
            />{' '}
        FoodShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Special Dishes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Beef Steak Sauce</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Salmon Zucchini</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Menu</Nav.Link>
            <Nav.Link >Team</Nav.Link>
            <Nav.Link >Reservation</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;