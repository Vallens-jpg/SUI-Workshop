import React from 'react';
import './Market.css';
import { FadeInUp } from './TextAnimations';
import { ZoomInScroll } from './ScrollAnimations';

const Market = () => {
  const countries = [
    { 
      name: 'Indonesia',
      flag: '🇮🇩'
    },
    { 
      name: 'India',
      flag: '🇮🇳'
    },
    { 
      name: 'Thailand',
      flag: '🇹🇭'
    },
    { 
      name: 'Vietnam',
      flag: '🇻🇳'
    },
    { 
      name: 'Filipina',
      flag: '🇵🇭'
    }
  ];

  return (
    <section className="section market-section">
      <div className="container">
        <div className="market-content">
          <FadeInUp>
            <h2>Potensi Pasar Global</h2>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="market-stat">
              Pasar percetakan komersial global diperkirakan mencapai lebih dari{' '}
              <strong>$510 Miliar</strong> pada tahun 2025
            </p>
          </FadeInUp>
          
          <ZoomInScroll>
            <div className="target-markets">
              <h3>Target Ekspansi Utama:</h3>
              <div className="market-flags">
                {countries.map((country, index) => (
                  <div key={index} className="market-flag-card">
                    <div className="flag-icon">{country.flag}</div>
                    <span className="country-name">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ZoomInScroll>
        </div>
      </div>
    </section>
  );
};

export default Market;
