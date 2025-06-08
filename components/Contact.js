"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const infoRef = useRef(null);
  const formRef = useRef(null);

  const [infoVisible, setInfoVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === infoRef.current) {
            setInfoVisible(true);
          } else if (entry.target === formRef.current) {
            setFormVisible(true);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      
      if (!backendUrl) {
        throw new Error('Backend URL is not configured. Please check your .env.local file.');
      }

      const response = await fetch(`${backendUrl}/api/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBrochureDownload = () => {
    window.open('/catalog.pdf', '_blank');
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <h1 className="contact-hero-title">Get in Touch</h1>
      </div>

      <div className="contact-container">
        <div className={`contact-info scroll-reveal ${infoVisible ? 'visible' : ''}`} ref={infoRef}>
          <h2>Contact Information</h2>
          <p>We would love to hear from you! Whether you have a question about our granite selection, need a custom quote, or just want to say hello, feel free to reach out.</p>
          <div className="contact-details">
            <p style={{textAlign: "left"}}><FaMapMarkerAlt className="contact-icon" style={{ color: "#1ba6ad", fontSize:"2rem"}} /> MG OVERSEAS ( MARUTI GRANI MARMO) , JALORE-BHINMAL ROAD, BHAGLI SINDHLAN, JALOR, RAJASTHAN, INDIA (343025)
            </p>
            <p><FaPhone className="contact-icon" style={{ color: "#1ba6ad", fontSize: "1.2rem" }} />+916376844361, +918460826817
            </p>
            <p style={{fontSize: "1rem" }}><FaEnvelope className="contact-icon" style={{ color: "#1ba6ad", fontSize:"1.3rem"}} />info@mgoverseasgroup.com, mgoverseas128@gmail.com </p>
          </div>
          <div className="contact-map">
            {/* Embedded Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2596321393867!2d72.60556597359879!3d25.261850129082323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3943055be7141157%3A0x58301f6b5a47a0fe!2sMG%20OVERSEAS!5e0!3m2!1sen!2sin!4v1748868164037!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        <div className={`contact-form-container scroll-reveal ${formVisible ? 'visible' : ''}`} ref={formRef}>
          <h2 style={{ textAlign: "left", marginBottom: "60px" }}>Send Us a Message</h2>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 