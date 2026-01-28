'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';

const programItems = [
  {
    time: '18:00',
    title: 'Deuren Open',
    description: 'Ontvangst met welkomstdrankje',
    type: 'break'
  },
  {
    time: '18:30',
    title: 'Opening & Welkom',
    description: 'Introductie van de avond door het NIN team',
    type: 'talk'
  },
  {
    time: '18:45',
    title: 'Keynote: [Titel]',
    description: 'Door [Spreker Naam] - Een inspirerend verhaal over [onderwerp]',
    type: 'keynote'
  },
  {
    time: '19:30',
    title: 'Netwerksessie I',
    description: 'Gestructureerde kennismakingsronde in kleine groepen',
    type: 'network'
  },
  {
    time: '20:00',
    title: 'Pauze',
    description: 'Tijd voor een drankje en informeel netwerken',
    type: 'break'
  },
  {
    time: '20:15',
    title: 'Panel: [Titel]',
    description: 'Discussie met [aantal] ondernemers over [onderwerp]',
    type: 'talk'
  },
  {
    time: '21:00',
    title: 'Netwerksessie II',
    description: 'Verdiepende gesprekken met nieuwe connecties',
    type: 'network'
  },
  {
    time: '21:30',
    title: 'Borrel & Afsluiting',
    description: 'Informeel netwerken tot einde van de avond',
    type: 'break'
  },
];

const typeStyles: Record<string, string> = {
  break: 'text-gray-400',
  talk: 'text-[var(--c-dark)]',
  keynote: 'text-[var(--c-dark)]',
  network: 'text-[var(--c-accent)]'
};

export default function ProgrammaPage() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.from(item, {
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        delay: index * 0.05
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <Footer />
      <TransitionWrapper>
        <Navigation />
        <main className="wrapper">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-16">
          <div className="text-center max-w-4xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
              [DATUM]
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
              Programma
            </h1>
            <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
              Een avond vol inspiratie, kennisdeling en waardevolle connecties.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 md:px-12 max-w-[1000px] mx-auto">
          <div className="space-y-0">
            {programItems.map((item, index) => (
              <div
                key={index}
                ref={el => { if (el) itemsRef.current[index] = el; }}
                className="grid grid-cols-12 gap-4 py-8 border-b border-black/10 items-start"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-display text-2xl md:text-3xl tracking-tight text-gray-300">
                    {item.time}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className={`font-display text-xl md:text-2xl tracking-tight mb-2 ${typeStyles[item.type]}`}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-light text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <section className="py-16 px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Programma onder voorbehoud van wijzigingen
          </p>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-[var(--c-dark)] text-white">
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-8">
            Klinkt goed?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-xl mx-auto mb-12">
            Claim je plek en wees erbij op [DATUM].
          </p>
          <a
            href="#tickets"
            className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/90 transition-colors"
          >
            Bestel Tickets
          </a>
        </section>
      </main>
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
