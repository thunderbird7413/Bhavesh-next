'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart, FaPhone, FaEnvelope, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBrochureDownload = () => {
    window.open('/catalog.pdf', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="logo-link">
            <div className="logo-container">
              <Image 
                src="/images/image.png" 
                alt="MG Overseas Logo" 
                className="logo-image"
                width={50}
                height={50}
              />
              <div className="logo-text">
                <h1>MG OVERSEAS</h1>
                <p>Premium Natural Stone For Your Every Project</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Navigation Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className="nav-link" onClick={toggleMenu}>Products</Link>
          </li>
          <li className="nav-item">
            <Link href="/infrastructure" className="nav-link" onClick={toggleMenu}>Infrastructure</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link>
          </li>
        </ul>
        {/* Contact Information - Only visible in mobile menu */}
        <div className="contact-info-navbar">
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-icon-navbar" />
              <span className="contact-tooltip">+916376844361 <br /> +918460826817</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon-navbar" />
              <span className="contact-tooltip">&rarr; info@mgoverseasgroup.com<br />&rarr; mgoverseas128@gmail.com</span>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon-wrapper" onClick={handleBrochureDownload}>
              <FaDownload className="contact-icon-navbar" />
              <span className="contact-tooltip">Download Brochure</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 