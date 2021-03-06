import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../S_logo.png';
import './Navibar.css';

function Navibar () {
    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" fixed='top'>
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Special Dishes" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#steak">Beef Steak Sauce</NavDropdown.Item>
                <NavDropdown.Item href="#salmon">Salmon Zucchini</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#book">Reservation</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;