import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    app: [
      { name: 'Akses App', href: '#' },
      { name: 'Dokumentasi', href: '#' },
      { name: 'API', href: '#' }
    ],
    resources: [
      { name: 'Whitepaper', href: '#' },
      { name: 'Brand Kit', href: '#' },
      { name: 'Terms of Use', href: '#' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>BLIXA</span>
            </div>
            <p>Platform cetak aman on-chain pertama di dunia</p>
          </div>
          
          <div className="footer-col">
            <h4>App</h4>
            {footerLinks.app.map((link, index) => (
              <a key={index} href={link.href}>{link.name}</a>
            ))}
          </div>
          
          <div className="footer-col">
            <h4>Resources</h4>
            {footerLinks.resources.map((link, index) => (
              <a key={index} href={link.href}>{link.name}</a>
            ))}
          </div>
          
          <div className="footer-col">
            <h4>Bantuan</h4>
            <p>
              Hubungi kami:<br />
              <a href="mailto:hello@blixa.io">hello@blixa.io</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 BLIXA. Powered by Sui Blockchain.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
