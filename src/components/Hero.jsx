import React from 'react';
import '../Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional Laptop Repair at Your <span className="highlight">Doorstep</span>
          </h1>
          <p className="hero-subtitle">
            Fast diagnosis, transparent pricing, and skilled technicians for all laptop brands and repair issues.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Same-Day Support</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure Handling</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💯</span>
              <span>Trusted Technicians</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('services')}>
              Get Service Now
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => scrollToSection('services')}>
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;