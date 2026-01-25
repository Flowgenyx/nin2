'use client';

import { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { getProjectBySlug, getNextProject, getPreviousProject } from '@/lib/projects';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Navigation } from '@/components/layout/Navigation';

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const nextProject = getNextProject(slug);
  const prevProject = getPreviousProject(slug);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Hero text animation
    if (heroTextRef.current) {
      gsap.from(heroTextRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--c-bg)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Project niet gevonden</h1>
          <Link href="/" className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NoiseOverlay />
      <Navigation />

      <main ref={containerRef} className="bg-[var(--c-bg)]">
        {/* Hero */}
        <section className="relative h-[80vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-20">
            <div className="max-w-[1600px] mx-auto w-full">
              <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                {project.location} — {project.year}
              </span>
              <h1
                ref={heroTextRef}
                className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter"
              >
                {project.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Project Info */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-12 md:gap-20">
            {/* Description */}
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 mb-8">
                {project.description}
              </p>
              <div className="text-base md:text-lg font-light leading-relaxed text-gray-600 whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <h3 className="font-display text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">
                  Projectgegevens
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between py-4 border-b border-black/10">
                    <span className="text-sm uppercase tracking-widest text-gray-500">Opdrachtgever</span>
                    <span className="text-sm font-medium">{project.details.client}</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-black/10">
                    <span className="text-sm uppercase tracking-widest text-gray-500">Oppervlakte</span>
                    <span className="text-sm font-medium">{project.details.area}</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-black/10">
                    <span className="text-sm uppercase tracking-widest text-gray-500">Status</span>
                    <span className="text-sm font-medium">{project.details.status}</span>
                  </div>
                  <div className="flex justify-between py-4 border-b border-black/10">
                    <span className="text-sm uppercase tracking-widest text-gray-500">Jaar</span>
                    <span className="text-sm font-medium">{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="pb-20 md:pb-32 px-6 md:px-12">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-black/10">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-2">
              {/* Previous */}
              <Link
                href={`/projects/${prevProject?.slug}`}
                className="group p-8 md:p-16 border-r border-black/10 hover:bg-black/5 transition-colors"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400 mb-4">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
                  Vorige
                </div>
                <h3 className="font-display text-xl md:text-2xl tracking-tighter">
                  {prevProject?.title}
                </h3>
              </Link>

              {/* Next */}
              <Link
                href={`/projects/${nextProject?.slug}`}
                className="group p-8 md:p-16 text-right hover:bg-black/5 transition-colors"
              >
                <div className="flex items-center justify-end gap-3 text-xs uppercase tracking-widest text-gray-400 mb-4">
                  Volgende
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="font-display text-xl md:text-2xl tracking-tighter">
                  {nextProject?.title}
                </h3>
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-20 md:py-32 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            Terug naar Alle Projecten
          </Link>
        </section>
      </main>
    </>
  );
}
