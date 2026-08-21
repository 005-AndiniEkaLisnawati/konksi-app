"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const rp = (n) => "Rp" + new Intl.NumberFormat("id-ID").format(n);

export function Screen({ children, className }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={cn("w-full px-4 pb-28 pt-6", className)}
    >
      {children}
    </motion.main>
  );
}

export function Stagger({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({ title, subtitle, action }) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 pb-5">
      <div className="min-w-0">
        <h1 className="truncate text-[22px] font-semibold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="mt-1 text-[13px] text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

export function SectionHeader({ title, action, onAction }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-[15px] font-semibold tracking-tight">{title}</h2>
      {action ? (
        <button
          type="button"
          onClick={onAction}
          className="text-[12px] font-medium text-primary transition-opacity active:opacity-70"
        >
          {action}
        </button>
      ) : null}
    </div>
  );
}

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn("rounded-2xl border border-border bg-card p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function StatCard({ icon: Icon, label, value, hint, tone = "default" }) {
  return (
    <Card className="p-3">
      {Icon ? (
        <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Icon className="h-3.5 w-3.5" />
        </span>
      ) : null}
      <p
        className={cn(
          "text-[17px] font-semibold tracking-tight",
          tone === "primary" && "text-primary",
          tone === "success" && "text-success",
          tone === "warning" && "text-warning",
        )}
      >
        {value}
      </p>
      <p className="mt-0.5 truncate text-[11px] text-muted-foreground">{label}</p>
      {hint ? <p className="mt-1 text-[11px] text-success">{hint}</p> : null}
    </Card>
  );
}

const statusStyles = {
  Berhasil: "bg-success/12 text-success",
  Diterima: "bg-success/12 text-success",
  Selesai: "bg-success/12 text-success",
  Pending: "bg-warning/12 text-warning",
  Diproses: "bg-warning/12 text-warning",
  Dibatalkan: "bg-destructive/12 text-destructive",
};

export function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium",
        statusStyles[status] || "bg-muted text-muted-foreground",
      )}
    >
      {status}
    </span>
  );
}

export function FilterChip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-muted-foreground active:bg-accent",
      )}
    >
      {children}
    </button>
  );
}

export function SearchInput({ placeholder = "Cari...", value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-3">
      <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full min-w-0 bg-transparent text-[13px] outline-none placeholder:text-muted-foreground"
      />
    </div>
  );
}

export function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-border px-6 py-10 text-center">
      {Icon ? <Icon className="h-6 w-6 text-muted-foreground" /> : null}
      <p className="mt-3 text-[14px] font-medium">{title}</p>
      {description ? (
        <p className="mt-1 text-[12px] text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function Thumb({ seed = 0, className, ratio = "aspect-[4/3]", children }) {
  const grads = [
    "from-[#6d4bd6] to-[#2b2350]",
    "from-[#2f6f6a] to-[#1e2a3a]",
    "from-[#8a4a6e] to-[#2d2038]",
    "from-[#4a5f9e] to-[#1f2333]",
    "from-[#9a6a3a] to-[#33261c]",
    "from-[#3f7a4d] to-[#1d2a22]",
  ];
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-gradient-to-br",
        grads[seed % grads.length],
        ratio,
        className,
      )}
    >
      {children}
    </div>
  );
}
