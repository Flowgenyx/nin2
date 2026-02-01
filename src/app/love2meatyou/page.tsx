'use client';

import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '@/lib/gsap';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { Love2MeatYouPreloader } from '@/components/Love2MeatYouPreloader';

export default function Love2MeatYouPage() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number>(0);

  const initLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafIdRef.current);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    initLenis();
  }, [initLenis]);

  return (
    <>
      <Footer />
      <TransitionWrapper>
        <Love2MeatYouPreloader onComplete={handlePreloaderComplete} />
        <Navigation />
        <main className="wrapper min-h-screen">
          <section className="min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-16">
            <div className="text-center max-w-4xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
                Love2MeatYou
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
                Love2MeatYou
              </h1>
              <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
                Binnenkort meer informatie.
              </p>
            </div>
          </section>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
