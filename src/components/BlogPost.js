import React from 'react';
import { Button } from 'react-bootstrap';

const BlogPost = (props) => {
  return (
    <div className="BlogPost">
      <h4 className="blog-title">{props.title}</h4>
      <p className="blog-subtitle">{props.subtitle}</p>
      <Button href={props.url} target="_blank" rel="noopener noreferrer">Read More!</Button>
    </div>
  )
}

export default BlogPost;
