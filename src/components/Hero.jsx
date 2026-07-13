import React from 'react';
import '../Hero.css';
//import HeroImage from '../assets/kishu.jpeg';
import HeroImage from '../assets/laptop.jpeg'

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
          <h1 className ="hero-subtitle1">
            Free pickup and delivery, same-day support.
          </h1>
          
          
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