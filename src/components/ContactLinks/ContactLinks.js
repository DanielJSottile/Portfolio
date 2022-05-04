import React from 'react';
import './ContactLinks.css';

const ContactLinks = () => {
  return (
    <>
      <div className="contacts">
        <a
          className="contact-link"
          href="mailto:danielsottile@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email <i className="fas fa-envelope-open-text"></i>
        </a>
        <a
          className="contact-link"
          href="https://github.com/DanielJSottile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <i className="fab fa-github-square"></i>
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/daniel-sottile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default ContactLinks;
