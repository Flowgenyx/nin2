'use client';

import { useTransition } from '@/context/TransitionContext';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export function TransitionWrapper({ children }: TransitionWrapperProps) {
  const { contentRef } = useTransition();

  return (
    <div ref={contentRef} className="transition-wrapper">
      {children}
    </div>
  );
}
