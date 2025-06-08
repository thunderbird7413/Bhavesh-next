import React, { useEffect } from 'react';
import './Products.css';

const Products = () => {
  const blackGraniteProducts = [
    { name: 'Absolute Black', image: '/images/Black Granite/Absolute Black.jpg' },
    { name: 'Ash Black', image: '/images/Black Granite/Ash Black.jpg' },
    { name: 'Bengal Black', image: '/images/Black Granite/Bengal Black.jpg' },
    { name: 'Black Forest', image: '/images/Black Granite/Black Forest.jpg' },
    { name: 'Black Galaxy', image: '/images/Black Granite/Black Galaxy.jpg' },
    { name: 'Black G20', image: '/images/Black Granite/Black G 20.jpg' },
    { name: 'Black Pearl', image: '/images/Black Granite/Black Pearl.jpg' },
    { name: 'Black Wave', image: '/images/Black Granite/Black Wave.jpg' },
    { name: 'Coin Black', image: '/images/Black Granite/Coin Black.jpg' },
    { name: 'Fish Black', image: '/images/Black Granite/Fish Black.jpg' },
  ];

  const exoticGraniteProducts = [
    { name: 'Alaska Gold', image: '/images/Exotic Granite/Alaska Gold.jpg' },
    { name: 'Alaska White', image: '/images/Exotic Granite/Alaska White.jpg' },
    { name: 'Blue Dunes', image: '/images/Exotic Granite/Blue Dunes.jpg' },
    { name: 'Blue Flower', image: '/images/Exotic Granite/Blue Flower.jpg' },
  ];

  const northIndianGraniteProducts = [
    { name: 'Cadbury Urban Classic', image: '/images/North Indian Granite/Cadbury Urban Classic.jpg' },
    { name: 'Cheema Pink', image: '/images/North Indian Granite/Cheema Pink.jpg' },
    { name: 'Copper Silk', image: '/images/North Indian Granite/Copper Silk.jpg' },
    { name: 'Cotton White', image: '/images/North Indian Granite/Cotton White.jpg' },
    { name: 'Crystal Blue', image: '/images/North Indian Granite/Crystal Blue.jpg' },
    { name: 'Crystal Brown', image: '/images/North Indian Granite/Crystal Brown.jpg' },
    { name: 'Crystal Yellow', image: '/images/North Indian Granite/Crystal Yellow.jpg' },
    { name: 'Dessert Brown', image: '/images/North Indian Granite/Dessert Brown.jpg' },
    { name: 'Dessert Gold', image: '/images/North Indian Granite/Dessert Gold.jpg' },
    { name: 'P White', image: '/images/North Indian Granite/P White.jpg' },
    { name: 'Rosy Pink', image: '/images/North Indian Granite/Rosy Pink.jpg' },
  ];

  const premiumGraniteProducts = [
    { name: 'Apple Green', image: '/images/Premium Granite/Apple Green.jpg' },
    { name: 'Cadbury Brown', image: '/images/Premium Granite/Cadbury Brown.jpg' },
    { name: 'Choko Brown', image: '/images/Premium Granite/Choko Brown.jpg' },
    { name: 'Dessert Green', image: '/images/Premium Granite/Dessert Green.jpg' },
    { name: 'Exotic Brown', image: '/images/Premium Granite/Exotic Brown.jpg' },
    { name: 'Khalda Red', image: '/images/Premium Granite/Khalda Red.jpg' },
    { name: 'Koppal Red', image: '/images/Premium Granite/Koppal Red.jpg' },
    { name: 'Lakha Red', image: '/images/Premium Granite/Lakha Red.jpg' },
    { name: 'Steel Grey', image: '/images/Premium Granite/Steel Grey.jpg' },
    { name: 'Tan Brown', image: '/images/Premium Granite/Tan Brown.jpg' },
    { name: 'Z Brown', image: '/images/Premium Granite/Z Brown.jpg' },
  ];

  const ProductSection = ({ title, products, id }) => (
    <section id={id} className="product-section-1">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-underline"></div>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card-1">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay-1">
                <h3>{product.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const elementId = hash.substring(1);
      // Find the element
      const element = document.getElementById(elementId);
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="products-page">
      <div className="products-hero">
        <div className="hero-overlay"></div>
        <h1>Our Premium Granite Collection</h1>
        <p>Discover our extensive range of high-quality granite products</p>
      </div>

      <ProductSection title="Black Granite" products={blackGraniteProducts} id="black-granite" />
      <ProductSection title="Exotic Granite" products={exoticGraniteProducts} id="exotic-granite" />
      <ProductSection title="North Indian Granite" products={northIndianGraniteProducts} id="north-indian-granite" />
      <ProductSection title="Premium Granite" products={premiumGraniteProducts} id="premium-granite" />
    </div>
  );
};

export default Products; 