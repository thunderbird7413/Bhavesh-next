import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPinterest } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p className="company-description">
            Your one-stop destination for all your shopping needs. We provide quality products with excellent customer service.
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
            <span>MG OVERSEAS <br></br>( MARUTI GRANI MARMO) , <br></br>JALORE-BHINMAL ROAD, BHAGLI SINDHLAN, JALOR, RAJASTHAN, INDIA (343025)
            </span>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info-1">
            <div style={{display: "flex", gap: "10px"}}>
            <FaPhone/>
            <li>
              <span>+916376844361,
              </span>
              <span>
                 +918460826817
              </span>
            </li>
            </div>
            
            <div style={{display: "flex", gap: "10px"}}>
              <FaEnvelope style={{fontSize: "2rem"}}/>
            <li>
              <span>info@mgoverseasgroup.com, </span>
              <span>mgoverseas128@gmail.com </span>
            </li>
            </div>
          </ul>
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