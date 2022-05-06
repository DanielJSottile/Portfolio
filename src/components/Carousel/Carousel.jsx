/* Original JS code by Dudely Storey on CodePen
However, the React refactor was created by myself!
https://codepen.io/dudleystorey
https://codepen.io/dudleystorey/pen/kiajB */

import React, { useState, useRef } from 'react';
import { projects } from '../../data/projects';
import Project from '../Project';
import './Carousel.css';

export default function Carousel() {
  const [angle, setAngle] = useState(0);
  const [project, setProject] = useState(1);

  const spinnerRef = useRef();

  const galleryspin = (sign) => {
    /** Set gallery angle */
    setAngle(sign ? angle - 72 : angle + 72);
    /** Set project data */
    if (!sign) {
      if (project < 5) {
        setProject(project + 1);
      } else {
        setProject(1);
      }
    } else if (project > 1) {
      setProject(project - 1);
    } else {
      setProject(5);
    }
  };

  return (
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
        role="button"
        tabIndex={0}
        style={{ float: 'left' }}
        className="ss-icon"
        onClick={() => {}}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            galleryspin('-');
          }
        }}
      >
        &lt;
      </span>
      <span
        role="button"
        tabIndex={0}
        style={{ float: 'right' }}
        className="ss-icon"
        onClick={() => {
          galleryspin('');
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            galleryspin('');
          }
        }}
      >
        &gt;
      </span>
      <div>
        <Project project={projects.find((p) => p.id === project)} />
      </div>
    </div>
  );
}
