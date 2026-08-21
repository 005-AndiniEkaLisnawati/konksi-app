"use client";
import { useState } from "react";
import { Sparkles, Clapperboard, Layers } from "lucide-react";
import {
  PageHeader,
  EmptyState,
} from "@/components/affiliate/ui";
import { ContentCard } from "@/components/affiliate/cards";
import { contents, contentCategories } from "@/data/mock";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// MOCK DATA: Sumber Konten
const contentSources = [
  "Semua Sumber",
  "Konksi Internal",
  "TikTok",
  "Instagram Reels",
];

export default function ContentPage() {
  const [cat, setCat] = useState("Semua");
  const [source, setSource] = useState("Semua Sumber");

  // Filter Kategori & Sumber
  const list = contents.filter(
    (c) => 
      (cat === "Semua" || c.type === cat) &&
      (source === "Semua Sumber" || c.source === source)
  );

  return (
    <>
      <PageHeader 
        title="Inspirasi Konten" 
        subtitle="Ide promosi dari mitra & kreator sosial media" 
      />

      {/* FILTER SECTION MENGGUNAKAN SHADCN SELECT (Grid 2 Kolom) */}
      <div className="mt-2 grid grid-cols-2 gap-3">
        
        {/* Filter Sumber Konten */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1.5">
            <Clapperboard className="h-3.5 w-3.5 text-primary" />
            Sumber Konten
          </label>
          <Select value={source} onValueChange={setSource}>
            <SelectTrigger className="h-10 bg-card border-border/60 rounded-xl text-xs font-medium">
              <SelectValue placeholder="Pilih Sumber" />
            </SelectTrigger>
            <SelectContent>
              {contentSources.map((s) => (
                <SelectItem key={s} value={s} className="text-xs">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filter Format Konten / Kategori */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-primary" />
            Format
          </label>
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="h-10 bg-card border-border/60 rounded-xl text-xs font-medium">
              <SelectValue placeholder="Pilih Format" />
            </SelectTrigger>
            <SelectContent>
              {contentCategories.map((c) => (
                <SelectItem key={c} value={c} className="text-xs">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>

      {list.length === 0 ? (
        <div className="mt-12">
          <EmptyState
            icon={Sparkles}
            title="Belum ada konten"
            description="Tidak ada inspirasi untuk filter yang kamu pilih saat ini."
          />
        </div>
      ) : (
        /* 
          SCROLLING SHORTS LAYOUT 
          Memakai snap-y dan snap-mandatory agar saat discroll di HP 
          terasa seperti feed TikTok/Reels yang 'nempel' per konten.
        */
        <div className="mt-4 -mx-4 px-4 h-[70vh] overflow-y-auto snap-y snap-mandatory flex flex-col gap-4 pb-24 no-scrollbar">
          {list.map((c, i) => (
            <div key={i} className="snap-start snap-always w-full flex-shrink-0">
              <ContentCard item={c} index={i} featured={i === 0 && cat === "Semua"} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}