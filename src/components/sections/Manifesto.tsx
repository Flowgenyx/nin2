'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Split text into words and animate
    const splitAndAnimate = (element: HTMLElement | null) => {
      if (!element) return;

      const text = element.innerText;
      element.innerHTML = text.split(' ').map(word =>
        `<span class="word-wrap"><span class="word-inner">${word}&nbsp;</span></span>`
      ).join('');

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

    splitAndAnimate(headingRef.current);
    splitAndAnimate(textRef.current);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

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
