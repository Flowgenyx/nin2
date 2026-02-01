'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { useTransition } from '@/context/TransitionContext';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { hasNavigated } = useTransition();

  useEffect(() => {
    // Skip preloader if we navigated from another page (not a fresh load)
    if (hasNavigated) {
      setIsVisible(false);
      document.body.classList.remove('loading');
      document.body.style.opacity = '1';
      onComplete();
      return;
    }

    // Fresh page load - show preloader
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
  }, [onComplete, hasNavigated]);

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className="loader">
      <div ref={textRef} className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
        NIN
      </div>
      <div ref={barRef} className="loader-bar" />
    </div>
  );
}
