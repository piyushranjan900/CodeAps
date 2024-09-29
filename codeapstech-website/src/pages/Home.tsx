import React, { useRef, useState, useEffect } from 'react';
import project1 from '../assets/images/project.png';
import './Home.css';

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleDiscoverMore = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // Auto resize functionality using useEffect
  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      const handleResize = () => {
        textarea.style.height = 'auto'; // Reset height
        textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on content
      };

      // Attach event listener for 'input'
      textarea.addEventListener('input', handleResize);

      // Ensure correct initial height if modal opens with content
      handleResize();

      // Cleanup event listener on component unmount
      return () => {
        textarea.removeEventListener('input', handleResize);
      };
    }
  }, [isModalOpen]); // Runs whenever modal state changes (when the textarea is rendered)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to CodeApsTech</h1>
          <p>We develop world-class websites and apps tailored to your needs.</p>
          <button className="cta" onClick={handleDiscoverMore}>
            Discover More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="homeservices" ref={servicesRef}>
        <h2>Our Services</h2>
        <div className="homeservice-items">
          <div className="homeservice-item">
            <h3>Web Development</h3>
            <p>We create responsive, high-performance websites.</p>
          </div>
          <div className="homeservice-item">
            <h3>App Development</h3>
            <p>Building fast, scalable mobile applications for all platforms.</p>
          </div>
          <div className="homeservice-item">
            <h3>UI/UX Design</h3>
            <p>Stunning designs that offer an optimal user experience.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-us-items">
          <div className="why-choose-us-item">
            <h3>Expertise</h3>
            <p>Our team consists of experienced professionals with a proven track record in web and app development.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Tailored Solutions</h3>
            <p>We recognize that every business is unique. Our solutions are customized to fit your specific needs and objectives.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Quality Assurance</h3>
            <p>We prioritize quality in every project, ensuring that our deliverables meet the highest standards.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Collaboration</h3>
            <p>We believe in a collaborative approach, involving our clients in the development process to ensure alignment and satisfaction.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Innovation</h3>
            <p>We stay ahead of the curve by adopting the latest technologies and industry best practices, ensuring that your solutions are modern and effective.</p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="our-process">
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <h3>1. Discovery</h3>
            <p>We start by understanding your business goals, target audience, and unique challenges.</p>
          </div>
          <div className="process-step">
            <h3>2. Planning</h3>
            <p>Our team crafts a detailed project plan outlining timelines, deliverables, and key milestones.</p>
          </div>
          <div className="process-step">
            <h3>3. Design</h3>
            <p>We create prototypes and design mockups reflecting your brand identity.</p>
          </div>
          <div className="process-step">
            <h3>4. Development</h3>
            <p>Our skilled developers bring the designs to life, employing the latest technologies.</p>
          </div>
          <div className="process-step">
            <h3>5. Testing</h3>
            <p>Rigorous testing is conducted to ensure everything works flawlessly before launch.</p>
          </div>
          <div className="process-step">
            <h3>6. Launch</h3>
            <p>We deploy your project with a focus on a smooth transition to the live environment.</p>
          </div>
          <div className="process-step">
            <h3>7. Support</h3>
            <p>We provide ongoing support and updates to help you adapt to changing market demands.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="homehomeportfolio">
        <h2>Our Portfolio</h2>
        <div className="homehomeportfolio-items">
          <div className="homehomeportfolio-item">
            <a href="https://amentisnutraceuticals.in/" target="_blank" rel="noopener noreferrer">
              <img src={project1} alt="Project 1" />
              <h4>AMENTIS NUTRACEUTICALS</h4>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-items">
          <div className="testimonial-item">
            <p>"CodeApsTech transformed our vision into reality."</p>
            <span>- Client A</span>
          </div>
          <div className="testimonial-item">
            <p>"Professional, timely, and highly skilled."</p>
            <span>- Client B</span>
          </div>
          <div className="testimonial-item">
            <p>"Our go-to partner for development needs."</p>
            <span>- Client C</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to start your project?</h2>
        <button className="cta" onClick={toggleModal}>Get in Touch</button>
      </section>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Contact Us</h2>
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

export default Home;
