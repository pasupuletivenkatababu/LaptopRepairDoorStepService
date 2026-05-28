import React from 'react';
import '../WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '🏆',
      title: 'Certified Technicians',
      description: 'Our technicians are certified with 10+ years of experience in laptop repairs.',
      details: ['Industry certified', 'Regular training', 'Expert knowledge']
    },
    {
      icon: '⚡',
      title: 'Quick Turnaround',
      description: 'Most repairs completed within 24 hours with same-day diagnostics.',
      details: ['Fast service', 'No waiting', 'Same-day fixes']
    },
    {
      icon: '🏠',
      title: 'Door-to-Door Service',
      description: 'We come to your home or office - no need to go anywhere.',
      details: ['Home service', 'Flexible timing', 'Zero hassle']
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges, free diagnosis, and competitive rates.',
      details: ['Free diagnosis', 'Fixed pricing', 'No surprises']
    },
    {
      icon: '🤖',
      title: 'Instant Chat Support',
      description: 'WhatsApp messages reach our repair team immediately and AI suggestions help you move faster.',
      details: ['Instant WhatsApp alerts', 'Repair worker responds fast', 'AI guidance available']
    },
    {
      icon: '🛡️',
      title: 'Warranty Guaranteed',
      description: '30-day warranty on all repairs with parts guarantee.',
      details: ['30-day warranty', 'Parts guaranteed', 'Full support']
    }
  ];

  return (
    <section id="why-us" className="why-choose-us section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose LaptopFix Pro?</h2>
          <p>Industry-leading service with customer satisfaction at the core, plus instant WhatsApp alerts and AI-guided repair support.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <ul className="reason-details">
                {reason.details.map((detail, idx) => (
                  <li key={idx}>
                    <span className="dot">●</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat">
            <div className="stat-number">10000+</div>
            <div className="stat-label">Repairs Completed</div>
          </div>
          <div className="stat">
            <div className="stat-number">99.8%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-section">
          <h3>Trusted By</h3>
          <div className="trust-badges">
            <div className="badge">
              <span className="badge-icon">⭐</span>
              <span>4.9/5 Stars</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span>Verified Reviews</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🏅</span>
              <span>Certified Service</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💎</span>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;