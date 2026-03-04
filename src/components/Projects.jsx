import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PMBA',
      category: 'Web Development',
      description: 'A premium medical billing website with real-time updates and glassmorphic UI elements for seamless healthcare management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1170',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Elitekem',
      category: 'Web Development',
      description: 'Intelligent medical laboratory website featuring dark mode aesthetics, smooth transitions, and modern UI patterns.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1170',
      tags: ['React', 'CSS', 'API'],
      link: '#'
    },
    {
      title: 'Cibo',
      category: 'Web App',
      description: 'A high-performance restaurant ordering platform built with interactive menus and smooth checkout experience.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1170',
      tags: ['HTML', 'CSS', 'JavaScript'],
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
