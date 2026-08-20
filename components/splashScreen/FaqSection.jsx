// components/splashScreen/FaqSection.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Wallet, 
  FileText, 
  Headphones, 
  ChevronDown, 
  HelpCircle,
  Sparkles 
} from 'lucide-react';

const faqCategories = [
  {
    id: 'guide',
    title: 'Panduan Affiliator',
    description: 'Informasi dan langkah-langkah penting untuk affiliator dalam memulai promosi',
    icon: BookOpen,
    items: [
      {
        id: 'guide-1',
        q: 'Kenapa statistik saya naik tapi penghasilan tetap?',
        a: (
          <div className="space-y-2">
            <p className="font-semibold text-primary">Karena klik ≠ transaksi.</p>
            <p>Statistik menunjukkan traffic, sedangkan penghasilan tergantung pada pembelian langsung dari calon buyer.</p>
            <p>Fokus bukan cuma cari klik, tapi tingkatkan konversi penjualan!</p>
          </div>
        )
      },
      {
        id: 'guide-2',
        q: 'Bagaimana Cara Memilih dan Mempromosikan Layanan / Jasa Mitra?',
        a: (
          <div className="space-y-3">
            <p>Buka <strong>Dashboard</strong> → Klik <strong>Daftar Katalog</strong> → Pilih <strong>Layanan / Jasa</strong>.</p>
            <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
              <li><strong>Cek Besaran Komisi:</strong> Setiap layanan memiliki komisi berbeda (10% - 30% atau nominal tetap).</li>
              <li><strong>Pelajari Detail Layanan:</strong> Pahami deskripsi, cakupan kerja, dan ketentuan lokasi.</li>
              <li><strong>Pilih Metode Promosi:</strong>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li><strong>Share Langsung:</strong> Kirim link cepat ke WhatsApp, Telegram, atau sosial media.</li>
                  <li><strong>Tambah ke Biolink:</strong> Kumpulkan berbagai layanan di halaman biolink kamu untuk branding jangka panjang.</li>
                </ul>
              </li>
              <li><strong>Atur Diskon (Opsional):</strong> Kamu bisa memotong sebagian komisi untuk dijadikan voucher diskon buyer.</li>
            </ol>
          </div>
        )
      },
      {
        id: 'guide-3',
        q: 'Kalau buyer komplain, apakah saya yang tanggung jawab?',
        a: (
          <p>
            <strong className="text-destructive">Tidak.</strong> Affiliator hanya bertindak sebagai penghubung. Pelayanan dan teknis pengerjaan sepenuhnya menjadi tanggung jawab Mitra Jasa.
          </p>
        )
      },
      {
        id: 'guide-4',
        q: 'Bagaimana cara saya mendapat komisi?',
        a: (
          <ul className="list-disc pl-4 space-y-1.5">
            <li>Buyer klik link milikmu lalu melakukan checkout transaksi di KONKSI.</li><li>Setelah transaksi sukses, komisi otomatis masuk ke saldo akunmu.</li>
            <li>Repeat order dari buyer dalam kurun 30–90 hari tetap terhitung sebagai komisimu.</li>
          </ul>
        )
      },
      {
        id: 'guide-5',
        q: 'Apa perbedaan share langsung dan pakai biolink?',
        a: (
          <div className="grid sm:grid-cols-2 gap-2 mt-1">
            <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/10">
              <span className="font-bold text-primary block mb-1">Share Langsung</span>
              <p className="text-[11px]">Kirim 1 produk spesifik. Sangat cocok untuk *direct chat* & closing cepat.</p>
            </div>
            <div className="p-2.5 rounded-xl bg-card border border-border/60">
              <span className="font-bold text-foreground block mb-1">Biolink</span>
              <p className="text-[11px]">Kumpulkan banyak layanan dalam 1 link. Cocok untuk bio Instagram & TikTok.</p>
            </div>
          </div>
        )
      },
      {
        id: 'guide-6',
        q: 'Kenapa komisi saya berkurang setelah saya atur diskon?',
        a: (
          <p>
            Karena diskon yang diberikan diambil langsung dari porsi komisi kamu, bukan dari harga dasar milik mitra.
          </p>
        )
      }
    ]
  },
  {
    id: 'payment',
    title: 'Pembayaran & Komisi',
    description: 'Informasi mengenai sistem pembayaran & pencairan komisi bagi affiliator',
    icon: Wallet,
    items: [
      {
        id: 'pay-1',
        q: 'Apa saja yang bisa dipantau di dashboard?',
        a: (
          <p>
            Kamu bisa memantau jumlah klik, transaksi sukses, komisi pending, hingga saldo siap cair secara <strong>real-time</strong> & transparan.
          </p>
        )
      },
      {
        id: 'pay-2',
        q: 'Apa syarat untuk tarik komisi (withdraw)?',
        a: (
          <ul className="list-disc pl-4 space-y-1">
            <li>Minimal penarikan saldo sebesar <strong>Rp100.000</strong>.</li>
            <li>Telah melakukan verifikasi KTP dan data rekening bank/e-wallet.</li>
          </ul>
        )
      },
      {
        id: 'pay-3',
        q: 'Berapa lama proses pencairan komisi?',
        a: (
          <p>
            Setelah mengajukan penarikan, dana akan diproses dan masuk ke rekening terdaftar dalam kurun waktu <strong>5–7 hari kerja</strong>.
          </p>
        )
      },
      {
        id: 'pay-4',
        q: 'Apakah ada potongan saat withdraw?',
        a: (
          <p>
            Terdapat potongan sebesar <strong>10%</strong> dari total komisi yang ditarik sebagai biaya pemeliharaan layanan platform.
          </p>
        )
      }
    ]
  },
  {
    id: 'rules',
    title: 'Aturan & Kebijakan',
    description: 'Panduan kebijakan dan ketentuan yang harus dipatuhi oleh affiliator',
    icon: FileText,
    items: [
      {
        id: 'rule-1',
        q: 'Apa saja aturan pendaftaran & verifikasi?',
        a: (
          <p>
            Wajib mendaftar dengan identitas asli. Satu orang hanya diperbolehkan memiliki satu akun affiliator aktif.
          </p>
        )
      },
      {
        id: 'rule-2',
        q: 'Apa saja larangan & pelanggaran bagi affiliator?',
        a: (
          <div className="space-y-1.5">
            <p className="text-destructive font-semibold">Tindakan yang dilarang:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Spamming chat massal atau komentar tidak relevan.</li>
              <li>Transaksi di luar sistem resmi KONKSI.</li>
              <li>Iklan berbayar yang menyesatkan / mengatasnamakan resmi KONKSI.</li>
            </ul>
          </div>
        )
      }
    ]
  },
  {
    id: 'support',
    title: 'Bantuan Affiliator',
    description: 'Pusat bantuan dan dukungan teknis untuk affiliator',
    icon: Headphones,
    items: [
      {
        id: 'supp-1',
        q: 'Bagaimana cara menghubungi tim support?',
        a: (
          <div className="space-y-1">
            <p>Email: <a href="mailto:konksiaffiliate@gmail.com" className="text-primary underline">konksiaffiliate@gmail.com</a></p>
            <p>WhatsApp: <a href="https://wa.me/6281277774955" target="_blank" rel="noopener noreferrer" className="text-primary underline font-bold">+62 812-7777-4955</a></p>
          </div>
        )
      },
      {
        id: 'supp-2',
        q: 'Apa yang harus dilakukan jika dashboard error?',
        a: (
          <p>
            Coba *refresh* halaman, *clear cache* browser, atau *re-login*. Jika kendala berlanjut, segera hubungi tim support kami.
          </p>
        )
      }
    ]
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState('guide-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shadow-sm backdrop-blur-md mb-3"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          Pusat Informasi
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-3xl font-black text-foreground tracking-tight"
        >
          Sering Ditanyakan (FAQ)
        </motion.h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-md mx-auto">
          Temukan jawaban cepat seputar program affiliator, komisi, hingga pencairan saldo.
        </p>
      </div>

      {/* FAQ Categories Loop */}
      <div className="space-y-8">
        {faqCategories.map((category, catIdx) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.05 }}
              className="bg-card/40 border border-border/60 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3 mb-4 pb-3 border-b border-border/40">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Accordion List */}
              <div className="space-y-2.5">
                {category.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <div 
                      key={item.id}
                      className="border border-border/50 rounded-xl overflow-hidden bg-background/60 transition-colors hover:border-primary/30"
                    >
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-foreground transition-all"
                      >
                        <span>{item.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="p-1 rounded-full bg-muted/60 text-muted-foreground shrink-0"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-3.5 pb-4 sm:px-4 sm:pb-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/30 mt-1">
                              <div className="pt-2">
                                {item.a}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}