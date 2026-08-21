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
} from "lucide-react";
import { Screen, SectionHeader, Card, Stagger, rp } from "@/components/affiliate/ui";
import { ProductCard } from "@/components/affiliate/cards";
import { products, activities } from "@/data/mock";

const quickCategories = [
  { label: "Jasa", icon: ShoppingBag, to: "/feeds/katalog?cat=Jasa" },
  { label: "Tempat", icon: Search, to: "/feeds/katalog?cat=Tempat" },
  { label: "Produk Digital", icon: Coins, to: "/feeds/katalog?cat=Digital" },
  { label: "Webinar", icon: Sparkles, to: "/feeds/katalog?cat=Webinar" },
];

const activityIcon = {
  sale: ShoppingBag,
  commission: Coins,
  click: MousePointerClick,
  withdraw: ArrowDownLeft,
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pb-12 text-foreground">
      {/* Header dengan background gradasi biru khas Konksi seperti di Mockup */}
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
            className="flex h-11 w-full items-center gap-2 rounded-2xl bg-white px-3.5 text-muted-foreground shadow-sm"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-[13px]">Cari layanan, produk, atau mitra...</span>
          </Link>
        </div>

        {/* Dual Card: Saldo Komisi & Poin Konksi */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href="/balance"
            className="flex items-center justify-between rounded-2xl bg-card p-3 text-card-foreground shadow-sm border border-border"
          >
            <div>
              <p className="text-[10px] text-muted-foreground">Saldo Komisi</p>
              <p className="text-[14px] font-bold text-foreground mt-0.5">{rp(1250000)}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>

          <Link
            href="/balance"
            className="flex items-center justify-between rounded-2xl bg-card p-3 text-card-foreground shadow-sm border border-border"
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
        <div className="grid grid-cols-4 gap-2 rounded-2xl bg-card p-3 shadow-sm border border-border">
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

        {/* Banner Promo / Event */}
        <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 via-primary to-purple-800 p-4 text-white shadow-md relative">
          <div className="max-w-[70%]">
            <span className="rounded-md bg-amber-400 px-2 py-0.5 text-[9px] font-bold text-slate-950 uppercase">
              Event Spesial
            </span>
            <h2 className="mt-2 text-[15px] font-bold leading-tight">
              Komisi Ekstra Hingga 15%
            </h2>
            <p className="mt-1 text-[10px] opacity-80">Periode 1 - 31 Agustus 2026</p>
            <Link
              href="/feeds/katalog"
              className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-primary shadow"
            >
              Lihat Semua
            </Link>
          </div>
        </div>

        {/* Daily Check-in Card */}
        <div className="mt-4 rounded-2xl bg-card p-3.5 border border-border shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[12px] font-semibold">Daily Check-in</p>
                <p className="text-[10px] text-muted-foreground">Check-in setiap hari dan dapatkan poin!</p>
              </div>
            </div>
            <button
              type="button"
              className="rounded-full bg-emerald-600 px-3.5 py-1 text-[11px] font-medium text-white shadow-sm"
            >
              Check-in
            </button>
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
      </div>
    </div>
  );
}