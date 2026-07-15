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
          {/* Phone */}
          <div className="contact-method-card">
            <div className="method-icon-large">📞</div>
            <h3>Phone Call</h3>
            <p className="contact-detail">+91 9166199299</p>
            <p className="contact-info">Call us anytime for immediate assistance.</p>
            <a href="tel:+919166199299" className="contact-link">Call Now</a>
          </div>

          {/* WhatsApp */}
          <div className="contact-method-card">
            <div className="method-icon-large">💬</div>
            <h3>WhatsApp</h3>
            <p className="contact-detail">+91 9166199299</p>
            <p className="contact-info">Chat with us directly on WhatsApp for fast support.</p>
            <a
              href="https://wa.me/919166199299?text=Hi%20Kishor%20Laptop%20Service%20World%2C%20I%20need%20laptop%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Open WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="contact-method-card">
            <div className="method-icon-large">📧</div>
            <h3>Email</h3>
            <p className="contact-detail">kishorlaptopserviceworld@gmail.com</p>
            <p className="contact-info">Send us your details and we will reply quickly.</p>
            <a
              href="mailto:kishorlaptopserviceworld@gmail.com?subject=Laptop%20Repair%20Service%20Request&body=Hello%20Kishor%20Laptop%20Service%20World%2C%0A%0AI%20need%20help%20with%20my%20laptop.%0A%0APlease%20reply%20with%20the%20next%20steps." 
              className="contact-link"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Location and Service Area */}
        <div className="location-section">
          {/* Business Location Card */}
          <div className="location-info-card">
            <div className="location-icon">📍</div>
            <h3>Office  Location</h3>
            <p className="location-address">
              <strong>Laptop Service World</strong><br />
              Sirius Cabin, 4th Floor, Bizness Square Building<br />
              Beside Kotak Bank HITEC City, Madhapur<br />
              Hyderabad, Telangana 500081<br />
              India
            </p>
            <br/>
            
              <strong> Work location </strong>
              <p>KPHB NearBy Metro Station</p>
           
          </div>

          {/* Service Area Coverage */}
          <div className="service-area-card">
            <h3>🚗 Service Coverage Areas</h3>
            <p className="area-description">We cover these locations with <strong>doorstep service</strong> and also provide service within <strong>20 Kms nearby</strong>.</p>
            <div className="areas-list">
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Kbhp</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Nizampet</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>JNTU</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Pragathi Nagar</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Bachupally</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Miyapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Ayyappa Society</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Kukatpally</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Gajularamaram</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Madhapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Hitech City</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Gachibowli</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Kondapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Kokapet</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Tellapur</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Nanakramguda</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Nallagandla</span>
              </div>
              <div className="area-item">
                <span className="area-icon">✓</span>
                <span>Chanda Nagar</span>
              </div>
            </div>
            <p className="area-note">📍 <strong>Shop Location:</strong> Sirius Cabin, 4th Floor, Bizness Square Building, Beside Kotak Bank HITEC City, Madhapur. We serve these areas with doorstep service and nearby within 20 Kms.</p>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="hours-section">
          <h3>⏰ Operating Hours</h3>
          <div className="service-hours">
            <div className="hour">
              <span className="day">Monday - Friday</span>
              <span className="time">9:30 AM - 7:00 PM</span>
            </div>
            <div className="hour">
              <span className="day">Saturday</span>
              <span className="time">10:30 AM - 7:00 PM</span>
            </div>
            <div className="hour">
              <span className="day">Sunday</span>
              <span className="time">11:30 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
