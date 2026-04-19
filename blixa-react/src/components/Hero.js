import React from 'react';
import './Hero.css';
import AnimatedBackground from './AnimatedBackground';
import DotsGrid from './DotsGrid';
import AnimatedBeams from './AnimatedBeams';
import FloatingShapes from './FloatingShapes';
import { FadeInUp, GradientText } from './TextAnimations';
import { ScaleIn } from './TextAnimations';

const Hero = () => {
  return (
    <section className="hero">
      <AnimatedBackground />
      <DotsGrid />
      <AnimatedBeams />
      <FloatingShapes />
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <FadeInUp delay={0}>
            <span className="badge">
              Powered by Sui
            </span>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <h1 className="hero-title">
              <GradientText>BLIXA</GradientText>, Platform Cetak Aman<br />
              On-Chain Pertama di Dunia
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={400}>
            <p className="hero-subtitle">
              Cetak dokumen dengan aman, di mana saja.<br />
              Teknologi blockchain Sui untuk privasi dokumen maksimal.
            </p>
          </FadeInUp>
          
          <ScaleIn delay={600}>
            <div className="hero-buttons">
              <button className="btn-primary btn-lg">Akses App</button>
              <button className="btn-secondary btn-lg">Dokumentasi</button>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
