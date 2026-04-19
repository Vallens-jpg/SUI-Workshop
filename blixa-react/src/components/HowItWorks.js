import React from 'react';
import './HowItWorks.css';
import { FadeInUp } from './TextAnimations';
import { RevealOnScroll } from './ScrollAnimations';
import { DocumentIcon, VerifyIcon, PrinterIcon, BlockchainIcon, ShieldIcon, NetworkIcon } from './Web3Icons';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <DocumentIcon size={48} />,
      title: 'Upload',
      description: 'Pengguna mengunggah dokumen ke Secure Print Vault dan mengatur parameter cetak.'
    },
    {
      number: '02',
      icon: <VerifyIcon size={48} />,
      title: 'Scan QR',
      description: 'Pengguna mendapatkan kode QR unik berisi instruksi cetak terenkripsi.'
    },
    {
      number: '03',
      icon: <PrinterIcon size={48} />,
      title: 'Print',
      description: 'Operator memindai QR, dokumen dicetak otomatis, dan akses file dimusnahkan secara permanen.'
    }
  ];

  const blockchainFeatures = [
    {
      icon: <BlockchainIcon size={40} />,
      title: 'Dokumen sebagai Objek',
      description: 'Setiap dokumen memiliki siklus hidup yang tercatat: Dibuat → Diotorisasi → Dicetak → Dihancurkan.'
    },
    {
      icon: <ShieldIcon size={40} />,
      title: 'Aturan Kriptografis',
      description: 'Batas cetak dan waktu kedaluwarsa ditegakkan oleh smart contract, bukan kebijakan manusia.'
    },
    {
      icon: <NetworkIcon size={40} />,
      title: 'Auditability On-Chain',
      description: 'Menyediakan bukti permanen bahwa pencetakan telah terjadi sesuai aturan tanpa mengungkap isi dokumen asli.'
    }
  ];

  return (
    <section id="how-it-works" className="section how-section">
      <div className="container">
        <FadeInUp>
          <span className="section-badge">Cara Kerja</span>
        </FadeInUp>
        
        <FadeInUp delay={100}>
          <h2 className="section-title">Tiga Langkah Mudah</h2>
        </FadeInUp>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <RevealOnScroll direction="up" delay={index * 100}>
                <div className="step-card">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </RevealOnScroll>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>

        <FadeInUp delay={300}>
          <div className="blockchain-info">
            <h3>Peran Blockchain Sui</h3>
            <div className="blockchain-features">
              {blockchainFeatures.map((feature, index) => (
                <RevealOnScroll key={index} direction="up" delay={index * 100}>
                  <div className="blockchain-item">
                    <div className="blockchain-icon">{feature.icon}</div>
                    <div className="blockchain-content">
                      <strong>{feature.title}:</strong> {feature.description}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default HowItWorks;
