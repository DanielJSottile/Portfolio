import React from 'react';
import SASSIcon from '../../Images/440px-Sass-Logo-Color.png';
import TypeScriptIcon from '../../Images/1200px-Typescript_logo_2020.png';
import jQueryIcon from '../../Images/jquery.jpg';
import ReactNativeIcon from '../../Images/react-native-logo.png';
import ReduxIcon from '../../Images/redux.png';
import JestIcon from '../../Images/jest.png';
import EnzymeIcon from '../../Images/enzyme.png';
import MochaIcon from '../../Images/mocha.png';
import PostgreSQLIcon from '../../Images/elephant.png';
import KnexIcon from '../../Images/knex.png';
import TensorFlowIcon from '../../Images/TensorFlow.png';
import LodashIcon from '../../Images/Lodash.png';
import ReactSpringIcon from '../../Images/React-spring.png';
import PreCommitIcon from '../../Images/precommit.png';
import VercelIcon from '../../Images/vercel.png';
import HerokuIcon from '../../Images/heroku.png';

const techStack = {
  HTML5: <i className="fab fa-html5" />,
  SAAS: <img className="icon" src={SASSIcon} alt="SASS-icon" />,
  CSS: <i className="fab fa-css3-alt" />,
  JavaScript: <i className="fab fa-js" />,
  TypeScript: (
    <img className="icon" src={TypeScriptIcon} alt="TypeScript-icon" />
  ),
  jQuery: <img className="icon" src={jQueryIcon} alt="jquery-icon" />,
  React: <i className="fab fa-react" />,
  'React Native': (
    <img className="icon" src={ReactNativeIcon} alt="React-Native-icon" />
  ),
  Redux: <img className="icon" src={ReduxIcon} alt="Redux-icon" />,
  'Node.js': <i className="fab fa-node-js" />,
  Express: null,
  Jest: <img className="icon" src={JestIcon} alt="Jest-icon" />,
  Enzyme: <img className="icon" src={EnzymeIcon} alt="Enzyme-icon" />,
  Mocha: <img className="icon" src={MochaIcon} alt="Mocha-icon" />,
  Chai: null,
  Supertest: null,
  XSS: null,
  Winston: null,
  NYC: null,
  PostgreSQL: (
    <img className="icon" src={PostgreSQLIcon} alt="PostgreSQL-icon" />
  ),
  Knex: <img className="icon" src={KnexIcon} alt="Knex-icon" />,
  Cypress: null,
  'TensorFlow.js': (
    <img className="icon" src={TensorFlowIcon} alt="TensorFlow-icon" />
  ),
  'Crypto-js': null,
  Lodash: <img className="icon" src={LodashIcon} alt="Lodash-icon" />,
  'React-Spring': (
    <img className="icon" src={ReactSpringIcon} alt="React-Spring-icon" />
  ),
  'Pre-Commit': (
    <img className="icon" src={PreCommitIcon} alt="Pre-Commit-icon" />
  ),
  Vercel: <img className="icon" src={VercelIcon} alt="Vercel-icon" />,
  Heroku: <img className="icon" src={HerokuIcon} alt="Heroku-icon" />,
  Python: <i className="fab fa-python" />,
};

export default techStack;
