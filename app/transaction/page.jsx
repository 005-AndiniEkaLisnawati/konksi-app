"use client";
import { useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Receipt } from "lucide-react";
import {
  Screen,
  PageHeader,
  StatCard,
  FilterChip,
  Card,
  EmptyState,
} from "@/components/affiliate/ui";
import { TransactionItem } from "@/components/affiliate/cards";
import { transactions } from "@/data/mock";

// export const Route = createFileRoute("/transaction")({
//   head: () => ({
//     meta: [
//       { title: "Riwayat Transaksi Affiliate — Konksi" },
//       {
//         name: "description",
//         content:
//           "Lihat riwayat penjualan dan status komisi affiliate: berhasil, pending, atau dibatalkan.",
//       },
//       { property: "og:title", content: "Riwayat Transaksi Affiliate — Konksi" },
//       {
//         property: "og:description",
//         content: "Riwayat penjualan dan komisi affiliate kamu di Konksi.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: TransactionPage,
// });

const filters = ["Semua", "Berhasil", "Pending", "Dibatalkan"];

export default function TransactionPage() {
  const [filter, setFilter] = useState("Semua");
  const list = transactions.filter((t) => filter === "Semua" || t.status === filter);

  return (
    <Screen>
      <PageHeader
        title="Transaksi"
        subtitle="Riwayat penjualan dan komisi"
        action={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-[11px] text-muted-foreground"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Agu 2026
          </button>
        }
      />

      <div className="grid grid-cols-3 gap-2.5">
        <StatCard label="Total Penjualan" value="186" />
        <StatCard label="Komisi Pending" value="Rp76.850" tone="warning" />
        <StatCard label="Komisi Diterima" value="Rp4,85jt" tone="success" />
      </div>

      <div className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4">
        {filters.map((f) => (
          <FilterChip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </FilterChip>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            icon={Receipt}
            title="Belum ada transaksi"
            description="Transaksi dengan status ini belum tersedia."
          />
        </div>
      ) : (
        <Card className="mt-4 px-4 py-0">
          {list.map((t, i) => (
            <TransactionItem key={t.orderId} item={t} index={i} />
          ))}
        </Card>
      )}
    </Screen>
  );
}
