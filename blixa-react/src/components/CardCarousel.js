import React, { useState, useEffect } from 'react';
import './CardCarousel.css';

const CardCarousel = ({ items, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoPlay && !isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length, isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="card-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={goToPrevious}>
          ‹
        </button>

        <div className="carousel-track">
          {items.map((item, index) => {
            let position = 'next';
            if (index === currentIndex) position = 'active';
            else if (
              index === (currentIndex - 1 + items.length) % items.length
            )
              position = 'prev';

            return (
              <div
                key={index}
                className={`carousel-card ${position}`}
                onClick={() => goToSlide(index)}
              >
                <div className="card-content">
                  {item.icon && <div className="card-icon">{item.icon}</div>}
                  {item.title && <h3>{item.title}</h3>}
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={goToNext}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
