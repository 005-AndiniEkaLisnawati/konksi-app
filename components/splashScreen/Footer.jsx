// components/splashScreen/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// --- Custom SVG Icons untuk Sosial Media ---
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.003a2.895 2.895 0 0 1 2.313-4.646c.299 0 .588.045.856.128v-3.49a6.342 6.342 0 0 0-.856-.057c-3.535 0-6.4 2.865-6.4 6.4s2.865 6.4 6.4 6.4 6.4-2.865 6.4-6.4V9.382a8.211 8.211 0 0 0 4.757 1.503V7.44a4.81 4.81 0 0 1-.987-.754z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.8l.2-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0e17] text-slate-300 pt-10 pb-6 border-t border-slate-800 overflow-hidden w-full m-0">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="w-full px-4 relative z-10">
        <div className="flex flex-col gap-8 mb-8">
          
          {/* Brand & Deskripsi */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-left"
          >
            <div className="mb-3">
              <Link href="/">
                <Image
                  src="https://cdn.konksi.com/app_profiles/logo-konksi-putih.png"
                  alt="Konksi"
                  width={120}
                  height={38}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              Karna kenal jadi rekomendasi, karna percaya jadi rekomendasi, karna layanan bagus jadi rekomendasi, karna empati jadi rekomendasi, dan karena ada komisi jadi lebih semangat rekomendasi.
            </p>
          </motion.div>

          {/* Quick Links (2 Kolom pas untuk mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-3">Link Utama</h4>
            <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
              <ul className="space-y-2">
                <li>
                  <Link href="https://konksi.com/merchant-benefit" className="hover:text-primary transition-colors block">
                    Menjadi Mitra
                  </Link>
                </li>
                <li>
                  <Link href="https://konksi.com/affiliate-benefit" className="hover:text-primary transition-colors block">
                    Menjadi Afiliator
                  </Link>
                </li>
                <li>
                  <Link href="https://konksi.com/contact" className="hover:text-primary transition-colors block">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#faq" className="hover:text-primary transition-colors block">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="https://konksi.com/about" className="hover:text-primary transition-colors block">
                    Tentang Konksi
                  </Link>
                </li>
                <li>
                  <Link href="https://konksi.com/blog" className="hover:text-primary transition-colors block">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Temukan Kami & App */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-xs font-bold text-white tracking-wider uppercase mb-3">Temukan Kami</h4>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Playstore Badge */}
              <a 
                href="https://play.google.com/store/apps/dev?id=4932302740201582010&hl=id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="px-3 py-1.5 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center gap-2.5 w-fit shadow-md">
                  <div className="text-left">
                    <p className="text-[8px] uppercase tracking-wider text-slate-400">Get it on</p>
                    <p className="text-[11px] font-bold text-white flex items-center gap-1">
                      Google Play <ArrowUpRight className="w-3 h-3 text-primary" />
                    </p>
                  </div>
                </div>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.tiktok.com/@konksiaffiliate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="TikTok"
                  className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="https://www.instagram.com/konksicom/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram"
                  className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="YouTube"
                  className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <YoutubeIcon className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Facebook"
                  className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col items-center gap-2 text-center text-[10px] text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
              Syarat & Ketentuan
            </Link>
            <Link href="/custom-price-disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policies" className="hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
          </div>
          <p>© 2025 PT Konksi Akselera Sinergi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}