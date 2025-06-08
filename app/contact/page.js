'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import '../globals.css';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
};

export default ContactPage; 