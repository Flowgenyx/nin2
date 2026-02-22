'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');
  const [bericht, setBericht] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email, telefoon, bericht }),
      });

      if (!res.ok) throw new Error('Verzenden mislukt');

      setStatus('success');
      setNaam('');
      setEmail('');
      setTelefoon('');
      setBericht('');
    } catch {
      setStatus('error');
    }
  }

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
                Neem Contact Op
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter">
                Contact
              </h1>
            </div>
          </section>

          {/* Content + Form */}
          <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto grid md:grid-cols-12 gap-16">
            {/* Left: Text */}
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl md:text-4xl tracking-tighter mb-8">
                Laten we connecten.
              </h2>
              <div className="text-base font-light leading-relaxed text-gray-700 space-y-6 mb-12">
                <p>
                  Heb je een vraag, wil je samenwerken of ben je benieuwd naar onze events? We horen graag van je.
                </p>
                <p>
                  Vul het formulier in en we nemen zo snel mogelijk contact met je op.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
                    E-mail
                  </span>
                  <a href="mailto:Contact@networkisnetworth.nl" className="text-[var(--c-dark)] hover:text-gray-600 transition-colors">
                    Contact@networkisnetworth.nl
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
                    Socials
                  </span>
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/network_is_networth/" target="_blank" rel="noopener noreferrer" className="text-[var(--c-dark)] hover:text-gray-600 transition-colors">Instagram</a>
                    <a href="#" className="text-[var(--c-dark)] hover:text-gray-600 transition-colors">LinkedIn</a>
                    <a href="https://www.tiktok.com/@networkisnetworth.nl?_r=1&_t=ZN-93dzJssP0Ok" target="_blank" rel="noopener noreferrer" className="text-[var(--c-dark)] hover:text-gray-600 transition-colors">TikTok</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-7">
              {status === 'success' ? (
                <div className="py-16 text-center">
                  <p className="font-display text-3xl tracking-tighter mb-4">Bericht ontvangen!</p>
                  <p className="text-gray-500 font-light">We nemen zo snel mogelijk contact met je op.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-xs uppercase tracking-[0.2em] font-semibold underline underline-offset-4 hover:text-gray-500 transition-colors"
                  >
                    Nieuw bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label htmlFor="naam" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                      Naam
                    </label>
                    <input
                      type="text"
                      id="naam"
                      required
                      value={naam}
                      onChange={(e) => setNaam(e.target.value)}
                      placeholder="Je volledige naam"
                      className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black py-3 text-base font-light outline-none transition-colors duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="je@email.nl"
                      className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black py-3 text-base font-light outline-none transition-colors duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      value={telefoon}
                      onChange={(e) => setTelefoon(e.target.value)}
                      placeholder="+31 6 12345678"
                      className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black py-3 text-base font-light outline-none transition-colors duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                      Bericht
                    </label>
                    <textarea
                      id="bericht"
                      required
                      rows={4}
                      value={bericht}
                      onChange={(e) => setBericht(e.target.value)}
                      placeholder="Waar kunnen we je mee helpen?"
                      className="w-full bg-transparent border-0 border-b border-black/20 focus:border-black py-3 text-base font-light outline-none transition-colors duration-300 placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500">Er ging iets mis. Probeer het opnieuw of mail ons direct.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-block px-8 py-4 bg-[var(--c-dark)] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[var(--c-dark)]/80 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Versturen...' : 'Verstuur Bericht'}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>
    </>
  );
}
