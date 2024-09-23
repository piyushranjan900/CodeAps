// src/pages/Careers.tsx
import React from 'react';
import './Careers.css';

const Careers: React.FC = () => {
  return (
    <div className="careers">
      <h1>Careers</h1>
      <p>Join our dynamic team and help us build innovative solutions.</p>

      <div className="job-listings">
        <div className="job">
          <h2>Frontend Developer</h2>
          <p>Responsibilities include building responsive UI components and collaborating with designers.</p>
          <a href="#">Apply Now</a>
        </div>
        <div className="job">
          <h2>Backend Developer</h2>
          <p>Work on server-side logic, database management, and API development.</p>
          <a href="#">Apply Now</a>
        </div>
        {/* Add more job listings as needed */}
      </div>

      <div className="company-culture">
        <h2>Why Work With Us?</h2>
        <p>At CodeApsTech, we foster a collaborative environment where innovation thrives.</p>
      </div>
    </div>
  );
};

export default Careers;
