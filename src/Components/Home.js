import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Booking } from "./Booking";

function Home() {
    const [booking, setBooking] = useState(false);

    function handleBooking() {
        setBooking(true);
    }


    if (booking) {
        return <Booking />;
    }

    return (
        <Container className="mt-5">
            <h1 className="text-center">Welcome to Our Barbershop!</h1>
            <p className="text-center">
                Your style, our expertise. We provide top-notch grooming services.
            </p>

            <h2 className="mt-5">Featured Services</h2>
            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Haircuts</Card.Title>
                            <Card.Text>Classic and modern styles tailored to you.</Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Beard Trims</Card.Title>
                            <Card.Text>Keep your beard looking sharp and well-groomed.</Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Shaves</Card.Title>
                            <Card.Text>Experience traditional straight razor shaves.</Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <h2>Current Promotions</h2>
            <p className="alert alert-info">Enjoy 20% off your first visit! Book now!</p>

            <h2>What Our Customers Say</h2>
            <blockquote className="blockquote">
                <p>"Best barbershop in town! Highly recommend!"</p>
                <footer className="blockquote-footer">John Doe</footer>
            </blockquote>

            <h2>Gallery</h2>
            <Row className="mb-4">
                <Col md={6}>
                    <img
                        src="path_to_image1.jpg"
                        alt="Haircut Example"
                        className="img-fluid mb-2"
                    />
                </Col>
                <Col md={6}>
                    <img
                        src="path_to_image2.jpg"
                        alt="Barbershop Interior"
                        className="img-fluid mb-2"
                    />
                </Col>
            </Row>

            <div className="text-center">
                <Button variant="success" onClick={handleBooking}>
                    Book Your Appointment
                </Button>
            </div>
        </Container>
    );
}

export default Home;
