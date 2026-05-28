import React, { useState } from 'react';
import '../SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const services = [
    'Hardware Repair',
    'Software Issues',
    'Screen Replacement',
    'Battery Replacement',
    'Data Recovery',
    'Cleaning & Maintenance'
  ];

  const brands = [
    'Dell',
    'HP',
    'Lenovo',
    'ASUS',
    'Apple',
    'Acer',
    'Sony',
    'Samsung',
    'MSI',
    'Razer',
    'Other'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      searchTerm,
      selectedService,
      selectedBrand
    });
    // Handle search logic
  };

  return (
    <section className="search-bar-section">
      <div className="container">
        <div className="search-container">
          <h2>Find Your Laptop Repair Solution</h2>
          <p>Search by laptop brand, model, or service type</p>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-grid">
              {/* Laptop Brand Select */}
              <div className="form-group">
                <label htmlFor="brand">Select Laptop Brand</label>
                <select
                  id="brand"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Choose Brand --</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Service Select */}
              <div className="form-group">
                <label htmlFor="service">Select Service</label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="form-control"
                >
                  <option value="">-- Choose Service --</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="form-group">
                <label htmlFor="search">Model or Details</label>
                <input
                  id="search"
                  type="text"
                  placeholder="e.g., Dell XPS 13, HP Pavilion..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                />
              </div>

              {/* Search Button */}
              <div className="form-group">
                <button type="submit" className="btn btn-primary search-btn">
                  <span>🔍</span> Search
                </button>
              </div>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="popular-searches">
            <span className="label">Popular searches:</span>
            <div className="search-tags">
              <button className="tag" onClick={() => setSearchTerm('Dell XPS Screen Replacement')}>
                Dell XPS Screen Repair
              </button>
              <button className="tag" onClick={() => setSearchTerm('HP Battery Replacement')}>
                HP Battery Replacement
              </button>
              <button className="tag" onClick={() => setSearchTerm('Lenovo Keyboard Fix')}>
                Lenovo Keyboard Fix
              </button>
              <button className="tag" onClick={() => setSearchTerm('ASUS Cooling Fan')}>
                ASUS Cooling Fan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;