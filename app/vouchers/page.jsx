"use client";
import { Ticket, Copy, CheckCircle2 } from "lucide-react";
import { Screen, PageHeader, Card } from "@/components/affiliate/ui";
import { Button } from "@/components/ui/button";

export default function VouchersPage() {
  return (
    <Screen>
      <PageHeader title="Voucher Saya" subtitle="Daftar voucher aktif dan siap digunakan" />

      <div className="flex flex-col gap-3 pb-8">
        {[
          { code: "KONKSI50", title: "Diskon Khusus Layanan Jasa Rp50.000", expired: "Berlaku hingga 31 Agu 2026" },
          { code: "CASHBACK100", title: "Cashback Komisi Ekstra", expired: "Berlaku hingga 15 Sep 2026" },
        ].map((v, i) => (
          <Card key={i} className="p-4 border-l-4 border-l-primary flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded mb-1">
                  {v.code}
                </span>
                <h3 className="text-xs font-bold text-foreground">{v.title}</h3>
                <p className="text-[10px] text-muted-foreground mt-1">{v.expired}</p>
              </div>
              <Ticket className="h-6 w-6 text-primary/40" />
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
              <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" /> Siap Digunakan
              </span>
              <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5 rounded-lg">
                <Copy className="h-3 w-3" /> Salin Kode
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
}