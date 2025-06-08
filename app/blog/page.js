'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Blog from '../../components/Blog';
import '../globals.css';
import Footer from '../../components/Footer';

const BlogPage = () => {
  return (
    <main>
      <Navbar />
      <Blog />
      <Footer />
    </main>
  );
};

export default BlogPage; 