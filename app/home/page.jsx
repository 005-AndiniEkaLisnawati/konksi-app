"use client";

import Link from "next/link";
import {
  Bell,
  Search,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Coins,
  MousePointerClick,
  ArrowDownLeft,
  Check,
  Gift,
  BookOpen
} from "lucide-react";
import { Screen, SectionHeader, Card, Stagger, rp } from "@/components/affiliate/ui";
import { ProductCard } from "@/components/affiliate/cards";
import { products, activities } from "@/data/mock";
import { Separator } from "@/components/ui/separator";

// Gunakan Carousel dari Shadcn UI untuk Slider Banner
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const checkInDays = [
  { day: 1, status: "completed" },
  { day: 2, status: "upcoming" },
  { day: 3, status: "upcoming" },
  { day: 4, status: "upcoming" },
  { day: 5, status: "upcoming" },
  { day: 6, status: "upcoming" },
  { day: 7, status: "reward" },
];

const quickCategories = [
  { label: "Jasa", icon: ShoppingBag, to: "/feeds/katalog?cat=Jasa" },
  { label: "Tempat", icon: Search, to: "/feeds/katalog?cat=Tempat" },
  { label: "Produk Digital", icon: Coins, to: "/feeds/katalog?cat=Digital" },
  { label: "Webinar", icon: Sparkles, to: "/feeds/katalog?cat=Webinar" },
];

// --- MOCK DATA BARU ---

// 1. Data Banner dari DB
const bannerSlides = [
  {
    id: 1,
    badge: "Event Spesial",
    title: "Komisi Ekstra Hingga 15%",
    period: "Periode 1 - 31 Agustus 2026",
    link: "/feeds/katalog",
    bgClass: "from-indigo-900 via-primary to-purple-800"
  },
  {
    id: 2,
    badge: "Promo Baru",
    title: "Bonus Pendaftaran 50.000 Poin",
    period: "Khusus Pengguna Baru",
    link: "/profile",
    bgClass: "from-emerald-600 via-teal-600 to-cyan-700"
  },
  {
    id: 3,
    badge: "Flash Sale",
    title: "Diskon Produk Digital 50%",
    period: "Hanya Hari Ini",
    link: "/feeds/katalog?cat=Digital",
    bgClass: "from-rose-600 via-pink-600 to-orange-500"
  }
];

