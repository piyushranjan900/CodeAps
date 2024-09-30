import React, { useRef, useState } from 'react';
import './KnowledgeBaseHelp.css';

const KnowledgeBaseHelp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Expanded list of FAQ items, articles, and troubleshooting guides
  const faqItems = [
    {
      question: "How do I get started with AspenCask services?",
      answer: "You can get started by contacting our team for a consultation or reviewing our API documentation for integration guidance."
    },
    {
      question: "What are the pricing plans?",
      answer: "We offer customized solutions depending on the scope of your project. Contact us for a tailored quote."
    },
    {
      question: "Can I track the progress of my project?",
      answer: "Yes, we provide regular updates and timelines throughout the project lifecycle to ensure transparency."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach out to our support team via the contact form or directly through the support email listed on our website."
    },
    {
      question: "What technology stacks does AspenCask support?",
      answer: "We specialize in modern technology stacks, including JavaScript (React, Node.js), Python, and cloud services such as AWS and Azure."
    },
    {
      question: "How do I scale my web application?",
      answer: "We can assist with scaling through optimized infrastructure, cloud-based solutions, and performance tuning."
    },
    {
      question: "Does AspenCask offer post-launch support?",
      answer: "Yes, we offer ongoing maintenance and support packages to ensure your product continues to run smoothly."
    }
  ];

  const articleItems = [
    {
      title: "Setting Up Your First Project",
      content: "Learn how to kick off a project with AspenCask from initial consultation to deployment."
    },
    {
      title: "Best Practices for API Integration",
      content: "Follow these guidelines to ensure a smooth API integration experience."
    },
    {
      title: "Troubleshooting Common Issues",
      content: "Having problems with your project? Check out our troubleshooting tips to resolve common issues."
    },
    {
      title: "How to Secure Your Web Application",
      content: "Security is a top priority. Follow our guide to implement best practices for securing your web app."
    },
    {
      title: "Optimizing Performance for High Traffic",
      content: "Learn strategies to improve your website's performance under heavy traffic conditions."
    },
    {
      title: "Understanding Cloud Deployment",
      content: "Explore how to deploy and manage applications using AWS, Azure, and other cloud providers."
    }
  ];

  const guideItems = [
    {
      title: "Guide 1: Resolving API Connection Errors",
      content: "This guide walks you through fixing common API connection errors."
    },
    {
      title: "Guide 2: Improving Website Performance",
      content: "Learn how to optimize your website for better speed and user experience."
    },
    {
      title: "Guide 3: Debugging Application Crashes",
      content: "Follow our step-by-step guide to resolve application crashes quickly."
    },
    {
      title: "Guide 4: Setting Up a Scalable Cloud Architecture",
      content: "Learn how to set up a scalable and reliable cloud infrastructure using AWS."
    },
    {
      title: "Guide 5: Implementing CI/CD Pipelines",
      content: "Automate your deployment process with our guide on setting up CI/CD pipelines."
    }
  ];

  // Enhanced search function: Filter FAQs, articles, and guides based on search query
  const filteredFAQItems = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArticleItems = articleItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGuideItems = guideItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className="knowledge-base-help">
      {/* Hero Section */}
      <section className="kb-hero">
        <div className="kb-hero-content">
          <h1>Knowledge Base</h1>
          <p>Find answers to your questions and learn more about our services.</p>
          <input
            type="text"
            className="kb-search"
            placeholder="Search articles, FAQs, or guides..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="kb-faq">
        <h2>Frequently Asked Questions</h2>
        {filteredFAQItems.length > 0 ? (
          <div className="faq-items">
            {filteredFAQItems.map((item, index) => (
              <div className="faq-item" key={index}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No FAQ items match your search.</p>
        )}
      </section>

      {/* Popular Articles Section */}
      <section className="kb-articles">
        <h2>Popular Articles</h2>
        {filteredArticleItems.length > 0 ? (
          <div className="kb-article-items">
            {filteredArticleItems.map((item, index) => (
              <div className="kb-article-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No articles match your search.</p>
        )}
      </section>

      {/* Troubleshooting Guides Section */}
      <section className="kb-guides">
        <h2>Troubleshooting Guides</h2>
        {filteredGuideItems.length > 0 ? (
          <div className="kb-guide-items">
            {filteredGuideItems.map((item, index) => (
              <div className="kb-guide-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No guides match your search.</p>
        )}
      </section>

      {/* Contact Support Section */}
      <section className="kb-support">
        <h2>Still Need Help?</h2>
        <p>If you couldn't find the answers you were looking for, feel free to reach out to our support team.</p>
        <button className="cta" onClick={toggleModal}>Contact Support</button>
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

export default KnowledgeBaseHelp;
