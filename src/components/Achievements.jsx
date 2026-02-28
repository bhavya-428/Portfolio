import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const sections = [
    {
      title: 'Internship Experience',
      items: [
        { name: 'Software Developer Intern', org: 'PHANTASM Solutions Inc.', period: 'Winter 2025' },
        { name: 'Python Intern', org: 'AI Research Lab', period: 'Winter 2023' }
      ],
      icon: '💼'
    },
    {
      title: 'Hackathons',
      items: [
        { name: 'Participated - Smart India Hackathon', org: 'Ministry of Edu.', date: '2025' },
        { name: 'Participated - TechGig Code Gladiators', org: 'TechGig', date: '2024' }
      ],
      icon: '🏆'
    },
    {
      title: 'Certifications',
      items: [
        { name: 'IBM AI Engineering Professional', org: 'Coursera', date: '2024' },
        { name: 'Python for Data Science', org: 'IBM', date: '2023' }
      ],
      icon: '📜'
    },
    {
      title: 'Academic Achievements',
      items: [
        { name: 'Kallam haranadha reddy Institute of Technology', org: 'Institute', date: '2023-2026' },
        { name: '9.6 CGPA - Semester 5', org: 'CSE Department', date: '2025' }
      ],
      icon: '🎓'
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">A showcase of my professional growth, technical milestones, and academic success.</p>
        </div>
        <div className="achievements-bento">
          {sections.map((section, idx) => (
            <div key={idx} className="achievement-card glass">
              <div className="card-header">
                <span className="card-icon">{section.icon}</span>
                <h3>{section.title}</h3>
              </div>
              <ul className="achievement-list">
                {section.items.map((item, i) => (
                  <li key={i} className="achievement-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-org">{item.org}</span>
                    </div>
                    <span className="item-date">{item.period || item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="achievement-card github-card glass">
            <div className="card-header">
              <span className="card-icon">💻</span>
              <h3>GitHub Activity</h3>
            </div>
            <p className="github-desc">Consistently contributing to open source and personal projects.</p>
            <a href="https://github.com/bhavya-428" target="_blank" rel="noopener noreferrer" className="github-activity-btn">
              <span>View Contribution Graph</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-4.51-2-7-2"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
