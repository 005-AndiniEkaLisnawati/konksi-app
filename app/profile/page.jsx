"use client";
import {
  Pencil,
  User,
  CreditCard,
  Landmark,
  Heart,
  Bookmark,
  BarChart3,
  Bell,
  ShieldCheck,
  Settings2,
  LifeBuoy,
  MessageCircle,
  Info,
} from "lucide-react";
import { Screen, SectionHeader, Card, StatCard } from "@/components/affiliate/ui";
import { ProfileMenuItem } from "@/components/affiliate/cards";

// export const Route = createFileRoute("/profile")({
//   head: () => ({
//     meta: [
//       { title: "Profil Affiliate — Konksi" },
//       {
//         name: "description",
//         content:
//           "Kelola profil, data pembayaran, preferensi notifikasi, dan pengaturan akun affiliate Konksi kamu.",
//       },
//       { property: "og:title", content: "Profil Affiliate — Konksi" },
//       {
//         property: "og:description",
//         content: "Pengaturan akun dan statistik affiliate kamu di Konksi.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: ProfilePage,
// });

const groups = [
  {
    title: "Akun",
    items: [
      { icon: User, title: "Informasi Profil", description: "Nama, bio, dan foto profil" },
      { icon: CreditCard, title: "Data Pembayaran", description: "Metode pencairan komisi" },
      { icon: Landmark, title: "Rekening Bank", description: "BCA •••• 4821" },
    ],
  },
  {
    title: "Affiliate",
    items: [
      { icon: Heart, title: "Produk Favorit", description: "24 produk disimpan" },
      { icon: Bookmark, title: "Konten Tersimpan", description: "12 inspirasi konten" },
      { icon: BarChart3, title: "Statistik Affiliate", description: "Klik, konversi, dan komisi" },
    ],
  },
  {
    title: "Pengaturan",
    items: [
      { icon: Bell, title: "Notifikasi", description: "Penjualan dan komisi masuk" },
      { icon: ShieldCheck, title: "Keamanan", description: "Kata sandi dan verifikasi" },
      { icon: Settings2, title: "Preferensi", description: "Bahasa dan tampilan" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: LifeBuoy, title: "Pusat Bantuan" },
      { icon: MessageCircle, title: "Hubungi Support" },
      { icon: Info, title: "Tentang Konksi" },
    ],
  },
];

 export default function ProfilePage() {
  return (
    <Screen>
      <Card className="flex items-center gap-3.5">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-[16px] font-semibold text-primary-foreground">
          RP
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[16px] font-semibold tracking-tight">Raka Pratama</p>
          <p className="truncate text-[12px] text-primary">@rakaaffiliate</p>
          <p className="truncate text-[11px] text-muted-foreground">raka.pratama@email.com</p>
        </div>
        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary"
        >
          <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </Card>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        <StatCard label="Penjualan" value="186" />
        <StatCard label="Komisi" value="Rp4,85jt" tone="primary" />
        <StatCard label="Klik" value="12,8K" />
      </div>

      {groups.map((g) => (
        <section key={g.title} className="mt-6">
          <SectionHeader title={g.title} />
          <Card className="divide-y divide-border p-0">
            {g.items.map((item) => (
              <ProfileMenuItem key={item.title} {...item} />
            ))}
          </Card>
        </section>
      ))}

      <p className="mt-8 text-center text-[11px] text-muted-foreground">
        Konksi Affiliate v1.0
      </p>
    </Screen>
  );
}
