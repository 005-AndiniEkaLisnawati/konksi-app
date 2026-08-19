'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SLIDES = [
  {
    id: 1,
    title: 'Bangun Relasi, Raih Komisi',
    description: 'Satu platform terpadu untuk kelola transaksi affiliate, biolink, dan komisi harian dengan mudah.',
  },
  {
    id: 2,
    title: 'Eksplor Katalog & Feeds',
    description: 'Temukan beragam produk pilihan, bagikan link biolink unikmu, dan kumpulkan poin reward.',
  },
  {
    id: 3,
    title: 'Pencairan Komisi Instan',
    description: 'Tarik hasil komisi kapan saja dan tukarkan poin harianmu dengan berbagai reward eksklusif.',
  },
];

export default function SplashPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-neutral-950 flex justify-center items-center font-sans antialiased">
      {/* Container Frame (Mobile First) */}
      <div className="w-full max-w-md min-h-screen gradient-primary text-primary-foreground flex flex-col justify-between p-6 relative overflow-hidden shadow-2xl">
        
        {/* Subtle Ambient Lighting */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header: Brand Logo & Lewati */}
        <div className="pt-6 z-10 flex justify-between items-center">
          <div className="relative w-28 h-8">
            <Image
              src="https://cdn.konksi.com/app_profiles/logo.webp"
              alt="Konksi Logo"
              fill
              className="object-contain transition-all duration-300 dark:brightness-0 dark:invert dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
              priority
            />
          </div>

          <Link
            href="/login"
            className="text-xs text-primary-foreground/80 hover:text-primary-foreground bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 transition active:scale-95 font-medium"
          >
            Lewati
          </Link>
        </div>

        {/* Hero Section: Dynamic Favicon & Onboarding Slide */}
        <div className="flex-1 flex flex-col justify-center items-center z-10 text-center px-4 my-auto">
          
          {/* Favicon Visual Container */}
          <div className="relative mb-10">
            <div className="absolute -inset-3 bg-white/20 rounded-3xl blur-xl opacity-60 animate-pulse" />
            <div className="relative w-20 h-20 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl shadow-glow">
              <div className="relative w-10 h-10 transition-all duration-300 ease-in-out hover:scale-105">
                <Image
                  src="https://cdn.konksi.com/app_profiles/favicon.png"
                  alt="Konksi Icon"
                  fill
                  className="object-contain dark:drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
                />
              </div>
            </div>
          </div>

          {/* Slide Text Content */}
          <div className="min-h-[100px] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <h1 className="text-2xl font-bold text-primary-foreground mb-3 tracking-tight leading-snug">
              {SLIDES[activeSlide].title}
            </h1>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mx-auto">
              {SLIDES[activeSlide].description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-2 mt-8">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx 
                    ? 'w-7 bg-primary-foreground' 
                    : 'w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="pb-6 z-10 space-y-3">
          <Link
            href="/login"
            className="w-full py-3.5 px-6 bg-primary-foreground text-primary font-semibold text-sm rounded-xl shadow-glow flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 hover:opacity-95"
          >
            <span>Mulai Sekarang</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <p className="text-center text-[11px] text-primary-foreground/60">
            Dengan melanjutkan, kamu menyetujui Ketentuan Layanan Konksi.
          </p>
        </div>

      </div>
    </div>
  );
}