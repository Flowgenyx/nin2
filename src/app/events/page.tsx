'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';

export default function EventsPage() {
  return (
    <>
      <Footer />
      <TransitionWrapper>
        <Navigation />
        <main className="wrapper min-h-screen">
          <section className="min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-16">
            <div className="text-center max-w-4xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
                Onze Events
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8">
                Events
              </h1>
              <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
                Binnenkort meer informatie over onze aankomende events.
              </p>
            </div>
          </section>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
