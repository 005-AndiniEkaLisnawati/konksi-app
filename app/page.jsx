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
import AffiliatorMarquee from '@/components/splashScreen/AffiliatorMarquee';
import HowItWorksSection from '@/components/splashScreen/HowItWorksSection';
import MaximizeEarningsCarousel from '@/components/splashScreen/MaximizeEarningsCarousel';

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
      
        

      {/* 4. KATALOG YANG BISA DIPROMOSIKAN */}
      <section className="px-5 py-8 bg-card/40 border-t border-border/40">
        <div className="mb-4">
          <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Pilihan Serba Ada</span>
          <h2 className="text-base font-extrabold text-foreground">Katalog Siap Sebar</h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: 'Jasa & Home Service', detail: 'Potong rambut, Kebersihan, dll', bg: 'bg-blue-500/10 text-blue-600' },
            { label: 'Produk Digital', detail: 'E-Course, e-Book, Template', bg: 'bg-emerald-500/10 text-emerald-600' },
            { label: 'Webinar & Event', detail: 'Tiket workshop, seminar', bg: 'bg-purple-500/10 text-purple-600' },
            { label: 'Akomodasi & Venue', detail: 'Sewa tempat, ruang meeting', bg: 'bg-amber-500/10 text-amber-600' },
          ].map((cat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-background border border-border/60">
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5 ${cat.bg}`}>
                {cat.label}
              </span>
              <p className="text-[11px] font-medium text-foreground leading-tight">{cat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DUA SISI EKOSISTEM (MITRA & AFILIATOR) */}
      <section className="px-5 py-8 border-t border-border/40 bg-background">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <h3 className="text-xs font-bold text-foreground mb-1">Kenapa Harus Konksi Affiliate?</h3>
          <ul className="space-y-2 mt-3 text-[11px] text-muted-foreground">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span><strong>Transparansi Penuh:</strong> Dashboard real-time tanpa komisi tersembunyi.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span><strong>Fitur Diskon Mandiri:</strong> Bisa kasih potongan harga ke pembeli dari bagian komisimu.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span><strong>Pencairan Mudah:</strong> Withdraw komisi langsung ke rekening bank atau e-wallet.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. FAQ RINGKAS */}
      <section className="px-5 py-8 bg-card/30 border-t border-border/40">
        <h2 className="text-base font-extrabold text-foreground mb-4">Sering Ditanyakan (FAQ)</h2>
        <div className="space-y-2.5">
          {[
            { q: 'Apakah daftar jadi Afiliator dipungut biaya?', a: '100% Gratis! Kamu bisa langsung buat biolink dan promosi dalam hitungan menit.' },
            { q: 'Bagaimana cara pembeli bertransaksi?', a: 'Pembeli cukup buka link konksi.com/username milikmu, pilih layanan, dan checkout.' },
            { q: 'Berapa besaran komisi yang didapatkan?', a: 'Komisi bervariasi sesuai kesepakatan dengan Mitra Jasa (bisa persentase atau nominal Rp tetap).' },
          ].map((faq, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-background border border-border/50">
              <h3 className="text-xs font-bold text-foreground flex items-center justify-between">
                <span>{faq.q}</span>
                <HelpCircle className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-2" />
              </h3>
              <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FOOTER MEREK PT KONKSI AKSELERA SINERGI */}
      <footer className="px-5 pt-8 pb-12 bg-card border-t border-border mt-auto">
        <div className="mb-6">
          <div className="relative w-28 h-8 mb-3">
            <Image
              src="https://cdn.konksi.com/app_profiles/logo.webp"
              alt="Konksi Akselera Sinergi"
              fill
              className="object-contain dark:brightness-0 dark:invert"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mb-4 leading-relaxed">
            Platform Afiliasi Jasa Indonesia yang mempertemukan Mitra, Affiliator, dan Pembeli dalam satu ekosistem kolaboratif.
          </p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary shrink-0" />
              <span>Halo Konksi (Chat CS 24/7)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>support@konksi.com</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/50 text-xs">
          <div>
            <h4 className="font-bold text-foreground mb-2.5">Menu Utama</h4>
            <ul className="space-y-2 text-muted-foreground text-[11px]">
              <li><Link href="#" className="hover:text-foreground">Daftar Afiliator</Link></li>
              <li><Link href="#" className="hover:text-foreground">Daftar Mitra Jasa</Link></li>
              <li><Link href="#" className="hover:text-foreground">Tentang Konksi</Link></li>
              <li><Link href="#" className="hover:text-foreground">Blog & Tips Cuan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-2.5">Bantuan & Legal</h4>
            <ul className="space-y-2 text-muted-foreground text-[11px]">
              <li><Link href="#" className="hover:text-foreground">Pusat Bantuan FAQ</Link></li>
              <li><Link href="#" className="hover:text-foreground">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-foreground">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-foreground">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-border/40 text-center text-[10px] text-muted-foreground">
          © 2025 PT Konksi Akselera Sinergi. All rights reserved.
        </div>
      </footer>

    </div>
  );
}