import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () =>
{
    return (
        // <nav>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">About</Link>
        //     <Link to="/contacts">Contacts</Link>
        // </nav>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} style={({ isActive }) => isActive ? { backgroundColor: 'gray' } : {}} to="/">React Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? { backgroundColor: 'gray' } : {}} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? { backgroundColor: 'gray' } : {}} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? { backgroundColor: 'gray' } : {}} to="/contacts">Contacts</Nav.Link>
                        <Nav.Link as={NavLink} style={({ isActive }) => isActive ? { backgroundColor: 'gray' } : {}} to="/characters">Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;