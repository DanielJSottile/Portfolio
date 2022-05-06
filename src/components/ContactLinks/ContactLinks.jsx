import React from 'react';
import './ContactLinks.css';

export default function ContactLinks() {
  return (
    <div className="contacts">
      <a
        className="contact-link"
        href="mailto:danielsottile@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
        {' '}
        <i className="fas fa-envelope-open-text" />
      </a>
      <a
        className="contact-link"
        href="https://github.com/DanielJSottile"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        {' '}
        <i className="fab fa-github-square" />
      </a>
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/daniel-sottile"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
        {' '}
        <i className="fab fa-linkedin" />
      </a>
    </div>
  );
}
