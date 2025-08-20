import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Home from "./Home";
import { Gallery } from "./Gallery";
import { Booking } from "./Booking";
import { Stylist } from "./Stylist";
import { Profile } from "./Profile";
import { ServiceCard } from "./ServiceCard";

function NavigationBar() {
  const [tabs, setTabs] = useState("Home");

  function showTabs() {
    switch (tabs) {
      case "Home":
        return <Home />;
      case "Gallery":
        return <Gallery />;
      case "Services":
        return <ServiceCard />;
      case "Booking":
        return <Booking />;
      case "Stylist":
        return <Stylist />;
      case "Profiles":
        return <Profile />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <span style={{ fontFamily: "Great Vibes", fontSize: "1.8rem" }}>
            Saloon
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => setTabs("Home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#gallery" onClick={() => setTabs("Gallery")}>
              Gallery
            </Nav.Link>
            <Nav.Link href="#services" onClick={() => setTabs("Services")}>
              Services
            </Nav.Link>
            <Nav.Link href="#booking" onClick={() => setTabs("Booking")}>
              Booking
            </Nav.Link>
            <Nav.Link href="#Stylist" onClick={() => setTabs("Stylist")}>
              Stylist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="py-4">
        {React.cloneElement(showTabs(),{setTabs})}
      </Container>
    </div>
  );
}

export default NavigationBar;
