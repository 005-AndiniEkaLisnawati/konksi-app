"use client";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Heart, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, StatusBadge, Thumb, rp } from "./ui";

export function BalanceCard({ label, amount, hint, actions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-primary/30 bg-primary p-5 text-primary-foreground"
    >
      <p className="text-[12px] opacity-80">{label}</p>
      <p className="mt-1.5 text-[30px] font-semibold tracking-tight">{amount}</p>
      {hint ? (
        <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium">
          <TrendingUp className="h-3 w-3" />
          {hint}
        </span>
      ) : null}
      {actions ? <div className="mt-5 flex gap-2">{actions}</div> : null}
    </motion.div>
  );
}

export function ProductCard({ product, variant = "grid", index = 0 }) {
  const komisi = Math.round((product.price * product.commission) / 100);
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.2) }}
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card",
        variant === "scroll" && "w-[158px] shrink-0",
      )}
    >
      <Thumb seed={index} ratio="aspect-[4/3]" className="rounded-none" />
      <div className="p-3">
        <p className="line-clamp-2 text-[13px] font-medium leading-snug">{product.name}</p>
        <p className="mt-1 text-[11px] text-muted-foreground">{product.category}</p>
        <p className="mt-2 text-[13px] font-semibold">{rp(product.price)}</p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="rounded-md bg-primary-soft px-1.5 py-0.5 text-[10px] font-medium text-primary">
            Komisi {product.commission}%
          </span>
          <span className="text-[11px] font-medium text-success">{rp(komisi)}</span>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-primary py-2 text-[12px] font-medium text-primary-foreground transition-transform active:scale-[0.98]"
        >
          Promosikan
        </button>
      </div>
    </motion.article>
  );
}

export function ContentCard({ item, index = 0, featured = false }) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-2xl border border-border bg-card"
      >
        <Thumb seed={index} ratio="aspect-[16/9]" className="rounded-none">
          <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2 py-1 text-[10px] font-medium text-primary-foreground backdrop-blur">
            {item.type}
          </span>
        </Thumb>
        <div className="p-4">
          <p className="text-[15px] font-semibold leading-snug">{item.title}</p>
          <p className="mt-1 text-[12px] text-muted-foreground">{item.creator}</p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-[11px] text-muted-foreground">
              {item.views} views · {item.likes} likes
            </p>
            <button
              type="button"
              className="rounded-xl bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground transition-transform active:scale-[0.98]"
            >
              Gunakan Inspirasi
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.24) }}
      className="flex gap-3 rounded-2xl border border-border bg-card p-3"
    >
      <Thumb seed={index + 2} ratio="aspect-square" className="h-20 w-20 shrink-0" />
      <div className="min-w-0 flex-1">
        <span className="rounded-md bg-primary-soft px-1.5 py-0.5 text-[10px] font-medium text-primary">
          {item.type}
        </span>
        <p className="mt-1.5 line-clamp-2 text-[13px] font-medium leading-snug">
          {item.title}
        </p>
        <p className="mt-1 line-clamp-1 text-[11px] text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3" /> {item.views}
          </span>
          <span className="inline-flex items-center gap-1">
            <Heart className="h-3 w-3" /> {item.likes}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function TransactionItem({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: Math.min(index * 0.03, 0.2) }}
      className="flex items-center gap-3 border-b border-border py-3.5 last:border-b-0"
    >
      <Thumb seed={index} ratio="aspect-square" className="h-11 w-11 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium">{item.product}</p>
        <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
          {item.orderId} · {item.date}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p
          className={cn(
            "text-[13px] font-semibold",
            item.status === "Dibatalkan" ? "text-muted-foreground line-through" : "text-success",
          )}
        >
          +{rp(item.commission)}
        </p>
        <div className="mt-1">
          <StatusBadge status={item.status} />
        </div>
      </div>
    </motion.div>
  );
}

export function ProfileMenuItem({ icon: Icon, title, description }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors active:bg-accent"
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-medium">{title}</span>
        {description ? (
          <span className="block truncate text-[11px] text-muted-foreground">
            {description}
          </span>
        ) : null}
      </span>
      <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
    </button>
  );
}

export { Card };
