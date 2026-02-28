import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of AI in Web Development',
      date: 'March 15, 2024',
      excerpt: 'How large language models are changing the way we build and maintain modern web applications.',
      tag: 'Artificial Intelligence'
    },
    {
      title: 'Mastering Python for Data Science',
      date: 'February 28, 2024',
      excerpt: 'Essential libraries and techniques for building efficient data pipelines and models.',
      tag: 'Python'
    },
    {
      title: 'Designing for the User: Beyond Aesthetics',
      date: 'January 12, 2024',
      excerpt: 'Exploring the psychology of user experience and how to create intuitive digital products.',
      tag: 'UI/UX Design'
    }
  ];

  return (
    <section id="blog" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest <span className="gradient-text">Insights</span></h2>
          <p className="section-subtitle">My thoughts on technology, design, and the ever-evolving world of software engineering.</p>
        </div>
        <div className="blog-grid">
          {posts.map((post, idx) => (
            <article key={idx} className="blog-card glass">
              <div className="blog-content">
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="blog-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
