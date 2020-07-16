import React, { Fragment } from 'react'

const ContactPage = () => {
  return (
    <Fragment>
    <h2 className="heading fade-in-right">Contact</h2>
      <div className="contact-stuff">
        <div className="word-container fade-in-bottom">
         {/* image */}
          <p>
            I'm open for job opportunities!  Feel free to contact me and check out
            my various profiles!
          </p>
        </div>
          <a href="mailto:danielsottile@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://github.com/DanielJSottile" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-sottile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </Fragment>
  );
}

export default ContactPage;