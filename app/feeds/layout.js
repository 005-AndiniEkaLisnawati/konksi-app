"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Screen } from "@/components/affiliate/ui";
import { Package, Sparkles } from "lucide-react";

export default function FeedsLayout({ children }) {
  const pathname = usePathname();
  const isKatalog = pathname.includes("/katalog");

  return (
    <Screen>
      {/* Sticky Tab Switcher dengan efek Glassmorphism */}
      <div className="sticky top-0 z-50 -mx-4 mb-4 bg-background/80 px-4 py-3 backdrop-blur-xl border-b border-border/50">
        <div className="flex rounded-xl bg-muted/50 p-1 border border-border/50">
          <Link
            href="/feeds/katalog"
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition-all duration-300 ${
              isKatalog
                ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Package className={`h-4 w-4 ${isKatalog ? "text-primary" : ""}`} />
            Katalog Produk
          </Link>
          <Link
            href="/feeds/content"
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition-all duration-300 ${
              !isKatalog
                ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <Sparkles className={`h-4 w-4 ${!isKatalog ? "text-primary" : ""}`} />
            Feed Konten
          </Link>
        </div>
      </div>

      {/* Render halaman aktif (Katalog atau Konten) */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
        {children}
      </div>
    </Screen>
  );
}