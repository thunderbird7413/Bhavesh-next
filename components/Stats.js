"use client"
import React, { useRef, useEffect, useState } from 'react';
import './Stats.css';

const stats = [
  { value: '10+', label: 'Client countries' },
  { value: '50+', label: 'Stone variety' },
  { value: '100+', label: 'Customers worldwide' },
  { value: '20+', label: 'Year of service' },
];

const Stats = () => {
  const statRefs = useRef([]);
  const [visible, setVisible] = useState(Array(stats.length).fill(false));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setVisible((vis) => {
              if (vis[idx]) return vis;
              const updated = [...vis];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    statRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <h2 className="stats-heading">Our Global Impact</h2>
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div
            className={`stat-card${visible[idx] ? ' stat-visible' : ''}`}
            key={idx}
            ref={el => (statRefs.current[idx] = el)}
            data-idx={idx}
          >
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats; 