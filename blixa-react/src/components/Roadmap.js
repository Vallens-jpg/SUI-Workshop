import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const phases = [
    {
      phase: 'FASE 1',
      title: 'Pondasi Protokol',
      items: [
        'Peluncuran protokol inti',
        'SDK untuk agen cetak',
        'Uji coba (pilot) di area kampus'
      ]
    },
    {
      phase: 'FASE 2',
      title: 'Ekspansi Sektor',
      items: [
        'Integrasi dengan klinik & medis',
        'Fitur audit korporat',
        'Kemitraan jaringan cetak'
      ]
    },
    {
      phase: 'FASE 3',
      title: 'Standarisasi Global',
      items: [
        'Integrasi dengan produsen printer',
        'Ekspansi pasar global',
        'Standar protokol industri'
      ]
    }
  ];

  return (
    <section id="roadmap" className="section roadmap-section">
      <div className="container">
        <span className="section-badge">Roadmap</span>
        <h2 className="section-title">Perjalanan Menuju Standar Global</h2>
        
        <div className="roadmap-timeline">
          {phases.map((item, index) => (
            <div key={index} className="roadmap-item">
              <div className="roadmap-phase">{item.phase}</div>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
