'use client';
import React from 'react';
import Script from 'next/script';

const StructuredData = ({ products }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MG Overseas',
    url: 'https://www.mgoverseasgroup.com',
    logo: 'https://www.mgoverseasgroup.com/images/logo.png',
    description: 'Leading supplier of premium granite and natural stone products in India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your State',
      postalCode: 'Your Postal Code',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'customer service',
      email: 'info@mgoverseasgroup.com'
    },
    sameAs: [
      'https://www.facebook.com/mgoverseas',
      'https://www.instagram.com/mgoverseas',
      'https://www.linkedin.com/company/mgoverseas'
    ]
  };

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.image,
        sku: product.sku,
        brand: {
          '@type': 'Brand',
          name: 'MG Overseas'
        },
        category: product.category,
        material: 'Granite',
        color: product.color,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          price: product.price,
          seller: {
            '@type': 'Organization',
            name: 'MG Overseas'
          }
        }
      }
    }))
  };

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </>
  );
};

export default StructuredData; 