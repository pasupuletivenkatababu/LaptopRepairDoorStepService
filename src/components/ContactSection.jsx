import React from 'react';

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Multiple ways to reach us - choose what's convenient for you
          </p>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods-grid">
          {/* Email */}
          <div className="contact-method-card">
            <div className="method-icon-large">📧</div>
            <h3>Email</h3>
            <p className="contact-detail">support@naidumobiles.com</p>
            <p className="contact-info">Send us your details and we'll respond within 2 hours</p>
            <a href="mailto:support@naidumobiles.com" className="contact-link">Send Email</a>
          </div>

          {/* WhatsApp */}
          <div className="contact-method-card">
            <div className="method-icon-large">💬</div>
            <h3>WhatsApp</h3>
            <p className="contact-detail">+91 9640501890</p>
            <p className="contact-info">Quick chat and instant replies available 24/7</p>
            <a
              href="https://wa.me/919640501890?text=Hi%20Naidu%20Mobiles%2C%20I%20need%20mobile%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Open WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div className="contact-method-card">
            <div className="method-icon-large">📞</div>
            <h3>Phone</h3>
            <p className="contact-detail">+91 9640501890</p>
            <p className="contact-info">Call us anytime for immediate assistance</p>
            <a href="tel:+91 9640501890" className="contact-link ">Call Now</a>
            
          </div>
        </div>

        {/* Location and Service Area */}
        <div className="location-section">
          {/* Business Location Card */}
          <div className="location-info-card">
            <div className="location-icon">📍</div>
            <h3>Our Location</h3>
            <p className="location-address">
              <strong>Naidu Mobiles</strong><br />
              Shop No 20, Annapoorna Block<br />
              ADITYA ENCLAVE, Ameerpet<br />
              Near Metro Station, Kumar Basti<br />
              Hyderabad, Telangana 500038<br />
              India
            </p>
            <a
              href="https://maps.google.com/?q=17.3873,-78.4592"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View on Google Maps
            </a>
          </div>

          {/* Service Area Coverage */}
          <div className="service-area-card">
            <h3>🚗 Service Coverage Areas</h3>
            <p className="area-description">We provide <strong>door-to-door repair services</strong> across Hyderabad and nearby areas</p>
            <div className="areas-list">
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Ameerpet</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Secunderabad</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Jubilee Hills</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>HITEC City</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Kondapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Madhapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Gachibowli</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>KPHB</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Miyapur</span>
              </div>
            </div>
            <p className="area-note">📍 <strong>Shop Location:</strong> Near Metro Station, Kumar Basti, Ameerpet. Don't see your area? <strong>Contact us</strong> - we may still serve you!</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="hours-section">
          <h3>⏰ Operating Hours</h3>
          <div className="service-hours">
            <div className="hour">
              <span className="day">Monday - Friday</span>
              <span className="time">8:00 AM - 8:00 PM</span>
            </div>
            <div className="hour">
              <span className="day">Saturday</span>
              <span className="time">9:00 AM - 7:00 PM</span>
            </div>
            <div className="hour">
              <span className="day">Sunday</span>
              <span className="time">10:00 AM - 6:00 PM</span>
            </div>
            <div className="hour">
              <span className="day">Emergency Service</span>
              <span className="time">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
