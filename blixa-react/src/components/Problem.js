import React from 'react';
import './Problem.css';
import DotsGrid from './DotsGrid';
import { FadeInUp, SlideIn } from './TextAnimations';
import { RevealOnScroll } from './ScrollAnimations';
import { GlowCard } from './InteractiveCard';
import { GlobeIcon } from './Web3Icons';

const Problem = () => {
  const problems = [
    {
      flag: '🇮🇩',
      country: 'Indonesia',
      description: 'Mengirim file via WhatsApp atau USB ke operator toko pinggir jalan sudah menjadi hal lumrah.'
    },
    {
      flag: '🇮🇳',
      country: 'India',
      description: 'Ribuan dokumen sensitif mengalir melalui toko "Xerox" lokal setiap hari tanpa keamanan.'
    },
    {
      flag: '🇹🇭',
      country: 'Thailand',
      description: 'Dokumen seperti paspor, visa, dan kontrak dicetak di kios publik dengan infrastruktur IT yang rentan.'
    }
  ];

  return (
    <section id="vision" className="section problem-section">
      <DotsGrid />
      <div className="container">
        <FadeInUp>
          <span className="section-badge">Masalah Global</span>
        </FadeInUp>
        
        <FadeInUp delay={100}>
          <h2 className="section-title">
            Kerentanan Sistemik pada<br />Infrastruktur Cetak Publik
          </h2>
        </FadeInUp>
        
        <FadeInUp delay={200}>
          <p className="section-subtitle">Dokumen sensitif Anda berisiko di tangan yang salah</p>
        </FadeInUp>
        
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <RevealOnScroll key={index} direction="up" delay={index * 100}>
              <GlowCard>
                <div className="problem-card">
                  <div className="problem-icon-wrapper">
                    <GlobeIcon size={48} />
                    <span className="problem-flag">{problem.flag}</span>
                  </div>
                  <h3>{problem.country}</h3>
                  <p>{problem.description}</p>
                </div>
              </GlowCard>
            </RevealOnScroll>
          ))}
        </div>

        <SlideIn direction="up" delay={400}>
          <div className="danger-alert">
            <h3>⚠️ Normalisasi Bahaya</h3>
            <p>
              Dokumen rahasia (KTP, Ijazah, Kontrak) sering kali tertinggal di folder 'Downloads' 
              publik tanpa jaminan penghapusan, menciptakan jejak digital permanen yang rentan dicuri.
            </p>
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default Problem;
