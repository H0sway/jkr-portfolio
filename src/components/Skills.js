import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const list = ["HTML", "CSS", "JavaScript", "Ruby", "Python", "React", "Node", "Django", "Rails", "jQuery", "Postgres", "SQLite"];

const addListItem = (list, i) => {
  return (
    <ListGroupItem>{list}</ListGroupItem>
  )
}

const renderList = () => {
  return (
    <ListGroup>
      {list.map(addListItem)}
    </ListGroup>
  )
}

const Skills = () => {
  return (
    <div className="Skills">
      {renderList()}
    </div>
  )
}

export default Skills;
