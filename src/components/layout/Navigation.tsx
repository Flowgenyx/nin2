'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
      <Link
        href="/"
        className="font-display font-semibold text-lg tracking-tighter pointer-events-auto cursor-pointer"
      >
        NIN
      </Link>

      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] pointer-events-auto">
        <Link href="/over" className="hover:text-white/70 transition-colors duration-300">
          Over
        </Link>
        <Link href="/programma" className="hover:text-white/70 transition-colors duration-300">
          Programma
        </Link>
        <Link href="/sprekers" className="hover:text-white/70 transition-colors duration-300">
          Sprekers
        </Link>
        <Link href="/partners" className="hover:text-white/70 transition-colors duration-300">
          Partners
        </Link>
        <Link href="#tickets" className="hover:text-white/70 transition-colors duration-300">
          Tickets
        </Link>
      </div>

      <button className="md:hidden pointer-events-auto">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
