'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { highlights } from '@/lib/highlights';

export function CardStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const nextCard = cards[i + 1];
      if (nextCard) {
        const cardInner = card.querySelector('.card-inner');

        // Scale animatie op de card
        gsap.to(cardInner, {
          scale: 0.92,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top 10vh",
            scrub: 1.5
          }
        });

        // Dim effect via overlay (voorkomt foto flikkering)
        const dimOverlay = card.querySelector('.card-dim-overlay');
        gsap.to(dimOverlay, {
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top 10vh",
            scrub: 1.5
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="stack-section py-24 md:py-32">
      <div className="px-6 md:px-12 mb-20 flex justify-between items-end max-w-[1600px] mx-auto">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
            Wat je kunt verwachten
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter">
            Event Highlights
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
            NIN Experience
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto pb-[10vh]">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            ref={el => { if (el) cardsRef.current[index] = el; }}
            className="card-item group"
          >
            <div className="card-inner">
              {/* Dim overlay voor scroll effect */}
              <div className="card-dim-overlay absolute inset-0 bg-black opacity-0 z-20 pointer-events-none" />
              <div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
                <div>
                  <div className="font-display text-4xl text-white/10 mb-6">
                    {highlight.id}
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2">
                    {highlight.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {highlight.subtitle}
                  </span>
                </div>

                <div className="max-w-xs">
                  <p className="text-sm font-light text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
              <div className="relative h-full overflow-hidden order-first md:order-last">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
