'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '918460826817'; // Your WhatsApp number
  const message = 'Hello! I would like to know more about your granite products.'; // Default message

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </button>
  );
};

export default WhatsAppButton; 