'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      y: 150,
      opacity: 0.5,
      scrollTrigger: {
        trigger: '.wrapper',
        start: 'bottom 100%',
        end: 'bottom 20%',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer-sticky">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"
          alt="Footer Background"
          fill
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center w-full px-4">
        <div className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-500 font-semibold">
          Start a Project
        </div>

        <Link
          href="mailto:hello@flowgenyx.com"
          className="group block w-fit mx-auto relative overflow-hidden"
        >
          <span className="font-display text-[12vw] leading-[0.85] tracking-tighter block transition-transform duration-500 group-hover:-translate-y-full">
            LET&apos;S TALK
          </span>
          <span className="font-display text-[12vw] leading-[0.85] tracking-tighter block absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-gray-500">
            LET&apos;S TALK
          </span>
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto mt-24 px-6 md:px-12">
          <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 md:mb-0">
            &copy; 2025 Flowgenyx<br />All Rights Reserved
          </div>

          <div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Behance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
