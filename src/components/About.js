import React from 'react';
import { PageHeader, Jumbotron, Row, Col } from 'react-bootstrap';

import Contact from './Contact';
import Skills from './Skills';

const About = () => {
  return (
    <div className="About">
      <PageHeader>About Me</PageHeader>
      <Jumbotron>
        <p className="about-text">I was born in New York City and lived here for most of my life. Full-stack web developer with experience working in education and for non-profit organizations. Graduate of General Assembly's Web Development Immersive. I'm passionate about a great deal of things, but what drives me right now is my desire to improve on my abilities as well as finding new and creative ways to apply what I already know. You can get in touch with me through my contact information listed below, or you can click on the projects link up above to see some of the things I've worked on.</p>
      </Jumbotron>
      <Row className="about-wrapper">
        <Col xs={8} md={4}>
          <h3>My Skills</h3>
          <Skills />
        </Col>
        <Col xs={8} md={4}>
          <Contact />
        </Col>
      </Row>
    </div>
  )
}

export default About;
