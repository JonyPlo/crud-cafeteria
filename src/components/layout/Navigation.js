import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            Crud Cafetería
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
