import React, { Fragment, useContext} from 'react';
import TechStack from '../../components/TechStack/TechStack';
import Context from '../../contexts/Context';

const ContactPage = (props) => {

  const Con = useContext(Context)
  const tech = Object.entries(Con.techStack);

  return (
    <Fragment>
    <h2 className="heading fade-in-right">Contact</h2>
      <div className="contact-stuff">
        <div className="word-container fade-in-bottom">
          <p>
            I'm open for job opportunities!  Feel free to contact me and check out
            my various profiles!
          </p>
        </div>
        <div className='tech-stack-container'>
          <h3>My Tech Stack:</h3>
          <TechStack tech={tech}/>
        </div>
          <a href="mailto:danielsottile@gmail.com" target="_blank" rel="noopener noreferrer">Email <i className="fas fa-envelope-open-text"></i></a>
          <a href="https://github.com/DanielJSottile" target="_blank" rel="noopener noreferrer">GitHub <i className="fab fa-github-square"></i></a>
          <a href="https://www.linkedin.com/in/daniel-sottile" target="_blank" rel="noopener noreferrer">LinkedIn <i className="fab fa-linkedin"></i></a>
      </div>
    </Fragment>
  );
}

export default ContactPage;