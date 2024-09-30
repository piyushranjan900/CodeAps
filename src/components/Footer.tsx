import React from 'react';
<<<<<<< HEAD
import logo from '../assets/images/acS1.png';
=======
import logo from '../assets/images/companylogo.png';
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
import './Footer.css'; // Make sure to create this file for your styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
          <address>
            <p>Raj bagh, Ghaziyabad, uttarpradesh</p>
<<<<<<< HEAD
            <p>apencask@gmail.com</p>
=======
            <p>ashish.cliqtech@gmail.com</p>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
          </address>
        </div>
        
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
<<<<<<< HEAD
              <li><a href="/newsroom">Newsroom</a></li>
              <li><a href="/careers">Careers</a></li>
              
=======
              <li><a href="/news">Newsroom</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/legal">Legal Info</a></li>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
            </ul>
          </div>
          <div className="footer-column">
            <h4>Tools</h4>
            <ul>
<<<<<<< HEAD
              
              
              <li><a href="/portfolio">Projects</a></li>
              <li><a href="/affiliateprogram">Affiliate Program</a></li>
=======
              <li><a href="/analytics">Analytics</a></li>
              <li><a href="/seo-tools">SEO Tools</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/affiliates">Affiliate Program</a></li>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
<<<<<<< HEAD
              <li><a href="/KnowledgeBaseHelp">Knowledge Base</a></li>
              
=======
              <li><a href="/knowledge-base">Knowledge Base</a></li>
              <li><a href="/api">API</a></li>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="https://twitter.com">Twitter</a></li>
<<<<<<< HEAD
              <li><a href="https://www.facebook.com/profile.php?id=61566376989450&mibextid=ZbWKwL">Facebook</a></li>
              <li><a href="https://www.linkedin.com/in/aspencask-solution-449320330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/aspencask/profilecard/?igsh=N3UyeHBqZjBmaDM2">Instagram</a></li>
=======
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
