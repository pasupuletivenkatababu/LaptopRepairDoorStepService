import React from 'react';
import '../Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://api.whatsapp.com/send?phone=919166199299&text=${encodeURIComponent('Hi, I am interested in your laptop repair services. Please tell me about hardware repair, software issues, screen replacement, battery replacement, RAM upgrades, SSD upgrades, keyboard replacement, hinge replacement, and panel replacement.')}`;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      <div className="footer-content">
        <div className="container footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <h4>Laptop Service World</h4>
              <p>
                Professional door-to-door laptop repair service in Hyderabad.
                Fast, reliable, and affordable solutions for all laptop brands.
              </p>
              <button className="btn btn-primary footer-cta" onClick={() => scrollToSection('contact')}>
                Schedule a Repair
              </button>
            </div>

            <div className="footer-blocks">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="#services">Our Services</a></li>
                  <li><a href="#why-us">Why Choose Us</a></li>
                  {/*<li><a href="#testimonials">Customer Reviews</a></li>*/}
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Popular Services</h4>
                <ul className="footer-links">
                  <li><a href="#services">Motherboard Repair</a></li>
                  <li><a href="#services">Software Issues</a></li>
                  <li><a href="#services">Screen Replacement</a></li>
                  <li><a href="#services">RAM Upgrade</a></li>
                  <li><a href="#services">SSD Upgrade</a></li>
                  <li><a href="#services">Keyboard Replacement</a></li>
                  <li><a href="#services">Hinges Replacement</a></li>
                  <li><a href="#services">Laptop Panel Replacement</a></li>
                  <li><a href="#services">Maintenance</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact Info</h4>
                <div className="contact-info">
                  <div className="info-item">
                    <span className="info-icon">📞</span>
                    <a href="tel:+919166199299">+91 91661 99299</a>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">💬</span>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📧</span>
                    <a href="mailto:kishorlaptopserviceworld@gmail.com">kishorlaptopserviceworld@gmail.com</a>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} LaptopFix Pro. All rights reserved.</p>
            <div className="footer-meta">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms & Conditions</a>
              <span className="separator">|</span>
              <a href="#warranty">Warranty Info</a>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-cta">
        <button className="fab-button" title="WhatsApp" onClick={() => window.open(whatsappLink, '_blank')}>
          💬
        </button>
      </div>
    </footer>
  );
};

export default Footer;