import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Joe Wright',
    role: 'Builder & Developer, Dubai',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "Excellent service, competitive pricing, and top-grade granite! Working with MG Overseas has added real value to our construction projects."
,
  },
  {
    name: 'Linda Parker',
    role: 'Architect, Australia',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'MG Overseas stands out for their craftsmanship and professionalism. Their slabs transformed our showroom design—premium material and flawless finish!',
  },
  {
    name: 'Shreyash Shah',
    role: 'Interior Contractor, Mumbai',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    text: "We've been sourcing granite from MG Overseas for over five years. The quality, consistency, and timely delivery have always exceeded our expectations. Truly a reliable partner in the stone industry.",
  },
  {
    name: 'Sophia Martinez',
    role: 'Import Manager, USA',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "Every slab we received from MG Overseas reflects premium craftsmanship. Their granite brought an elegant, timeless touch to our high-end projects."
,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-avatar">
              <img src={t.avatar} alt={t.name} />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">“{t.text}”</p>
              <div className="testimonial-user">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 