// Created by Gangarubini Gangasrinivasan

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* Hero Banner */}
      <section id="about-hero" className="about-hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="fw-bold my-5">Contact Me!</h1>
              <h4 className="">UI/UX Engineer & Frontend Developer</h4>
              <p className="lead mb-4">
              I'm a UI/UX Engineer passionate about designing seamless digital journeys. Using tools like Figma and React, I turn ideas into clean, interactive, and user-focused interfaces.

</p>
              <Link to="/about" className="btn btn-light mb-5 text-center">
                Learn More About Me
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      
      {/* Contact Info Section */}
<section className="py-5 bg-light">
  <Container>
    <h2 className="text-center fw-bold mb-5">Contact Information</h2>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
      <Card className="text-center shadow flex-fill tool-card" style={{ maxWidth: '300px' }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
          <FaPhoneAlt className="text-primary fs-2 mb-3" />
          <Card.Title className="fw-semibold">Phone</Card.Title>
          <Card.Text className="mb-0">+1 (647) 123-4567</Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-center shadow flex-fill tool-card" style={{ maxWidth: '300px' }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
          <FaEnvelope className="text-primary fs-2 mb-3" />
          <Card.Title className="fw-semibold">Email</Card.Title>
          <Card.Text className="mb-0">katiyarnidhi02@gmail.com</Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-center shadow flex-fill tool-card" style={{ maxWidth: '300px' }}>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center p-4">
          <FaLinkedin className="text-primary fs-2 mb-3" />
          <Card.Title className="fw-semibold">LinkedIn</Card.Title>
          <Card.Text>
            <a
              href="https://www.linkedin.com/in/nidhi-katiyar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              linkedin.com/in/nidhi-katiyar
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </Container>
</section>


      {/* Contact Form Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Get In Touch</h2>
        {submitted && (
          <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
            Your message has been sent!
          </Alert>
        )}
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Contact;
