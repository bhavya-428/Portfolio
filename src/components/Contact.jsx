import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-bento">
          {/* Left Info Card */}
          <div className="contact-info-card glass">
            <h2 className="contact-bento-title">Let's Work <br /> Together</h2>
            <p className="contact-bento-text">
              I'm currently looking for new opportunities. If you have a project in mind, feel free to reach out.
            </p>
            <div className="contact-social-grid">
              <a href="#" className="social-link-card glass">LinkedIn</a>
              <a href="#" className="social-link-card glass">GitHub</a>
              <a href="#" className="social-link-card glass">Email</a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card glass">
            <form className="bento-form">
              <div className="form-row">
                <div className="bento-form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="bento-form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="bento-form-group">
                <label>Message</label>
                <textarea placeholder="Tell me about your project..." rows="6" required></textarea>
              </div>
              <button type="submit" className="bento-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
