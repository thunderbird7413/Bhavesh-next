'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import Infrastructure from '../../components/Infrastructure';
import '../globals.css';
import Footer from '../../components/Footer';

const InfrastructurePage = () => {
  return (
    <main>
      <Navbar />
      <Infrastructure />
      <Footer />
    </main>
  );
};

export default InfrastructurePage; 