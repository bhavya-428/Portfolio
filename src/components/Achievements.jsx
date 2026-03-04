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
        { name: 'Smart India Hackathon', org: 'Ministry of Education', date: '2025' },
        { name: 'TechGig Code Gladiators', org: 'TechGig', date: '2024' }
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
      title: 'Academics',
      items: [
        { name: 'Kallam Haranadha Reddy Institute of Technology', org: 'CSE Department', date: '2023-2026' },
        { name: '9.6 CGPA — Semester 5', org: 'CSE Department', date: '2025' }
      ],
      icon: '🎓'
    }
  ];

  return (
    <section id="achievements" className="achievements-section section-padding">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">04 — Growth</span>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my professional growth, technical milestones, and academic success.
          </p>
        </div>

        <div className="achievements-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="achievement-card glass reveal">
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

          <div className="achievement-card github-card glass reveal">
            <div className="github-info">
              <h3>💻 GitHub Activity</h3>
              <p>Consistently contributing to open source and personal projects.</p>
            </div>
            <a
              href="https://github.com/bhavya-428"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
