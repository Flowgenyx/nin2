'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/lib/gallery';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const image = images[currentIndex];

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9500] flex items-center justify-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]/95 cursor-pointer"
        onClick={handleClose}
      />

      {/* Close */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors"
        aria-label="Sluiten"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <span className="absolute top-6 left-6 text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">
        {currentIndex + 1} / {images.length}
      </span>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-8 z-10 text-white/40 hover:text-white transition-colors p-2"
          aria-label="Vorige"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={goNext}
          className="absolute right-4 md:right-8 z-10 text-white/40 hover:text-white transition-colors p-2"
          aria-label="Volgende"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative z-10 w-[90vw] h-[80vh] md:w-[80vw] md:h-[85vh] flex flex-col items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>

        {image.caption && (
          <p className="mt-4 text-white/50 text-xs font-semibold uppercase tracking-[0.2em] text-center">
            {image.caption}
          </p>
        )}
      </div>
    </div>
  );
}
