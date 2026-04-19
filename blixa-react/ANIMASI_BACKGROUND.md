# 🎨 Animasi Background - BLIXA React

## Komponen Animasi yang Ditambahkan

Website BLIXA sekarang dilengkapi dengan berbagai animasi background yang menarik dan interaktif, terinspirasi dari React Bits.

### 1. **Animated Particles** 🌟
**File:** `AnimatedBackground.js`
- Partikel bergerak yang saling terhubung dengan garis
- Efek koneksi dinamis berdasarkan jarak antar partikel
- Digunakan di: **Hero Section**

**Fitur:**
- 80 partikel yang bergerak secara acak
- Garis koneksi muncul ketika partikel berdekatan
- Responsif terhadap ukuran layar

### 2. **Dots Grid** ⚫
**File:** `DotsGrid.js`
- Grid titik-titik yang berpulsa dengan animasi
- Efek pulse yang smooth dan menenangkan
- Digunakan di: **Problem Section**

**Fitur:**
- 100 titik tersebar merata
- Animasi pulse dengan delay acak
- Opacity dan scale berubah secara periodik

### 3. **Animated Beams** ⚡
**File:** `AnimatedBeams.js`
- Sinar cahaya vertikal yang bergerak dari atas ke bawah
- Efek futuristik dan modern
- Digunakan di: **Solution Section**

**Fitur:**
- 5 beam dengan timing berbeda
- Gradient opacity untuk efek smooth
- Animasi loop infinite

### 4. **Floating Shapes** 🔷
**File:** `FloatingShapes.js`
- Bentuk geometris (lingkaran, persegi, segitiga, hexagon) yang melayang
- Rotasi dan gerakan vertikal yang smooth
- Digunakan di: **Hero Section**

**Fitur:**
- 6 bentuk berbeda dengan warna gradient
- Animasi float dengan rotasi 360°
- Opacity rendah agar tidak mengganggu konten

### 5. **Mouse Follower** 🖱️
**File:** `MouseFollower.js`
- Efek cursor custom yang mengikuti mouse
- Glow effect di sekitar cursor
- Aktif di: **Seluruh halaman**

**Fitur:**
- Lingkaran border yang mengikuti cursor
- Glow radial gradient
- Otomatis hidden di mobile devices

### 6. **Ripple Effect** 〰️
**File:** `RippleEffect.js`
- Efek gelombang konsentris dari tengah
- Animasi ripple yang terus menerus
- Digunakan di: **CTA Section**

**Fitur:**
- 4 ripple dengan delay berbeda
- Expand dari center ke luar
- Fade out smooth

## Cara Menggunakan

### Menambahkan ke Komponen Baru

```javascript
import AnimatedBackground from './AnimatedBackground';
import DotsGrid from './DotsGrid';
import AnimatedBeams from './AnimatedBeams';
import FloatingShapes from './FloatingShapes';
import RippleEffect from './RippleEffect';

const MyComponent = () => {
  return (
    <section className="my-section">
      {/* Pilih salah satu atau kombinasi */}
      <AnimatedBackground />
      <DotsGrid />
      <AnimatedBeams />
      <FloatingShapes />
      <RippleEffect />
      
      <div className="container">
        {/* Konten Anda */}
      </div>
    </section>
  );
};
```

### CSS Requirements

Pastikan parent element memiliki:
```css
.my-section {
  position: relative;
  overflow: hidden;
}
```

## Kustomisasi

### Mengubah Warna
Edit file CSS masing-masing komponen dan ubah nilai `rgba(0, 217, 192, ...)` sesuai brand color Anda.

### Mengubah Kecepatan Animasi
Edit nilai `animation-duration` di file CSS:
```css
animation: myAnimation 8s ease-in-out infinite;
                      /* ^ ubah nilai ini */
```

### Mengubah Jumlah Partikel/Dots
Edit nilai di file JS:
```javascript
const particleCount = 80; // ubah nilai ini
```

## Performance Tips

1. **Gunakan maksimal 2-3 animasi per section** untuk performa optimal
2. **Disable di mobile** jika perlu dengan media query
3. **Gunakan `will-change` CSS** untuk animasi yang kompleks
4. **Test di berbagai device** untuk memastikan smooth performance

## Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

## Credits

Animasi terinspirasi dari:
- [React Bits](https://github.com/DavidHDev/react-bits) - Open source animated React components
- Canvas API untuk particle system
- CSS animations untuk efek visual

---

**Dibuat dengan ❤️ untuk BLIXA Platform**
