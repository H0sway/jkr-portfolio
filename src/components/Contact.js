import React from 'react';
import { PageHeader, Panel, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact Me</h3>
      <Row>
        <Col xs={4} md={12}>
          <Panel className="contact-list">
            <Panel.Heading>
              <Panel.Title componentClass="h4">
                Github
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <a href="https://github.com/H0sway">H0sway</a>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={4} md={12}>
          <Panel className="contact-list">
            <Panel.Heading>
              <Panel.Title componentClass="h4">
                LinkedIn
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <a href="https://www.linkedin.com/in/joshua-k-russell">Joshua K. Russell</a>
            </Panel.Body>
          </Panel>
        </Col>
        <Col xs={4} md={12}>
          <Panel className="contact-list">
            <Panel.Heading>
              <Panel.Title componentClass="h4">
                Email
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              jkrussell756@gmail.com
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </div>
  )
}

export default Contact;
