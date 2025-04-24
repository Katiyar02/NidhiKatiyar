//Header setup by Piyush Maharjan and Nidhi Katiyar

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // closes the navbar
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="nav-bar"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          <img
            src="/images/nidhi.png"
            alt="Nidhi Katiyar Logo"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="portfolio-navbar-nav"
          onClick={() => setExpanded((prev) => !prev)}
        />
        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-bold" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-bold" onClick={handleNavClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="fw-bold" onClick={handleNavClick}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="fw-bold" onClick={handleNavClick}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-bold" onClick={handleNavClick}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="fw-bold" onClick={handleNavClick}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
