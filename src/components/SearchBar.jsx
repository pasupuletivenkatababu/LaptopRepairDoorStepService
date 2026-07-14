import React, { useState } from 'react';
import "../Searchbar.css";
import FlowImage from "../assets/flow.jpeg";
import ContactModal from './ContactModel';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModalService, setSelectedModalService] = useState(null);

  const services = [
    {
      title: 'Motherboard Repair',
      price: '₹1,999',
      warranty: '30 Days Warranty',
      repairTime: '24 Hours'
    },
    {
      title: 'Software Issues',
      price: '₹999',
      warranty: 'No Warranty',
      repairTime: '2 Hours'
    },
    {
      title: 'Screen Replacement',
      price: '₹3,999',
      warranty: '90 Days Warranty',
      repairTime: '2 Hours'
    },
    {
      title: 'Battery Replacement',
      price: '₹1,999',
      warranty: '6 Months - 1 Year Warranty',
      repairTime: '1-2 Hours'
    },
    {
      title: 'RAM Upgrade',
      price: '₹2,999',
      warranty: '2 Years Warranty',
      repairTime: '1-2 Hours'
    },
    {
      title: 'SSD Upgrade',
      price: '₹5,999',
      warranty: '5 Years Warranty',
      repairTime: '1-2 Hours'
    },
    {
      title: 'Keyboard Replacement',
      price: '₹1,999',
      warranty: '3 Months Warranty',
      repairTime: '3 Hours'
    },
    {
      title: 'Hinges Replacement',
      price: '₹2,500',
      warranty: '1 Month Warranty',
      repairTime: '3 Hours'
    },
    {
      title: 'Laptop Panel Replacement',
      price: '₹2,999',
      warranty: 'No Warranty',
      repairTime: '3 Hours'
    },
    {
      title: 'Cleaning & Maintenance',
      price: '₹999',
      warranty: 'No Warranty',
      repairTime: '2 Hours'
    },
    {
      title: 'Charging Portable',
      price: '₹1,999',
      warranty: 'No Warranty',
      repairTime: '3 Hours'
    },
    {
      title: 'Laptop Cooling Fan Replacement',
      price: '₹1,500',
      warranty: 'No Warranty',
      repairTime: '2 Hours'
    }
  ];

  const brands = [
    'Dell',
    'HP',
    'Lenovo',
    'ASUS',
    'Acer',
    'MSI',
    'Other'
  ];

  const repairSolutions = [
    { id: 1, brand: 'Dell', service: 'Screen Replacement', model: 'XPS 13', details: 'LED display replacement, panel calibration, and same-day turnaround.', turnaround: 'Same day' },
    { id: 2, brand: 'Dell', service: 'Software Issues', model: 'XPS 13', details: 'Windows troubleshooting, driver updates, and malware removal.', turnaround: 'Same day' },
    { id: 3, brand: 'Dell', service: 'Hardware Repair', model: 'Inspiron 15', details: 'Motherboard repair, hinge fixes, and port replacement.', turnaround: '1-2 days' },
    { id: 4, brand: 'Dell', service: 'Battery Replacement', model: 'Vostro 14', details: 'OEM battery replacement with health diagnostics.', turnaround: '24 hours' },
    { id: 5, brand: 'HP', service: 'Battery Replacement', model: 'Pavilion 15', details: 'Original battery replacement with health check and power optimization.', turnaround: '24 hours' },
    { id: 6, brand: 'HP', service: 'Screen Replacement', model: 'Envy 13', details: 'IPS panel replacement with color calibration included.', turnaround: 'Same day' },
    { id: 7, brand: 'HP', service: 'Hardware Repair', model: 'ProBook 450', details: 'Keyboard, touchpad, and thermal system repairs.', turnaround: '1-2 days' },
    { id: 8, brand: 'HP', service: 'Cleaning & Maintenance', model: 'Pavilion 15', details: 'Deep cleaning and dust removal from cooling system.', turnaround: 'Same day' },
    { id: 9, brand: 'Lenovo', service: 'Hardware Repair', model: 'ThinkPad T14', details: 'Keyboard, hinge, and motherboard diagnostics for business laptops.', turnaround: '1-2 days' },
    { id: 10, brand: 'Lenovo', service: 'Screen Replacement', model: 'IdeaPad Flex', details: 'Touch screen and LCD panel replacement with calibration.', turnaround: '24 hours' },
    { id: 11, brand: 'Lenovo', service: 'Battery Replacement', model: 'ThinkPad X1', details: 'Genuine battery replacement with power management optimization.', turnaround: '24 hours' },
    { id: 12, brand: 'Lenovo', service: 'Software Issues', model: 'ThinkPad E15', details: 'Windows recovery, BIOS updates, and driver installation.', turnaround: 'Same day' },
    { id: 13, brand: 'ASUS', service: 'Cleaning & Maintenance', model: 'ROG Zephyrus', details: 'Cooling fan cleaning, thermal paste refresh, and performance tune-up.', turnaround: 'Same day' },
    { id: 14, brand: 'ASUS', service: 'Hardware Repair', model: 'VivoBook 15', details: 'Keyboard replacement, USB port repair, and chassis fixes.', turnaround: '1-2 days' },
    { id: 15, brand: 'ASUS', service: 'Screen Replacement', model: 'ROG Laptop', details: 'High-refresh gaming display replacement and color profiling.', turnaround: '1-2 days' },
    { id: 16, brand: 'ASUS', service: 'Battery Replacement', model: 'ZenBook 14', details: 'Long-lasting battery replacement with charge cycle reset.', turnaround: '24 hours' },
    { id: 17, brand: 'Acer', service: 'SSD Upgrade', model: 'Swift 3', details: 'SSD installation and system migration for faster performance.', turnaround: '24 hours' },
    { id: 18, brand: 'Acer', service: 'Hardware Repair', model: 'Aspire 5', details: 'Hinge repair, keyboard replacement, and port troubleshooting.', turnaround: '1-2 days' },
    { id: 19, brand: 'MSI', service: 'Cleaning & Maintenance', model: 'Prestige 15', details: 'Thermal cleaning, dust removal, and cooling optimization.', turnaround: 'Same day' },
    { id: 20, brand: 'MSI', service: 'Hardware Repair', model: 'Modern 14', details: 'Laptop hardware diagnostics, port replacement, and screen repair.', turnaround: '1-2 days' }
  ];

  const runSearch = (brandValue = selectedBrand, serviceValue = selectedService, queryValue = searchTerm) => {
    const query = queryValue.trim().toLowerCase();
    const results = repairSolutions.filter((solution) => {
      const matchesBrand = !brandValue || solution.brand.toLowerCase() === brandValue.toLowerCase();
      const matchesService = !serviceValue || solution.service.toLowerCase() === serviceValue.toLowerCase();
      const matchesQuery = !query || [solution.brand, solution.service, solution.model, solution.details]
        .join(' ')
        .toLowerCase()
        .includes(query);

      return matchesBrand && matchesService && matchesQuery;
    });

    setSearchResults(results);
    setHasSearched(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const serviceData = services.find((service) => service.title === selectedService);
    setSelectedModalService(
      serviceData || {
        title: 'Laptop Repair Service',
        price: 'Starting from ₹999',
        warranty: 'Varies by service',
        repairTime: 'Varies by issue',
        description: 'Select a service above to get an exact price, warranty, and repair time.'
      }
    );
    setIsModalOpen(true);
  };

  return (
    <section className="search-bar-section">
      <div className="container">
        <div className="search-container">
          <h2>Find Your Laptop Repair Solution</h2>
          <p>Search by laptop brand, model, or service type</p>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-grid">
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
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>



              <div className="form-group">
                <button type="submit" className="btn btn-primary search-btn">
                  <span>🔍</span> Book Services
                </button>
              </div>
            </div>
          </form>

          <div className="repair-flow">
            <img src={FlowImage} alt="Laptop Repair Process" />
          </div>

          {isModalOpen && selectedModalService && (
            <ContactModal
              service={selectedModalService}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedModalService(null);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;