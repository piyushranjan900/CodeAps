import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services-page">
      
      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1>Our Expert Services</h1>
          <p>Delivering innovative digital solutions to help your business thrive.</p>
        </div>
      </section>
      <section className="service-section">
  <div className="content-wrapper">
    <h2>Web Development Services:</h2>
    <h3>Transform Your Business With Innovative Digital Solutions</h3>
    <p>
      Our web development services are more than just coding; they’re about 
      creating an exceptional digital experience for your customers. We focus 
      on building websites that not only look stunning but are also fast, 
      responsive, and secure. From custom website development to eCommerce 
      solutions, we craft websites that are aligned with your business goals, 
      ensuring seamless performance and a great user experience. With our expert 
      team of developers, you can expect a website that stands out from the 
      competition, drives conversions, and solidifies your brand’s online presence.
    </p>
  </div>
</section>


      {/* Services Section */}
      <div className="services">
        <h1 className="section-heading">Explore Our Services</h1>

        <div className="service-grid">
          {/* Website Development */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h2>Website Development</h2>
            <p>We create responsive, high-performance websites that engage users and drive results using cutting-edge web technologies.</p>
          </div>

          {/* App Development */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h2>App Development</h2>
            <p>Our team builds cross-platform mobile applications that deliver seamless user experiences across Android and iOS.</p>
          </div>

          {/* E-Commerce Solutions */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2>E-Commerce Solutions</h2>
            <p>Developing scalable e-commerce platforms with integrated payment gateways and advanced search functionalities.</p>
          </div>

          {/* SEO & Digital Marketing */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search-dollar"></i>
            </div>
            <h2>SEO & Digital Marketing</h2>
            <p>Our strategies increase visibility and conversion rates through data-driven SEO and digital marketing services.</p>
          </div>

          {/* UI/UX Design */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h2>UI/UX Design</h2>
            <p>Crafting user-centric designs that enhance engagement and offer a memorable user experience for web and mobile platforms.</p>
          </div>

          {/* Cloud Solutions */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h2>Cloud Solutions</h2>
            <p>Offering cloud architecture and migration services to help businesses scale with security and reliability.</p>
          </div>

          {/* Custom Software Development */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-code"></i>
            </div>
            <h2>Custom Software Development</h2>
            <p>We build tailored software solutions that improve operational efficiency and meet your unique business needs.</p>
          </div>

          {/* AI & Machine Learning */}
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h2>AI & Machine Learning</h2>
            <p>Implementing intelligent systems that automate processes and enhance decision-making through AI and ML technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
