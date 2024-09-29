// src/pages/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have questions or need a custom solution? Get in touch with us!</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Office</h2>
        <p>Raj bagh, Ghaziabad</p>
        <p>Uttarpradesh, 201005</p>
        <p>Email: ashish.cliqtech@gmail.com</p>
        <p>Phone: +91 6200604080</p>
      </div>
    </div>
  );
};

export default Contact;
