import React, { Component } from 'react';
import { PageHeader, Jumbotron, } from 'react-bootstrap';

import MediumPosts from './MediumPosts';

class Medium extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  render() {
    return(
      <div className="Medium">
        <PageHeader>My Blog</PageHeader>
        <Jumbotron>
          <p className="about-text">I use my blog to talk about my interests as a developer. I also enjoy educating others on development concepts. Writing blogs explaining how to use different technologies helps me to better understand them for my own work.</p>
          <a className="blog-link" href="https://medium.com/@hosway" target="_blank" rel="noopener noreferrer">
            View my Medium Blog here!
          </a>

          <br />

          <MediumPosts />
        </Jumbotron>
      </div>
    )
  }
}

export default Medium;
