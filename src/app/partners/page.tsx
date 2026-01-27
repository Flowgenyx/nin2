'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';

const mainPartners = [
  { name: '[Hoofdpartner 1]', logo: null },
  { name: '[Hoofdpartner 2]', logo: null },
];

const partners = [
  { name: '[Partner 1]', logo: null },
  { name: '[Partner 2]', logo: null },
  { name: '[Partner 3]', logo: null },
  { name: '[Partner 4]', logo: null },
  { name: '[Partner 5]', logo: null },
  { name: '[Partner 6]', logo: null },
];

export default function PartnersPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.from(mainRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 80%",
        }
      });
    }

    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <TransitionWrapper>
      <Navigation />
      <main className="wrapper bg-[var(--c-bg)]">
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-16">
          <div className="text-center max-w-4xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
              Onze Partners
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
              Partners
            </h1>
            <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
              Samen met onze partners maken wij NIN mogelijk.
            </p>
          </div>
        </section>

        {/* Main Partners */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-12 text-center">
            Hoofdpartners
          </span>
          <div ref={mainRef} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {mainPartners.map((partner, index) => (
              <div
                key={index}
                className="aspect-[2/1] bg-gray-100 flex items-center justify-center border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <span className="text-gray-400 font-display text-xl tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-black/10">
          <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-12 text-center">
            Partners
          </span>
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-[3/2] bg-gray-50 flex items-center justify-center border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <span className="text-gray-400 font-display text-lg tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Become Partner CTA */}
        <section className="py-32 px-6 text-center bg-[var(--c-dark)] text-white">
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-8">
            Word Partner
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-xl mx-auto mb-12">
            Wil jij je merk verbinden aan NIN en een select publiek van ondernemers bereiken? Neem contact met ons op voor de mogelijkheden.
          </p>
          <a
            href="mailto:partners@nin.nl"
            className="inline-block px-8 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Partner Worden
          </a>
        </section>
      </main>
      <Footer />
      <NoiseOverlay />
    </TransitionWrapper>
  );
}
