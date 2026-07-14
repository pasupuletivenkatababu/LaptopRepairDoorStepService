import React, { useState } from 'react';
import '../Services.css';
import ContactModal from './ContactModel';
import HardwareRepairImage from '../assets/Hardware.jpeg';
import SoftwareImage from '../assets/software issue.jpeg';
import ScreenImage from '../assets/Screen Replace.jpeg';
import BatteryImage from '../assets/Battery Replace.jpeg';
import RamImage from '../assets/Ram Replace.jpeg';
import SSDImage from '../assets/SSD Replace.jpeg';
import KeyboardImage from '../assets/Keybroad.jpeg';
import HingesImage from '../assets/Hinges.jpeg';
import PanelImage from '../assets/panel.jpeg';
import CleaningImage from '../assets/cleaning.jpeg';
import ChargingImage from '../assets/charging portable.jpeg';
import CoolingImage from '../assets/coolingfan.jpeg';


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
      price: '₹1,999',
      warranty: '1 Month Warranty',
      repairTime: '24 Hours',
      description: 'Professional repair for motherboard, CPU, GPU, and other hardware components.',
      features: ['Motherboard repair', 'Power issues', 'Port repairs']
    },
    {
      id: 2,
      image: SoftwareImage,
      icon: '💾',
      title: 'Software Issues',
      price: '₹999',
      warranty: 'No Warranty',
      repairTime: '2 Hours',
      description: 'Troubleshoot OS problems, driver issues, and software conflicts.',
      features: ['OS installation', 'Driver updates', 'Malware removal']
    },
    {
      id: 3,
      image: ScreenImage,
      icon: '🖥️',
      title: 'Screen Replacement',
      price: '₹3,999',
      warranty: '3 Months Warranty',
      repairTime: '2 Hours',
      description: 'Quick and professional LCD/LED screen replacement for all brands.',
      features: ['LCD replacement', 'LED repair', 'Touch screen fix']
    },
    {
      id: 4,
      image: BatteryImage,
      icon: '🔋',
      title: 'Battery Replacement',
      price: '₹1,999',
      warranty: '6 Months - 1 Year Warranty',
      repairTime: '1-2 Hours',
      description: 'Perfect solution for fast battery draining, not charging, or a swollen battery.',
      features: ['Original battery', 'OEM Quality Battery', 'Compatible Battery']
    },
    {
      id: 5,
      image: RamImage,
      icon: '⚡',
      title: 'RAM Upgrade',
      price: '₹2,999',
      warranty: '2 Years Warranty',
      repairTime: '1-2 Hours',
      description: 'Boost laptop speed with expert RAM installation and compatibility testing.',
      features: ['Memory upgrade', 'Compatibility check', 'Performance tuning']
    },
    {
      id: 6,
      image: SSDImage,
      icon: '💽',
      title: 'SSD Upgrade',
      price: '₹5,999',
      warranty: '5 Years Warranty',
      repairTime: '1-2 Hours',
      description: 'Install fast SSD storage for quicker boots, app launch, and overall responsiveness.',
      features: ['SSD installation', 'Data migration', 'Speed optimization']
    },
    {
      id: 7,
      image: KeyboardImage,
      icon: '⌨️',
      title: 'Keyboard Replacement',
      price: '₹1,999',
      warranty: '3 Months Warranty',
      repairTime: '3 Hours',
      description: 'Replace worn, broken, or unresponsive laptop keyboards with quality parts.',
      features: ['Key replacement', 'Keyboard connector repair', 'Typing test']
    },
    {
      id: 8,
      image: HingesImage,
      icon: '🛠️',
      title: 'Hinges Replacement',
      price: '₹2,500',
      warranty: '1 Month Warranty',
      repairTime: '3 Hours',
      description: 'Fix loose or broken laptop hinges for stable screen movement and safe handling.',
      features: ['Hinge replacement', 'Frame alignment', 'Sturdy support']
    },
    {
      id: 9,
      image: PanelImage,
      icon: '🖥️',
      title: 'Laptop Panel Replacement',
      price: '₹2,999',
      warranty: 'No Warranty',
      repairTime: '3 Hours',
      description: 'Replace damaged panels and casing to restore the laptop’s look and strength.',
      features: ['Panel replacement', 'Case repair', 'Finish polishing']
    },
    {
      id: 10,
      image: CleaningImage,
      icon: '✨',
      title: 'Cleaning & Maintenance',
      price: '₹999',
      warranty: 'No Warranty',
      repairTime: '2 Hours',
      description: 'Deep cleaning, dust removal, and thermal paste application.',
      features: ['Dust cleaning', 'Cooling improvement', 'Preventive maintenance']
    },
    {
      id: 11,
      image: ChargingImage,
      icon: '🔌',
      title: 'Charging Portable',
      price: '₹1,999',
      warranty: 'No Warranty',
      repairTime: '3 Hours',
      description: 'Portable charging and power port servicing for laptops that won’t charge.',
      features: ['Charging repair', 'Port replacement', 'Power diagnostics']
    },
    {
      id: 12,
      image: CoolingImage,
      icon: '🌀',
      title: 'Laptop Cooling Fan Replacement',
      price: '₹1,500',
      warranty: 'No Warranty',
      repairTime: '2 Hours',
      description: 'Replace faulty cooling fans to restore airflow and reduce overheating.',
      features: ['Fan replacement', 'Thermal cleaning', 'Cooling optimization']
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
          service={selectedService}
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