# BLIXA React App

Platform cetak aman on-chain pertama di dunia yang menggunakan teknologi blockchain Sui - versi React.

## Instalasi

```bash
npm install
```

## Menjalankan Development Server

```bash
npm start
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## Build untuk Production

```bash
npm run build
```

Build akan tersimpan di folder `build/`

## Struktur Project

```
blixa-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js & Navbar.css
│   │   ├── Hero.js & Hero.css
│   │   ├── Stats.js & Stats.css
│   │   ├── Problem.js & Problem.css
│   │   ├── Solution.js & Solution.css
│   │   ├── HowItWorks.js & HowItWorks.css
│   │   ├── Benefits.js & Benefits.css
│   │   ├── Pricing.js & Pricing.css
│   │   ├── Roadmap.js & Roadmap.css
│   │   ├── Market.js & Market.css
│   │   ├── CTA.js & CTA.css
│   │   └── Footer.js & Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Fitur

- ⚛️ React 18
- 🎨 CSS Modules per component
- 📱 Fully Responsive
- 🎭 Smooth Animations
- 🎯 Component-based Architecture
- 🚀 Optimized Performance

## Komponen Utama

1. **Navbar** - Navigation dengan smooth scroll
2. **Hero** - Landing section dengan CTA
3. **Stats** - Statistik penting
4. **Problem** - Kerentanan sistemik global
5. **Solution** - Tiga pilar keamanan BLIXA
6. **HowItWorks** - Proses 3 langkah
7. **Benefits** - Manfaat untuk stakeholders
8. **Pricing** - Tiga tier harga
9. **Roadmap** - Fase pengembangan
10. **Market** - Potensi pasar global
11. **CTA** - Call-to-action
12. **Footer** - Links dan kontak

## Customization

### Warna
Edit variabel CSS di `src/App.css`:
```css
:root {
  --primary-color: #00D9C0;
  --secondary-color: #0A4A4A;
  --dark-bg: #0A1F1F;
  --darker-bg: #051414;
}
```

### Konten
Edit data di masing-masing component file (`.js`)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Tech Stack

- React 18.2.0
- React DOM 18.2.0
- React Scripts 5.0.1

## Credits

Design inspired by: [Cetus.zone](https://www.cetus.zone/)  
Built for: BLIXA - Sui-Powered Secure Print Protocol
