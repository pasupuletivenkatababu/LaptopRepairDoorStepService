import React, { useState } from 'react';
import '../Navbar.css';

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <div className="logo">
            <span className="logo-icon">🔧</span>
            <span className="logo-text">LaptopFix Pro</span>
          </div>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('services')}>Services</a></li>
          <li><a onClick={() => scrollToSection('models')}>Models</a></li>
          <li><a onClick={() => scrollToSection('why-us')}>Why Us</a></li>
          <li><a onClick={() => scrollToSection('testimonials')}>Reviews</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        {/* CTA Button */}
        <button className="btn btn-primary navbar-cta" onClick={() => scrollToSection('contact')}>
          Get Service
        </button>
      </div>
    </nav>
  );
};

export default Navbar;