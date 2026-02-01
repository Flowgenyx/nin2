'use client';

import { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { useTransition } from '@/context/TransitionContext';

export default function OverPage() {
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

    const splitWords = (el: HTMLElement) => {
      const text = el.innerText;
      el.innerHTML = text.split(' ').map(word =>
        `<span class="word-wrap"><span class="word-inner">${word}</span></span>`
      ).join(' ');
    };

    const splitAndAnimate = (element: HTMLElement) => {
      if (element.querySelector('.word-wrap')) return;

      const paragraphs = element.querySelectorAll('p');
      if (paragraphs.length > 0) {
        paragraphs.forEach(p => splitWords(p));
      } else {
        splitWords(element);
      }

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
    <>
      <Footer />
      <TransitionWrapper>
        <Navigation />
        <main className="wrapper">
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
                NIN is ontstaan uit de overtuiging dat je netwerk je grootste asset is. In een wereld waar iedereen online connected is, missen we de diepgang van echte connecties. Wij geloven dat die ontstaan bij goed eten, een lekker borreltje en de juiste mensen om je heen.
              </p>
              <p>
                Daarom organiseren wij regelmatig intieme avonden waar ondernemers en professionals samenkomen in een ontspannen setting. Denk aan een mooi gedekte tafel, goede gesprekken en een relaxte vibe waar je jezelf kunt zijn.
              </p>
              <p>
                Geen naamkaartjes, geen elevator pitches. Gewoon een avond waar je met een goed glas in je hand de juiste mensen leert kennen.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section data-theme="dark" className="py-24 px-6 md:px-12 bg-[var(--c-dark)] text-white">
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
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
