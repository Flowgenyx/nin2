'use client';

import { createContext, useContext, useState, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionContextType {
  isTransitioning: boolean;
  hasNavigated: boolean;
  navigateTo: (href: string) => void;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (href: string) => {
    if (href === pathname) return;
    setHasNavigated(true);
    window.scrollTo(0, 0);
    router.push(href);
  };

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
