'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';

const speakers = [
  {
    id: 1,
    name: '[Spreker Naam]',
    title: '[Functie]',
    company: '[Bedrijf]',
    bio: 'Placeholder bio voor deze spreker. Hier komt een korte beschrijving van de achtergrond en expertise.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp',
  },
  {
    id: 2,
    name: '[Spreker Naam]',
    title: '[Functie]',
    company: '[Bedrijf]',
    bio: 'Placeholder bio voor deze spreker. Hier komt een korte beschrijving van de achtergrond en expertise.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp',
  },
  {
    id: 3,
    name: '[Spreker Naam]',
    title: '[Functie]',
    company: '[Bedrijf]',
    bio: 'Placeholder bio voor deze spreker. Hier komt een korte beschrijving van de achtergrond en expertise.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp',
  },
  {
    id: 4,
    name: '[Spreker Naam]',
    title: '[Functie]',
    company: '[Bedrijf]',
    bio: 'Placeholder bio voor deze spreker. Hier komt een korte beschrijving van de achtergrond en expertise.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp',
  },
];

export default function SprekersPage() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        delay: index * 0.1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="wrapper bg-[var(--c-bg)]">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-16">
          <div className="text-center max-w-4xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
              Line-up
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
              Sprekers
            </h1>
            <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
              Leer van ondernemers die het pad al hebben bewandeld. Inspirerende verhalen en praktische inzichten.
            </p>
          </div>
        </section>

        {/* Speakers Grid */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                ref={el => { if (el) cardsRef.current[index] = el; }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl tracking-tight">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    {speaker.title} @ {speaker.company}
                  </p>
                  <p className="text-sm font-light text-gray-600 leading-relaxed pt-2">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More to come */}
        <section className="py-24 px-6 text-center border-t border-black/10">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Meer sprekers worden binnenkort aangekondigd
          </span>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center bg-[var(--c-dark)] text-white">
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-8">
            Wil jij spreken bij NIN?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-xl mx-auto mb-12">
            Heb je een inspirerend verhaal te delen? Neem contact met ons op.
          </p>
          <a
            href="mailto:info@nin.nl"
            className="inline-block px-8 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Neem Contact Op
          </a>
        </section>
      </main>
      <Footer />
      <NoiseOverlay />
    </>
  );
}
