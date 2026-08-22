"use client";
import { Gift, Sparkles, ChevronRight, Ticket } from "lucide-react";
import { Screen, PageHeader, Card } from "@/components/affiliate/ui";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <Screen>
      <PageHeader 
        title="Klaim Hadiah" 
        subtitle="Tukarkan Poin Konksi kamu dengan reward menarik" 
      />

      {/* Banner Poin Saya & Shortcut Voucher */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white shadow-md flex items-center justify-between">
        <div>
          <p className="text-xs opacity-90">Poin Kamu Saat Ini</p>
          <h2 className="text-2xl font-extrabold mt-0.5">2.450 Poin</h2>
          <Link href="/vouchers" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
            <Ticket className="h-3.5 w-3.5" /> 3 Voucher Aktif <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <Gift className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Shortcut ke Misi */}
      <Link href="/missions" className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-card border border-border shadow-sm hover:bg-muted/50 transition">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Butuh Poin Tambahan?</p>
            <p className="text-[11px] text-muted-foreground">Selesaikan misi harian untuk klaim poin gratis.</p>
          </div>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>

      <h3 className="text-sm font-bold text-foreground mt-6 mb-3">Voucher Eksklusif Ditukar</h3>
      
      {/* Grid Katalog Hadiah */}
      <div className="grid grid-cols-2 gap-3 pb-8">
        {[
          { title: "Voucher Diskon Rp50rb", points: "500 Poin", stock: "Tersisa 12" },
          { title: "Cashback Saldo Rp100rb", points: "1.000 Poin", stock: "Tersisa 5" },
        ].map((item, idx) => (
          <Card key={idx} className="p-3.5 flex flex-col justify-between border-border/60">
            <div>
              <div className="h-24 rounded-lg bg-muted mb-3 flex items-center justify-center text-primary font-bold">
                <Gift className="h-8 w-8 text-amber-500" />
              </div>
              <h4 className="text-xs font-bold text-foreground line-clamp-1">{item.title}</h4>
              <p className="text-[11px] text-amber-600 font-semibold mt-0.5">{item.points}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{item.stock}</p>
            </div>
            <Button size="sm" className="w-full mt-3 h-8 text-xs font-bold rounded-lg">
              Tukarkan
            </Button>
          </Card>
        ))}
      </div>
    </Screen>
  );
}