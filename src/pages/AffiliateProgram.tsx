import React from 'react';
import './AffiliateProgram.css';

const AffiliateProgram: React.FC = () => {
  return (
    <div className="affiliate-program-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Affiliate Program</h1>
          <p>Join our affiliate program to earn rewards by promoting our services.</p>
        </div>
      </section>

      {/* Message Section */}
      <div className="no-affiliate-message">
        <h2>Currently, There is No Affiliate Program Available</h2>
        <p>We appreciate your interest in our affiliate program! Please stay tuned for updates in the future.</p>
      </div>
    </div>
  );
};

export default AffiliateProgram;
