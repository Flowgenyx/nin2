'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';

export default function OverPage() {
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
    <>
      <Navigation />
      <main className="wrapper bg-[var(--c-bg)]">
        {/* Hero */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-16">
          <div className="text-center max-w-4xl">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
              Over NIN
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
              Network is Networth
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <h2
              ref={headingRef}
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-[var(--c-dark)]"
            >
              Het netwerk-evenement voor ambitieuze ondernemers.
            </h2>
          </div>
          <div className="md:col-span-5">
            <div
              ref={textRef}
              className="text-lg font-light leading-relaxed text-gray-700 space-y-6"
            >
              <p>
                NIN is geboren uit de overtuiging dat je netwerk je grootste asset is. In een wereld waar iedereen online connected is, missen we vaak de diepgang van echte, betekenisvolle connecties.
              </p>
              <p>
                Daarom organiseren wij regelmatig exclusieve bijeenkomsten waar ondernemers en professionals elkaar ontmoeten in een intieme setting. Geen massale conferenties, maar zorgvuldig samengestelde events waar kwaliteit boven kwantiteit gaat.
              </p>
              <p>
                Bij NIN geloven we dat de juiste introductie je business kan transformeren. Wij creëren de omgeving waarin die introductie kan plaatsvinden.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 md:px-12 bg-[var(--c-dark)] text-white">
          <div className="max-w-[1400px] mx-auto">
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-white/40 mb-6">
              Onze Waarden
            </span>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-16">
              Waar we voor staan
            </h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="border-t border-white/20 pt-8">
                <span className="font-display text-6xl text-white/10 mb-4 block">01</span>
                <h3 className="font-display text-xl tracking-tight mb-4">Kwaliteit boven kwantiteit</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">
                  Liever 10 waardevolle connecties dan 100 visitekaartjes. Wij selecteren zorgvuldig wie er bij onze events aanwezig is.
                </p>
              </div>
              <div className="border-t border-white/20 pt-8">
                <span className="font-display text-6xl text-white/10 mb-4 block">02</span>
                <h3 className="font-display text-xl tracking-tight mb-4">Authenticiteit</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">
                  Geen gepitchte praatjes of gladde verkoopverhalen. Bij NIN zijn we echt, open en eerlijk over onze struggles en successen.
                </p>
              </div>
              <div className="border-t border-white/20 pt-8">
                <span className="font-display text-6xl text-white/10 mb-4 block">03</span>
                <h3 className="font-display text-xl tracking-tight mb-4">Langetermijnrelaties</h3>
                <p className="text-sm font-light text-gray-400 leading-relaxed">
                  Wij bouwen aan relaties die jaren meegaan. Onze community groeit organisch door mensen die elkaar blijven opzoeken.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-8">
            Word onderdeel van NIN
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-xl mx-auto mb-12">
            Claim je plek bij ons volgende event en ontdek de kracht van betekenisvol netwerken.
          </p>
          <a
            href="#tickets"
            className="inline-block px-8 py-4 bg-[var(--c-dark)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--c-dark)]/80 transition-colors"
          >
            Bekijk Tickets
          </a>
        </section>
      </main>
      <Footer />
      <NoiseOverlay />
    </>
  );
}
