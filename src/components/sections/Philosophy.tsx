'use client';

import { useRef, useEffect } from 'react';
import { Hexagon, Sun, Mountain, Infinity } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useTransition } from '@/context/TransitionContext';

const icons = [
  { Icon: Hexagon, label: 'Connecties' },
  { Icon: Sun, label: 'Inspiratie' },
  { Icon: Mountain, label: 'Groei' },
  { Icon: Infinity, label: 'Impact' }
];

export function Philosophy() {
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
      className="py-32 md:py-48 px-6 bg-[var(--c-bg)] text-center flex flex-col items-center"
    >
      <h2
        ref={headingRef}
        className="font-display text-2xl md:text-4xl lg:text-5xl tracking-tighter mb-8 max-w-4xl px-4"
      >
        Jouw netwerk bepaalt jouw toekomst
      </h2>
      <div
        ref={textRef}
        className="max-w-2xl text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-16 text-balance px-4"
      >
        Bij NIN geloven we dat de juiste connecties deuren openen die anders gesloten blijven. Wij creëren de setting, jij maakt de connecties die jouw carrière en business naar het volgende niveau tillen.
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
