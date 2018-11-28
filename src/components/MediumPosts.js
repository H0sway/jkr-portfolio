import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BlogPost from './BlogPost';

const MediumPosts = () => {
  return (
    <div className="MediumPosts">
      <h3 className="blogs-header">Recent Blog Posts</h3>
      <Row>
        <Col xs={10} md={6}>
          <BlogPost
            title="Building a Full Stack Application with React and Node"
            subtitle="Building a full stack application can be a daunting task for an inexperienced developer. This blog will cover instructions on how to build…"
            url="https://medium.com/@hosway/building-a-full-stack-application-with-react-and-node-5932f264967e"
          />
        </Col>
        <Col xs={10} md={6}>
          <BlogPost
            title="Deploying a React and Node app to Heroku"
            subtitle="If you want instruction on how to build a React and Node app please read this blog. I’ll be using the app I built in that post as an…"
            url="https://medium.com/@hosway/deploying-a-react-and-node-app-to-heroku-e8b7ed572e59"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={6}>
          <BlogPost
            title="Teaching Yourself New Concepts in Web Development"
            subtitle="A web developer should always strive to learn new technologies throughout their career. The field is constantly changing with different…"
            url="https://medium.com/@hosway/teaching-yourself-new-concepts-in-web-development-c295a0835551"
          />
        </Col>
      </Row>
    </div>
  )
}

export default MediumPosts;
