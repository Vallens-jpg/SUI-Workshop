# 🚀 Animation Quick Reference

## Text Animations

| Component | Effect | Use Case |
|-----------|--------|----------|
| `<TypingText>` | Terminal typing | Hero headlines |
| `<FadeInUp>` | Fade from bottom | General content |
| `<SlideIn>` | Slide from sides | Cards, sections |
| `<GradientText>` | Animated gradient | Brand names |
| `<GlitchText>` | Glitch effect | Tech/cyber theme |
| `<WaveText>` | Wave motion | Badges, labels |
| `<ScaleIn>` | Scale from small | Buttons, CTAs |

## Scroll Animations

| Component | Effect | Use Case |
|-----------|--------|----------|
| `<ParallaxScroll>` | Parallax movement | Backgrounds |
| `<RevealOnScroll>` | Reveal on view | Content sections |
| `<StaggerAnimation>` | Sequential reveal | Lists, grids |
| `<CounterAnimation>` | Number counting | Statistics |
| `<ProgressBar>` | Scroll progress | Page indicator |
| `<ZoomInScroll>` | Zoom on view | Images, cards |
| `<RotateOnScroll>` | Rotate on scroll | Decorative elements |

## Interactive Cards

| Component | Interaction | Best For |
|-----------|-------------|----------|
| `<TiltCard>` | 3D tilt on hover | Feature cards |
| `<FlipCard>` | Flip on click | Info reveal |
| `<HoverLiftCard>` | Lift on hover | Product cards |
| `<GlowCard>` | Glow follows mouse | Premium features |
| `<ExpandCard>` | Expand on hover | Gallery items |
| `<ParallaxCard>` | Content parallax | Hero cards |

## Carousel

| Component | Features | Use Case |
|-----------|----------|----------|
| `<CardCarousel>` | 3D carousel with auto-play | Features, testimonials |

## Background Effects

| Component | Effect | Use Case |
|-----------|--------|----------|
| `<AnimatedBackground>` | Particle network | Hero sections |
| `<DotsGrid>` | Pulsing dots | Subtle backgrounds |
| `<AnimatedBeams>` | Light beams | Tech sections |
| `<FloatingShapes>` | Floating geometry | Creative sections |
| `<RippleEffect>` | Ripple waves | CTA sections |
| `<MouseFollower>` | Custom cursor | Global effect |

## Quick Import

```javascript
// Text Animations
import { 
  TypingText, FadeInUp, SlideIn, 
  GradientText, GlitchText, WaveText, ScaleIn 
} from './TextAnimations';

// Scroll Animations
import { 
  ParallaxScroll, RevealOnScroll, StaggerAnimation,
  CounterAnimation, ProgressBar, ZoomInScroll, RotateOnScroll
} from './ScrollAnimations';

// Interactive Cards
import { 
  TiltCard, FlipCard, HoverLiftCard,
  GlowCard, ExpandCard, ParallaxCard
} from './InteractiveCard';

// Carousel
import CardCarousel from './CardCarousel';

// Backgrounds
import AnimatedBackground from './AnimatedBackground';
import DotsGrid from './DotsGrid';
import AnimatedBeams from './AnimatedBeams';
import FloatingShapes from './FloatingShapes';
import RippleEffect from './RippleEffect';
import MouseFollower from './MouseFollower';
```

## Common Patterns

### Hero Section
```javascript
<FadeInUp delay={0}>
  <WaveText text="Badge" />
</FadeInUp>
<FadeInUp delay={200}>
  <GradientText>Title</GradientText>
</FadeInUp>
<ScaleIn delay={400}>
  <button>CTA</button>
</ScaleIn>
```

### Feature Grid
```javascript
<StaggerAnimation staggerDelay={100}>
  {items.map(item => (
    <TiltCard>
      <div>{item.content}</div>
    </TiltCard>
  ))}
</StaggerAnimation>
```

### Stats Section
```javascript
<ZoomInScroll>
  <CounterAnimation end={100} suffix="%" />
</ZoomInScroll>
```

### Carousel Section
```javascript
<CardCarousel 
  items={features}
  autoPlay={true}
  interval={3000}
/>
```

## Performance Checklist

- ✅ Use IntersectionObserver for scroll animations
- ✅ Limit animations per viewport (max 5-7)
- ✅ Disable heavy effects on mobile
- ✅ Use CSS transforms over position changes
- ✅ Add will-change for complex animations
- ✅ Test on low-end devices

## Browser Support

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| Text Animations | ✅ | ✅ | ✅ | ✅ |
| Scroll Animations | ✅ | ✅ | ✅ | ✅ |
| Interactive Cards | ✅ | ✅ | ✅ | ✅ |
| Carousel | ✅ | ✅ | ✅ | ✅ |
| Canvas (Particles) | ✅ | ✅ | ✅ | ✅ |

## Troubleshooting

**Animation not triggering?**
- Check IntersectionObserver threshold
- Verify element is in viewport
- Check console for errors

**Performance issues?**
- Reduce particle count
- Disable on mobile
- Use CSS animations over JS

**Animations too fast/slow?**
- Adjust duration/speed props
- Edit CSS transition values
- Change delay values

---

**Need help?** Check `INTERACTIVE_ANIMATIONS_GUIDE.md` for detailed docs.