// 2. Data Artikel Tips Berkonksi
const tipsArticles = [
  {
    id: 1,
    title: "Cara Efektif Promosi Link Afiliasi di Sosial Media",
    category: "Marketing",
    date: "20 Agu 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80"
  },
  {
    id: 2,
    title: "Trik Jitu Mendapatkan Komisi Pertama untuk Pemula",
    category: "Pemula",
    date: "18 Agu 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?w=500&q=80"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-12 text-foreground">
      {/* Header dengan background gradasi biru khas Konksi */}
      <div className="relative bg-gradient-to-b from-primary/90 via-primary to-background px-4 pt-6 pb-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12px] opacity-80">Hai, Konksi! 👋</p>
            <h1 className="text-[20px] font-bold tracking-tight">
              Bangun Relasi, Raih <span className="text-amber-300">Komisi</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-primary" />
            </button>
            <Link
              href="/profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
            >
              <Bookmark className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Search Bar di dalam header */}
        <div className="mt-4">
          <Link
            href="/feeds/katalog"
            className="flex h-11 w-full items-center gap-2 rounded-lg bg-white px-3.5 text-muted-foreground shadow-sm"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-[13px]">Cari layanan, produk, atau mitra...</span>
          </Link>
        </div>

        {/* Dual Card: Saldo Komisi & Poin Konksi */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href="/balance"
            className="flex items-center justify-between rounded-lg bg-card p-3 text-card-foreground shadow-sm border border-border"
          >
            <div>
              <p className="text-[10px] text-muted-foreground">Saldo Komisi</p>
              <p className="text-[14px] font-bold text-foreground mt-0.5">{rp(1250000)}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>

          <Link
            href="/balance"
            className="flex items-center justify-between rounded-lg bg-card p-3 text-card-foreground shadow-sm border border-border"
          >
            <div>
              <p className="text-[10px] text-muted-foreground">Poin Konksi</p>
              <p className="text-[14px] font-bold text-foreground mt-0.5">2.450 Poin</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>

      <div className="px-4 -mt-2">
        {/* Quick Menu Icons (Jasa, Tempat, dll) */}
        <div className="grid grid-cols-4 gap-2 rounded-lg bg-card p-3 shadow-sm border border-border">
          {quickCategories.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              href={to}
              className="flex flex-col items-center gap-1.5 py-1"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-[11px] font-medium text-muted-foreground text-center">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* SLIDER BANNER PROMO */}
        <div className="mt-4">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="-ml-2">
              {bannerSlides.map((banner) => (
                <CarouselItem key={banner.id} className="pl-2">
                  <div className={`overflow-hidden rounded-lg bg-gradient-to-r ${banner.bgClass} p-4 text-white shadow-md relative h-full`}>
                    <div className="max-w-[70%]">
                      <span className="rounded-md bg-amber-400 px-2 py-0.5 text-[9px] font-bold text-slate-950 uppercase">
                        {banner.badge}
                      </span>
                      <h2 className="mt-2 text-[15px] font-bold leading-tight">
                        {banner.title}
                      </h2>
                      <p className="mt-1 text-[10px] opacity-80">{banner.period}</p>
                      <Link
                        href={banner.link}
                        className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-primary shadow"
                      >
                        Lihat Semua
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Daily Check-in & Misi Hari ini */}
        <div className="mt-4 rounded-lg bg-card border border-border shadow-sm p-4">
          {/* Header Check-in */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-foreground">Daily Check-in</p>
                <p className="text-[11px] text-muted-foreground">Check-in setiap hari dapat poin!</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full bg-emerald-500 px-4 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-transform active:scale-95"
            >
              Check-in
            </button>
          </div>

          {/* Progress Timeline 7 Hari */}
          <div className="relative mt-6 flex items-center justify-between px-1">
            {/* Dotted Line Background */}
            <div className="absolute left-6 right-6 top-4 h-[2px] -translate-y-1/2 border-t-2 border-dashed border-muted/60 z-0"></div>

            {checkInDays.map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-1.5">
                {item.status === "completed" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 ring-2 ring-emerald-500 ring-offset-1 ring-offset-card">
                    <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                  </div>
                )}
                {item.status === "upcoming" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-muted-foreground/20 text-muted-foreground/40">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                )}
                {item.status === "reward" && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 border border-orange-200 text-orange-500 shadow-sm">
                    <Gift className="h-4 w-4" />
                  </div>
                )}
                <span
                  className={`text-[9px] font-semibold ${item.status === "completed"
                      ? "text-emerald-600"
                      : item.status === "reward"
                        ? "text-orange-500"
                        : "text-muted-foreground"
                    }`}
                >
                  Hari {item.day}
                </span>
              </div>
            ))}
          </div>

          <Separator className="my-4" />

          {/* Misi Hari Ini CTA */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-foreground">Misi Hari ini</p>
                <p className="text-[11px] text-muted-foreground">Selesaikan misi ekstra poin!</p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <span className="text-[12px] font-bold text-foreground mr-1">0/3</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Jelajahi Layanan Populer */}
        <section className="mt-6">
          <SectionHeader title="Jelajahi layanan populer" action="Lihat semua" />
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.name} product={p} variant="scroll" index={i} />
            ))}
          </div>
        </section>

        {/* Bahan buat kamu ber-konksi */}
        <section className="mt-6">
          <SectionHeader title="Bahan buat kamu ber-konksi" action="Lihat semua" />
          <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
            {products.slice(2, 6).map((p, i) => (
              <ProductCard key={`bahan-${p.name}`} product={p} variant="scroll" index={i} />
            ))}
          </div>
        </section>

        {/* TIPS BERKONKSI (ARTIKEL) - Menjawab requirement 03 yang hilang */}
        <section className="mt-6 mb-4">
          <SectionHeader title="Tips Berkonksi" action="Lihat semua" />
          <div className="mt-3 flex flex-col gap-3">
            {tipsArticles.map((tip) => (
              <Link 
                href={`/tips/${tip.id}`} 
                key={tip.id} 
                className="flex gap-3 rounded-lg border border-border bg-card p-3 shadow-sm hover:bg-muted/50 transition"
              >
                <div className="h-16 w-20 shrink-0 rounded-md bg-muted overflow-hidden relative">
                  <img src={tip.image} alt={tip.title} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-between py-0.5 w-full">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BookOpen className="h-3 w-3 text-primary" />
                    <span className="text-[10px] font-medium text-primary">{tip.category}</span>
                  </div>
                  <h3 className="line-clamp-2 text-[13px] font-semibold leading-tight text-foreground">
                    {tip.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                    <span>{tip.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{tip.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}