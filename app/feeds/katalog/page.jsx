"use client";
import { useState } from "react";
import { PackageSearch, Search, Filter, Store, Tag } from "lucide-react";
import {
  PageHeader,
  EmptyState,
} from "@/components/affiliate/ui";
import { ProductCard } from "@/components/affiliate/cards";
import { products, productCategories } from "@/data/mock";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// MOCK DATA: Daftar Mitra (Brand/Toko)
const mitraList = ["Semua Mitra", "Konksi Official", "TechIndo", "Beauty Care", "Edukasi Plus"];

export default function KatalogPage() {
  const [cat, setCat] = useState("Semua");
  const [mitra, setMitra] = useState("Semua Mitra");
  const [q, setQ] = useState("");

  // Logic filter: Kategori + Mitra + Search query
  const list = products.filter(
    (p) =>
      (cat === "Semua" || p.category === cat) &&
      (mitra === "Semua Mitra" || p.mitraName === mitra) && 
      p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <PageHeader
        title="Katalog Produk"
        subtitle="Temukan produk terbaik dari berbagai mitra"
      />

      {/* Search Input */}
      <div className="relative mt-2">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Cari produk atau layanan..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-9 h-11 bg-card border-border/60 shadow-sm rounded-xl focus-visible:ring-primary"
        />
      </div>

      {/* FILTER SECTION MENGGUNAKAN SHADCN SELECT */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        
        {/* Filter Mitra */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1.5">
            <Store className="h-3.5 w-3.5 text-primary" />
            Mitra Pilihan
          </label>
          <Select value={mitra} onValueChange={setMitra}>
            <SelectTrigger className="h-10 bg-card border-border/60 rounded-xl text-xs font-medium">
              <SelectValue placeholder="Pilih Mitra" />
            </SelectTrigger>
            <SelectContent>
              {mitraList.map((m) => (
                <SelectItem key={m} value={m} className="text-xs">
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Filter Kategori */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted-foreground flex items-center gap-1.5">
            <Tag className="h-3.5 w-3.5 text-primary" />
            Kategori
          </label>
          <Select value={cat} onValueChange={setCat}>
            <SelectTrigger className="h-10 bg-card border-border/60 rounded-xl text-xs font-medium">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent>
              {productCategories.map((c) => (
                <SelectItem key={c} value={c} className="text-xs">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-medium text-muted-foreground">
          Menampilkan <span className="text-foreground font-bold">{list.length}</span> produk
        </p>
      </div>

      {list.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border p-8 bg-card/50">
          <EmptyState
            icon={PackageSearch}
            title="Produk tidak ditemukan"
            description="Coba gunakan kata kunci, kategori, atau mitra lain."
          />
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-3 pb-8">
          {list.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      )}
    </>
  );
}