'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { TransitionLink } from '@/components/ui/TransitionLink';

export function Navigation() {
  const [isOnDark, setIsOnDark] = useState(false);

  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-theme="dark"]');
    if (darkSections.length === 0) return;

    const activeDarkSections = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeDarkSections.add(entry.target);
          } else {
            activeDarkSections.delete(entry.target);
          }
        });
        setIsOnDark(activeDarkSections.size > 0);
      },
      {
        rootMargin: '0px 0px -95% 0px',
      }
    );

    darkSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const textColor = isOnDark ? 'text-white' : 'text-[var(--c-dark)]';
  const hoverColor = isOnDark ? 'hover:text-white/70' : 'hover:text-[var(--c-dark)]/60';

  return (
    <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 pointer-events-none">
      <TransitionLink
        href="/"
        className={`pointer-events-auto cursor-pointer transition-colors duration-300 ${textColor}`}
      >
        <span className="font-display font-semibold text-lg tracking-tighter block">NIN</span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.2em]">Network is Networth</span>
      </TransitionLink>

      <div className="hidden md:flex gap-8 text-[11px] font-medium uppercase tracking-[0.2em] pointer-events-auto items-center">
        <div className={`flex gap-8 transition-colors duration-300 ${textColor}`}>
          <TransitionLink href="/events" className={`${hoverColor} transition-colors duration-300`}>
            Events
          </TransitionLink>
          <TransitionLink href="/gallery" className={`${hoverColor} transition-colors duration-300`}>
            Gallery
          </TransitionLink>
          <TransitionLink href="/over" className={`${hoverColor} transition-colors duration-300`}>
            Over NIN
          </TransitionLink>
          <TransitionLink href="/contact" className={`${hoverColor} transition-colors duration-300`}>
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

      <button className={`md:hidden pointer-events-auto transition-colors duration-300 ${textColor}`}>
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
