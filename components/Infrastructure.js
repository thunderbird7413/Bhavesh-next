"use client"
import React from 'react';
import './Infrastructure.css';

const Infrastructure = () => {
  const manufacturingImages = [
    {
      url: '/images/1.jpg',
      title: 'Block Cutting Unit'
    },
    {
      url: '/images/2.jpg',
      title: 'Gentry Crane'
    },
    {
      url: '/images/3.jpg',
      title: 'Block Site'
    },
    {
      url: '/images/4.jpg',
      title: 'Line Polish'
    },
    {
      url: '/images/5.jpg',
      title: 'Stock Yard'
    },
    {
      url: '/images/6.jpg',
      title: 'Plant Site'
    }
  ];

  const stockSiteImages = [
    {
      url: '/images/7.jpg',
      title: 'Main Stockyard'
    },
    {
      url: '/images/8.jpg',
      title: 'Warehouse'
    },
    {
      url: '/images/9.jpg',
      title: 'Hand Polish'
    },
    {
      url: '/images/10.jpg',
      title: 'Stock Yard'
    },
    {
      url: '/images/11.jpeg',
      title: 'Granite Godown'
    },
    {
      url: '/images/12.jpg',
      title: 'Storage Facility'
    }
  ];

  return (
    <div className="infrastructure-page">
      <div className="infrastructure-hero">
        <div className="infrastructure-hero-overlay"></div>
        <h1 className="infrastructure-hero-title">State-of-the-Art Manufacturing Infrastructure</h1>
      </div>

      <section className="infrastructure-section manufacturing-units">
        <div className="section-header">
          <h2>Manufacturing Units</h2>
          <p className="section-description">
            Our state-of-the-art manufacturing facilities span over 50,000 square meters, equipped with cutting-edge technology and modern machinery. Located in the heart of Rajasthan's granite hub, our facility is designed to handle large-scale production while maintaining the highest standards of quality and efficiency.
          </p>
        </div>

        <div className="image-gallery">
          {manufacturingImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="facility-features">
          <div className="feature-card">
            <h3>Advanced Technology</h3>
            <ul>
              <li>Multi-blade Water Cutting</li>
              <li>Multi Blade Gang Saw</li>
              <li>Water jet cutting systems</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Quality Control</h3>
            <ul>
              <li>In-house testing laboratory</li>
              <li>Advanced quality control systems</li>
              <li>ISO 9001:2015 certified processes</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Production Capacity</h3>
            <ul>
              <li>Monthly capacity: 50,000 sq.m</li>
              <li>Custom fabrication capabilities</li>
              <li>Multiple finish options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="infrastructure-section stock-site">
        <div className="section-header">
          <h2>Stock Site</h2>
          <p className="section-description">
            Our extensive stock site ensures we can meet your requirements promptly with a wide range of granite varieties. With over 100,000 square meters of storage space, we maintain a comprehensive inventory of premium quality granite slabs and tiles.
          </p>
        </div>

        <div className="image-gallery">
          {stockSiteImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="image-container">
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stock-features">
          <div className="feature-card">
            <h3>Inventory Management</h3>
            <ul>
              <li>Real-time stock tracking</li>
              <li>Automated inventory system</li>
              <li>Quality grading system</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Storage Facilities</h3>
            <ul>
              <li>Climate-controlled storage</li>
              <li>Dedicated loading areas</li>
              <li>Secure warehousing</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>Logistics Support</h3>
            <ul>
              <li>In-house transportation</li>
              <li>International shipping</li>
              <li>Custom packaging solutions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure; 