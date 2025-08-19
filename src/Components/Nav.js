import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap"; 
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function NavigationBar() {   
    const [tabs, setTabs] = useState('Home'); 

    function showTabs() {
        switch (tabs) {
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Services':
                return <Services />;
            case 'Contact': 
                return <Contact />;
            default:
                return <Home />; 
        }
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <span style={{ fontFamily: 'Great Vibes', fontSize: '1.8rem' }}>Saloon</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={() => setTabs('Home')}>Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => setTabs('About')}>About</Nav.Link>
                        <Nav.Link href="#services" onClick={() => setTabs('Services')}>Services</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setTabs('Contact')}>Contact</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {showTabs()}
        </div>
    );
}

export default NavigationBar;