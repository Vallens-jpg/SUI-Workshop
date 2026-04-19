import React, { useEffect, useRef, useState } from 'react';
import './TextAnimations.css';

// Typing Animation Component
export const TypingText = ({ text, speed = 100, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={`typing-text ${className}`}>{displayText}</span>;
};

// Fade In Up Animation
export const FadeInUp = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Slide In Animation
export const SlideIn = ({ children, direction = 'left', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`slide-in slide-in-${direction} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

// Gradient Text Animation
export const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`gradient-text-animated ${className}`}>
      {children}
    </span>
  );
};

// Glitch Text Effect
export const GlitchText = ({ children, className = '' }) => {
  return (
    <span className={`glitch-text ${className}`} data-text={children}>
      {children}
    </span>
  );
};

// Wave Text Animation
export const WaveText = ({ text, className = '' }) => {
  return (
    <span className={`wave-text ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="wave-char"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// Scale In Animation
export const ScaleIn = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scale-in ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
