import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const navLinks = (props) => {
  return (
    <Fragment>
      <NavLink  
        className='nav-link'
        to = '/about' >
        About <i className="fas fa-book"></i>
      </NavLink> 
      <NavLink  
        className='nav-link'
        to = '/' >
        Projects <i className="fas fa-scroll"></i>
      </NavLink>
      <NavLink  
        className='nav-link'
        to = '/contact' >
        Contact <i className="fas fa-address-card"></i>
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
