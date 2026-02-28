import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="bento-grid">
          {/* Main Info Card */}
          <div className="bento-card main-info glass">
            <h2 className="bento-title">About Me</h2>
            <p className="bento-text">
              I'm Bhavya, a developer who loves building things that live on the internet. 
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
          </div>

          {/* Stats Cards Section */}
          <div className="bento-stats-group">
            <div className="bento-card stat-card glass">
              <span className="stat-number">6 </span>
              <span className="stat-label">Months Exp</span>
            </div>
            <div className="bento-card stat-card glass">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>

          {/* Letter Card */}
          <div className="bento-card letter-card glass">
            <span className="bg-letter">B</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
