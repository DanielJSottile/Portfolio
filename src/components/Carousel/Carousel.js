/* Original JS code by Dudely Storey on CodePen 
However, the React refactor was created by myself!
https://codepen.io/dudleystorey
https://codepen.io/dudleystorey/pen/kiajB */

import React, { useContext, useState, useRef } from 'react';
import Context from '../../contexts/Context';
import Project from '../Project/Project';
import './Carousel.css';

const Carousel = () => {
  const { projects } = useContext(Context);

  const [angle, setAngle] = useState(0);
  const [project, setProject] = useState(1);

  const spinnerRef = useRef();

  const galleryspin = (sign) => {
    setAngle(sign ? angle - 72 : angle + 72);
    setProject(
      sign ? (project > 5 ? project + 1 : 1) : project > 1 ? project - 1 : 5
    );
  };

  return (
    <>
      <div className="fade-in-bottom">
        <div id="carousel">
          <figure
            style={{ transform: `rotateY(${angle}deg` }}
            ref={spinnerRef}
            id="spinner"
          >
            <img
              className="image"
              src="https://i.imgur.com/HuZljG3.png"
              alt="PokeTeams"
            />
            <img
              className="image"
              src="https://i.imgur.com/3DwF0fT.png"
              alt="Bloqs4Good Landing Demo"
            />
            <img
              className="image"
              src="https://imgur.com/Uugvuyt.png"
              alt="PennyThoughts"
            />
            <img
              className="image"
              src="https://imgur.com/Ou2b4X5.png"
              alt="Oratore"
            />
            <img
              className="image"
              src="https://imgur.com/BDi7aMT.png"
              alt="Peftul"
            />
          </figure>
        </div>
        <span
          style={{ float: 'left' }}
          className="ss-icon"
          onClick={() => {
            galleryspin('-');
          }}
        >
          &lt;
        </span>
        <span
          style={{ float: 'right' }}
          className="ss-icon"
          onClick={() => {
            galleryspin('');
          }}
        >
          &gt;
        </span>
        <div>
          <Project project={projects.find((p) => p.id === project)} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
