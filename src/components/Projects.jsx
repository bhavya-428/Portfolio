import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'PMBA',
      category: 'Web Development',
      description: 'A premium medical billing application with real-time updates and glassmorphic UI.',
      image: 'https://www.ibef.org/assets/images/Medical-Devices-Industry-2.jpg'
    },
    {
      title: 'Elitekem',
      category: 'Web Development',
      description: 'Intelligent medical laboratory with dark mode aesthetics and smooth transitions.',
      image: 'https://sigmauniversity.ac.in/wp-content/uploads/2025/03/Medical-Laboratory-Technology-Set-to-Rule-the-World-Sigma-University.webp'
    },
    {
      title: 'Cibo',
      category: 'Web App',
      description: 'A high-performance restaurant ordering app built with HTML, CSS, and JavaScript.',
      image: 'https://img.freepik.com/premium-photo/healthy-living-website-provide-information-healthy-recipe-snugly_31965-630550.jpg'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A collection of my recent work and digital explorations.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
