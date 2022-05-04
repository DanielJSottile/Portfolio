import React, { Fragment } from 'react';
import './TechStack.css';

const TechStack = ({ tech }) => {
  const techMap = tech.map((tech, i) => {
    return (
      <li className="tech" key={i}>
        <div className="row">
          <p>{tech[0]}</p>
          {tech[1]}
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <ul className="tech-stack fade-in">{techMap}</ul>
    </Fragment>
  );
};

export default TechStack;
