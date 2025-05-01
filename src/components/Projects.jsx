// Created by Simiya Rajan 
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "TechAvidus",
    description: "Redesigned a service-based website using Figma, HTML, CSS, JS. Focused on branding, performance, and UX.",
    image: "/images/techavidus.png",
    link: "https://www.techavidus.com"
  },
  {
    title: "24Corbelle",
    description: "Built frontend for luxury eCommerce using Bootstrap and JS. Emphasis on clean layout and premium feel.",
    image: "/images/24corbelle.png",
    link: "https://www.24corbelle.com"
  },
  {
    title: "Shree Tapovan",
    description: "Designed and developed educational platform for kids. Included branding, UI design, and frontend dev.",
    image: "/images/shreetapovan.png",
    link: "https://shreetapovan.com/"
  },
  {
    title: "Wave Infotech",
    description: "Complete frontend delivery using HTML, CSS, JS for IT solutions firm. Enhanced branding and responsiveness.",
    image: "/images/waveinfotech.png",
    link: "https://www.waveinfotech.biz/"
  },
  {
    title: "Kingnet",
    description: "Broadband services website + social media content. Built UI, developed responsive layout, and managed content design.",
    image: "/images/kingnet.png",
    link: "https://www.kingnetsol.com/"
  }
];

const Projects = () => {
  return (
    <>
      {/* Hero Banner */}
      <section id="about-hero" className="about-hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="fw-bold my-5">Projects Showcase</h1>
              <h4 className="mb-4">UI/UX Engineer & Frontend Developer</h4>
              <p className="lead mb-4">
                Explore some of my best work where creativity meets code — from product interfaces to functional web solutions.
              </p>
              <Link to="/about" variant="light" size="lg" className="btn btn-light mb-5 text-center">
                Learn More About Me
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">My Projects</h2>
          <Row className="g-4">
            {projects.map((project, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <Card className="h-100 shadow-sm border-0 project-card">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link
                      variant="primary"
                      className="btn btn-primary"
                      size="sm"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Figma Prototype Embed */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">Figma Prototype</h2>
          <p className="text-center mb-4">
            Here’s a preview of my interactive UI/UX design work created in Figma.
          </p>
          <div className="d-flex justify-content-center">
            <div style={{ width: '100%', maxWidth: '900px', border: '1px solid #ddd' }}>
              <iframe
                title="Figma Prototype"
                width="100%"
                height="500"
                style={{ border: 'none' }}
                allowFullScreen
                src="https://embed.figma.com/design/9Z24WO6UXnnGKYt1A6ITIO/Pure-ph?node-id=0-1&embed-host=share"
              ></iframe>


            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ width: '100%', maxWidth: '900px', border: '1px solid #ddd' }}>
              <iframe
                title="Figma Prototype"
                width="100%"
                height="500"
                style={{ border: 'none', marginTop: 20 }}
                allowFullScreen
                src="https://embed.figma.com/design/d1xADmUqhF5S1xx6SwsUZy/Raybar?node-id=0-1&embed-host=share"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
