import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Rp50.000',
      period: '/bulan',
      features: [
        'Enkripsi end-to-end',
        'Akses sekali pakai',
        '50 dokumen/bulan',
        'Support email'
      ],
      featured: false
    },
    {
      name: 'Pro',
      price: 'Rp150.000',
      period: '/bulan',
      features: [
        'Semua fitur Basic',
        '200 dokumen/bulan',
        'Audit trail lengkap',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Rp5.000.000',
      period: '/tahun',
      features: [
        'Semua fitur Pro',
        'Unlimited dokumen',
        'Custom integration',
        'Dedicated support',
        'SLA guarantee'
      ],
      featured: false
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <span className="section-badge">Harga</span>
        <h2 className="section-title">Pilih Paket yang Sesuai</h2>
        <p className="section-subtitle">Model Bisnis Hybrid B2B2C</p>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="popular-badge">Populer</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}<span>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={plan.featured ? 'btn-primary' : 'btn-outline'}>
                {plan.name === 'Enterprise' ? 'Hubungi Sales' : `Pilih ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        <div className="transaction-fee">
          <p>
            <strong>Biaya Transaksi:</strong> Micro-fee sebesar Rp500 - Rp1.500 per dokumen 
            untuk tanda terima on-chain atau ZK proof.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
