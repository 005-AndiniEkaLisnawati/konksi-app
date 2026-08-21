"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import {
  Screen,
  PageHeader,
  SectionHeader,
  FilterChip,
  EmptyState,
} from "@/components/affiliate/ui";
import { ContentCard } from "@/components/affiliate/cards";
import { contents, contentCategories } from "@/data/mock";

// export const Route = createFileRoute("/feeds/content")({
//   head: () => ({
//     meta: [
//       { title: "Inspirasi Konten Affiliate — Konksi" },
//       {
//         name: "description",
//         content:
//           "Kumpulan ide video, reels, caption, dan edukasi untuk mempromosikan produk affiliate kamu.",
//       },
//       { property: "og:title", content: "Inspirasi Konten Affiliate — Konksi" },
//       {
//         property: "og:description",
//         content: "Feed inspirasi konten untuk affiliate: reels, video, caption, dan tren.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: ContentPage,
// });

 export default function ContentPage() {
  const [cat, setCat] = useState("Semua");
  const list = contents.filter((c) => cat === "Semua" || c.type === cat);
  const [featured, ...rest] = list;

  return (
    <Screen>
      <PageHeader title="Konten" subtitle="Temukan inspirasi untuk promosi" />

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        {contentCategories.map((c) => (
          <FilterChip key={c} active={cat === c} onClick={() => setCat(c)}>
            {c}
          </FilterChip>
        ))}
      </div>

      {!featured ? (
        <div className="mt-5">
          <EmptyState
            icon={Sparkles}
            title="Belum ada konten"
            description="Pilih kategori lain untuk melihat inspirasi."
          />
        </div>
      ) : (
        <>
          <section className="mt-5">
            <SectionHeader title="Sedang Populer" action="Semua" />
            <ContentCard item={featured} index={0} featured />
          </section>

          <section className="mt-6">
            <SectionHeader title="Feed Inspirasi" />
            <div className="space-y-3">
              {rest.map((c, i) => (
                <ContentCard key={c.title} item={c} index={i + 1} />
              ))}
            </div>
          </section>
        </>
      )}
    </Screen>
  );
}
