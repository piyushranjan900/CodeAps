import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for active link handling
import comlogo from '../assets/images/companylogo.png';
import './SideHeader.css';

const SideHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Use React Router's useLocation to get the current path
  const location = useLocation();

  // Toggle the menu on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Check if the current path matches the link
  const isActive = (path: string) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <>
      {/* Fixed header for mobile and desktop */}
      <header className="header">
        <div className="header-container">
          {/* Logo and company name with homepage link */}
          <h1 className="logo">
            <Link to="/" className="logo-link" onClick={closeMenu}>
              <img src={comlogo} alt="AspenCask Logo" className="logo-img" />
              <span className="company-name">AspenCask</span>
            </Link>
          </h1>

          {/* Navigation Links */}
          <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className={isActive('/')}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={closeMenu}
                  className={isActive('/about')}
                >
                  About-Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={closeMenu}
                  className={isActive('/services')}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  onClick={closeMenu}
                  className={isActive('/portfolio')}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={closeMenu}
                  className={isActive('/contact')}
                >
                  Contact
                </Link>
              </li>
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
