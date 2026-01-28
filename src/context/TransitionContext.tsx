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

  // Entry animation when pathname changes - NO transforms to preserve fixed positioning
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Always ensure content is visible immediately
    gsap.set(content, { opacity: 1 });

    if (isTransitioning) {
      // Animate in the new page (opacity only - no transforms!)
      gsap.fromTo(
        content,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => setIsTransitioning(false),
        }
      );
    } else {
      setIsTransitioning(false);
    }
  }, [pathname]);

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning) return;
      if (href === pathname) return;

      setIsTransitioning(true);
      setHasNavigated(true);

      // Exit animation - opacity only, no transforms to preserve fixed positioning
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
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
