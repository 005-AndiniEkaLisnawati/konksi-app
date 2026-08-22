import { Link2, Book, Music2, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const socials = [Link2, Book, Music2, Phone, Mail];

const shapeClass = {
  Rounded: "rounded-xl",
  Soft: "rounded-2xl",
  Pill: "rounded-full",
};

const cardStyleClass = {
  Solid: "bg-[#12d6ec] text-[#062b33]",
  Glass: "bg-white/20 text-white backdrop-blur",
  Outline: "border border-white/60 text-white",
};

/** Miniature Konksi biolink page preview. */
export function LinkPreview({
  background = "linear-gradient(170deg,#3aa9f0,#2f6fe0)",
  accent = "oklch(0.5402 0.1243 294.37)",
  name = "Konksi Affiliate",
  username = "@konksiaffiliate",
  bio = "Bantu jasa lokal makin dikenal lewat rekomendasi teman di sekitar. Yang punya usaha tenang, yang bantu promosi senang.",
  blocks = ["JOIN AFFILIATOR 100% GRATIS", "GABUNG SEBAGAI MITRA", "DOWNLOAD APPS (Playstore)"],
  buttonShape = "Rounded",
  cardStyle = "Solid",
  iconStyle = "Filled",
  compact = false,
  font = "Geist",
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border"
      style={{ background, fontFamily: font === "Geist" ? undefined : font }}
    >
      <div className="px-4 pb-5 pt-5 text-center">
        <span
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[11px] font-bold"
          style={{ color: accent }}
        >
          KNX
        </span>
        <p className="mt-2.5 text-[15px] font-semibold text-white">{name}</p>
        <p className="text-[11px] text-white/80">{username}</p>
        {!compact ? (
          <p className="mx-auto mt-2 max-w-[280px] text-[11px] leading-relaxed text-white/85">
            {bio}
          </p>
        ) : null}

        <div className="mt-3 flex items-center justify-center gap-3">
          {socials.map((Icon, i) => (
            <span
              key={i}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full",
                iconStyle === "Filled" && "bg-white/20",
                iconStyle === "Outline" && "border border-white/60",
              )}
            >
              <Icon className="h-3.5 w-3.5 text-white" />
            </span>
          ))}
        </div>

        <div className="mt-4 space-y-2.5 text-left">
          {blocks.map((b) => (
            <div
              key={b}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2.5",
                shapeClass[buttonShape] || shapeClass.Rounded,
                cardStyleClass[cardStyle] || cardStyleClass.Solid,
              )}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[8px] font-bold text-[#1f2937]">
                KNX
              </span>
              <span className="min-w-0 text-[11.5px] font-semibold leading-tight">{b}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-semibold tracking-wide text-white/80">
          K<span style={{ color: "#c4f0ff" }}>O</span>NKSI AFFILIATE
        </p>
      </div>
    </div>
  );
}
