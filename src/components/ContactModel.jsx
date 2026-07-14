import React, { useState } from 'react';

function ContactModal({ service, onClose }) {
  const serviceName = service.name || service.title || 'Laptop Repair Service';
  const [contactMethod, setContactMethod] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: ''
  });

  const businessPhone = '+919166199299';
  const businessEmail = 'kishorlaptopserviceworld@gmail.com';
  const businessWhatsApp = '+919166199299';
  const businessLocation = 'Sirius Cabin, 4th Floor, Bizness Square Building, Beside Kotak Bank HITEC City, Madhapur, Hyderabad, Telangana 500081';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = `Service Request: ${serviceName}`;
    const body = `Hi,\n\nI'm interested in ${serviceName} for my laptop.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nLocation: ${formData.location}\nMessage: ${formData.message}\n\nPrice: ${service.price || 'N/A'}\nWarranty: ${service.warranty || 'N/A'}`;
    
    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in ${serviceName} service. My name is ${formData.name || 'User'}, phone is ${formData.phone || 'Not provided'}, and I'm located at ${formData.location || 'Not specified'}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${businessPhone}`;
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div>
            <h2>Get {serviceName}</h2>
            {service.description && <p className="service-description">{service.description}</p>}
          </div>
        </div>

        <div className="service-meta">
          {service.price && <span className="service-price">Starting From : {service.price}</span>}
          {service.warranty && <span className="service-badge">Warranty: {service.warranty}</span>}
          {service.repairTime && <span className="service-badge">Repair Time: {service.repairTime}</span>}
        </div>

        {!contactMethod ? (
          <div className="contact-methods">
            <p className="contact-intro">Choose your preferred contact method:</p>

            <div className="method-buttons">
              <button
                className="method-btn phone-btn"
                onClick={() => setContactMethod('phone')}
              >
                <span className="method-icon">📞</span>
                <span className="method-name">Phone Call</span>
                <span className="method-desc">Direct call</span>
              </button>

              <button
                className="method-btn whatsapp-btn"
                onClick={() => setContactMethod('whatsapp')}
              >
                <span className="method-icon">💬</span>
                <span className="method-name">WhatsApp</span>
                <span className="method-desc">Quick chat</span>
              </button>

              <button
                className="method-btn email-btn"
                onClick={() => setContactMethod('email')}
              >
                <span className="method-icon">📧</span>
                <span className="method-name">Email</span>
                <span className="method-desc">Send us details</span>
              </button>
            </div>
          </div>
        ) : contactMethod === 'email' ? (
          <form onSubmit={handleEmailSubmit} className="contact-form">
            <h3>Send Email Request</h3>
            
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Location/Address *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Your location or address (e.g., Banjara Hills, Ameerpet, HITEC City)"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your mobile issue..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Email</button>
            <button
              type="button"
              className="back-btn"
              onClick={() => setContactMethod(null)}
            >
              Back
            </button>
          </form>
        ) : contactMethod === 'whatsapp' ? (
          <div className="contact-form quick-contact">
            <h3>Contact via WhatsApp</h3>

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label>Location/Address *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Your location or address"
              />
            </div>

            <button onClick={handleWhatsAppClick} className="submit-btn whatsapp">
              Open WhatsApp
            </button>
            <button
              type="button"
              className="back-btn"
              onClick={() => setContactMethod(null)}
            >
              Back
            </button>
          </div>
        ) : (
          <div className="contact-form quick-contact">
            <h3>Call Us Now</h3>
            
            <div className="form-group">
              <label>Location/Address (Optional)</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Your location"
              />
            </div>

            <p className="phone-number">{businessPhone}</p>
            <button onClick={handlePhoneClick} className="submit-btn phone">
              Call Now
            </button>
            <button
              type="button"
              className="back-btn"
              onClick={() => setContactMethod(null)}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
