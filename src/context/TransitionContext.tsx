'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from '@/lib/gsap';

interface TransitionContextType {
  isTransitioning: boolean;
  hasNavigated: boolean;
  navigateTo: (href: string) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Reset transition state when pathname changes (for browser back/forward)
  useEffect(() => {
    if (isTransitioning) {
      // Animate in the new page
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => setIsTransitioning(false),
        }
      );
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning) return;
      if (href === pathname) return;

      setIsTransitioning(true);
      setHasNavigated(true);

      // Exit animation
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          router.push(href);
        },
      });
    },
    [isTransitioning, router, pathname]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning, hasNavigated, navigateTo, contentRef }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within TransitionProvider');
  }
  return context;
}
