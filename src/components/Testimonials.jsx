import React, { useState } from 'react';
import '../Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Kukatpally, Hyderabad',
      rating: 5,
      comment: 'Excellent service! They came to my home and fixed my laptop screen in 30 minutes. Very professional and friendly technicians.',
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Madhapur, Hyderabad',
      rating: 5,
      comment: 'Best laptop repair service in Hyderabad! They provided a free diagnosis and fixed my heating issues. Highly recommended!',
      avatar: '👩‍💼'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Gachibowli, Hyderabad',
      rating: 5,
      comment: 'Amazing experience. They recovered my lost files from a crashed hard drive. Very affordable and honest pricing.',
      avatar: '👨‍💻'
    },
    {
      id: 4,
      name: 'Neha Singh',
      location: 'JNTU, Hyderabad',
      rating: 5,
      comment: 'Quick, reliable, and trustworthy. Repaired my keyboard and trackpad. Worth every penny!',
      avatar: '👩‍🎓'
    },
    {
      id: 5,
      name: 'Vikram Reddy',
      location: 'Hitech City, Hyderabad',
      rating: 5,
      comment: 'Professional team with genuine expertise. My gaming laptop is running faster than ever. Highly satisfied!',
      avatar: '👨‍🎮'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials section-spacing">
      <div className="container">
        <div className="section-header">
          <h2>Customer Reviews</h2>
          <p>Hear from our happy customers across Hyderabad</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <span className="avatar">{testimonial.avatar}</span>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p className="location">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>

                    <p className="testimonial-text">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button className="carousel-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ❯
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="indicator">
            <span className="indicator-value">4.9⭐</span>
            <span className="indicator-label">Average Rating</span>
          </div>
          <div className="indicator">
            <span className="indicator-value">1000+</span>
            <span className="indicator-label">Reviews</span>
          </div>
          <div className="indicator">
            <span className="indicator-value">98%</span>
            <span className="indicator-label">Recommend Us</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;