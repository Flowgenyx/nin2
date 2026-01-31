'use client';

interface TransitionWrapperProps {
  children: React.ReactNode;
}

export function TransitionWrapper({ children }: TransitionWrapperProps) {
  return (
    <div className="transition-wrapper">
      {children}
    </div>
  );
}
