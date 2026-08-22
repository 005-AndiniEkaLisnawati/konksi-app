"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Gift, History, Landmark, Wallet, Clock, Coins, ShieldCheck, ChevronRight } from "lucide-react";
import {
  Screen,
  PageHeader,
  SectionHeader,
  Card,
  StatusBadge,
  Stagger,
  rp,
} from "@/components/affiliate/ui";
import { BalanceCard } from "@/components/affiliate/cards";
import { balanceHistory } from "@/data/mock";
import { Button } from "@/components/ui/button";

const breakdown = [
  { icon: Wallet, label: "Saldo tersedia", value: 2450000 },
  { icon: Clock, label: "Saldo pending", value: 760000 },
  { icon: Coins, label: "Total komisi", value: 4850000 },
];

export default function BalancePage() {
  const [activeTab, setActiveTab] = useState("saldo");

  return (
    <Screen>
      <PageHeader 
        title="Saldo & Poin" 
        subtitle="Kelola penghasilan dan poin afiliasi kamu" 
      />

      {/* Tab Switcher: Saldo Komisi vs Poin Konksi */}
      <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-muted/50 rounded-xl border border-border/50">
        <button
          onClick={() => setActiveTab("saldo")}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === "saldo" ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground"
          }`}
        >
          Saldo Komisi (Rp)
        </button>
        <button
          onClick={() => setActiveTab("poin")}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === "poin" ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground"
          }`}
        >
          Poin Konksi
        </button>
      </div>

      {/* TAMPILAN SALDO KOMISI */}
      {activeTab === "saldo" ? (
        <>
          <BalanceCard
            label="Saldo tersedia"
            amount="Rp 2.450.000"
            hint="+ Rp850.000 bulan ini"
            actions={
              <>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white/95 py-2.5 text-[13px] font-semibold text-primary transition-transform active:scale-[0.98]"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Tarik Saldo
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 px-4 py-2.5 text-[13px] font-medium transition-transform active:scale-[0.98]"
                >
                  <History className="h-4 w-4" />
                  Riwayat
                </button>
              </>
            }
          />

          {/* CTA KELENGKAPAN KYC & REKENING (Requirement 02) */}
          <section className="mt-4">
            <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Verifikasi KYC & Rekening</p>
                  <p className="text-[10px] text-muted-foreground">Lengkapi data agar pencairan saldo lebih cepat & aman.</p>
                </div>
              </div>
              <Link href="/profile/kyc">
                <Button size="sm" variant="outline" className="h-8 text-[11px] font-bold border-amber-500/50 text-amber-700 hover:bg-amber-500/10">
                  Lengkapi
                </Button>
              </Link>
            </div>
          </section>

          <section className="mt-5">
            <SectionHeader title="Rincian Saldo" />
            <Card className="divide-y divide-border p-0">
              {breakdown.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 px-4 py-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="min-w-0 flex-1 truncate text-[13px] text-muted-foreground">
                    {label}
                  </p>
                  <p className="shrink-0 text-[14px] font-semibold">{rp(value)}</p>
                </div>
              ))}
            </Card>
          </section>

          <section className="mt-6">
            <SectionHeader title="Rekening pencairan" action="Kelola" />
            <Card className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Landmark className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium">BCA</p>
                <p className="text-[11px] text-muted-foreground">•••• 4821 · Raka Pratama</p>
              </div>
              <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600">
                Utama
              </span>
            </Card>
          </section>
        </>
      ) : (
        /* TAMPILAN POIN KONKSI & PENUKARAN (Requirement 02 & 03) */
        <div className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-5 text-white shadow-md relative overflow-hidden">
            <p className="text-xs opacity-90">Total Poin Tersedia</p>
            <h2 className="text-3xl font-extrabold mt-1">2.450 Poin</h2>
            <p className="text-[11px] opacity-80 mt-1">Setara dengan Rp24.500 nilai penukaran voucher</p>
            
            <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
              <span className="text-xs">Mau tukar poin jadi hadiah?</span>
              <Link href="/rewards">
                <Button size="sm" className="bg-white text-orange-600 hover:bg-slate-100 font-bold text-xs h-8">
                  <Gift className="h-3.5 w-3.5 mr-1.5" /> Klaim Hadiah
                </Button>
              </Link>
            </div>
          </div>

          <section className="mt-2">
            <SectionHeader title="Riwayat Poin Masuk/Keluar" />
            <Card className="px-4 py-0 divide-y divide-border/50">
              <div className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-foreground">Check-in Harian (Hari 3)</p>
                  <p className="text-[10px] text-muted-foreground">20 Agu 2026</p>
                </div>
                <span className="font-bold text-emerald-600">+50 Poin</span>
              </div>
              <div className="py-3 flex items-center justify-between text-xs">
                <div>
                  <p className="font-semibold text-foreground">Tukar Voucher Diskon Rp50rb</p>
                  <p className="text-[10px] text-muted-foreground">18 Agu 2026</p>
                </div>
                <span className="font-bold text-rose-600">-500 Poin</span>
              </div>
            </Card>
          </section>
        </div>
      )}

      {/* RIWAYAT TRANSAKSI SALDO (Global) */}
      <section className="mt-6">
        <SectionHeader title="Riwayat Transaksi Saldo" action="Semua" />
        <Card className="px-4 py-0">
          {balanceHistory.map((h, i) => (
            <Stagger key={h.title + h.date} delay={i * 0.04}>
              <div className="flex items-center gap-3 border-b border-border py-3.5 last:border-b-0">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium">{h.title}</p>
                  <p className="truncate text-[11px] text-muted-foreground">
                    {h.detail} · {h.date}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p
                    className={
                      h.amount > 0
                        ? "text-[13px] font-semibold text-emerald-600"
                        : "text-[13px] font-semibold text-foreground"
                    }
                  >
                    {h.amount > 0 ? "+" : "-"}
                    {rp(Math.abs(h.amount))}
                  </p>
                  <div className="mt-1">
                    <StatusBadge status={h.status} />
                  </div>
                </div>
              </div>
            </Stagger>
          ))}
        </Card>
      </section>
    </Screen>
  );
}