import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero section-padding">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container hero-top-content">
        <h2 className="hero-top-text">Building the Future with Intelligent Systems</h2>
      </div>
      <div className="container hero-container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for Internships & Projects
          </div>
          <h1 className="hero-title">
            I'm <span className="gradient-text">bhavya</span>
          </h1>
          <p className="hero-description">
           As a Computer Engineering student, I am passionate about developing robust, secure solutions that prioritize user experience.
          </p>
          <div className="hero-actions">
            <a href="/resume.pdf" className="btn-primary" download>Download Resume</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="photo-wrapper glass">
            <img 
              src={profilePhoto} 
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
