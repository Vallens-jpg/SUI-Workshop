# 🎬 Animation Components Quick Reference

## Komponen yang Tersedia

| Komponen | File | Efek | Best For |
|----------|------|------|----------|
| AnimatedBackground | `AnimatedBackground.js` | Particles dengan koneksi | Hero, Landing |
| DotsGrid | `DotsGrid.js` | Grid dots berpulsa | Background subtle |
| AnimatedBeams | `AnimatedBeams.js` | Sinar vertikal | Tech sections |
| FloatingShapes | `FloatingShapes.js` | Bentuk geometris melayang | Creative sections |
| MouseFollower | `MouseFollower.js` | Custom cursor | Global effect |
| RippleEffect | `RippleEffect.js` | Gelombang konsentris | CTA, Focus areas |

## Kombinasi Rekomendasi

### Hero Section (High Impact)
```javascript
<AnimatedBackground />
<DotsGrid />
<FloatingShapes />
```

### Content Section (Subtle)
```javascript
<DotsGrid />
```

### Tech/Feature Section
```javascript
<AnimatedBeams />
```

### CTA Section (Attention)
```javascript
<RippleEffect />
```

## Color Palette

Semua animasi menggunakan primary color BLIXA:
- Primary: `rgba(0, 217, 192, ...)` - Cyan/Turquoise
- Opacity variations: 0.05 - 0.8

## Performance Metrics

- **AnimatedBackground**: Medium (Canvas rendering)
- **DotsGrid**: Light (CSS only)
- **AnimatedBeams**: Light (CSS only)
- **FloatingShapes**: Light (CSS only)
- **MouseFollower**: Light (Event listener)
- **RippleEffect**: Light (CSS only)

## Mobile Optimization

Semua komponen sudah responsive. MouseFollower otomatis hidden di mobile.

Untuk disable animasi di mobile:
```css
@media (max-width: 768px) {
  .animated-background {
    display: none;
  }
}
```
