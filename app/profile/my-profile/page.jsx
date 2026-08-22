"use client"
import { useState } from "react";
import {
  Save,
  ImageUp,
  Trash2,
  Camera,
  Eye,
  EyeOff,
  MessageCircle,
  Book,
  Send,
} from "lucide-react";
import { Screen } from "@/components/affiliate/ui";
import {
  ProfilePageHeader,
  HeaderButton,
  ProfileSection,
  MobileCard,
  ColorSwatches,
  BackgroundPresetGrid,
} from "@/components/profile/Shared";
import { LinkPreview } from "@/components/profile/Preview";


const BIO =
  "Bantu jasa lokal makin dikenal lewat rekomendasi teman di sekitar yang punya usaha tenang, yang bantu promosi senang.";

const socialFields = [
  { icon: MessageCircle, label: "WhatsApp", value: "https://wa.me/628127774955" },
  { icon: Book, label: "Instagram", value: "https://www.instagram.com/konksicom/" },
  { icon: Send, label: "Telegram", value: "" },
];

export default function MyProfilePage() {
  const [showPreview, setShowPreview] = useState(true);
  const [bio, setBio] = useState(BIO);
  const [color, setColor] = useState("oklch(0.5402 0.1243 294.37)");
  const [bg, setBg] = useState("Default");

  return (
    <Screen className="pt-0">
      <ProfilePageHeader
        title="Tampilan Profil"
        action={<HeaderButton icon={Save}>Simpan</HeaderButton>}
      />

      <ProfileSection
        title="Preview Halaman"
        description="Tampilan halaman publik kamu"
        action={
          <button
            type="button"
            onClick={() => setShowPreview((v) => !v)}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-3 text-[11.5px] text-muted-foreground"
          >
            {showPreview ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {showPreview ? "Sembunyikan" : "Tampilkan"}
          </button>
        }
      >
        {showPreview ? <LinkPreview accent={color} bio={bio} /> : null}
      </ProfileSection>

      <ProfileSection title="Banner Profil">
        <MobileCard className="p-3">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl bg-[linear-gradient(120deg,#6d3ff0,#3b1d7a)]">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] font-bold tracking-wide text-primary-foreground">
              K<span className="text-[#8ee7ff]">O</span>NKSI AFFILIATE
            </span>
            <span className="absolute bottom-2 left-3 rounded-full bg-black/35 px-2 py-0.5 text-[9.5px] text-primary-foreground backdrop-blur">
              1200 × 480 px
            </span>
            <button
              type="button"
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-destructive/90 text-destructive-foreground"
              aria-label="Hapus banner"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary text-[12.5px] font-medium active:bg-accent"
          >
            <ImageUp className="h-4 w-4" /> Ganti banner
          </button>
        </MobileCard>
      </ProfileSection>

      <ProfileSection title="Foto Profil">
        <MobileCard className="flex items-center gap-3.5">
          <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-secondary text-[11px] font-bold text-primary">
            KNX
            <span className="absolute -bottom-1 -right-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Camera className="h-3 w-3" />
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium">Foto Profil</p>
            <button
              type="button"
              className="mt-1 text-[12px] font-medium text-primary active:opacity-70"
            >
              Ganti foto
            </button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground active:bg-accent"
            aria-label="Hapus foto"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </MobileCard>
      </ProfileSection>

      <ProfileSection title="Bio">
        <MobileCard className="p-3">
          <textarea
            value={bio}
            maxLength={160}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full resize-none bg-transparent text-[13px] leading-relaxed outline-none placeholder:text-muted-foreground"
            placeholder="Ceritakan tentang kamu..."
          />
          <p className="mt-1 text-right text-[11px] text-muted-foreground">
            {bio.length}/160
          </p>
        </MobileCard>
      </ProfileSection>

      <ProfileSection title="Warna" description="Warna aksen halaman kamu">
        <MobileCard>
          <div className="flex items-center gap-3">
            <span
              className="h-11 w-11 shrink-0 rounded-xl border border-border"
              style={{ background: color }}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium">Warna aktif</p>
              <p className="truncate text-[11px] text-muted-foreground">{color}</p>
            </div>
          </div>
          <div className="mt-4">
            <ColorSwatches value={color} onChange={setColor} />
          </div>
        </MobileCard>
      </ProfileSection>

      <ProfileSection title="Link Sosial">
        <div className="space-y-2.5">
          {socialFields.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex min-h-[52px] items-center gap-3 rounded-2xl border border-border bg-card px-3.5"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <input
                defaultValue={value}
                placeholder={label}
                className="w-full min-w-0 bg-transparent py-3 text-[12.5px] outline-none placeholder:text-muted-foreground"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-3 text-[12px] font-medium text-primary active:opacity-70"
        >
          Lihat semua
        </button>
      </ProfileSection>

      <ProfileSection title="Background" description="Pilih latar halaman biolink kamu">
        <BackgroundPresetGrid value={bg} onChange={setBg} />
      </ProfileSection>
    </Screen>
  );
}
