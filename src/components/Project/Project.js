import React, { Fragment } from 'react';
import TechStack from '../TechStack/TechStack';
import './Project.css';

const Project = (props) => {

  const {project} = props

  const tech = Object.entries(project.techStack);
  
  return (
    <Fragment>
      <div className="fade-in">
        <h2 className="project-name">{project.name}</h2>
        <div className="project-links">
          <a target="_blank" rel="noopener noreferrer" href={project.livePage}>Live Page</a>
          <a target="_blank" rel="noopener noreferrer" href={project.repo1}>Client Repo</a>
          {project.repo2 && <a target="_blank" rel="noopener noreferrer" href={project.repo2}>Server Repo</a>}
        </div>
        <p className='project-desc'>{project.desc}</p>
        <h3>Tech Stack:</h3>
        <TechStack tech={tech}/>
      </div>
    </Fragment>
  );
}

export default Project;