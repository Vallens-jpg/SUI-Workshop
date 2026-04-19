import React from 'react';
import './CTA.css';
import RippleEffect from './RippleEffect';

const CTA = () => {
  return (
    <section className="section cta-section">
      <RippleEffect />
      <div className="container">
        <div className="cta-content">
          <h2>Siap Mencetak dengan Aman?</h2>
          <p>Bergabunglah dengan revolusi keamanan dokumen berbasis blockchain</p>
          <button className="btn-primary btn-lg">Mulai Sekarang</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
