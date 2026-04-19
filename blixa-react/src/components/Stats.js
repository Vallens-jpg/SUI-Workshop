import React from 'react';
import './Stats.css';
import { CounterAnimation } from './ScrollAnimations';
import { ZoomInScroll } from './ScrollAnimations';

const Stats = () => {
  const stats = [
    { number: 510, suffix: 'B', prefix: '$', label: 'Pasar Global 2025' },
    { number: 100, suffix: '%', prefix: '', label: 'Privasi Terjamin' },
    { number: 0, suffix: '', prefix: '', label: 'Jejak Digital' }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <ZoomInScroll key={index}>
              <div className="stat-item">
                <div className="stat-number">
                  <CounterAnimation 
                    end={stat.number} 
                    duration={2000}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </ZoomInScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
