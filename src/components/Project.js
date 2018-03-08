import React, { Component } from 'react';
import { Image, Jumbotron, Modal, Button, ButtonGroup } from 'react-bootstrap';

class Project extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="single-project">
        <Jumbotron>
          <Image className="project-img" src={this.props.img} thumbnail responsive />
          <p>{this.props.short}</p>
          <Button bsStyle="primary" onClick={this.handleShow}>Learn More</Button>
        </Jumbotron>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closebutton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image className="modal-img" src={this.props.img} rounded responsive />
              <p>{this.props.long}</p>
              <ButtonGroup>
                <Button href={this.props.url}>To the site!</Button>
                <Button href={this.props.github}>Github</Button>
              </ButtonGroup>

              <br />

              <Button bsStyle="primary" onClick={this.handleClose}>Close</Button>
            </Modal.Body>
          </Modal>
      </div>
    )
  }
}

export default Project;
