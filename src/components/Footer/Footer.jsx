import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        Daniel Sottile Copyright
        {' '}
        <i className="far fa-copyright" />
        {' '}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
}
