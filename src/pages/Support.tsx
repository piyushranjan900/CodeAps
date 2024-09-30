import React, { useRef, useState } from 'react';
import './Support.css';

const Support: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Support topics (you can add more as needed)
  const supportTopics = [
    {
      title: "Getting Started with AspenCask",
      content: "Learn how to sign up, set up your first project, and integrate with our services."
    },
    {
      title: "Billing & Payments",
      content: "Find answers to questions about billing, pricing, and payment methods."
    },
    {
      title: "Technical Support",
      content: "Contact us for help with API integration, troubleshooting errors, and other technical issues."
    },
    {
      title: "Account Management",
      content: "Learn how to manage your account, reset your password, or update your profile information."
    },
    {
      title: "Service Availability & Uptime",
      content: "Stay informed about service availability, planned maintenance, and uptime guarantees."
    },
    {
      title: "Security & Compliance",
      content: "Find out how we protect your data and ensure compliance with industry standards."
    }
  ];

  // FAQ specific to support
  const faqSupport = [
    
    {
      question: "How can I contact technical support?",
      answer: "You can contact technical support via email or through the form below. We also have a dedicated API documentation section for common issues."
    },
    {
      question: "What is the typical response time for support?",
      answer: "Our support team aims to respond to inquiries within 24-48 hours, depending on the issue's complexity."
    },
    {
      question: "How do I update my billing information?",
      answer: "Go to the billing section in your account and follow the steps to update your payment method or billing address."
    },
    {
      question: "What if I need urgent help outside of business hours?",
      answer: "We offer emergency support for critical issues that impact services. You can mark your request as 'urgent' in the contact form."
    }
  ];

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="support-page">
      {/* Support Topics Section */}
      <section className="support-topics">
        <h1>Support Center</h1>
        <p>Get help with AspenCask services, billing, technical issues, and more. Browse our support topics or contact us directly for assistance.</p>

        <div className="support-topic-list">
          {supportTopics.map((topic, index) => (
            <div className="support-topic-item" key={index}>
              <h3>{topic.title}</h3>
              <p>{topic.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support FAQ Section */}
      <section className="support-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqSupport.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="support-contact">
        <h2>Contact Support</h2>
        <p>If you can't find the answers you need, please fill out the form below, and our support team will get back to you.</p>
        <button className="cta" onClick={toggleModal}>Open Contact Form</button>
      </section>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Contact Support</h2>
            <form>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" ref={textareaRef} required></textarea>
              </div>
              <button type="submit" className="cta">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
