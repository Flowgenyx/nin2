'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { Lightbox } from '@/components/ui/Lightbox';
import { galleryImages } from '@/lib/gallery';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll('.gallery-item');

    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          delay: (i % 3) * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Footer />
      <TransitionWrapper>
        <Navigation />
        <main className="wrapper min-h-screen">
          {/* Hero */}
          <section className="min-h-[40vh] flex items-center justify-center px-6 pt-32 pb-8">
            <div className="text-center max-w-4xl">
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-6">
                Sfeerimpressie
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter">
                Gallery
              </h1>
            </div>
          </section>

          {/* Grid */}
          <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
            {galleryImages.length > 0 ? (
              <div
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              >
                {galleryImages.map((image, i) => (
                  <button
                    key={i}
                    className="gallery-item group relative aspect-[3/4] overflow-hidden cursor-pointer"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Bekijk ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4 md:p-6">
                      {image.caption && (
                        <span className="text-white text-xs font-semibold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          {image.caption}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-400 font-light text-lg">
                  Binnenkort meer beelden van onze events.
                </p>
              </div>
            )}
          </section>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>

      {/* Lightbox */}
      {lightboxIndex !== null && galleryImages.length > 0 && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
