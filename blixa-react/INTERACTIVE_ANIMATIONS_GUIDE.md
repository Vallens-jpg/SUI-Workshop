# 🎭 Interactive Animations Guide - BLIXA React

## 📚 Daftar Isi
1. [Text Animations](#text-animations)
2. [Scroll Animations](#scroll-animations)
3. [Interactive Cards](#interactive-cards)
4. [Carousel Components](#carousel-components)
5. [Implementasi](#implementasi)

---

## 🔤 Text Animations

### 1. TypingText
Efek mengetik seperti terminal.

```javascript
import { TypingText } from './TextAnimations';

<TypingText text="Hello World" speed={100} />
```

**Props:**
- `text`: String yang akan ditampilkan
- `speed`: Kecepatan mengetik (ms per karakter)
- `className`: Custom CSS class

### 2. FadeInUp
Teks muncul dari bawah dengan fade.

```javascript
import { FadeInUp } from './TextAnimations';

<FadeInUp delay={200}>
  <h1>Judul Anda</h1>
</FadeInUp>
```

**Props:**
- `delay`: Delay sebelum animasi dimulai (ms)
- `className`: Custom CSS class

### 3. SlideIn
Teks slide dari berbagai arah.

```javascript
import { SlideIn } from './TextAnimations';

<SlideIn direction="left" delay={100}>
  <p>Konten Anda</p>
</SlideIn>
```

**Props:**
- `direction`: 'left', 'right', 'top', 'bottom'
- `delay`: Delay sebelum animasi (ms)

### 4. GradientText
Teks dengan gradient animasi.

```javascript
import { GradientText } from './TextAnimations';

<h1><GradientText>BLIXA</GradientText></h1>
```

### 5. GlitchText
Efek glitch cyberpunk.

```javascript
import { GlitchText } from './TextAnimations';

<GlitchText>Glitch Effect</GlitchText>
```

### 6. WaveText
Teks dengan efek gelombang.

```javascript
import { WaveText } from './TextAnimations';

<WaveText text="Wave Animation" />
```

### 7. ScaleIn
Teks muncul dengan scale dari kecil.

```javascript
import { ScaleIn } from './TextAnimations';

<ScaleIn delay={300}>
  <button>Click Me</button>
</ScaleIn>
```

---

## 📜 Scroll Animations

### 1. ParallaxScroll
Efek parallax saat scroll.

```javascript
import { ParallaxScroll } from './ScrollAnimations';

<ParallaxScroll speed={0.5}>
  <img src="background.jpg" />
</ParallaxScroll>
```

**Props:**
- `speed`: Kecepatan parallax (0.1 - 1.0)

### 2. RevealOnScroll
Reveal element saat masuk viewport.

```javascript
import { RevealOnScroll } from './ScrollAnimations';

<RevealOnScroll direction="up" delay={0}>
  <div>Content</div>
</RevealOnScroll>
```

**Props:**
- `direction`: 'up', 'down', 'left', 'right'
- `delay`: Delay setelah masuk viewport (ms)

### 3. StaggerAnimation
Animasi berurutan untuk children.

```javascript
import { StaggerAnimation } from './ScrollAnimations';

<StaggerAnimation staggerDelay={100}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerAnimation>
```

**Props:**
- `staggerDelay`: Delay antar item (ms)

### 4. CounterAnimation
Animasi counter/angka.

```javascript
import { CounterAnimation } from './ScrollAnimations';

<CounterAnimation 
  end={100} 
  duration={2000}
  prefix="$"
  suffix="M"
/>
```

**Props:**
- `end`: Angka akhir
- `duration`: Durasi animasi (ms)
- `prefix`: Prefix (contoh: $)
- `suffix`: Suffix (contoh: %, M, B)

### 5. ProgressBar
Progress bar di top saat scroll.

```javascript
import { ProgressBar } from './ScrollAnimations';

<ProgressBar />
```

### 6. ZoomInScroll
Zoom in saat masuk viewport.

```javascript
import { ZoomInScroll } from './ScrollAnimations';

<ZoomInScroll>
  <div>Content</div>
</ZoomInScroll>
```

### 7. RotateOnScroll
Rotasi berdasarkan scroll position.

```javascript
import { RotateOnScroll } from './ScrollAnimations';

<RotateOnScroll>
  <div>Rotating Element</div>
</RotateOnScroll>
```

---

## 🎴 Interactive Cards

### 1. TiltCard
Card yang tilt mengikuti mouse.

```javascript
import { TiltCard } from './InteractiveCard';

<TiltCard>
  <div className="card-content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</TiltCard>
```

**Efek:** 3D tilt effect saat mouse move

### 2. FlipCard
Card yang bisa dibalik.

```javascript
import { FlipCard } from './InteractiveCard';

<FlipCard
  front={<div>Front Content</div>}
  back={<div>Back Content</div>}
/>
```

**Interaksi:** Click untuk flip

### 3. HoverLiftCard
Card terangkat saat hover.

```javascript
import { HoverLiftCard } from './InteractiveCard';

<HoverLiftCard>
  <div>Content</div>
</HoverLiftCard>
```

**Efek:** Lift up dengan shadow saat hover

### 4. GlowCard
Card dengan glow effect mengikuti mouse.

```javascript
import { GlowCard } from './InteractiveCard';

<GlowCard>
  <div>Content</div>
</GlowCard>
```

**Efek:** Glow spot mengikuti cursor

### 5. ExpandCard
Card yang expand saat hover.

```javascript
import { ExpandCard } from './InteractiveCard';

<ExpandCard>
  <div>Content</div>
</ExpandCard>
```

**Efek:** Scale up saat hover

### 6. ParallaxCard
Card dengan parallax content.

```javascript
import { ParallaxCard } from './InteractiveCard';

<ParallaxCard>
  <div>Content</div>
</ParallaxCard>
```

**Efek:** Content bergerak mengikuti mouse

---

## 🎠 Carousel Components

### CardCarousel
Carousel interaktif dengan 3D effect.

```javascript
import CardCarousel from './CardCarousel';

const items = [
  {
    icon: '🔐',
    title: 'Security',
    description: 'End-to-end encryption'
  },
  {
    icon: '⚡',
    title: 'Speed',
    description: 'Lightning fast'
  }
];

<CardCarousel 
  items={items} 
  autoPlay={true} 
  interval={3000} 
/>
```

**Props:**
- `items`: Array of objects dengan icon, title, description
- `autoPlay`: Auto slide (boolean)
- `interval`: Interval auto slide (ms)

**Features:**
- 3D card positioning
- Auto play dengan pause on hover
- Navigation buttons
- Indicator dots
- Click card untuk navigate

---

## 🎯 Implementasi di BLIXA

### Hero Section
```javascript
<FadeInUp delay={0}>
  <span className="badge">
    <WaveText text="Powered by Sui" />
  </span>
</FadeInUp>

<FadeInUp delay={200}>
  <h1><GradientText>BLIXA</GradientText></h1>
</FadeInUp>
```

### Stats Section
```javascript
<ZoomInScroll>
  <CounterAnimation 
    end={510} 
    suffix="B" 
    prefix="$"
  />
</ZoomInScroll>
```

### Problem Section
```javascript
<StaggerAnimation staggerDelay={150}>
  <TiltCard>
    <div className="problem-card">
      {/* Content */}
    </div>
  </TiltCard>
</StaggerAnimation>
```

### Solution Section
```javascript
<CardCarousel 
  items={features} 
  autoPlay={true} 
  interval={4000} 
/>
```

### Benefits Section
```javascript
<SlideIn direction="left" delay={200}>
  <HoverLiftCard>
    <div className="benefit-card">
      {/* Content */}
    </div>
  </HoverLiftCard>
</SlideIn>
```

---

## 🎨 Customization

### Mengubah Timing
Edit nilai di CSS atau props:
```css
transition: all 0.6s ease-out; /* Ubah 0.6s */
```

### Mengubah Warna
Edit di CSS:
```css
background: var(--primary-color); /* Ganti dengan warna Anda */
```

### Disable di Mobile
```css
@media (max-width: 768px) {
  .tilt-card {
    transform: none !important;
  }
}
```

---

## ⚡ Performance Tips

1. **Gunakan will-change** untuk animasi kompleks
2. **Limit jumlah animasi** per viewport
3. **Use IntersectionObserver** untuk lazy animation
4. **Disable heavy animations** di mobile
5. **Test di berbagai device** untuk smooth experience

---

## 🎬 Animation Combinations

### Recommended Combos:

**Hero Section:**
- FadeInUp + GradientText + ScaleIn

**Feature Cards:**
- TiltCard + StaggerAnimation

**Stats:**
- ZoomInScroll + CounterAnimation

**Testimonials:**
- CardCarousel + FadeInUp

**CTA:**
- RippleEffect + ScaleIn

---

## 📱 Mobile Considerations

Beberapa animasi otomatis disabled di mobile:
- TiltCard (no tilt effect)
- ParallaxCard (no parallax)
- MouseFollower (hidden)
- Heavy 3D transforms

Untuk force disable:
```javascript
const isMobile = window.innerWidth < 768;

{!isMobile && <TiltCard>...</TiltCard>}
```

---

**Dibuat dengan ❤️ untuk BLIXA Platform**
