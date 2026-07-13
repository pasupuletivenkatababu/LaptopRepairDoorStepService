import React, { useState } from 'react';
import '../Services.css';
import ContactModal from './ContactModel';
import HardwareRepairImage from '../assets/Hardware.jpeg';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const services = [
    {
      id: 1,
      image: HardwareRepairImage,
      title: 'Motherboard Repair',
      description: 'Professional repair for motherboard, CPU, GPU, and other hardware components.',
      features: ['Motherboard repair', 'Power issues', 'Port repairs']
    },
    {
      id: 2,
      image: HardwareRepairImage,
      icon: '💾',
      title: 'Software Issues',
      description: 'Troubleshoot OS problems, driver issues, and software conflicts.',
      features: ['OS installation', 'Driver updates', 'Malware removal']
    },
    {
      id: 3,
      image: HardwareRepairImage,
      icon: '🖥️',
      title: 'Screen Replacement',
      description: 'Quick and professional LCD/LED screen replacement for all brands.',
      features: ['LCD replacement', 'LED repair', 'Touch screen fix']
    },
    {
      id: 4,
      image: HardwareRepairImage,
      icon: '🔋',
      title: 'Battery Replacement',
      description: ' Perfect solution for fast battery draining, not charging, or a swollen battery.',
      features: ['Original battery', 'OEM Quality Battery','Compatible Battery']
    },
    {
      id: 5,
      image: HardwareRepairImage,
      icon: '⚡',
      title: 'RAM Upgrade',
      description: 'Boost laptop speed with expert RAM installation and compatibility testing.',
      features: ['Memory upgrade', 'Compatibility check', 'Performance tuning']
    },
    {
      id: 6,
      image: HardwareRepairImage,
      icon: '💽',
      title: 'SSD Upgrade',
      description: 'Install fast SSD storage for quicker boots, app launch, and overall responsiveness.',
      features: ['SSD installation', 'Data migration', 'Speed optimization']
    },
    {
      id: 7,
      image: HardwareRepairImage,
      icon: '⌨️',
      title: 'Keyboard Replacement',
      description: 'Replace worn, broken, or unresponsive laptop keyboards with quality parts.',
      features: ['Key replacement', 'Keyboard connector repair', 'Typing test']
    },
    {
      id: 8,
      image: HardwareRepairImage,
      icon: '🛠️',
      title: 'Hinges Replacement',
      description: 'Fix loose or broken laptop hinges for stable screen movement and safe handling.',
      features: ['Hinge replacement', 'Frame alignment', 'Sturdy support']
    },
    {
      id: 9,
      image: HardwareRepairImage,
      icon: '🖥️',
      title: 'Laptop Panel Replacement',
      description: 'Replace damaged panels and casing to restore the laptop’s look and strength.',
      features: ['Panel replacement', 'Case repair', 'Finish polishing']
    },
    {
      id: 10,
      image: HardwareRepairImage,
      icon: '✨',
      title: 'Cleaning & Maintenance',
      description: 'Deep cleaning, dust removal, and thermal paste application.',
      features: ['Dust cleaning', 'Cooling improvement', 'Preventive maintenance']
    },
    {
      id: 11,
      image: HardwareRepairImage,
      icon: '🖥️',
      title: 'Laptop CoolingFan Replacement',
      description: 'Replace damaged panels and casing to restore the laptop’s look and strength.',
      features: ['Panel replacement', 'Case repair', 'Finish polishing']
    },
    {
      id: 12,
      image: HardwareRepairImage,
      icon: '🖥️',
      title: 'Charging Port Replacement',
      description: 'Replace damaged panels and casing to restore the laptop’s look and strength.',
      features: ['Panel replacement', 'Case repair', 'Finish polishing']
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
            <div key={service.id} className="service-card">
              <div className="service-media">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="service-image" />
                ) : (
                  <div className="service-icon">{service.icon}</div>
                )}
              </div>
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
              <button className="btn btn-outline" onClick={() => openServiceModal(service)}>
                Request Repair
              </button>
            </div>
          ))}
        </div>

        {/* Removed guarantee/badges per update request */}
      </div>

      {isModalOpen && selectedService && (
        <ContactModal 
          service={{
            name: selectedService.title,
            price: '₹1,999 - ₹4,999',
            warranty: '30 Days Warranty'
          }} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedService(null);
          }} 
        />
      )}
    </section>
  );
};

export default Services;