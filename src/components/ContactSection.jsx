import React, { useState, useEffect } from 'react';
import '../ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    issue: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const repairRequest = window.localStorage.getItem('repairRequest');
    if (repairRequest) {
      setFormData(prev => ({
        ...prev,
        issue: prev.issue || 'other',
        message: `I want to register an issue for: ${repairRequest}. Please help.`,
      }));
      window.localStorage.removeItem('repairRequest');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', issue: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Contact us instantly on WhatsApp or submit a request — our AI assistant gives quick guidance while the technician connects.</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Methods */}
          <div className="contact-methods">
            <div className="method-card">
              <div className="method-icon">📞</div>
              <h3>Call Us</h3>
              <p>Available 24/7 for emergency repairs</p>
              <a href="tel:+919166199299" className="contact-link">+91 91661 99299</a>
            </div>

            <div className="method-card">
              <div className="method-icon">💬</div>
              <h3>WhatsApp</h3>
              <p>Send your repair issue on WhatsApp. If the technician is busy, our AI assistant provides instant help while the worker gets back to you.</p>
              <a href="https://api.whatsapp.com/send?phone=919166199299&text=Hello%2C%20I%20need%20laptop%20repair%20service.%20Please%20send%20me%20details%20about%20hardware%20repair%2C%20software%20issues%2C%20screen%20replacement%2C%20battery%20replacement%2C%20and%20data%20recovery." target="_blank" rel="noopener noreferrer" className="contact-link">
                Message us on WhatsApp
              </a>
              <p className="subtext">If the tech is busy, the chatbot gives instant repair advice while you wait.</p>
            </div>

            <div className="method-card">
              <div className="method-icon">🤖</div>
              <h3>AI Repair Assistant</h3>
              <p>Our automated assistant helps you describe the issue clearly and shares next-step guidance until a worker connects.</p>
              <ul className="reason-details">
                <li><span className="dot">●</span>Instant repair advice</li>
                <li><span className="dot">●</span>Problem guidance</li>
                <li><span className="dot">●</span>Worker connects soon</li>
              </ul>
            </div>

            <div className="method-card">
              <div className="method-icon">📧</div>
              <h3>Email</h3>
              <p>Send us detailed information</p>
              <a href="mailto:kishulaptop@gmail.com" className="contact-link">kishulaptop@gmail.com</a>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3>Send Us a Message</h3>
            {submitted && (
              <div className="success-message">
                ✓ Message sent! Our AI assistant is ready and the technician will connect with you shortly.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="form-control"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue">What's the issue? *</label>
                <select
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">-- Select Issue --</option>
                  <option value="hardware">Hardware Problem</option>
                  <option value="software">Software Issue</option>
                  <option value="screen">Screen Problem</option>
                  <option value="battery">Battery Issue</option>
                  <option value="heating">Heating/Cooling</option>
                  <option value="data">Data Recovery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue in detail..."
                  rows="4"
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;