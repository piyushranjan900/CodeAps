import React from 'react';
import logo from '../assets/images/companylogo.png';
import './Footer.css'; // Make sure to create this file for your styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
          <address>
            <p>Raj bagh, Ghaziyabad, uttarpradesh</p>
            <p>ashish.cliqtech@gmail.com</p>
          </address>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/newsroom">Newsroom</a></li>
              <li><a href="/careers">Careers</a></li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h4>Tools</h4>
            <ul>
              
              
              <li><a href="/portfolio">Projects</a></li>
              <li><a href="/affiliateprogram">Affiliate Program</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li><a href="/KnowledgeBaseHelp">Knowledge Base</a></li>
              
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61566376989450&mibextid=ZbWKwL">Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/aspencask-solution-449320330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/aspencask/profilecard/?igsh=N3UyeHBqZjBmaDM2">Instagram</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
