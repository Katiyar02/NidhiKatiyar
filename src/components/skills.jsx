// Created by Nidhi Katiyar

import React from "react";
import { Container, Row, Col, Card,  ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';

// Skills for card icons (visual representation)
const skillCards = [
  {
    name: "Photoshop",
    image: "https://cdn-icons-png.flaticon.com/512/888/888903.png",
  },
  {
    name: "Illustrator",
    image: "https://cdn-icons-png.flaticon.com/512/888/888853.png",
  },
  {
    name: "Figma",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    name: "HTML5",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS3",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
];

// Skills for progress bar proficiency
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

const Skills = () => {
  return (
    <>
      {/* Hero Banner */}
      <section id="about-hero" className="about-hero-section d-flex align-items-center">
        <Container>
          <Row className="justify-content-center text-center text-white">
            <Col lg={8}>
              <h1 className="fw-bold my-5">Let's talk about what skills I have</h1>
              <h4 className="mb-4">UI/UX Engineer & Frontend Developer</h4>
              <p className="lead mb-4">
              I craft user-friendly digital experiences by blending clean code with thoughtful design. From wireframes to responsive interfaces, I bring ideas to life with tools like Figma and React.

</p>
              <Link to="/projects" className="btn btn-light my-5 text-center">
                View Projects
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

          {/* Tool Proficiency Section */}
          <section id="tools-proficiency" className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Tool Proficiency</h2>
          <Row>
            <Col md={6}>
              {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <h6 className="mb-1">{skill.name}</h6>
                  <ProgressBar
                    now={skill.level}
                    label={`${skill.level}%`}
                    animated
                    striped
                    variant={skill.level >= 90 ? 'success' : skill.level >= 80 ? 'info' : 'warning'}
                  />
                </div>
              ))}
            </Col>
            <Col md={6}>
              {skills.slice(Math.ceil(skills.length / 2)).map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <h6 className="mb-1">{skill.name}</h6>
                  <ProgressBar
                    now={skill.level}
                    label={`${skill.level}%`}
                    animated
                    striped
                    variant={skill.level >= 90 ? 'success' : skill.level >= 80 ? 'info' : 'warning'}
                  />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Card Grid */}
      <Container className="py-5 ">
        <h2 className="text-center mb-4">My Skills</h2>
        <Row>
          {skillCards.map((skill, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
              <Card className="text-center shadow-sm h-100 tool-card">
                <Card.Body>
                  <img
                    src={skill.image}
                    alt={skill.name}
                    style={{ width: "50px", height: "50px", marginBottom: "10px" }}
                  />
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

  
    </>
  );
};

export default Skills;
