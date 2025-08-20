import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>123 Barber St.<br/>City, State, Zip</p>
                        <p>Email: info@barbershop.com<br/>Phone: (123) 456-7890</p>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>We provide the best barber services with a classic touch.</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-4">
                        <p>&copy; {new Date().getFullYear()} Barbershop. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;