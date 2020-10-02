import React, { Fragment } from 'react';
import './TechStack.css';

const TechStack = (props) => {

  const tech = props.tech.map((tech, i) => {
    return (
      <li className="tech" key={i}>
        <div className="row">
          <p>{tech[0]}</p> 
          {tech[1]}
        </div>
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
