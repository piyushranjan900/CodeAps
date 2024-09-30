import React from 'react';
import './Newsroom.css';

const Newsroom: React.FC = () => {
  return (
    <div className="newsroom">
      {/* Hero Section */}
      <section className="newsroom-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Newsroom</h1>
          <p>Stay informed with the latest updates and announcements from AspenCask.</p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-items">
          <p>No news yet! Stay tuned for the latest updates and announcements from AspenCask.</p>
          <p>We're continually working on exciting projects and innovations that we can't wait to share with you.</p>
        </div>
      </section>

      {/* Press Releases Section */}
      <section className="press-releases">
        <h2>Press Releases</h2>
        <div className="press-release-items">
          <p>No press releases available at this time. Please check back soon for important updates.</p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements">
        <h2>Announcements</h2>
        <div className="announcement-items">
          <p>Currently, there are no announcements. Stay connected to learn about our upcoming events and initiatives!</p>
        </div>
      </section>

      {/* Media Inquiries Section */}
      <section className="media-inquiries">
        <h2>Media Inquiries</h2>
        <p>For media inquiries or interview requests, please reach out to our PR team at <a href="mailto:aspencask@gmail.com">aspencask@gmail.com</a>.</p>
      </section>
    </div>
  );
};

export default Newsroom;
