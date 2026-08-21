"use client";
import { useState } from "react";
// import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal, PackageSearch } from "lucide-react";
import {
  Screen,
  PageHeader,
  SearchInput,
  FilterChip,
  EmptyState,
} from "@/components/affiliate/ui";
import { ProductCard } from "@/components/affiliate/cards";
import { products, productCategories } from "@/data/mock";

// export const Route = createFileRoute("/feeds/katalog")({
//   head: () => ({
//     meta: [
//       { title: "Katalog Produk Affiliate — Konksi" },
//       {
//         name: "description",
//         content:
//           "Jelajahi katalog produk affiliate Konksi lengkap dengan harga, persentase komisi, dan estimasi penghasilan.",
//       },
//       { property: "og:title", content: "Katalog Produk Affiliate — Konksi" },
//       {
//         property: "og:description",
//         content: "Temukan produk untuk dipromosikan beserta estimasi komisinya.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: KatalogPage,
// });

 export default function KatalogPage() {
  const [cat, setCat] = useState("Semua");
  const [q, setQ] = useState("");

  const list = products.filter(
    (p) =>
      (cat === "Semua" || p.category === cat) &&
      p.name.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <Screen>
      <PageHeader
        title="Katalog Produk"
        subtitle="Temukan produk untuk dipromosikan"
        action={
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card"
          >
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          </button>
        }
      />

      <SearchInput
        placeholder="Cari produk..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />



      <div className="no-scrollbar -mx-4 mt-4 flex gap-2 overflow-x-auto px-4">
        {productCategories.map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </FilterChip>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-muted-foreground">{list.length} produk tersedia</p>

      {list.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            icon={PackageSearch}
            title="Produk tidak ditemukan"
            description="Coba kata kunci atau kategori lain."
          />
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-3">
          {list.map((p, i) => (
            <ProductCard key={p.name} product={p} index={i} />
          ))}
        </div>
      )}
    </Screen>
  );
}
