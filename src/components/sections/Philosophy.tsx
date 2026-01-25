'use client';

import { useRef, useEffect } from 'react';
import { Hexagon, Sun, Mountain, Infinity } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const icons = [
  { Icon: Hexagon, label: 'Vorm' },
  { Icon: Sun, label: 'Licht' },
  { Icon: Mountain, label: 'Materiaal' },
  { Icon: Infinity, label: 'Tijd' }
];

export function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      className="py-32 md:py-48 px-6 bg-[var(--c-bg)] text-center flex flex-col items-center"
    >
      <h2
        ref={headingRef}
        className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tighter mb-8"
      >
        Ontwerpen voor de Eeuwigheid
      </h2>
      <div
        ref={textRef}
        className="max-w-2xl text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-16 text-balance"
      >
        Onze filosofie is geworteld in de overtuiging dat gebouwen moeten verouderen, niet verslechteren. Wij gebruiken materialen die een patina ontwikkelen en zo de passage van tijd op hun oppervlak vastleggen.
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
        {icons.map(({ Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-4">
            <Icon className="w-6 h-6 stroke-1" />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="h-24 w-px bg-gradient-to-b from-gray-300 to-transparent mt-24" />
    </section>
  );
}
