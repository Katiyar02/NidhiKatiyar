// Created by Piyush Maharjan 

import React from 'react';
import { Container, Row, Col, Button, Card, ProgressBar } from 'react-bootstrap';
import { FaUser, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const skills = [
  { name: 'React', level: 90 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Figma', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'MySql', level: 70 },
  { name: 'Adobe Creative Suite', level: 85 }
];

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section id="about-hero" className="about-hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="fw-bold my-5">Hi, I'm Nidhi Katiyar</h1>
              <h4 className="mb-4">UI/UX Engineer & Frontend Developer</h4>
              <p className="lead mb-4">
                I specialize in crafting engaging and intuitive digital experiences through clean code and thoughtful design. From Figma to React, I bring concepts to life.
              </p>
              <Link to="/projects" className="btn btn-light mb-5 text-center">
                View Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Me Section (Text + Image) */}
      <section className="py-5 bg-white" id="about-me">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text */}
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">About Me</h2>
              <h5 className="text-muted mb-3">UI/UX Designer & Frontend Developer</h5>
              <p>
              I'm passionate about designing intuitive user experiences and turning ideas into functional, engaging digital products. With a strong foundation in Figma, React, and clean code, I love crafting web interfaces that are both aesthetically pleasing and user-friendly. My approach blends creativity with problem-solving, ensuring every design decision enhances usability and aligns with business goals.

              Over the years, I’ve worked on diverse projects ranging from startup landing pages to enterprise dashboards, gaining experience in responsive design, accessibility, and performance optimization. I thrive in collaborative environments where ideas are shared freely and innovation is encouraged. Whether it's translating a wireframe into a pixel-perfect interface or iterating based on user feedback, I’m always focused on delivering digital experiences that feel effortless and impactful.

</p>
              <Button variant="primary" href="/resume" className="mt-3">
                View Resume
              </Button>
            </Col>

            {/* Right Side - Image */}
            <Col md={6} className="text-center">
              <img
                src="/images/about-me.jpeg" // Place image in /public/images/
                alt="Nidhi Katiyar"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Personal Introduction */}
      <section id="personal-intro" className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Personal Introduction</h2>
          <Row className="g-4 justify-content-center text-center">
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow-sm intro-card border-0 h-100">
                <Card.Body>
                  <FaUser size={40} className="mb-3 text-primary" />
                  <Card.Title className="fw-semibold">Nidhi Katiyar</Card.Title>
                  <Card.Text className="text-muted">
                    A passionate digital creator who brings designs to life through code.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow-sm intro-card border-0 h-100">
                <Card.Body>
                  <FaMapMarkerAlt size={40} className="mb-3 text-primary" />
                  <Card.Title className="fw-semibold">Ontario, Canada</Card.Title>
                  <Card.Text className="text-muted">
                    Currently based in Canada and open to remote opportunities globally.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="shadow-sm intro-card border-0 h-100">
                <Card.Body>
                  <FaBriefcase size={40} className="mb-3 text-success" />
                  <Card.Title className="fw-semibold">UI/UX Engineer</Card.Title>
                  <Card.Text className="text-muted">
                    I build seamless digital experiences with React, Bootstrap, and Figma.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Professional Summary */}
      <section id="professional-summary" className="py-5 bg-white">
        <Container>
          <h2 className="text-center fw-bold mb-5">Professional Summary</h2>
          <Row className="text-center">
            <Col md={4}>
              <h3>3+ Years</h3>
              <p className="text-muted">Experience in frontend development & UI/UX</p>
            </Col>
            <Col md={4}>
              <h3>5+ Industries</h3>
              <p className="text-muted">eCommerce, IT, EdTech, Web Services</p>
            </Col>
            <Col md={4}>
              <h3>Tech Stack</h3>
              <p className="text-muted">React, HTML, CSS, Figma, Git, Adobe</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
