"use client";
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPinterest, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>MG OVERSEAS</h3>
          <p className="company-description">
          We are dedicated to providing top-quality granite and natural stone products to clients worldwide. With a commitment to excellence and customer satisfaction, we offer a wide range of premium stones for all your construction and design needs. Connect with us for reliable service and superior materials.
          </p>
          <div className="social-links">
            <a href="https://pin.it/65bo2d3NW" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
            <a href="https://www.instagram.com/mgoverseas_?igsh=a3JtMDNvZGxiazht
" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href=" https://www.linkedin.com/company/106421443/admin/dashboard/
" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/infrastructure">Infrastructure</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blogs</a></li>
          </ul>
        </div>

         {/* Address Section */}
        <div className="footer-section">
          <h3>Address</h3>
          <div className="footer-address">
            <FaMapMarkerAlt style={{ marginRight: '8px' }} />
            <span>MG OVERSEAS <br></br>( MARUTI GRANI MARMO) <br></br>JALORE-BHINMAL ROAD, BHAGLI SINDHLAN, JALOR, RAJASTHAN, INDIA (343025)
            </span>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-accordion">
            <div className="accordion-item">
              <button 
                className="accordion-header" 
                onClick={() => setIsPhoneOpen(!isPhoneOpen)}
              >
                <div className="accordion-title">
                  <FaPhone />
                  <span>Phone Numbers</span>
                </div>
                {isPhoneOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isPhoneOpen && (
                <div className="accordion-content">
                  <ul className="phone-numbers">
                    <li>+916376844361</li>
                    <li>+918460826817</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="accordion-item">
              <button 
                className="accordion-header" 
                onClick={() => setIsEmailOpen(!isEmailOpen)}
              >
                <div className="accordion-title">
                  <FaEnvelope />
                  <span>Email Addresses</span>
                </div>
                {isEmailOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isEmailOpen && (
                <div className="accordion-content">
                  <ul className="email-addresses">
                    <li>info@mgoverseasgroup.com</li>
                    <li>mgoverseas128@gmail.com</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

       
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom" style={{ padding: "1vw 5vw", }}>
        <p style={{ marginBottom: "1vw" }}>Photographs provided are to give you an overall idea of the variation in veining, shades and colour variation. They do not represent the actual slabs. Please email us if you would like to see actual photographs of full slabs/tiles that are available. All dimensions and weight given are nominal and subject to natural and/or manufacturing tolerances.</p>
        <p style={{ fontWeight: "bold" }}>&copy; {new Date().getFullYear()} MG Overseas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 