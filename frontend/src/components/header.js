import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () =>  {
    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    Ticket Shop
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/ticket_types">Ticket Types</Nav.Link>                
                    </Nav>
                </Container>
            </Navbar>            
        </React.Fragment>
    );
};

export default Header;
