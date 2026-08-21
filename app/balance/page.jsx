"use client";
import { ArrowUpRight, History, Landmark, Wallet, Clock, Coins } from "lucide-react";
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

// export const Route = createFileRoute("/balance")({
//   head: () => ({
//     meta: [
//       { title: "Saldo & Pencairan — Konksi Affiliate" },
//       {
//         name: "description",
//         content:
//           "Kelola saldo affiliate: saldo tersedia, komisi pending, rekening pencairan, dan riwayat saldo.",
//       },
//       { property: "og:title", content: "Saldo & Pencairan — Konksi Affiliate" },
//       {
//         property: "og:description",
//         content: "Pantau saldo tersedia dan riwayat penarikan komisi affiliate kamu.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: BalancePage,
// });

const breakdown = [
  { icon: Wallet, label: "Saldo tersedia", value: 2450000 },
  { icon: Clock, label: "Saldo pending", value: 760000 },
  { icon: Coins, label: "Total komisi", value: 4850000 },
];

 export default function BalancePage() {
  return (
    <Screen>
      <PageHeader title="Saldo" subtitle="Kelola penghasilan affiliate kamu" />

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

      <section className="mt-5">
        <SectionHeader title="Rincian Saldo" />
        <Card className="divide-y divide-border p-0">
          {breakdown.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft text-primary">
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
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Landmark className="h-4.5 w-4.5" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium">BCA</p>
            <p className="text-[11px] text-muted-foreground">•••• 4821 · Raka Pratama</p>
          </div>
          <span className="shrink-0 rounded-full bg-success/12 px-2 py-0.5 text-[10px] font-medium text-success">
            Utama
          </span>
        </Card>
      </section>

      <section className="mt-6">
        <SectionHeader title="Riwayat Saldo" action="Semua" />
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
                        ? "text-[13px] font-semibold text-success"
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
