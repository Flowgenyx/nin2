'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { TransitionWrapper } from '@/components/layout/TransitionWrapper';
import { Lightbox } from '@/components/ui/Lightbox';
import { gallerySections, allGalleryImages } from '@/lib/gallery';
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

  // Calculate global index for lightbox from section + local index
  const getGlobalIndex = (sectionIndex: number, imageIndex: number) => {
    let offset = 0;
    for (let i = 0; i < sectionIndex; i++) {
      offset += gallerySections[i].images.length;
    }
    return offset + imageIndex;
  };

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

          {/* Sections */}
          <div ref={gridRef}>
            {gallerySections.length > 0 ? (
              gallerySections.map((section, sectionIdx) => (
                <section key={sectionIdx} className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                  {/* Section header */}
                  <div className="border-t border-black/10 pt-8 mb-8 grid md:grid-cols-12 gap-4">
                    <h2 className="md:col-span-7 font-display text-2xl md:text-3xl tracking-tighter">
                      {section.title}
                    </h2>
                    <span className="md:col-span-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 md:text-right md:self-end">
                      {section.date}
                    </span>
                  </div>

                  {/* Photo grid */}
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {section.images.map((image, imgIdx) => (
                      <button
                        key={imgIdx}
                        className="gallery-item group relative aspect-[3/4] overflow-hidden cursor-pointer"
                        onClick={() => setLightboxIndex(getGlobalIndex(sectionIdx, imgIdx))}
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
                </section>
              ))
            ) : (
              <div className="text-center py-24">
                <p className="text-gray-400 font-light text-lg">
                  Binnenkort meer beelden van onze events.
                </p>
              </div>
            )}
          </div>
        </main>
        <NoiseOverlay />
      </TransitionWrapper>

      {/* Lightbox */}
      {lightboxIndex !== null && allGalleryImages.length > 0 && (
        <Lightbox
          images={allGalleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
