import React from 'react';
import { Panel, Row, Col } from 'react-bootstrap';

import pdf from './Joshua_Russell_Resume.pdf';

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
                <a href="https://github.com/H0sway">H0sway</a>
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
                <a href="https://www.linkedin.com/in/joshua-k-russell">Joshua K. Russell</a>
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
                <a href={pdf} target="_blank">Click to View</a>
              </Panel.Body>
            </Panel>
          </Col>
        </Row>
      </div>
    )
}

export default Contact;
