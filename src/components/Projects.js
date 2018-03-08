import React, { Component } from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';
import Project from './Project';

// import images
import puppy from './images/puppy.png';
import forum from './images/forum.png';
import cave from './images/cave.png';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <PageHeader>My Projects</PageHeader>
        <Row>
          <Col xs={12} md={6}>
            <Project
              title="Puppy Finder"
              short="Search for puppies up for adoption"
              url="https://puppyfinderapp.herokuapp.com/"
              github="https://github.com/H0sway/puppy-finder-app"
              img={puppy}
              long="Search for puppies up for adoption and save your favorites to a list. This application allows you to search the Pet Finder API for specific dog breeds up for adoption. Just select a breed in the dropdown menu, type in your zipcode, and hit enter! You can save puppies you're interested in by clicking the save button. Navigate to the favorites page and click on a puppy to add personal notes for each puppy along with a rating. Remember, all dogs are good dogs. I collaborated with three others while developing the site. This app was developed using React, Bootstrap, Node, Express, Webpack, and Postgres."
            />
          </Col>
          <Col xs={12} md={6}>
            <Project
              title="Discussion Forum"
              short="A place for users to chat with each other"
              url="https://stark-bayou-57330.herokuapp.com/"
              github="https://github.com/H0sway/forum-app"
              img={forum}
              long="A forum where users can chat with each other on a wide range of topics. Anyone can create posts within one of the preset topics and comment on any post. Comments can be edited and deleted. This app was developed using React, Rails, Webpack, and Postgres."
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Project
              title="Cave Escape Game"
              short="Can you navigate your way out of this cave?"
              url="http://stoic-goodall-5acdc9.bitballoon.com/"
              github="https://github.com/H0sway/Cave-Escape-Game"
              img={cave}
              long="A game created using HTML, CSS, and jQuery. Players must navigate their way out of a cave by inputting commands to move from one area in the cave to another. Each area has it's own unique text-based description that players have to keep track of without losing their sense of direction. The player can reset to the beginning of the game by clicking the retry button if they are stuck or finished and want to try again."
            />
          </Col>
          <Col xs={12} md={6}>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
