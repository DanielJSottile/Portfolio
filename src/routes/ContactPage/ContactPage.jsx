import React from 'react';
import TechStack from '../../components/TechStack';
import ContactLinks from '../../components/ContactLinks';
import { techStack } from '../../data/techstack';

function ContactPage() {
  const tech = Object.entries(techStack);

  return (
    <>
      <h2 className="heading fade-in-right">Contact</h2>
      <div className="contact-stuff">
        <div className="contact-container fade-in-bottom">
          <p>
            {`I'm open for job opportunities! Feel free to contact me and check
            out my various profiles!`}
          </p>
          <ContactLinks />
        </div>
        <div className="tech-stack-container">
          <h3>My Tech Stack:</h3>
          <TechStack tech={tech} />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
