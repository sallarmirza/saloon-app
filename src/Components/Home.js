import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import Col
import { services } from '../data/services';
import { ServiceCard } from "./ServiceCard";

function Home({setTabs}) {
    return (
        <>
            <Container>
                <h1 className="text-center">Welcome to Our Saloon</h1>
                <p className="text-center">Your style, our Expertise.</p>
                <h2 className="mt-4">Featured Services</h2>
                <Row>
                    {services.map((service) => (
                        
                        <Col md={4} key={service.id}>
                            <ServiceCard
                                title={service.title}
                                text={service.text}
                                onClick={() => alert(service.title)}
                            />
                        </Col>
                    ))}
                </Row>
                <div className="text-center mt-3">
                    <button className="btn btn-success" onClick={()=>setTabs('Booking')}>Book Now</button>

                </div>
            </Container>
        </>
    );
}

export default Home;