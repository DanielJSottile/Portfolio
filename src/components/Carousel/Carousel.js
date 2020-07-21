/* Original JS code by Dudely Storey on CodePen 
However, the React refactor was created by myself!
https://codepen.io/dudleystorey
https://codepen.io/dudleystorey/pen/kiajB */

import React, { Fragment, useContext, useState} from 'react';
import Context from '../../contexts/Context';
import Project from '../Project/Project';
import './Carousel.css';

const Carousel = (props) => {

  const Con = useContext(Context)

  const [state, setState] = useState({angle: 0, project: 1})

  const spinnerRef = React.useRef();


  const galleryspin = (sign) => { 
    if (!sign) { 
      setState(oldVals => ({...oldVals, angle: state.angle + 72})) 
      if (state.project < 5) {
        setState(oldVals => ({...oldVals, project: state.project + 1})) 
      } else {
        setState(oldVals => ({...oldVals, project: 1}))
      }
     } else { 
      setState(oldVals => ({...oldVals, angle: state.angle - 72})) 
      if (state.project > 1) {
        setState(oldVals => ({...oldVals, project: state.project - 1})) 
      } else {
        setState(oldVals => ({...oldVals, project: 5}))
      }
    }
  }

  return (
    <Fragment>
      <div className="fade-in-bottom">
        <div id="carousel">
          <figure style={{transform: `rotateY(${state.angle}deg`}} ref={spinnerRef} id="spinner">
            <img className="image" src='https://imgur.com/zZhoPU2.png' alt="QuizApp"/>
            <img className="image" src='https://imgur.com/BDi7aMT.png' alt="Peftul"/>
            <img className="image" src="https://imgur.com/XIQeVp3.png" alt="PokeTeams"/>
            <img className="image" src="https://imgur.com/Ou2b4X5.png" alt="Oratore"/>
            <img className="image" src="https://imgur.com/Uugvuyt.png" alt="PennyThoughts"/>
          </figure>
        </div>
        <span style={{float: 'left'}} className="ss-icon" onClick={() => {galleryspin('-') }}>&lt;</span>
        <span style={{float: 'right'}} className="ss-icon" onClick={() => {galleryspin('')}}>&gt;</span>
        <div>
          <Project project={Con.projects.find(p => p.id === state.project)}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;


