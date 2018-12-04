import React from 'react';
import { Link } from 'react-router-dom';
import { Panel, Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
      <div className="Contact">
        <h3>Contact Me</h3>
        <Row>
          <Col xs={12}>
            <Panel bsStyle="primary" className="contact-list">
              <Panel.Heading>
                <Panel.Title componentClass="h4">
                  Github
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <a href="https://github.com/H0sway" target="_blank" rel="noopener noreferrer">H0sway</a>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={12}>
            <Panel bsStyle="primary" className="contact-list">
              <Panel.Heading>
                <Panel.Title componentClass="h4">
                  LinkedIn
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <a href="https://www.linkedin.com/in/joshua-k-russell" target="_blank" rel="noopener noreferrer">Joshua K. Russell</a>
              </Panel.Body>
            </Panel>
          </Col>
          <Col xs={12}>
            <Panel bsStyle="primary" className="contact-list">
              <Panel.Heading>
                <Panel.Title componentClass="h4">
                  Resume
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                <Link to="/resume" target="_blank" rel="noopener noreferrer">Click to View</Link>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    )
}

export default Contact;
