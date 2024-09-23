import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import comlogo from '../assets/images/companylogo.png';
import './SideHeader.css';

const SideHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed header for mobile and desktop */}
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <h1 className="logo">
      <img src={comlogo} alt="CodeApsTech Logo" className="logo-img" />
      <span className="company-name">CodeApsTech</span>
    </h1>

          {/* Navigation Links */}
          <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About-Us</Link></li>
              <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
              <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="main-content">
        {/* Your page content goes here */}
      </div>
    </>
  );
};

export default SideHeader;
