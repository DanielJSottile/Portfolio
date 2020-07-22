import React, { Fragment, useContext} from 'react';
import TechStack from '../../components/TechStack/TechStack';
import ContactLinks from '../../components/ContactLinks/ContactLinks.js';
import Context from '../../contexts/Context';

const ContactPage = (props) => {

  const Con = useContext(Context)
  const tech = Object.entries(Con.techStack);

  return (
    <Fragment>
    <h2 className="heading fade-in-right">Contact</h2>
      <div className="contact-stuff">
        <div className="contact-container fade-in-bottom">
          <p>
            I'm open for job opportunities!  Feel free to contact me and check out
            my various profiles!
          </p>
          <ContactLinks/>
        </div>
        <div className='tech-stack-container'>
          <h3>My Tech Stack:</h3>
          <TechStack tech={tech}/>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactPage;