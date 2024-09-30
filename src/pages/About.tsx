import React, { useState, useEffect } from 'react';
import Ashish from '../assets/images/ashish.jpg';
import Khushi from '../assets/images/khushi.jpg';
import Piyush from '../assets/images/piyush.jpg';
import Sandhya from '../assets/images/sandhya.jpg';
import Sidd from '../assets/images/siddhat.jpg';
import './About.css';

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Ashish Kumar',
      position: 'Founder & CEO',
      description:
        'Ashish manages operations, ensuring the delivery of high-quality web and app solutions that meet client needs and expectations.',
      imageUrl: Ashish,
    },
    {
      name: 'Siddhant Aryan',
      position: 'Frontend Developer',
      description:
        'Siddhant is a Frontend Developer specializing in creating responsive web and mobile applications using modern front-end technologies and frameworks.',
      imageUrl: Sidd,
    },
    {
      name: 'Piyush Ranjan',
      position: 'CMO',
      description:
        'Piyush leads marketing efforts, focusing on user-centered design to create beautiful and functional digital experiences.',
      imageUrl: Piyush,
    },
    {
      name: 'Chandan Kumar',
      position: 'Backend Engineer',
      description:
        'Chandan oversees server-side development, ensuring applications are fast, reliable, and secure, providing a solid foundation for user experiences.',
      imageUrl: 'https://img.freepik.com/premium-photo/indian-man-old-senior-old-male-generate-ai_98402-85630.jpg',
    },
    {
      name: 'Sandhya Amrit',
      position: 'QA Engineer',
      description:
        'Sandhya ensures quality by rigorously testing and debugging applications, guaranteeing they meet high standards before release for optimal performance.',
      imageUrl: Sandhya,
    },
    {
      name: 'Khushi Kumari',
      position: 'Android Developer',
      description:
        'Khushi is an Android Developer focused on building innovative, user-friendly mobile applications with seamless performance and intuitive design.',
      imageUrl: Khushi,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [teamMembers.length]);

  // Ensure 3 members are always visible, even when looping back to the start
  const visibleTeamMembers = [
    teamMembers[currentSlide],
    teamMembers[(currentSlide + 1) % teamMembers.length],
    teamMembers[(currentSlide + 2) % teamMembers.length],
  ];

  return (
    <div className="about-us">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About AspenCask</h1>
          <p>
            Founded in 2024, AspenCask delivers innovative web and mobile solutions, ensuring client success.
          </p>
          <button className="cta">Learn More</button>
        </div>
      </section>

      <section className="team-section">
        <h2>Team Members</h2>
        <div className="team-carousel">
          {visibleTeamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.imageUrl} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <p><strong>{member.position}</strong></p>
              <p>{member.description}</p>
              {/* Social links removed */}
            </div>
          ))}
        </div>
      </section>

      <section className="info-boxes">
        <div className="info-box">
          <h2>Public Policies</h2>
          <p>We maintain transparency and adhere to public policies that ensure ethical business practices and compliance with regulations.</p>
        </div>
        <div className="info-box">
          <h2>Our Reports</h2>
          <p>Stay updated with our annual and quarterly reports that detail our progress, performance, and future goals.</p>
        </div>
        <div className="info-box">
          <h2>Awards and Recognition</h2>
          <p>We are proud to be recognized for our commitment to innovation and excellence in the tech industry.</p>
        </div>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At AspenCask Solution, our mission is to create cutting-edge, user-friendly applications that help businesses thrive in the digital age.
          We strive for excellence in every project.
        </p>
      </section>

      <section className="contact-section">
  <h2>Contact Us</h2>
  <p>
    Interested in working with us? Feel free to reach out and learn how AspenCask Solution can help your business grow!
  </p>

  <div className="email-section">
    <a href="mailto:info@aspencask.com" className="email-button">
      Email Us
    </a>
  </div>
</section>

    </div>
  );
};

export default AboutUs;
