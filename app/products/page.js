'use client';
import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Products from '../../components/Products';
import '../../app/globals.css';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  useEffect(() => {
    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
} 