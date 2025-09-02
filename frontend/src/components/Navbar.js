import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo2.png';

const Navbar = () => (
  <nav className="navbar">
     <img src={logo} alt="Site Logo" className="site-logo" />
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/stories">Stories</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/letters">Letters</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/join">Join</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
    </ul>
  </nav>
);

export default Navbar;
