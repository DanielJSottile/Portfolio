import React from 'react';
import './TechStack.css';
import PropTypes from 'prop-types';

export default function TechStack({ tech }) {
  const techMap = tech.map((techEntry) => (
    <li className="tech" key={`${techEntry[0]}`}>
      <div className="row">
        <p>{techEntry[0]}</p>
        {techEntry[1]}
      </div>
    </li>
  ));

  return <ul className="tech-stack fade-in">{techMap}</ul>;
}

TechStack.propTypes = {
  tech: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      ),
    ]),
  ).isRequired,
};
