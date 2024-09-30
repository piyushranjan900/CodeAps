// src/pages/Resources.tsx
import React from 'react';
import './Resources.css';

const Resources: React.FC = () => {
  return (
    <div className="resources">
      <h1>Resources</h1>
      <p>Access a variety of resources to help you understand our services and the industry.</p>

      <div className="resource-items">
        <div className="resource">
          <h2>Whitepapers</h2>
          <p>In-depth guides on web and app development best practices.</p>
          <a href="#">Download</a>
        </div>
        <div className="resource">
          <h2>E-books</h2>
          <p>Comprehensive e-books covering the latest trends in technology.</p>
          <a href="#">Download</a>
        </div>
        <div className="resource">
          <h2>Webinars</h2>
          <p>Join our webinars to learn from industry experts.</p>
          <a href="#">Register</a>
        </div>
        {/* Add more resources as needed */}
      </div>

      <div className="industry-reports">
        <h2>Industry Reports</h2>
        <p>Stay informed with our latest industry reports and research studies.</p>
        <a href="#">View Reports</a>
      </div>
    </div>
  );
};

export default Resources;
