import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="logo-text">BLIXA</span>
        </div>
        <div className="nav-links">
          <a onClick={() => scrollToSection('vision')}>Visi</a>
          <a onClick={() => scrollToSection('solution')}>Solusi</a>
          <a onClick={() => scrollToSection('how-it-works')}>Cara Kerja</a>
          <a onClick={() => scrollToSection('pricing')}>Harga</a>
          <a onClick={() => scrollToSection('roadmap')}>Roadmap</a>
          <button className="btn-primary">Akses App</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
