import React, { Component } from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import face from './images/face.jpeg';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="welcome">
          <Jumbotron>
            <Image src={face} className="face-photo" thumbnail responsive />
            <h3 className="name">Joshua K. Russell</h3>
            <h5 className="clickbait">NYC based full-stack web developer. Click the button below to continue to my site.</h5>
            <LinkContainer to="/about">
              <button className="about-button">About Me</button>
            </LinkContainer>
          </Jumbotron>
        </div>
      </div>
    )
  }
}

export default Home;
