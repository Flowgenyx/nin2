'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useTransition } from '@/context/TransitionContext';

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { isTransitioning } = useTransition();

  useEffect(() => {
    // Check en set hasAnimated SYNCHRONOUS om dubbele animatie te voorkomen
    if (isTransitioning || hasAnimated.current) return;
    hasAnimated.current = true;

    const elements = [headingRef.current, textRef.current].filter(Boolean) as HTMLElement[];
    if (elements.length === 0) {
      hasAnimated.current = false;
      return;
    }

    const splitAndAnimate = (element: HTMLElement) => {
      // Skip als element al gesplit is
      if (element.querySelector('.word-wrap')) return;

      const text = element.innerText;
      element.innerHTML = text.split(' ').map(word =>
        `<span class="word-wrap"><span class="word-inner">${word}</span></span>`
      ).join('');

      // Force layout recalculation
      void element.offsetHeight;

      gsap.to(element.querySelectorAll('.word-inner'), {
        y: "0%",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.015,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        }
      });
    };

    // Wait for fonts, then double rAF to ensure paint is complete
    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          elements.forEach(el => splitAndAnimate(el));
          ScrollTrigger.refresh();
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [isTransitioning]);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-8 lg:col-span-7">
          <h2
            ref={headingRef}
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-[var(--c-dark)]"
          >
            Waar waardevolle connecties worden gemaakt.
          </h2>
        </div>
        <div className="md:col-span-4 lg:col-span-5 md:pt-4">
          <div
            ref={textRef}
            className="text-lg md:text-xl font-light leading-relaxed text-gray-700 text-balance"
          >
            NIN brengt ambitieuze ondernemers en professionals samen in een exclusieve setting. Geen oppervlakkig netwerken, maar betekenisvolle gesprekken die leiden tot nieuwe samenwerkingen, inzichten en kansen.
          </div>

          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col gap-4">
            <div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
              <span>Keynotes</span>
              <span>01</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
              <span>Netwerksessies</span>
              <span>02</span>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-[0.15em] font-semibold text-gray-500">
              <span>Exclusieve Toegang</span>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
