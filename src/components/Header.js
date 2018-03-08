import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header className="header-wrapper">
      <Navbar staticTop inverse collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Header>
            <Navbar.Brand>
              Joshua K. Russell <small>Web Developer</small>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </LinkContainer>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem>
                About
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavItem>
                Projects
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
