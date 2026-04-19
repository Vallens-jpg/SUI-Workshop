import React from 'react';

// Lock/Security Icon
export const LockIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm3 8H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z" fill={color}/>
    <circle cx="12" cy="16" r="2" fill={color}/>
  </svg>
);

// Lightning/Speed Icon
export const LightningIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Shield Icon
export const ShieldIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 18c-3.45-.89-6-4.54-6-8.09V6.3l6-2.25 6 2.25v5.61c0 3.55-2.55 7.2-6 8.09z" fill={color}/>
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Blockchain/Chain Icon
export const BlockchainIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="14" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="3" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="14" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="10" y1="6.5" x2="14" y2="6.5" stroke={color} strokeWidth="2"/>
    <line x1="6.5" y1="10" x2="6.5" y2="14" stroke={color} strokeWidth="2"/>
    <line x1="17.5" y1="10" x2="17.5" y2="14" stroke={color} strokeWidth="2"/>
    <line x1="10" y1="17.5" x2="14" y2="17.5" stroke={color} strokeWidth="2"/>
  </svg>
);

// No Trace/Delete Icon
export const NoTraceIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="8" y1="8" x2="16" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="8" x2="8" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Smart Contract/Gear Icon
export const SmartContractIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 12l-8-4M12 12l8-4M12 12v9" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill={color}/>
  </svg>
);

// Wallet Icon
export const WalletIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="14" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M3 10h18" stroke={color} strokeWidth="2"/>
    <circle cx="17" cy="14" r="1.5" fill={color}/>
    <path d="M7 6V5a2 2 0 012-2h6a2 2 0 012 2v1" stroke={color} strokeWidth="2"/>
  </svg>
);

// Network/Nodes Icon
export const NetworkIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill={color}/>
    <circle cx="6" cy="6" r="2" fill={color}/>
    <circle cx="18" cy="6" r="2" fill={color}/>
    <circle cx="6" cy="18" r="2" fill={color}/>
    <circle cx="18" cy="18" r="2" fill={color}/>
    <line x1="12" y1="12" x2="6" y2="6" stroke={color} strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="18" y2="6" stroke={color} strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="6" y2="18" stroke={color} strokeWidth="1.5"/>
    <line x1="12" y1="12" x2="18" y2="18" stroke={color} strokeWidth="1.5"/>
  </svg>
);

// Verify/Check Icon
export const VerifyIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Document Icon
export const DocumentIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Globe/Global Icon
export const GlobeIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke={color} strokeWidth="2"/>
  </svg>
);

// Printer Icon
export const PrinterIcon = ({ size = 64, color = '#00D9C0' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke={color} strokeWidth="2" fill="none"/>
    <rect x="6" y="14" width="12" height="8" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="17" cy="11" r="1" fill={color}/>
  </svg>
);

export default {
  LockIcon,
  LightningIcon,
  ShieldIcon,
  BlockchainIcon,
  NoTraceIcon,
  SmartContractIcon,
  WalletIcon,
  NetworkIcon,
  VerifyIcon,
  DocumentIcon,
  GlobeIcon,
  PrinterIcon
};
