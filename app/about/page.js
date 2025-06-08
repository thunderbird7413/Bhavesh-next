'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import '../globals.css';
import Footer from '../../components/Footer';

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Footer />
    </main>
  );
};

export default AboutPage; 