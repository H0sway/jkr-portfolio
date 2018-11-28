import React, { Component } from 'react';
import { Image, Modal, Button, ButtonGroup } from 'react-bootstrap';

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
        <h2 className="title">{this.props.title}</h2>
        <Image className="project-img" src={this.props.img} alt={this.props.title} thumbnail responsive />
        <p className="short">{this.props.short}</p>
        <button className="learn-more" onClick={this.handleShow}>Learn More</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closebutton>
            <Modal.Title className="modal-title">{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image className="modal-img" src={this.props.img} rounded responsive />
            <p className="long">{this.props.long}</p>
            <ButtonGroup>
              <Button href={this.props.url} target="_blank" rel="noopener noreferrer">To the site!</Button>
              <Button href={this.props.github} target="_blank" rel="noopener noreferrer">Github</Button>
            </ButtonGroup>

            <br />

            <button className="close-modal" onClick={this.handleClose}>Close</button>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Project;
