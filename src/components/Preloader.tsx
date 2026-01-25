'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      }
    });

    tl.to(barRef.current, {
      width: '100%',
      duration: 1.2,
      ease: 'expo.inOut'
    })
    .to(textRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.in'
    }, "-=0.2")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="loader">
      <div ref={textRef} className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
        FLOWGENYX
      </div>
      <div ref={barRef} className="loader-bar" />
    </div>
  );
}
