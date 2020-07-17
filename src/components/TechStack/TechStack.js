import React, { Fragment } from 'react';
import './TechStack.css';

const TechStack = (props) => {

  const tech = props.tech.map(tech => {
    return (
      <li className="tech">
        <p>{tech[0]} {tech[1]}</p>
      </li>
    )
  })

  return (
    <Fragment>
      <ul className="tech-stack fade-in">
        {tech}
      </ul>
    </Fragment>
  );
}

export default TechStack;