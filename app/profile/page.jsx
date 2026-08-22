"use client";
import Link from "next/link";
import {
  User,
  Link as LinkIcon,
  Palette,
  BarChart3,
  Bookmark,
  Lightbulb,
  HelpCircle,
  MessageSquare,
  Globe,
  Share2,
  Info,
  ChevronRight,
  Copy,
  CheckCircle2,
  HelpCircleIcon
} from "lucide-react";
import { Screen, Card } from "@/components/affiliate/ui";
import { useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = "https://konksi.com/alifalghifari";

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Screen className="bg-slate-50/50 pb-20">
      
      {/* HEADER & ILUSTRASI LATAR */}
      {/* Container utama header di-set overflow-hidden agar gambar yang full tidak luber */}
      <div className="relative pt-6 pb-4 px-4 -mx-4 -mt-4 overflow-hidden rounded-b-[2rem]">
        
        {/* LAYER BACKGROUND (FULL COVER) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat opacity-90" 
          style={{ backgroundImage: `url('/img/illustrations/profile-header-art.jpe')` }} 
        />
        {/* Tambahan overlay gradasi tipis di atas biar teks "Profil" tetap jelas terbaca */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/80 via-transparent to-transparent" />

        {/* KONTEN HEADER (z-10 agar posisinya di atas gambar background) */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-extrabold text-slate-900 drop-shadow-sm">Profil</h1>
            <button className="h-8 w-8 rounded-full bg-white/60 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-700 hover:bg-white transition">
              <HelpCircleIcon className="h-4 w-4" />
            </button>
          </div>

          {/* CARD LINK AFILIASI */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div className="min-w-0 flex-1 pr-2">
              <p className="text-[11px] font-bold text-slate-800">Selamat datang di Affiliate!</p>
              <p className="text-[12px] text-primary font-medium truncate mt-0.5">{affiliateLink}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button 
                onClick={handleCopy}
                className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/25 transition"
                title="Salin Link"
              >
                {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
              </button>
              <div className="text-right">
                <Image
                  src="https://cdn.konksi.com/app_profiles/logo.webp"
                  alt="Share Icon"
                  width={50}
                  height={24}
                  className="h-4 w-13"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALERT BOX LENGKAPI DATA */}
      <div className="mt-5 rounded-2xl bg-blue-50 border border-blue-100 p-3.5 flex items-start gap-3">
        <span className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
          <Info className="h-3 w-3" />
        </span>
        <div className="flex-1">
          <p className="text-[12px] font-medium text-blue-900 leading-snug">
            Isi data diri dan rekeningmu untuk mulai tarik saldo komisi!
          </p>
        </div>
      </div>

      {/* MENU UTAMA */}
      <div className="mt-4">
        <Card className="p-0 divide-y divide-slate-100 overflow-hidden border-slate-100 shadow-sm rounded-2xl">
          {[
            { icon: User, label: "Tampilan Profil", href: "/profile/my-profile" },
            { icon: LinkIcon, label: "Biolink", href: "/profile/biolink" },
            { icon: Palette, label: "Personalisasi", href: "/profile/personalisasi" },
            { icon: BarChart3, label: "Statistik", href: "/profile/statistik" },
            { icon: Bookmark, label: "Tersimpan", href: "/profile/tersimpan" },
            { icon: Lightbulb, label: "Tips & Trick", href: "/profile/tips" },
            { icon: HelpCircle, label: "FAQ", href: "/profile/faq" },
          ].map((menu, idx) => {
            const Icon = menu.icon;
            return (
              <Link 
                key={idx} 
                href={menu.href}
                className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition text-slate-700"
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold text-slate-800">{menu.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            );
          })}
        </Card>
      </div>

      {/* BAGIAN KOMUNITAS AFFILIATE */}
      <div className="mt-6">
        <h3 className="text-xs font-bold text-slate-800 mb-2 px-1">Komunitas Affiliate</h3>
        <Card className="p-0 divide-y divide-slate-100 overflow-hidden border-slate-100 shadow-sm rounded-2xl">
          {[
            { icon: MessageSquare, label: "Saluran WA Konksi", color: "text-emerald-500", href: "https://whatsapp.com" },
            { icon: Globe, label: "Instagram Konksi", color: "text-pink-500", href: "https://instagram.com" },
            { icon: Share2, label: "TikTok Konksi", color: "text-slate-900", href: "https://tiktok.com" },
          ].map((comm, idx) => {
            const Icon = comm.icon;
            return (
              <a 
                key={idx} 
                href={comm.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 hover:bg-slate-50 transition text-slate-700"
              >
                <div className="flex items-center gap-3">
                  <span className={comm.color}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] font-semibold text-slate-800">{comm.label}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            );
          })}
        </Card>
      </div>

    </Screen>
  );
}