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
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional Laptop Repair at Your <span className="highlight">Doorstep</span>
          </h1>
          <p className="hero-subtitle">
            Fast diagnosis, transparent pricing, and skilled technicians for all laptop brands and models.
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

        <div className="hero-image">
          <div className="laptop-illustration">
            <div className="laptop-screen"></div>
            <div className="laptop-body"></div>
            <div className="repair-tools">
              <span className="tool tool-1">🔧</span>
              <span className="tool tool-2">⚙️</span>
              <span className="tool tool-3">🧰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;