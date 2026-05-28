import React, { useState } from 'react';
import '../Models.css';

const Models = () => {
  const [selectedBrand, setSelectedBrand] = useState('all');

  const scrollToContact = (brand) => {
    if (typeof window !== 'undefined' && brand) {
      window.localStorage.setItem('repairRequest', `${brand} laptop repair`);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const laptopModels = {
    all: [
      { brand: 'Dell', models: ['XPS 13', 'XPS 15', 'Inspiron 15', 'G15', 'Latitude'] },
      { brand: 'HP', models: ['Pavilion', 'Envy', 'Spectre', 'HP G7', 'EliteBook'] },
      { brand: 'Lenovo', models: ['ThinkPad', 'IdeaPad', 'Yoga', 'Legion'] },
      { brand: 'ASUS', models: ['VivoBook', 'ROG', 'TUF', 'Zenbook'] },
      { brand: 'Apple', models: ['MacBook Air', 'MacBook Pro', 'MacBook'] },
      { brand: 'Acer', models: ['Aspire', 'Swift', 'Nitro', 'Predator'] },
      { brand: 'Sony', models: ['VAIO'] },
      { brand: 'Samsung', models: ['Notebook Series', 'Chromebook'] },
      { brand: 'MSI', models: ['GF Series', 'GE Series', 'Prestige'] },
      { brand: 'Razer', models: ['Blade', 'Stealth', 'Book'] }
    ],
    dell: [
      { brand: 'Dell', models: ['XPS 13', 'XPS 15', 'Inspiron 15', 'G15', 'Latitude', 'Vostro'] }
    ],
    hp: [
      { brand: 'HP', models: ['Pavilion 15', 'Envy 13', 'Spectre x360', 'HP G7', 'EliteBook 850'] }
    ],
    lenovo: [
      { brand: 'Lenovo', models: ['ThinkPad E15', 'IdeaPad 5', 'Yoga 9i', 'Legion 5'] }
    ],
    asus: [
      { brand: 'ASUS', models: ['VivoBook 15', 'ROG Zephyrus', 'TUF Gaming', 'Zenbook 14'] }
    ],
    apple: [
      { brand: 'Apple', models: ['MacBook Air M1/M2', 'MacBook Pro 16', 'MacBook Pro 14'] }
    ]
  };

  const brands = ['all', 'dell', 'hp', 'lenovo', 'asus', 'apple'];
  const displayData = laptopModels[selectedBrand];

  return (
    <section id="models" className="models section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Laptop Models We Support</h2>
          <p>We repair all major brands and hundreds of laptop models</p>
        </div>

        {/* Brand Filter */}
        <div className="brand-filter">
          {brands.map((brand) => (
            <button
              key={brand}
              className={`filter-btn ${selectedBrand === brand ? 'active' : ''}`}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand === 'all' ? '🌐 All Brands' : `🔧 ${brand.charAt(0).toUpperCase() + brand.slice(1)}`}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="models-grid">
          {displayData.map((item, index) => (
            <div key={index} className="model-card">
              <div className="model-card-header">
                <h3>{item.brand}</h3>
                <span className="model-icon">💻</span>
              </div>
              <ul className="model-list">
                {item.models.map((model, idx) => (
                  <li key={idx}>
                    <span className="model-checkmark">→</span>
                    {model}
                  </li>
                ))}
              </ul>
              <button className="btn btn-secondary btn-sm" style={{ width: '100%' }} onClick={() => scrollToContact(item.brand)}>
                Repair {item.brand}
              </button>
            </div>
          ))}
        </div>

        {/* Coverage Info */}
        <div className="coverage-info">
          <div className="coverage-item">
            <span className="coverage-icon">✓</span>
            <div>
              <h4>10+ Major Brands</h4>
              <p>Dell, HP, Lenovo, ASUS, Apple, Acer, and more</p>
            </div>
          </div>
          <div className="coverage-item">
            <span className="coverage-icon">✓</span>
            <div>
              <h4>100+ Models</h4>
              <p>From budget laptops to gaming rigs</p>
            </div>
          </div>
          <div className="coverage-item">
            <span className="coverage-icon">✓</span>
            <div>
              <h4>All Generations</h4>
              <p>Old and new laptop models supported</p>
            </div>
          </div>
          <div className="coverage-item">
            <span className="coverage-icon">✓</span>
            <div>
              <h4>Not Listed?</h4>
              <p>Contact us - we likely support your model!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;