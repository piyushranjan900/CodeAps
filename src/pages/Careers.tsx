// Careers.tsx
import React from 'react';
import './Careers.css'; // Make sure to create this file for your styles


const Careers: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>Explore exciting career opportunities with us</p>
        </div>
      </section>

      {/* Careers Content Section */}
      <div className="careers">
        <h2>Careers</h2>
        <p>Thank you for your interest in joining our team!</p>
        <p>Currently, we have no available vacancies. Please check back later.</p>
        <p>Stay tuned for updates on job openings!</p>
      </div>
    </div>
  );
};

export default Careers;
