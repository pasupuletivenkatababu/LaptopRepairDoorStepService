import React, { useEffect, useState } from 'react';
import '../Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="hero-title">
            Expert Laptop Repair at Your <span className="highlight">Doorstep</span>
          </h1>
          <p className="hero-subtitle">
            Professional repair services for all laptop brands and models. Fast, reliable, and affordable solutions delivered right to your location.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Same-Day Service</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>100% Secure</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💯</span>
              <span>Expert Technicians</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              Book Service Now
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => scrollToSection('services')}>
              Learn More
            </button>
          </div>
        </div>

        <div className={`hero-image ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="laptop-illustration">
            <div className="laptop-screen"></div>
            <div className="laptop-body"></div>
            <div className="repair-tools">
              <span className="tool tool-1">🔨</span>
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