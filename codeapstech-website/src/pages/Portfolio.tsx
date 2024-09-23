import React from 'react';
import project1 from '../assets/images/project.png'; // Image of completed project
import ecom from '../assets/images/ecom.jpeg';
import health from '../assets/images/health.jpeg';
import real from '../assets/images/realstate.jpeg'; // Image placeholder for in-progress projects
import './Portfolio.css';

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio-page-wrapper">
      <section className="portfolio-hero-section">
        <div className="portfolio-hero-overlay"></div>
        <div className="portfolio-hero-content">
          <h1>Our Portfolio</h1>
          <p>Discover the amazing projects we have delivered and the ones currently in progress.</p>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="completed-projects-section">
        <h2>Completed Project</h2>
        <div className="portfolio-project-grid">
          <div className="portfolio-project-card">
            <img src={project1} alt="Completed Project" className="portfolio-project-image" />
            <div className="portfolio-project-info">
              <h3>Amentis Nutraceuticals</h3>
              <p>We developed a high-performance, responsive website for Amentis Nutraceuticals, showcasing their products and services. Our team ensured optimal user experience with a clean and modern design.</p>
              <a href="https://amentisnutraceuticals.in/" target="_blank" rel="noopener noreferrer" className="portfolio-project-link">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* In Progress Projects Section */}
      <section className="in-progress-projects-section">
        <h2>Projects in Progress</h2>
        <div className="portfolio-project-grid">
          <div className="portfolio-project-card">
            <img src={ecom} alt="In Progress Project" className="portfolio-project-image" />
            <div className="portfolio-project-info">
              <h3>E-Commerce Platform</h3>
              <p>Developing a scalable and secure e-commerce platform with integrated payment solutions and advanced search functionality.</p>
            </div>
          </div>
          <div className="portfolio-project-card">
            <img src={real} alt="In Progress Project" className="portfolio-project-image" />
            <div className="portfolio-project-info">
              <h3>Real Estate Portal</h3>
              <p>Building a modern real estate portal to help users buy, sell, and rent properties with ease, equipped with advanced filtering options.</p>
            </div>
          </div>
          <div className="portfolio-project-card">
            <img src={health} alt="In Progress Project" className="portfolio-project-image" />
            <div className="portfolio-project-info">
              <h3>Healthcare Booking System</h3>
              <p>Creating an intuitive healthcare booking system that connects patients with healthcare providers for virtual and in-person appointments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="portfolio-cta-section">
        <h2>Want to Start a Project?</h2>
        <p>We are ready to bring your vision to life with our expert team of developers and designers.</p>
        <a href="/contact" className="portfolio-cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default PortfolioPage;
