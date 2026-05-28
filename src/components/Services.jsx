import React from 'react';
import '../Services.css';

const Services = () => {
  const scrollToContact = (serviceName) => {
    if (typeof window !== 'undefined' && serviceName) {
      window.localStorage.setItem('repairRequest', serviceName);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 1,
      icon: '🔧',
      title: 'Hardware Repair',
      description: 'Professional repair for motherboard, CPU, GPU, and other hardware components.',
      features: ['Motherboard repair', 'Power issues', 'Port repairs']
    },
    {
      id: 2,
      icon: '💾',
      title: 'Software Issues',
      description: 'Troubleshoot OS problems, driver issues, and software conflicts.',
      features: ['OS installation', 'Driver updates', 'Malware removal']
    },
    {
      id: 3,
      icon: '🖥️',
      title: 'Screen Replacement',
      description: 'Quick and professional LCD/LED screen replacement for all brands.',
      features: ['LCD replacement', 'LED repair', 'Touch screen fix']
    },
    {
      id: 4,
      icon: '🔋',
      title: 'Battery Replacement',
      description: 'Original and compatible battery replacement with warranty.',
      features: ['Battery replacement', 'Charging port fix', 'Power adapter service']
    },
    {
      id: 5,
      icon: '📁',
      title: 'Data Recovery',
      description: 'Recover lost data from damaged or non-responsive hard drives.',
      features: ['HDD recovery', 'SSD recovery', 'File retrieval']
    },
    {
      id: 6,
      icon: '✨',
      title: 'Cleaning & Maintenance',
      description: 'Deep cleaning, dust removal, and thermal paste application.',
      features: ['Dust cleaning', 'Cooling improvement', 'Preventive maintenance']
    }
  ];

  return (
    <section id="services" className="services section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive laptop repair solutions for every problem</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline" onClick={() => scrollToContact(service.title)}>
                Request Repair
              </button>
            </div>
          ))}
        </div>

        <div className="service-guarantee">
          <div className="guarantee-item">
            <span className="guarantee-icon">✓</span>
            <h4>Quality Assured</h4>
            <p>All repairs come with 30-day guarantee</p>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">⚡</span>
            <h4>Quick Turnaround</h4>
            <p>Most repairs completed within 24 hours</p>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">💰</span>
            <h4>Affordable Pricing</h4>
            <p>Transparent pricing with no hidden charges</p>
          </div>
          <div className="guarantee-item">
            <span className="guarantee-icon">🏠</span>
            <h4>Door-to-Door Service</h4>
            <p>We come to your location for maximum convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;