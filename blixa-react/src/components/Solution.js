import React from 'react';
import './Solution.css';
import AnimatedBeams from './AnimatedBeams';
import { FadeInUp } from './TextAnimations';
import InfiniteCarousel from './InfiniteCarousel';
import { LockIcon, LightningIcon, NoTraceIcon, BlockchainIcon, VerifyIcon, SmartContractIcon } from './Web3Icons';

const Solution = () => {
  const features = [
    {
      icon: <LockIcon size={64} />,
      title: 'Enkripsi End-to-End',
      description: 'Dokumen dienkripsi dari perangkat pengguna dan hanya bisa dibuka oleh mesin cetak sah dengan kunci unik.'
    },
    {
      icon: <LightningIcon size={64} />,
      title: 'Akses Sekali Pakai',
      description: 'File hanya dapat diakses selama sesi cetak dan terhapus otomatis setelahnya.'
    },
    {
      icon: <NoTraceIcon size={64} />,
      title: 'Tanpa Jejak Digital',
      description: 'Tidak ada file yang tertinggal di komputer operator, mencegah potensi pencurian data di masa depan.'
    },
    {
      icon: <BlockchainIcon size={64} />,
      title: 'Blockchain Sui',
      description: 'Memanfaatkan teknologi blockchain Sui untuk keamanan dan transparansi maksimal.'
    },
    {
      icon: <VerifyIcon size={64} />,
      title: 'Verifikasi Aman',
      description: 'Setiap transaksi cetak diverifikasi dan dicatat secara aman di blockchain.'
    },
    {
      icon: <SmartContractIcon size={64} />,
      title: 'Smart Contract',
      description: 'Otomasi proses dengan smart contract untuk keamanan dan efisiensi maksimal.'
    }
  ];

  return (
    <section id="solution" className="section solution-section">
      <AnimatedBeams />
      <div className="container">
        <FadeInUp>
          <span className="section-badge">Solusi BLIXA</span>
        </FadeInUp>
        
        <FadeInUp delay={100}>
          <h2 className="section-title">Send → Print → Delete</h2>
        </FadeInUp>
        
        <FadeInUp delay={200}>
          <p className="section-subtitle">Tiga pilar keamanan untuk dokumen Anda</p>
        </FadeInUp>
        
        <InfiniteCarousel items={features} />
      </div>
    </section>
  );
};

export default Solution;
