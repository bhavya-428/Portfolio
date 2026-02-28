import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'Next.js','Python']
    },

    {
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'Framer']
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header skills-header-card glass">
          <h2 className="section-title">My Top <span className="gradient-text">Skills</span></h2>
          <p className="section-subtitle">A list of technologies I use to bring ideas to life.</p>
        </div>
        
        <div className="skills-bento">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="skill-category-card learning-card glass">
            <div className="learning-badge">Currently Learning</div>
            <h3>Future Frontiers</h3>
            <div className="skill-tags">
              <span className="skill-tag learning">AI Ethics</span>
              <span className="skill-tag learning">Cloud Computing</span>
              <span className="skill-tag learning">System Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
