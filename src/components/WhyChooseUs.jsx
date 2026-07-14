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
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden charges, free diagnosis, and competitive rates.',
      details: ['Free diagnosis', 'Fixed pricing', 'No surprises']
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
          <h2>Why Choose Laptop Service world?</h2>
          <p>Professional service with customer satisfaction at the core.</p>
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

       
       
      </div>
    </section>
  );
};

export default WhyChooseUs;