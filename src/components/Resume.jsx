// Created by Nidhi Katiyar
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <>
      {/* Hero Banner */}
      <section id="about-hero" className="about-hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="fw-bold my-5">Checkout My Resume</h1>
              <h4 className="mb-4">UI/UX Engineer & Frontend Developer</h4>
              <p className="lead mb-4">
              I design and develop user-friendly digital experiences using Figma, React, and clean, modern code.

</p>

              <Link to="/about" variant="light" size="lg" className="btn btn-light   mb-5  text-center">
                Learn More About Me
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="my-5 text-center">

        {/* PDF Viewer */}
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="800px"
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        ></iframe>

        {/* Download Button */}
        <div className="mt-4">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            download="Nidhi_Katiyar_Resume.pdf"
          >
            Download Resume
          </a>
        </div>


      </Container>
    </>

  );
};

export default Resume;
