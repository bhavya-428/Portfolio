import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">01 — About</span>
          <h2 className="section-title">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-main glass reveal">
            <p className="about-intro">
              <span className="wave">👋</span> Hey, I'm Bhavya!
            </p>
            <p className="about-text">
              I'm a <span className="highlight">Computer Engineering</span> diploma student at
              Kallam Haranadha Reddy Institute of Technology who loves building things that live
              on the internet.
            </p>
            <p className="about-text">
              My goal is to always build products that provide <span className="highlight">pixel-perfect,
              performant experiences</span>. With a keen eye for detail and a passion for innovative
              solutions, I focus on creating seamless, user-friendly interfaces while ensuring
              high performance and scalability.
            </p>
          </div>

          <div className="about-stat-card glass reveal reveal-delay-1">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>

          <div className="about-stat-card glass reveal reveal-delay-2">
            <span className="stat-number">9.6</span>
            <span className="stat-label">CGPA</span>
          </div>

          <div className="about-letter-card glass reveal reveal-delay-3">
            <span className="bg-letter">B</span>
          </div>

          <div className="about-stat-card glass reveal reveal-delay-4">
            <span className="stat-number">2+</span>
            <span className="stat-label">Internships</span>
          </div>

          <div className="about-chips reveal">
            <div className="about-chip">
              <span className="chip-icon">📍</span> India
            </div>
            <div className="about-chip">
              <span className="chip-icon">🎓</span> CSE Diploma
            </div>
            <div className="about-chip">
              <span className="chip-icon">💼</span> Open to Work
            </div>
            <div className="about-chip">
              <span className="chip-icon">⚡</span> Fast Learner
            </div>
            <div className="about-chip">
              <span className="chip-icon">🎯</span> Detail Oriented
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
