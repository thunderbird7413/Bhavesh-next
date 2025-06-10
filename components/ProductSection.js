"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './ProductSection.css';

const ProductSection = () => {
  const categories = [
    {
      id: 1,
      title: 'Premium Granite',
      image: 'https://images.unsplash.com/photo-1684119698853-d43577b11f41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Exclusive collection of premium quality granite',
      link: '/products#premium-granite'
    },
    {
      id: 2,
      title: 'North Indian Granite',
      image: 'https://images.unsplash.com/photo-1632198761400-00497310f848?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Finest granite from North Indian quarries',
      link: '/products#north-indian-granite'
    },
    {
      id: 3,
      title: 'Exotic Granite',
      image: 'https://images.unsplash.com/photo-1649602518046-332ac0ea51f8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Unique and rare granite varieties',
      link: '/products#exotic-granite'
    },
    {
      id: 4,
      title: 'Black Granite',
      image: 'https://images.unsplash.com/photo-1653163061406-730a0df077eb?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Premium black granite collection',
      link: '/products#black-granite'
    }
  ];

  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Our Product Categories</h2>
        <p>Discover our extensive range of premium natural stone products</p>
      </div>
      
      <div className="product-grid">
        {categories.map((category) => (
          <div key={category.id} className="product-card">
            <div className="image-container">
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={category.id === 1}
              />
              <div className="overlay">
                <Link href={category.link} className="view-more">
                  View Collection 
                </Link>
              </div>
            </div>
            <div className="product-info">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection; 