'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Set initial state - content starts slightly down and faded
    gsap.set(content, { y: 60, opacity: 0.6 });

    // Create scroll animation after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const wrapper = document.querySelector('.wrapper');
      if (!wrapper) {
        // No wrapper, just show footer
        gsap.set(content, { y: 0, opacity: 1 });
        return;
      }

      // Animate footer content as wrapper scrolls away
      gsap.to(content, {
        y: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} data-theme="dark" className="footer-sticky">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero4.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 text-center w-full px-4">
        <div className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-500 font-semibold">
          Mis het niet
        </div>

        <a
          href="https://shop.weeztix.com/98f282d3-bca4-11ee-a9cb-7e126431635e/tickets?fbclid=PAdGRleAPRjYxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadNQ-13Me9BNOt4I1_f_BhZhrhNRsaCPQm6EPdQshcg8EfLNnhtMRmJREUiaw_aem_3lu3yYbRERRInudvevC07Q&shop_code=sb99tn4g&original_referer=https%3A%2F%2Fl.instagram.com%2F&event=11aac035-293f-4251-a5bf-462c4cc5bfb0"
          target="_blank"
          rel="noopener noreferrer"
          className="group block w-fit mx-auto relative overflow-hidden"
        >
          <span className="font-display text-[12vw] leading-[0.85] tracking-tighter block transition-transform duration-500 group-hover:-translate-y-full">
            CLAIM JE PLEK
          </span>
          <span className="font-display text-[12vw] leading-[0.85] tracking-tighter block absolute top-0 left-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-gray-500">
            CLAIM JE PLEK
          </span>
        </a>

        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1400px] mx-auto mt-24 px-6 md:px-12">
          <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-6 md:mb-0">
            &copy; 2026 NIN<br />Network is Networth
          </div>

          <div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-medium text-gray-400">
            <a href="https://www.instagram.com/network_is_networth/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <Link href="#" className="hover:text-white transition-colors">
              LinkedIn
            </Link>
            <a href="https://www.tiktok.com/@networkisnetworth.nl?_r=1&_t=ZN-93dzJssP0Ok" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              TikTok
            </a>
            <Link href="mailto:info@nin.nl" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
