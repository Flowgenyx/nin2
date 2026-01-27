'use client';

import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '@/lib/gsap';

import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Preloader } from '@/components/Preloader';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { Hero } from '@/components/sections/Hero';
import { Manifesto } from '@/components/sections/Manifesto';
import { CardStack } from '@/components/sections/CardStack';
import { Philosophy } from '@/components/sections/Philosophy';

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  const initLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync Lenis with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Mark body as loaded
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
    document.body.style.opacity = '1';
  }, []);

  useEffect(() => {
    // Set initial body state
    document.body.classList.add('loading');
    document.body.style.opacity = '0';

    // Fade in body
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    initLenis();
  }, [initLenis]);

  return (
    <TransitionWrapper>
      <NoiseOverlay />
      <Preloader onComplete={handlePreloaderComplete} />
      <Navigation />

      <div className="wrapper">
        <Hero />
        <Manifesto />
        <CardStack />
        <Philosophy />
      </div>

      <Footer />
    </TransitionWrapper>
  );
}
