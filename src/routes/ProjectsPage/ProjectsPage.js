import React, { Fragment } from 'react';
import Carousel from '../../components/Carousel/Carousel';

const ProjectsPage = (props) => {
  return (
    <Fragment>
      <div>
      <h2 className="heading fade-in-top">Projects</h2>
        <Carousel/>
      </div>
    </Fragment>
  );
}

export default ProjectsPage;