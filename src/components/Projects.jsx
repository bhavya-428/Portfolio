import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Online Food Ordering',
      category: 'Web Development',
      description: 'Developed a front-end platform where customers can browse menus, place orders, and check for payment options seamlessly.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1170',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: '#'
    },
    {
      title: 'Smart Heart Monitoring',
      category: 'IOT System',
      description: 'An IOT-based system that continuously monitors heart rate and automatically sends email alerts with GPS location in case of abnormal readings.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1170',
      tags: ['IOT', 'GPS', 'Email Alerts', 'Python'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">02 — Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of my recent work and digital explorations.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass reveal">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay"></div>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
