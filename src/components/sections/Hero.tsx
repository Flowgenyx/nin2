'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useTransition } from '@/context/TransitionContext';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hasAnimated = useRef(false);
  const { isTransitioning } = useTransition();

  useEffect(() => {
    if (isTransitioning || hasAnimated.current) return;
    hasAnimated.current = true;

    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          gsap.to(imageRef.current, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [isTransitioning]);

  return (
    <section ref={containerRef} data-theme="dark" className="h-screen relative flex flex-col items-end justify-end overflow-hidden bg-[var(--c-bg)]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          src="/images/hero/hero3.png"
          alt="NIN Hero"
          fill
          className="object-cover scale-110"
          priority
          quality={100}
          unoptimized
        />
      </div>

    </section>
  );
}
