'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const projects = [
  {
    id: '01',
    title: 'The Void House',
    location: 'Kyoto, Japan',
    description: 'A minimal concrete residence focused on negative space and light manipulation. Designed for deep meditation and silence amidst the urban chaos.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp'
  },
  {
    id: '02',
    title: 'Moss Bunker',
    location: 'Berlin, Germany',
    description: 'Adaptive reuse of a WWII bunker into a sustainable vertical farm and living space. A brutalist icon reclaimed by nature.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp'
  },
  {
    id: '03',
    title: 'Sky Cliff',
    location: 'Reykjavik, Iceland',
    description: 'A glass and steel structure cantilevered over the volcanic landscape. Blending immediate danger with uncompromising luxury.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp'
  }
];

export function CardStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      const nextCard = cards[i + 1];
      if (nextCard) {
        const cardInner = card.querySelector('.card-inner');

        gsap.to(cardInner, {
          scale: 0.92,
          filter: "brightness(0.6)",
          ease: "none",
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom",
            end: "top 10vh",
            scrub: true
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
            Selected Works
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter">
            Recent Projects
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
            ( 2023 — 2025 )
          </span>
        </div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto pb-[10vh]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => { if (el) cardsRef.current[index] = el; }}
            className="card-item group"
          >
            <div className="card-inner">
              <div className="p-8 md:p-16 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
                <div>
                  <div className="font-display text-4xl text-white/10 mb-6">
                    {project.id}
                  </div>
                  <h3 className="font-display text-2xl md:text-4xl tracking-tighter mb-2">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                    {project.location}
                  </span>
                </div>

                <div className="max-w-xs">
                  <p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white/70 transition-colors"
                  >
                    View Case Study <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="relative h-full overflow-hidden order-first md:order-last">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
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
