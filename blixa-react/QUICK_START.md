# 🚀 Quick Start Guide - BLIXA React

## Cara Tercepat Menjalankan Project

### Windows Users (Paling Mudah!)

1. **Double-click** `install.bat` untuk install dependencies
2. **Double-click** `start.bat` untuk menjalankan app
3. Browser akan otomatis membuka di `http://localhost:3000`

### Manual (Semua Platform)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build untuk production
npm run build
```

## 📋 Checklist Sebelum Mulai

- [ ] Node.js sudah terinstall (download di nodejs.org)
- [ ] npm sudah terinstall (biasanya sudah include dengan Node.js)
- [ ] Terminal/Command Prompt bisa diakses
- [ ] Port 3000 tidak digunakan aplikasi lain

## 🎯 Struktur Component

```
App.js
├── Navbar          # Navigation bar dengan smooth scroll
├── Hero            # Landing section
├── Stats           # $510B, 100%, 0 stats
├── Problem         # Indonesia, India, Thailand issues
├── Solution        # 3 pilar: Enkripsi, Akses, Jejak
├── HowItWorks      # Upload → Scan → Print
├── Benefits        # User & Provider benefits
├── Pricing         # Basic, Pro, Enterprise
├── Roadmap         # Fase 1, 2, 3
├── Market          # Global market potential
├── CTA             # Call to action
└── Footer          # Links & contact
```

## 🎨 Customization Cepat

### Ubah Warna Brand
File: `src/App.css`
```css
:root {
  --primary-color: #00D9C0;  /* Ubah ini */
}
```

### Ubah Harga
File: `src/components/Pricing.js`
```javascript
const plans = [
  { name: 'Basic', price: 'Rp50.000', ... },
  // Edit di sini
]
```

### Ubah Statistik
File: `src/components/Stats.js`
```javascript
const stats = [
  { number: '$510B', label: 'Pasar Global 2025' },
  // Edit di sini
]
```

## 🔧 Commands Penting

```bash
npm start          # Run development server
npm run build      # Build untuk production
npm test           # Run tests
npm run eject      # Eject dari create-react-app (HATI-HATI!)
```

## 📱 Testing Responsive

- Desktop: Buka di browser normal
- Mobile: Buka DevTools (F12) → Toggle device toolbar
- Atau akses dari HP di network yang sama: `http://[IP-KOMPUTER]:3000`

## 🐛 Troubleshooting Cepat

### "npm not found"
→ Install Node.js dari nodejs.org

### "Port 3000 already in use"
→ Tutup aplikasi yang menggunakan port 3000
→ Atau ubah port di package.json

### "Scripts disabled" (PowerShell)
→ Buka PowerShell as Admin:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Build error
→ Hapus node_modules dan install ulang:
```bash
rm -rf node_modules
npm install
```

## 📦 Deploy ke Production

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. `npm run build`
2. Upload folder `build/` ke Netlify

### Manual Hosting
1. `npm run build`
2. Upload isi folder `build/` ke web server

## 💡 Tips

- Gunakan `Ctrl+C` untuk stop development server
- Hot reload otomatis saat edit file
- Check console browser (F12) untuk error
- Gunakan React DevTools extension untuk debugging

## 📚 Resources

- React Docs: https://react.dev
- Create React App: https://create-react-app.dev
- CSS Tricks: https://css-tricks.com

---

**Happy Coding! 🎉**
