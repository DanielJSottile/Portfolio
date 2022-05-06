import React from 'react';
import PropTypes from 'prop-types';
import TechStack from '../TechStack';
import './Project.css';

export default function Project({ project }) {
  const tech = Object.entries(project.techStack);

  return (
    <div className="fade-in">
      <h2 className="project-name">{project.name}</h2>
      <div className="project-links">
        <a target="_blank" rel="noopener noreferrer" href={project.livePage}>
          Live Page
        </a>
        <a target="_blank" rel="noopener noreferrer" href={project.repo1}>
          Client Repo
        </a>
        {project.repo2 && (
          <a target="_blank" rel="noopener noreferrer" href={project.repo2}>
            Server Repo
          </a>
        )}
      </div>
      <p className="project-desc">{project.desc}</p>
      <h3>Tech Stack:</h3>
      <TechStack tech={tech} />
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    techStack: PropTypes.objectOf(PropTypes.node),
    name: PropTypes.string,
    livePage: PropTypes.string,
    repo1: PropTypes.string,
    repo2: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};
