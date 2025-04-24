// Footer Setup by Simiya Rajan and Gangarubini Gangasrinivasan
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4  ">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
          <img
            src="/images/nidhi.png" // Place your logo image inside the public folder
            alt="Nidhi Katiyar Logo"
            height="30"
            className="d-inline-block align-top"
          />   
                   <p className="small">Passionate about pixels, performance, and people</p>
          </Col>

          <Col md={4} className="mb-3 mb-md-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-dark text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-dark text-decoration-none">About</Link></li>
              <li><Link to="/projects" className="text-dark text-decoration-none">Projects</Link></li>
              <li><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <h6>Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/Katiyar02"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nidhi-katiyar02/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:katiyarnidhi02@gmail.com"
                className="text-dark fs-4"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-3" />
       
      </Container>
      <div className='copyright'>
        <p className="text-center small mb-0">© {new Date().getFullYear()} Nidhi katiyar. All rights reserved.</p>

        </div>
    </footer>
  );
};

export default Footer;
