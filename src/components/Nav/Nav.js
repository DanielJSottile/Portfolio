import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const navLinks = () => {
  return (
    <Fragment>
      <NavLink  
        className='nav-link'
        to = '/' >
        About
      </NavLink> 
      <NavLink  
        className='nav-link'
        to = '/projects' >
        Projects
      </NavLink>
      <NavLink  
        className='nav-link'
        to = '/contact' >
        Contact
      </NavLink> 
    </Fragment>
  )
}

const Nav = () => {
  return (
    <nav className="nav">
      <h1>Daniel Sottile</h1>
      <section className="navlinks">
        {navLinks()}
      </section>
    </nav>
  );
}

export default Nav;
