'use client';

import Link from 'next/link';
import { useTransition } from '@/context/TransitionContext';

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const { navigateTo, isTransitioning } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow anchor links, external URLs, and mailto links to work normally
    if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
      onClick?.(e);
      return;
    }

    e.preventDefault();
    if (!isTransitioning) {
      navigateTo(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
