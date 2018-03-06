import React from 'react';
import { PageHeader, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const About = () => {
  return (
    <div className="About">
      <PageHeader>About Me</PageHeader>
      <Jumbotron>
        <p>I was born in New York City and lived here for most of my life. Currently looking for web development jobs, preferably in NYC but I'm open to relocating.</p>
      </Jumbotron>
      <h3>My Skills</h3>
      <ListGroup>
        <ListGroupItem>HTML5</ListGroupItem>
        <ListGroupItem>CSS3</ListGroupItem>
        <ListGroupItem>JavaScript (ES6)</ListGroupItem>
        <ListGroupItem>jQuery</ListGroupItem>
        <ListGroupItem>React.js</ListGroupItem>
        <ListGroupItem>Node.js</ListGroupItem>
        <ListGroupItem>Express.js</ListGroupItem>
        <ListGroupItem>Ruby on Rails</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default About;
