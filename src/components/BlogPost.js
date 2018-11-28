import React from 'react';
import { Button, Image } from 'react-bootstrap';

import mediumLogo from './images/Monogram.png';

const BlogPost = (props) => {
  return (
    <div className="BlogPost">
      <h4 className="blog-title">{props.title}</h4>
      <p className="blog-subtitle">{props.subtitle}</p>
      <br />


      <Button href={props.url} target="_blank" rel="noopener noreferrer">
        <Image className='medium-logo' src={mediumLogo} responsive />
        Read More!
      </Button>
    </div>
  )
}

export default BlogPost;
