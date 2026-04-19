import React from 'react';
import './Benefits.css';
import { FadeInUp, SlideIn } from './TextAnimations';
import { HoverLiftCard } from './InteractiveCard';
import { ShieldIcon, WalletIcon } from './Web3Icons';

const Benefits = () => {
  const benefits = [
    {
      icon: <ShieldIcon size={56} />,
      title: 'Bagi Pengguna',
      items: [
        'Privasi mutlak untuk mencetak rekam medis, KTP, atau dokumen hukum',
        'Tanpa eksposur data karena dokumen dialirkan langsung ke printer',
        'Kontrol penuh atas dokumen sensitif Anda'
      ]
    },
    {
      icon: <WalletIcon size={56} />,
      title: 'Bagi Penyedia Jasa Cetak',
      items: [
        'Zero Liability: Mengurangi risiko hukum terkait penyimpanan data pelanggan',
        'Efisiensi: Alur kerja otomatis yang lebih cepat dibanding metode manual',
        'Kepercayaan: Menarik pelanggan yang sadar akan privasi data'
      ]
    }
  ];

  return (
    <section className="section benefits-section">
      <div className="container">
        <FadeInUp>
          <span className="section-badge">Manfaat</span>
        </FadeInUp>
        
        <FadeInUp delay={100}>
          <h2 className="section-title">Keuntungan untuk Semua Pihak</h2>
        </FadeInUp>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <SlideIn 
              key={index} 
              direction={index === 0 ? 'left' : 'right'} 
              delay={200 + (index * 100)}
            >
              <HoverLiftCard>
                <div className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <ul>
                    {benefit.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </HoverLiftCard>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
