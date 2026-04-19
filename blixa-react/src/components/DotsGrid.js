import React from 'react';
import './DotsGrid.css';

const DotsGrid = () => {
  return (
    <div className="dots-grid">
      <div className="dots-container">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              animationDelay: `${Math.random() * 3}s`,
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DotsGrid;
