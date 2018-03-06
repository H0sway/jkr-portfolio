import React from 'react';
import { Navbar, NavItem, Nav, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Row>
        <Navbar>
          <Col sm={12} md={8}>
            <LinkContainer to="/">
              <Navbar.Header>
                <Navbar.Brand>
                  Joshua K. Russell <small>Web Developer</small>
                </Navbar.Brand>
              </Navbar.Header>
            </LinkContainer>
          </Col>
          <Col sm={12} md={4}>
            <Nav>
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
              <LinkContainer to="/contact">
                <NavItem>
                  Contact
                </NavItem>
              </LinkContainer>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </header>
  )
}

export default Header;
