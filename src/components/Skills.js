import React from 'react';
import { Panel, ListGroup } from 'react-bootstrap';

const list = [
  {
    title: "HTML",
    body: "Bottom Text"
  },
  {
    title: "CSS",
    body: "Bottom Text"
  },
  {
    title: "JavaScript",
    body: "Bottom Text"
  },
  {
    title: "Ruby",
    body: "Bottom Text"
  },
]

const addPanels = (list, i) => {
  return (
    <Panel key={i}>
      <Panel.Heading>
        <Panel.Title toggle>{list.title}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>{list.body}</Panel.Body>
    </Panel>
  )
}

const renderPanels = () => {
  return (
    <ListGroup>
      {list.map(addPanels)}
    </ListGroup>
  )
}

const Skills = () => {
  return (
    <div className="Skills">
      {renderPanels()}
    </div>
  )
}

export default Skills;
