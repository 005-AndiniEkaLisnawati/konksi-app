"use client";
import { useState } from "react";
import { CalendarDays, Receipt, ShoppingBag, UserCheck } from "lucide-react";
import {
  Screen,
  PageHeader,
  StatCard,
  Card,
  EmptyState,
} from "@/components/affiliate/ui";
import { TransactionItem } from "@/components/affiliate/cards";
import { transactions } from "@/data/mock";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TransactionPage() {
  // Tab mode: "affiliate" (Penjualan Komisi) atau "buyer" (Belanja Sendiri)
  const [tab, setTab] = useState("affiliate");
  const [statusFilter, setStatusFilter] = useState("Semua");

  const list = transactions.filter((t) => statusFilter === "Semua" || t.status === statusFilter);

  return (
    <Screen>
      <PageHeader
        title="Transaksi"
        subtitle="Riwayat pesanan afiliasi & pembelian pribadi"
        action={
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-[11px] text-muted-foreground shadow-sm hover:bg-muted"
          >
            <CalendarDays className="h-3.5 w-3.5" />
            Agu 2026
          </button>
        }
      />

      {/* Tab Switcher: Affiliate vs Buyer (Req 01) */}
      <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-muted/50 rounded-xl border border-border/50">
        <button
          onClick={() => setTab("affiliate")}
          className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
            tab === "affiliate" ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground"
          }`}
        >
          <ShoppingBag className="h-3.5 w-3.5 text-primary" />
          Komisi Afiliasi
        </button>
        <button
          onClick={() => setTab("buyer")}
          className={`flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
            tab === "buyer" ? "bg-background text-foreground shadow-sm ring-1 ring-border" : "text-muted-foreground"
          }`}
        >
          <UserCheck className="h-3.5 w-3.5 text-primary" />
          Pembelian Saya (Buyer)
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        <StatCard label="Total Penjualan" value="186" />
        <StatCard label="Komisi Pending" value="Rp76.850" tone="warning" />
        <StatCard label="Komisi Diterima" value="Rp4,85jt" tone="success" />
      </div>

      {/* Filter Status menggunakan Shadcn Select */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-muted-foreground">Filter Status:</span>
        <div className="w-[160px]">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-9 bg-card border-border/60 rounded-xl text-xs font-medium">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Semua" className="text-xs">Semua Status</SelectItem>
              <SelectItem value="Berhasil" className="text-xs">Berhasil</SelectItem>
              <SelectItem value="Pending" className="text-xs">Pending</SelectItem>
              <SelectItem value="Dibatalkan" className="text-xs">Dibatalkan</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {list.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            icon={Receipt}
            title={tab === "affiliate" ? "Belum ada transaksi afiliasi" : "Belum ada riwayat pembelian"}
            description="Transaksi dengan status ini belum tersedia di sistem."
          />
        </div>
      ) : (
        <Card className="mt-4 px-4 py-0 divide-y divide-border/50">
          {list.map((t, i) => (
            <TransactionItem key={t.orderId} item={t} index={i} />
          ))}
        </Card>
      )}
    </Screen>
  );
}