'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { TransitionLink } from '@/components/ui/TransitionLink';

const events = [
  {
    day: '01',
    month: 'MRT',
    year: '2026',
    title: 'NIN Netwerk Diner',
    location: 'Badhoevedorp',
    venue: 'Mondi Skybar',
    description:
      'Een avond vol betekenisvolle connecties bij Mondi Skybar in Badhoevedorp. Vanaf 18:00 schuif je aan voor een exclusief network dinner, gevolgd door de R&Borrel vanaf 21:00. Netwerken, genieten en verbinden tot 01:00.',
    status: 'Tickets Beschikbaar' as const,
  },
];

export default function EventsPage() {
  return (
    <>
      <Footer />
      <TransitionWrapper>
        <Navigation />
        <main className="wrapper min-h-screen">
          {/* Hero */}
          <section className="min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-8">
            <div className="text-center max-w-4xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
                Onze Events
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter">
                Events
              </h1>
            </div>
          </section>

          {/* Intro */}
          <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.1]">
                Waar ambitieuze ondernemers samenkomen.
              </h2>
            </div>
            <div className="md:col-span-5 flex items-end">
              <p className="text-base font-light leading-relaxed text-gray-700">
                Onze events zijn zorgvuldig samengesteld voor ondernemers die geloven in de kracht van betekenisvolle connecties. Geen massale conferenties, maar intieme bijeenkomsten waar kwaliteit boven kwantiteit gaat.
              </p>
            </div>
          </section>

          {/* Event List */}
          <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="space-y-0">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="border-t border-black/10 py-12 md:py-16 grid md:grid-cols-12 gap-8 md:gap-12 items-start"
                >
                  {/* Date */}
                  <div className="md:col-span-2">
                    <span className="font-display text-5xl md:text-6xl tracking-tighter leading-none">
                      {event.day}
                    </span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mt-1">
                      {event.month} {event.year}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-7">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tighter mb-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">
                      <span>{event.location}</span>
                      <span className="text-gray-300">—</span>
                      <span>{event.venue}</span>
                    </div>
                    <p className="text-base font-light leading-relaxed text-gray-600 max-w-xl">
                      {event.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-3 md:flex md:justify-end md:items-start">
                    {event.status === 'Tickets Beschikbaar' ? (
                      <a
                        href="https://shop.weeztix.com/98f282d3-bca4-11ee-a9cb-7e126431635e/tickets?fbclid=PAdGRleAPRjYxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadNQ-13Me9BNOt4I1_f_BhZhrhNRsaCPQm6EPdQshcg8EfLNnhtMRmJREUiaw_aem_3lu3yYbRERRInudvevC07Q&shop_code=sb99tn4g&original_referer=https%3A%2F%2Fl.instagram.com%2F&event=11aac035-293f-4251-a5bf-462c4cc5bfb0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-[var(--c-dark)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--c-dark)]/80 transition-colors"
                      >
                        Tickets
                      </a>
                    ) : (
                      <span className="inline-block px-6 py-3 border border-black/20 text-xs uppercase tracking-[0.2em] font-semibold text-gray-400">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Final border */}
            <div className="border-t border-black/10" />
          </section>

          {/* CTA Section */}
          <section className="py-32 px-6 text-center">
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter mb-8">
              Mis geen enkel event
            </h2>
            <p className="text-gray-600 font-light text-lg max-w-xl mx-auto mb-12">
              Schrijf je in en ontvang als eerste updates over aankomende NIN events.
            </p>
            <TransitionLink
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--c-dark)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--c-dark)]/80 transition-colors"
            >
              Neem Contact Op
            </TransitionLink>
          </section>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
