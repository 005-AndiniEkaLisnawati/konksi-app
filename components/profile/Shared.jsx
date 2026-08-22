"use client";
import { motion } from "framer-motion";
import  Link  from "next/link";
import { ChevronLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProfilePageHeader({ title, action, backTo = "/profile" }) {
  return (
    <header className="sticky top-0 z-40 -mx-4 mb-4 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-border bg-background/90 px-4 py-3 backdrop-blur">
      <Link
        href={backTo}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground active:bg-accent"
        aria-label="Kembali"
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>
      <h1 className="truncate text-[16px] font-semibold tracking-tight">{title}</h1>
      <div className="shrink-0">{action}</div>
    </header>
  );
}

export function HeaderButton({ children, icon: Icon, variant = "primary", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full px-3.5 text-[12px] font-medium transition-transform active:scale-[0.97]",
        variant === "primary"
          ? "bg-primary text-primary-foreground"
          : "border border-border bg-card text-foreground",
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </button>
  );
}

export function ProfileSection({ title, description, action, children, className }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn("mt-6 first:mt-0", className)}
    >
      {title ? (
        <div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-[14px] font-semibold tracking-tight">{title}</h2>
            {description ? (
              <p className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}

export function MobileCard({ className, children, ...props }) {
  return (
    <div
      className={cn("rounded-2xl border border-border bg-card p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export const brandColors = [
  { name: "Konksi Purple", value: "oklch(0.5402 0.1243 294.37)" },
  { name: "Blue", value: "oklch(0.58 0.14 250)" },
  { name: "Green", value: "oklch(0.62 0.14 155)" },
  { name: "Orange", value: "oklch(0.68 0.15 55)" },
  { name: "Pink", value: "oklch(0.63 0.17 350)" },
];

export function ColorSwatches({ colors = brandColors, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((c) => {
        const active = value === c.value;
        return (
          <button
            key={c.name}
            type="button"
            onClick={() => onChange?.(c.value)}
            aria-label={c.name}
            className={cn(
              "relative h-11 w-11 rounded-full border-2 transition-transform active:scale-95",
              active ? "border-primary" : "border-transparent",
            )}
            style={{ boxShadow: active ? "0 0 0 3px oklch(1 0 0 / 6%)" : undefined }}
          >
            <span
              className="absolute inset-1 rounded-full"
              style={{ background: c.value }}
            />
            {active ? (
              <Check className="absolute inset-0 m-auto h-4 w-4 text-primary-foreground" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export const backgroundPresets = [
  { name: "Default", css: "linear-gradient(160deg,#2a2440,#1b1a26)" },
  { name: "Midtown Mood", css: "linear-gradient(160deg,#5a5f68,#23262b)" },
  { name: "Navy Waveform", css: "linear-gradient(160deg,#12294f,#050b18)" },
  { name: "Verdant Layer", css: "linear-gradient(160deg,#7fd44a,#3f8b1f)" },
  { name: "Crimson Texture", css: "linear-gradient(160deg,#e0463f,#8c1f21)" },
  { name: "Acoustic Soul", css: "linear-gradient(160deg,#f0a63c,#b25c14)" },
  { name: "Silent Snowfall", css: "linear-gradient(160deg,#f4f6fb,#d5dae6)" },
  { name: "Royal Gold", css: "linear-gradient(160deg,#20201c,#0a0a08)" },
  { name: "Skywave Blue", css: "linear-gradient(160deg,#57b6f7,#2f74d0)" },
  { name: "Yellow Sunburst", css: "linear-gradient(160deg,#ffd93b,#f0a800)" },
  { name: "Blush Retro", css: "linear-gradient(160deg,#f0e2dc,#d9c3ba)" },
  { name: "Aqua Bloom", css: "linear-gradient(160deg,#8ff0e6,#4fd0c4)" },
  { name: "Soft Pink Gradient", css: "linear-gradient(160deg,#f3c7c0,#c98f95)" },
  { name: "Minimal Brush Strokes", css: "linear-gradient(160deg,#e9e6df,#c9c5bb)" },
  { name: "Fantasy Sky Clouds", css: "linear-gradient(160deg,#b9c9f2,#e8c6dd)" },
  { name: "Orange Doodle", css: "linear-gradient(160deg,#ff8a2b,#e2451f)" },
];

export function BackgroundPresetGrid({ value, onChange, presets = backgroundPresets }) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {presets.map((p) => {
        const active = value === p.name;
        return (
          <button
            key={p.name}
            type="button"
            onClick={() => onChange?.(p.name)}
            className="text-left"
          >
            <span
              className={cn(
                "block aspect-[3/4] w-full rounded-xl border-2 transition-transform active:scale-95",
                active ? "border-primary" : "border-border",
              )}
              style={{ background: p.css }}
            />
            <span
              className={cn(
                "mt-1.5 block truncate text-[10px]",
                active ? "text-primary" : "text-muted-foreground",
              )}
            >
              {p.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function OptionPills({ options, value, onChange, className }) {
  return (
    <div className={cn("flex gap-2 overflow-x-auto no-scrollbar", className)}>
      {options.map((o) => {
        const key = typeof o === "string" ? o : o.value;
        const label = typeof o === "string" ? o : o.label;
        const active = value === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange?.(key)}
            className={cn(
              "h-10 shrink-0 rounded-full border px-4 text-[12px] font-medium transition-colors",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground active:bg-accent",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function SelectableTile({ active, title, subtitle, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-[44px] rounded-2xl border p-3 text-left transition-colors",
        active ? "border-primary bg-primary-soft" : "border-border bg-card active:bg-accent",
      )}
    >
      {children}
      <p className={cn("text-[12px] font-medium", active && "text-primary")}>{title}</p>
      {subtitle ? (
        <p className="mt-0.5 text-[10.5px] text-muted-foreground">{subtitle}</p>
      ) : null}
    </button>
  );
}
