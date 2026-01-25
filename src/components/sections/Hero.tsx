'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRefs = useRef<HTMLSpanElement[]>([]);
  const fadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero text animation
    const heroTl = gsap.timeline();
    heroTl.to(textRefs.current, {
      y: 0,
      stagger: 0.1,
      duration: 1.8,
      ease: 'power4.out',
      delay: 0.2
    })
    .to(fadeRef.current, {
      opacity: 1,
      duration: 1
    }, "-=1");

    // Hero parallax
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

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[var(--c-bg)]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          ref={imageRef}
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"
          alt="Concrete Architecture"
          fill
          className="object-cover brightness-[0.8] scale-110"
          priority
        />
      </div>

      <div className="relative z-10 text-center text-white mix-blend-difference px-4 w-full">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
          <h1 className="font-display text-[13vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden">
            <span
              ref={el => { if (el) textRefs.current[0] = el; }}
              className="block translate-y-full"
            >
              CONCRETE
            </span>
          </h1>
          <h1 className="font-display text-[13vw] leading-[0.85] font-semibold tracking-tighter overflow-hidden">
            <span
              ref={el => { if (el) textRefs.current[1] = el; }}
              className="block translate-y-full"
            >
              DREAMS
            </span>
          </h1>
        </div>

        <div
          ref={fadeRef}
          className="mt-12 flex justify-between items-end w-full max-w-[90vw] mx-auto opacity-0"
        >
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-left">
            Based in<br />Tokyo / London
          </div>
          <div className="hidden md:block h-px w-24 bg-white/50" />
          <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-right">
            Scroll to<br />Explore
          </div>
        </div>
      </div>
    </section>
  );
}
