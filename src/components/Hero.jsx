import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for Internships & Projects
          </div>

          <p className="hero-greeting">{'> hello, world'}</p>

          <h1 className="hero-title">
          I'm{' '}
          <span className="hero-name gradient-text">Bhavya Sri</span>
          <span className="hero-role">Web Developer · Computer Engineering Student</span>
        </h1>

        <p className="hero-description">
          An enthusiastic computer science student with strong programming skills in Python, 
          eager to contribute to innovative projects and build high-performance web solutions.
        </p>

          <div className="hero-actions">
            <a href="/resume.pdf" className="btn-primary" download>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <a href="https://linkedin.com/in/bhavya-sri-vakkalagadda-928739360" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-container">
            <div className="hero-photo-ring"></div>
            <div className="photo-wrapper">
              <img src={profilePhoto} alt="Bhavya Sri Vakkalagadda" className="profile-photo" />
            </div>
            <div className="hero-tech-float tech-float-1">⚛ React</div>
            <div className="hero-tech-float tech-float-2">🐍 Python</div>
            <div className="hero-tech-float tech-float-3">🔧 HTML</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
