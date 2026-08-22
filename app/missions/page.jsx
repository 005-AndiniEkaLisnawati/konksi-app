"use client";
import { CheckCircle2, Circle, Trophy } from "lucide-react";
import { Screen, PageHeader, Card } from "@/components/affiliate/ui";
import { Button } from "@/components/ui/button";

export default function MissionsPage() {
  return (
    <Screen>
      <PageHeader title="Misi Afiliator" subtitle="Selesaikan misi untuk raih bonus poin & komisi" />

      {/* Misi Tersedia */}
      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Misi Aktif Hari Ini</h3>
      <div className="flex flex-col gap-3">
        {[
          { title: "Bagikan 3 Link Produk ke Medsos", reward: "+150 Poin", done: false },
          { title: "Dapatkan 1 Penjualan Pertama", reward: "+500 Poin", done: true },
        ].map((m, idx) => (
          <Card key={idx} className="p-3.5 flex items-center justify-between border-border/60">
            <div className="flex items-center gap-3">
              {m.done ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <h4 className="text-xs font-bold text-foreground">{m.title}</h4>
                <p className="text-[10px] text-amber-600 font-semibold mt-0.5">Hadiah: {m.reward}</p>
              </div>
            </div>
            <Button size="sm" disabled={m.done} className="h-8 text-xs rounded-lg">
              {m.done ? "Selesai" : "Kerjakan"}
            </Button>
          </Card>
        ))}
      </div>

      {/* Riwayat Selesai */}
      <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mt-6 mb-2">Riwayat Misi Selesai</h3>
      <Card className="p-4 divide-y divide-border/50">
        <div className="py-2 flex items-center justify-between text-xs">
          <span className="text-foreground font-medium">Check-in Harian Hari ke-1</span>
          <span className="text-emerald-600 font-bold">+50 Poin</span>
        </div>
        <div className="py-2 flex items-center justify-between text-xs">
          <span className="text-foreground font-medium">Lengkapi Profil & Rekening</span>
          <span className="text-emerald-600 font-bold">+200 Poin</span>
        </div>
      </Card>
    </Screen>
  );
}