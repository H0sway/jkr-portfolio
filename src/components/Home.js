import React, { Component } from 'react';
import { Jumbotron, Button, Image, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import face from './images/face.jpg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Row>
          <Col xs={11} md={9}>
            <div className="welcome">
              <Jumbotron>
                <Image src={face} className="face-photo" thumbnail responsive />
                <h3>Joshua K. Russell</h3>
                <p>NYC based full-stack web developer. Click the button below to continue to my site.</p>
                <LinkContainer to="/about">
                  <Button bsStyle="info">About Me</Button>
                </LinkContainer>
              </Jumbotron>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
