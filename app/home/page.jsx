"use client";
import  Link  from "next/link";
import {
  Bell,
  Search,
  PenLine,
  Receipt,
  Wallet,
  ShoppingBag,
  Coins,
  MousePointerClick,
  ArrowDownLeft,
} from "lucide-react";
import { Screen, PageHeader, SectionHeader, StatCard, Card, Stagger, rp } from "@/components/affiliate/ui";
import { BalanceCard, ProductCard } from "@/components/affiliate/cards";
import { products, activities } from "@/data/mock";

// export const Route = createFileRoute("/home")({
//   head: () => ({
//     meta: [
//       { title: "Beranda Affiliate — Konksi Affiliate" },
//       {
//         name: "description",
//         content:
//           "Pantau komisi, klik, penjualan, dan produk pilihan affiliate kamu dalam satu dashboard Konksi.",
//       },
//       { property: "og:title", content: "Beranda Affiliate — Konksi Affiliate" },
//       {
//         property: "og:description",
//         content: "Dashboard komisi, performa, dan produk pilihan untuk affiliate Konksi.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: HomePage,
// });

const quickActions = [
  { label: "Cari Produk", icon: Search, to: "/feeds/katalog" },
  { label: "Buat Konten", icon: PenLine, to: "/feeds/content" },
  { label: "Transaksi", icon: Receipt, to: "/transaction" },
  { label: "Tarik Saldo", icon: Wallet, to: "/balance" },
];

const activityIcon = {
  sale: ShoppingBag,
  commission: Coins,
  click: MousePointerClick,
  withdraw: ArrowDownLeft,
};

const bars = [
  { label: "Apr", value: 42 },
  { label: "Mei", value: 58 },
  { label: "Jun", value: 51 },
  { label: "Jul", value: 74 },
  { label: "Agu", value: 92 },
];

 export default function HomePage() {
  return (
    <Screen>
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 pb-5">
        <div className="min-w-0">
          <p className="text-[12px] text-muted-foreground">Selamat pagi,</p>
          <h1 className="truncate text-[20px] font-semibold tracking-tight">Raka 👋</h1>
          <p className="mt-1 text-[12px] text-muted-foreground">
            Performamu naik minggu ini, terus jaga ritmenya.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          >
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>
          <Link
            href="/profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-primary-foreground"
          >
            RP
          </Link>
        </div>
      </header>

      <BalanceCard
        label="Total Komisi"
        amount="Rp 4.850.000"
        hint="+12,5% bulan ini"
        actions={
          <div className="flex w-full items-end gap-1.5">
            {bars.map((b) => (
              <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded-md bg-white/25"
                  style={{ height: `${b.value * 0.42}px` }}
                />
                <span className="text-[9px] opacity-70">{b.label}</span>
              </div>
            ))}
          </div>
        }
      />

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <StatCard label="Klik" value="12.840" />
        <StatCard label="Penjualan" value="186" />
        <StatCard label="Conversion" value="4,82%" tone="primary" />
      </div>

      <section className="mt-6">
        <SectionHeader title="Aksi Cepat" />
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map(({ label, icon: Icon, to }) => (
            <Link
              key={label}
              href={to}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-1.5 py-3 transition-transform active:scale-[0.97]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-center text-[10px] leading-tight text-muted-foreground">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <SectionHeader title="Produk Pilihan" action="Lihat semua" />
        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-1">
          {products.slice(0, 5).map((p, i) => (
            <ProductCard key={p.name} product={p} variant="scroll" index={i} />
          ))}
        </div>
      </section>

      <section className="mt-6">
        <SectionHeader title="Performa" />
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-muted-foreground">Komisi bulan ini</p>
              <p className="text-[18px] font-semibold text-primary">{rp(1240000)}</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-muted-foreground">Bulan lalu</p>
              <p className="text-[15px] font-medium text-muted-foreground">{rp(1102000)}</p>
            </div>
          </div>
          <div className="mt-4 flex h-20 items-end gap-2">
            {bars.map((b, i) => (
              <div key={b.label} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={
                    i === bars.length - 1
                      ? "w-full rounded-md bg-primary"
                      : "w-full rounded-md bg-muted"
                  }
                  style={{ height: `${b.value * 0.6}px` }}
                />
                <span className="text-[10px] text-muted-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-6">
        <SectionHeader title="Aktivitas Terbaru" action="Semua" />
        <Card className="divide-y divide-border p-0">
          {activities.map((a, i) => {
            const Icon = activityIcon[a.type];
            return (
              <Stagger key={a.title} delay={i * 0.04}>
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium">{a.title}</p>
                    <p className="truncate text-[11px] text-muted-foreground">{a.detail}</p>
                  </div>
                  {a.amount ? (
                    <span
                      className={
                        a.amount.startsWith("-")
                          ? "shrink-0 text-[12px] font-medium text-muted-foreground"
                          : "shrink-0 text-[12px] font-medium text-success"
                      }
                    >
                      {a.amount}
                    </span>
                  ) : null}
                </div>
              </Stagger>
            );
          })}
        </Card>
      </section>
    </Screen>
  );
}
