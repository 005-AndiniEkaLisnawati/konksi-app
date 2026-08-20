'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Share2, 
  Wallet, 
  TrendingUp, 
  ChevronRight, 
  HelpCircle, 
  Mail, 
  MessageSquare,
  Sparkles,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import FaqSection from '@/components/splashScreen/FaqSection';
import AffiliatorMarquee from '@/components/splashScreen/AffiliatorMarquee';
import HowItWorksSection from '@/components/splashScreen/HowItWorksSection';
import MaximizeEarningsCarousel from '@/components/splashScreen/MaximizeEarningsCarousel';
import KonksiShowcase from '@/components/splashScreen/KonksiShowcase';
import Footer from '@/components/splashScreen/Footer';

export default function SplashPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      
     <section className="relative w-full pt-8 pb-10 px-5 bg-gradient-to-b from-primary/15 via-primary/5 to-background flex flex-col items-center text-center overflow-hidden">
  
  {/* 1. LAYER BACKGROUND & AURA GLOW */}
  {/* Glowing Circle Aura di Belakang Maskot */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-primary/25 via-indigo-500/20 to-purple-500/15 rounded-full blur-[70px] pointer-events-none" />
  
  {/* Aksen Dot Pattern Tipis */}
  <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none" />

  {/* 2. HEADER & BRANDING */}
  {/* Top Badge Header */}
  <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold mb-5 backdrop-blur-md shadow-sm">
    <Sparkles className="w-3.5 h-3.5 fill-primary/20 animate-spin-slow" />
    <span>#EranyaAfiliasi Platform Jasa No. 1</span>
  </div>

  {/* Brand Logo */}
  <div className="relative z-10 w-36 h-10 mb-4">
    <Image
      src="https://cdn.konksi.com/app_profiles/logo.webp"
      alt="Konksi Affiliate Logo"
      fill
      className="object-contain dark:brightness-0 dark:invert drop-shadow-sm"
      priority
    />
  </div>

  {/* Headline */}
  <h1 className="relative z-10 text-2xl font-black tracking-tight text-foreground leading-tight max-w-[340px] mb-2">
    Bangun <span className="text-primary bg-clip-text text-transparent bg-primary">Kolaborasi</span>,
    <br /> 
    <span>Raih Komisi</span>
  </h1>

  {/* 3. HERO MASCOT WITH INTERACTIVE FLOATING BADGES */}
  <div className="relative w-full max-w-[320px] h-[310px] my-1 flex justify-center items-center z-10">
    
    {/* Floating Badge 1: Komisi Masuk (Kiri Atas) */}
    <div className="absolute top-4 left-0 z-20 bg-card/90 backdrop-blur-md border border-emerald-500/30 p-2.5 rounded-2xl shadow-lg shadow-emerald-500/10 flex items-center gap-2 animate-bounce-slow">
      <div className="w-7 h-7 rounded-xl bg-emerald-500/15 text-emerald-600 font-black text-xs flex items-center justify-center">
        Rp
      </div>
      <div className="text-left leading-none">
        <p className="text-[9px] text-muted-foreground font-semibold">Komisi Masuk</p>
        <p className="text-[11px] font-extrabold text-emerald-600 mt-0.5">+Rp 89.000</p>
      </div>
    </div>

    {/* Floating Badge 2: Live Link Generated (Kanan Bawah) */}
    <div className="absolute bottom-6 right-0 z-20 bg-card/90 backdrop-blur-md border border-primary/30 p-2.5 rounded-2xl shadow-lg shadow-primary/10 flex items-center gap-2 animate-float">
      <div className="w-7 h-7 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
        <Share2 className="w-3.5 h-3.5" />
      </div>
      <div className="text-left leading-none">
        <p className="text-[9px] text-muted-foreground font-semibold">Biolink Active</p>
        <p className="text-[11px] font-bold text-foreground mt-0.5">konksi.com/rangga</p>
      </div>
    </div>

    {/* Main Transparent Mascot Image */}
    <Image 
      src="/img/illustrations/splash-screen.png" 
      alt="Konksi Affiliate Mascot" 
      width={320}
      height={310}
      className="object-contain drop-shadow-[0_20px_35px_rgba(37,99,235,0.3)] transition-transform duration-500 hover:scale-105"
      priority
    />
  </div>

  {/* 4. LIVE STAT WIDGET */}
  <div className="relative z-10 w-full max-w-[340px] bg-card/85 backdrop-blur-md rounded-2xl p-3.5 border border-border/80 shadow-xl shadow-primary/5 flex items-center justify-between gap-3 mt-2">
    <div className="flex items-center gap-2.5 text-left">
      <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
        <Zap className="w-5 h-5 fill-primary/20" />
      </div>
      <div>
        <p className="text-[10px] text-muted-foreground font-medium">Sistem Afiliasi Otomatis</p>
        <a className="text-xs font-bold text-foreground" href='#Affiliator'>500+ Afiliator Sudah Cuan</a>
      </div>
    </div>
    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20 shrink-0">
      100% Gratis
    </span>
  </div>

  {/* 5. PRIMARY CTA */}
  <div className="relative z-10 w-full max-w-[340px] mt-5">
    <Link 
      href="/login" 
      className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary shadow-md text-primary-foreground font-bold text-sm shadow-lg shadow-primary/30 hover:opacity-95 transition-all active:scale-[0.98]"
    >
      <span>Mulai Buat Biolink Affiliate</span>
      <ArrowRight className="w-4 h-4" />
    </Link>
    <p className="text-[10px] text-muted-foreground mt-2 font-medium">
      Tanpa modal • Verifikasi cepat • Pencairan via e-Wallet/Bank
    </p>
  </div>
</section>

      {/* 2. FILOSOFI REKOMENDASI (MANIFESTO BUKAN AI) */}
      <section className="px-5 py-6 bg-primary/5 border-y border-border/40">
        <blockquote className="text-center italic text-xs font-medium text-foreground/80 leading-relaxed max-w-[320px] mx-auto">
          "Karna kenal jadi rekomendasi, karna percaya jadi rekomendasi, dan karena ada komisi jadi lebih semangat rekomendasi."
        </blockquote>
      </section>

      {/* 6. AFFILIATOR MARQUEE */}
      <div id='Affiliator'>
      <AffiliatorMarquee />

      </div>

      {/* 3. ALUR CARA KERJA (STEP-BY-STEP) */}
      <section className="bg-background">
        <HowItWorksSection />
      </section>

      {/* 7. MAXIMIZE EARNINGS CAROUSEL */}
     
      <MaximizeEarningsCarousel />

      <KonksiShowcase />

      <FaqSection />

      <Footer />



    </div>
  );
}