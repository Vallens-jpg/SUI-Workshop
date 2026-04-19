import React from 'react';
import './InfiniteCarousel.css';

const InfiniteCarousel = ({ items }) => {
  // Duplicate items untuk seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="infinite-carousel">
      <div className="infinite-carousel-track">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="infinite-carousel-card">
            <div className="carousel-card-content">
              {item.icon && <div className="carousel-card-icon">{item.icon}</div>}
              {item.title && <h3>{item.title}</h3>}
              {item.description && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
