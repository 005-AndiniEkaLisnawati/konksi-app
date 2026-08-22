"use client"
import { useState } from "react";
import {
  Copy,
  Plus,
  GripVertical,
  Link2,
  Play,
  MoreHorizontal,
  Eye,
  EyeOff,
  MessageCircle,
  ShoppingBag,
  Image as ImageIcon,
  Book,
} from "lucide-react";
import { Screen } from "@/components/affiliate/ui";
import {
  ProfilePageHeader,
  HeaderButton,
  ProfileSection,
  MobileCard,
} from "@/components/profile/Shared";
import { LinkPreview } from "@/components/profile/Preview";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const blocks = [
  { icon: Link2, title: "JOIN AFFILIATOR 100% GRATIS", subtitle: "Link · 1.284 klik" },
  { icon: Link2, title: "GABUNG SEBAGAI MITRA", subtitle: "Link · 642 klik" },
  { icon: Link2, title: "DOWNLOAD APPS (Playstore)", subtitle: "Link · 918 klik" },
  { icon: Play, title: "Video Tersemat", subtitle: "Video · YouTube" },
  { icon: MessageCircle, title: "GRUP WA BER-KONKSI", subtitle: "WhatsApp · 311 klik" },
];

const blockTypes = [
  { icon: Link2, label: "Link" },
  { icon: Play, label: "Video" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: ShoppingBag, label: "Product" },
  { icon: ImageIcon, label: "Image" },
  { icon: Book, label: "Social Media" },
];

function LinkBlock({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-3">
      <span className="shrink-0 text-muted-foreground">
        <GripVertical className="h-4 w-4" />
      </span>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] font-medium">{title}</p>
        <p className="truncate text-[11px] text-muted-foreground">{subtitle}</p>
      </div>
      <button
        type="button"
        aria-label="Menu blok"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground active:bg-accent"
      >
        <MoreHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function BiolinkPage() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Screen className="pt-0">
      <ProfilePageHeader
        title="Biolink"
        action={
          <HeaderButton
            variant="ghost"
            icon={showPreview ? EyeOff : Eye}
            onClick={() => setShowPreview((v) => !v)}
          >
            Preview
          </HeaderButton>
        }
      />

      <ProfileSection>
        <MobileCard>
          <p className="text-[11.5px] text-muted-foreground">Biolink Saya</p>
          <div className="mt-2 flex items-center gap-2">
            <p className="min-w-0 flex-1 truncate text-[13px] font-medium text-primary">
              https://konksi.com/konksiaffiliate
            </p>
            <button
              type="button"
              aria-label="Salin biolink"
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl border border-border bg-secondary px-3 text-[11.5px] font-medium active:bg-accent"
            >
              <Copy className="h-3.5 w-3.5" /> Salin
            </button>
          </div>
        </MobileCard>
      </ProfileSection>

      {showPreview ? (
        <ProfileSection title="Preview Biolink">
          <LinkPreview
            blocks={[
              "JOIN AFFILIATOR 100% GRATIS",
              "GABUNG SEBAGAI MITRA",
              "DOWNLOAD APPS (Playstore)",
              "GRUP WA BER-KONKSI",
            ]}
          />
        </ProfileSection>
      ) : null}

      <ProfileSection title="Daftar Blok" description="Tekan dan geser untuk mengurutkan">
        <div className="space-y-2.5">
          {blocks.map((b) => (
            <LinkBlock key={b.title} {...b} />
          ))}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-[13px] font-medium text-primary-foreground transition-transform active:scale-[0.99]"
            >
              <Plus className="h-4 w-4" /> Tambah Blok
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="mx-auto max-w-[412px] rounded-t-3xl">
            <SheetHeader className="px-4">
              <SheetTitle className="text-[15px]">Pilih Jenis Blok</SheetTitle>
            </SheetHeader>
            <div className="grid grid-cols-2 gap-2.5 px-4 pb-8">
              {blockTypes.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  className="flex min-h-[76px] flex-col items-start gap-2 rounded-2xl border border-border bg-card p-3 text-left active:bg-accent"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[12.5px] font-medium">{label}</span>
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </ProfileSection>
    </Screen>
  );
}
