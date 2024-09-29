import React, { useState, useRef } from 'react';
import './Careers.css';
import topImage from '../assets/images/ccc.jpg';
import formimg from '../assets/images/desiA.jpg';
import formimg1 from '../assets/images/desi2.jpg';
import formimg2 from '../assets/images/ui1.jpg';
import formimg3 from '../assets/images/staa.jpg';

interface Job {
  title: string;
  description: string;
  salary: string;
  experience: string;
  education: string;
  skills: string[];
  image: string;
}

const CareersPage: React.FC = () => {
  const [jobs] = useState<Job[]>([
    {
      title: 'Web Developer',
      description: 'Develop and maintain web applications for our clients.',
      salary: '₹15,000 - ₹20,000 Monthly',
      experience: '2-5 years',
      education: 'Bachelor’s in Computer Science or relevant field',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      image: formimg,
    },
    {
      title: 'App Developer (Android/iOS)',
      description: 'Develop and maintain mobile applications.',
      salary: '₹15,000 - ₹20,000 Monthly',
      experience: '3-6 years',
      education: 'Bachelor’s in Computer Science or relevant field',
      skills: ['Kotlin', 'Swift', 'React Native'],
      image: formimg1,
    },
    {
      title: 'UI/UX Designer',
      description: 'Design engaging user interfaces and experiences using Figma.',
      salary: '₹15,000 - ₹20,000 Monthly',
      experience: '2-4 years',
      education: 'Bachelor’s in Design or related field',
      skills: ['Figma', 'Prototyping', 'Wireframing', 'Adobe XD'],
      image: formimg2,
    },
    {
      title: 'Full Stack Developer',
      description: 'Handle both frontend and backend development.',
      salary: '₹15,000 - ₹20,000 Monthly',
      experience: '3-7 years',
      education: 'Bachelor’s in Computer Science or relevant field',
      skills: ['Node.js', 'React.js', 'MongoDB', 'AWS'],
      image: formimg3,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [qualification, setQualification] = useState<string>('');
  const [otherQualification, setOtherQualification] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const jobsRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (job: Job) => {
    console.log("Apply button clicked for job:", job.title); // Debugging click
    setSelectedJob(job);
    setShowForm(true); // Show the form modal
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form modal
    setSelectedJob(null); // Clear selected job
    setQualification(''); // Reset qualification field
    setOtherQualification(''); // Reset other qualification field
    setShowSuccessMessage(false); // Hide success message
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSuccessMessage(true); // Show success message
    setShowForm(false); // Close form after submission
  };

  const handleExploreClick = () => {
    if (jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <div className="careers-hero-section" id="careers-hero">
        <h1 className="careers-header">Join The Technology</h1>
        <p className="careers-subheader">
          Join AspenCask and be a part of a cutting-edge team working on <br />
          Web and App Development, UI/UX Design, and Full-Stack Development.
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore Opportunities
        </button>
      </div>

      <div className="career-info-section" id="career-info">
        <h2>Career Page at AspenCask</h2>
        <p>
          A career page is a vital tool for attracting top talent to your organization. At AspenCask, we are committed to providing freshers with opportunities to build their careers in technology.
        </p>
      </div>

      <img src={topImage} alt="Join Us" className="top-image" id="top-image" />

      {/* Job Listings */}
      <div id="jobs" ref={jobsRef} className="job-listings-section">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-header">
              <img src={job.image} alt={job.title} className="job-image" />
              <h2>{job.title}</h2>
            </div>
            <p><strong>Description:</strong> {job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Education:</strong> {job.education}</p>
            <p><strong>Skills Required:</strong> {job.skills.join(', ')}</p>
            <button className="apply-button" onClick={() => handleApplyClick(job)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Check if modal should be displayed */}
      {showForm ? (
        <div className="modal" id="application-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>&times;</span>
            <h2>Apply for {selectedJob?.title}</h2>
            <form className="apply-form" onSubmit={handleSubmit}>
              <label htmlFor="name">
                Full Name:
                <input type="text" name="name" id="name" placeholder="Enter your full name" required />
              </label>
              <label htmlFor="email">
                Email:
                <input type="email" name="email" id="email" placeholder="Enter your email address" required />
              </label>
              <label htmlFor="phone">
                Phone Number:
                <input type="tel" name="phone" id="phone" placeholder="Enter your phone number" required />
              </label>
              <label htmlFor="qualification">
                Highest Qualification:
                <select name="qualification" id="qualification" required value={qualification} onChange={(e) => setQualification(e.target.value)}>
                  <option value="" disabled>Select your highest qualification</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              {qualification === 'Other' && (
                <label htmlFor="otherQualification">
                  Please specify:
                  <input type="text" name="otherQualification" id="otherQualification" placeholder="Enter your qualification" value={otherQualification} onChange={(e) => setOtherQualification(e.target.value)} />
                </label>
              )}
              <label htmlFor="location">
                Location:
                <input type="text" name="location" id="location" placeholder="Enter your location" required />
              </label>
              <label htmlFor="resume">
                Resume (PDF only):
                <input type="file" name="resume" id="resume" accept=".pdf" required />
              </label>
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="success-message">
          <h2>Your application has been submitted successfully!</h2>
          <button onClick={handleCloseForm}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CareersPage;
