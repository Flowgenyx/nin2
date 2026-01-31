'use client';

import { Menu } from 'lucide-react';
import { TransitionLink } from '@/components/ui/TransitionLink';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 pointer-events-none">
      <TransitionLink
        href="/"
        className="font-display font-semibold text-lg tracking-tighter pointer-events-auto cursor-pointer mix-blend-difference text-white"
      >
        NIN
      </TransitionLink>

      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] pointer-events-auto items-center">
        <div className="flex gap-8 mix-blend-difference text-white">
          <TransitionLink href="/events" className="hover:text-white/70 transition-colors duration-300">
            Events
          </TransitionLink>
          <TransitionLink href="/gallery" className="hover:text-white/70 transition-colors duration-300">
            Gallery
          </TransitionLink>
          <TransitionLink href="/over" className="hover:text-white/70 transition-colors duration-300">
            Over NIN
          </TransitionLink>
          <TransitionLink href="/contact" className="hover:text-white/70 transition-colors duration-300">
            Contact
          </TransitionLink>
        </div>
        <TransitionLink
          href="/love2meatyou"
          className="text-[#8B1A1A] hover:text-[#A52525] transition-colors duration-300"
        >
          Love2MeatYou
        </TransitionLink>
      </div>

      <button className="md:hidden pointer-events-auto mix-blend-difference text-white">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
