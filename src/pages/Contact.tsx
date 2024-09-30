// src/pages/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for all your software solutions!</p>
        </div>
      </section>

      <p className='cpara'>
        At AspenCask Soln, we are committed to providing exceptional solutions for your business needs.
        Whether you have questions about our services or need a custom software solution, we're here to help!
      </p>
      <p className='contactheading'>
        Please fill out the form below, and one of our representatives will get back to you promptly.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Office</h2>
        <p>Raj Bagh, Ghaziabad</p>
        <p>Uttar Pradesh, 201005</p>
<<<<<<< HEAD
        <p>Email: <a href="mailto:aspencask@gmail.com">aspencask@gmail.com</a></p>
        
=======
        <p>Email: <a href="mailto:ashish.cliqtech@gmail.com">ashish.cliqtech@gmail.com</a></p>
        <p>Phone: <a href="tel:+916200604080">+91 6200604080</a></p>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
      </div>

      <div className="additional-info">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expertise in web and app development tailored to your needs.</li>
          <li>Comprehensive software solutions designed to improve your business efficiency.</li>
          <li>Dedicated support team to assist you at every stage of the project.</li>
          <li>Agile methodologies to ensure timely delivery and flexibility.</li>
        </ul>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <p>Stay updated with our latest projects and offers:</p>
        <ul>
<<<<<<< HEAD
          <li><a href="https://www.facebook.com/profile.php?id=61566376989450&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/aspencask-solution-449320330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/aspencask/profilecard/?igsh=N3UyeHBqZjBmaDM2" target="_blank" rel="noopener noreferrer">Instagram</a></li>
=======
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
>>>>>>> 94e03ece0fb8dd551296e0dd0da3d2e51518a523
        </ul>
      </div>
    </div>
  );
};

export default Contact;
