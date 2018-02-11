import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <h1>Joshua K. Russell</h1>
      <h3>Web Developer</h3>

      <br />

      <nav>
        <ul>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
