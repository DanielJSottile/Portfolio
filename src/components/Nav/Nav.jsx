import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const navLinks = () => (
  <>
    <NavLink className="nav-link" to="/about">
      About
      {' '}
      <i className="fas fa-book" />
    </NavLink>
    <NavLink className="nav-link" to="/">
      Projects
      {' '}
      <i className="fas fa-scroll" />
    </NavLink>
    <NavLink className="nav-link" to="/contact">
      Contact
      {' '}
      <i className="fas fa-address-card" />
    </NavLink>
  </>
);

export default function Nav() {
  return (
    <nav className="nav">
      <h1>Daniel Sottile</h1>
      <section className="navlinks">{navLinks()}</section>
    </nav>
  );
}
