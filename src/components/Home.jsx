// DEVELOPED COLLABORATIVELY WITH REUSABLE COMPONENTS STRUCTURED ACROSS ALL PAGES


import React from 'react';
import { Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <section id="home" className="hero-section py-5 ">
    

       {/* Hero Banner Section */}
<Container className="py-5">
  <Row className="align-items-center mb-5">
    <Col md={7}>
      <h1 className="hero-title">Designing Impactful Digital Experiences</h1>
      <p className="hero-description">
        I craft intuitive product designs and memorable brand experiences by blending creativity with functionality. From wireframes to pixel-perfect interfaces, I transform ideas into seamless, engaging digital solutions through thoughtful UI/UX and frontend development.
      </p>
      <Link to="/about" className="btn btn-primary text-center mb-5">
        Learn More
      </Link>
    </Col>

    <Col md={5}>
      <img src="/images/about-me.jpeg" alt="Hero" className="img-fluid rounded" />
    </Col>
  </Row>
</Container>


       {/* Tools Section */}
<section id="tools" className="mb-5">
  <Container>
    <h2 className="text-center fw-bold mb-5">My Toolbox – Technologies I Love</h2>
    <Row className="tool-wrapper text-center justify-content-center g-4">
      <Col xs={6} md={2} className="tool-card">
        <img src="../images/react.png" alt="React" className="img-fluid" style={{ height: "60px" }} />
        <p className="mt-2 fw-medium">React</p>
      </Col>
      <Col xs={6} md={2} className="tool-card">
        <img src="../../images/html.png" alt="HTML5" className="img-fluid" style={{ height: "60px" }} />
        <p className="mt-2 fw-medium">HTML5</p>
      </Col>
      <Col xs={6} md={2} className="tool-card">
        <img src="../../images/javascript.png" alt="JavaScript" className="img-fluid" style={{ height: "60px" }} />
        <p className="mt-2 fw-medium">JavaScript</p>
      </Col>
      <Col xs={6} md={2} className="tool-card">
        <img src="../images/figma.png" alt="Figma" className="img-fluid" style={{ height: "60px" }} />
        <p className="mt-2 fw-medium">Figma</p>
      </Col>
      <Col xs={6} md={2} className="tool-card">
        <img src="../images/acrobat.png" alt="Adobe" className="img-fluid" style={{ height: "60px" }} />
        <p className="mt-2 fw-medium">Adobe Creative Suite</p>
      </Col>
    </Row>
  </Container>
</section>



        {/* Expertise Section */}
        <section className="py-5 bg-light">
  <Container >
    <h2 className="text-center fw-bold mb-4">My Expertise</h2>
    <Row className="g-4 mb-5">
      <Col md={4}>
        <Card className="h-100 shadow-sm ">
          <Card.Body>
            <Card.Title className="fw-semibold">Frontend Development</Card.Title>
            <Card.Text>
              Proficient in HTML5, CSS3, JavaScript, Bootstrap, and React. Delivered responsive, high-performance websites for TechAvidus and Wave Infotech.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-semibold">UI/UX Design</Card.Title>
            <Card.Text>
              Skilled in Adobe XD, Photoshop, Illustrator, and Figma. Designed user-centric interfaces, wireframes, and brand assets for various projects.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="h-100 shadow-sm">
          <Card.Body>
            <Card.Title className="fw-semibold">Tools & CMS</Card.Title>
            <Card.Text>
              Experience with WordPress, Shopify, GitHub, Jira, and Visual Studio Code. Bridges design and development with modern workflow tools.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>


    {/* Projects Section */}
<section className="pt-5 bg-white">
  <Container>
    <h2 className="text-center fw-bold mb-4">Projects So Far</h2>
    <Row className="g-4">
      <Col md={4}>
        <Card className="h-100 shadow-sm project-card">
          <Card.Img variant="top" src="/images/techavidus.png" alt="TechAvidus Project" />
          <Card.Body>
            <Card.Title>TechAvidus</Card.Title>
            <Card.Text>
              Redesigned a service-based website using Figma, HTML, CSS, JS. Focused on branding, performance, and UX.
            </Card.Text>
            <Button variant="primary" size="sm" href="https://www.techavidus.com" target="_blank" rel="noopener noreferrer">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="h-100 shadow-sm project-card">
          <Card.Img variant="top" src="/images/24corbelle.png" alt="24Corbelle Project" />
          <Card.Body>
            <Card.Title>24Corbelle</Card.Title>
            <Card.Text>
              Built frontend for luxury eCommerce using Bootstrap and JS. Emphasis on clean layout and premium feel.
            </Card.Text>
            <Button variant="primary" size="sm" href="https://www.24corbelle.com" target="_blank" rel="noopener noreferrer">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="h-100 shadow-sm project-card">
          <Card.Img variant="top" src="/images/waveinfotech.png" alt="Wave Infotech Project" />
          <Card.Body>
            <Card.Title>Wave Infotech</Card.Title>
            <Card.Text>
              Complete frontend delivery using HTML, CSS, JS for IT solutions firm. Enhanced branding and responsiveness.
            </Card.Text>
            <Button variant="primary" size="sm" href="https://www.waveinfotech.biz/" target="_blank" rel="noopener noreferrer">
              Visit Site
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <div className="text-center">
      <Link to="/projects" className="btn btn-primary my-5 text-center">
        Explore More Projects
      </Link>
    </div>
  </Container>
</section>



    </section>

  );
};

export default Home;
