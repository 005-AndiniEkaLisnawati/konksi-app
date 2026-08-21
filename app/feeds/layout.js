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
      {/* Tab Switcher ala Mockup */}
      <div className="mb-4 flex rounded-xl bg-card p-1 border border-border">
        <Link
          href="/feeds/katalog"
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
            isKatalog
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Package className="h-4 w-4" />
          Katalog
        </Link>
        <Link
          href="/feeds/content"
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
            !isKatalog
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          Konten
        </Link>
      </div>

      {/* Render halaman aktif (Katalog atau Konten) */}
      {children}
    </Screen>
  );
}