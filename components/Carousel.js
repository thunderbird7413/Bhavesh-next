'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Carousel.css';

const slides = [ 
  {
    image: '/images/SS_3.png',
    text: 'Elevate Spaces with Stone',
  },
  {
    image: '/images/ss_1.jpeg',
    text: 'Crafting Quality, Exporting Trust',
  },
  {
    image: '/images/SS_2.png',
    text: 'From Earth to Excellence',
  },
  {
    image: '/images/SS_4.png',
    text: 'Established in 1992, MG Overseas (Maruti Group) is a renowned name in the stone industry.',
  },
  {
    image: '/images/SS_5.jpeg',
    text: 'Design. Durability. Delivered.',
  },
];
console.log(slides[0].text)

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel">
      {slides.map((slide, idx) => (
        <div
          className={`carousel-slide${idx === current ? ' active' : ''}`}
          key={idx}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {idx === current && (
            <div className="carousel-overlay">
              <span className="carousel-text">{slide.text}</span>
            </div>
          )}
        </div>
      ))}
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 