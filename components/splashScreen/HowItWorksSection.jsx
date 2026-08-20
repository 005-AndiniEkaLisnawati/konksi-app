'use client';

import { motion } from 'framer-motion';
import { Share2, TrendingUp, Wallet } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Susun Katalok Biolink-mu',
    desc: 'Pilih dari 200+ layanan jasa, tempat, produk digital, atau webinar yang ingin kamu rekomendasikan.',
    icon: Share2,
  },
  {
    step: '02',
    title: 'Sebarkan Link unik konksi.com/username',
    desc: 'Pasang biolink-mu di bio Instagram, TikTok, WhatsApp Story, atau bagikan langsung ke klien.',
    icon: TrendingUp,
  },
  {
    step: '03',
    title: 'Komisi Masuk Real-Time',
    desc: 'Pembeli checkout via link-mu, komisi langsung tercatat transparan di dashboard.',
    icon: Wallet,
  },
];

// Variant Animasi Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Variant Animasi Tiap Card
const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HowItWorksSection() {
  return (
    <section className="px-5 py-8 bg-background relative overflow-hidden">
      {/* Header Section dengan Animasi Fade In */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="mb-5"
      >
        <span className="text-[10px] font-bold text-primary tracking-wider uppercase bg-primary/10 px-2 py-0.5 rounded-full">
          Alur Ringkas
        </span>
        <h2 className="text-base font-extrabold text-foreground mt-1.5">
          Cara Cuan di Konksi
        </h2>
      </motion.div>

      {/* Grid Card dengan Stagger Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-3 relative z-10"
      >
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              variants={cardVariants}
              whileHover={{ scale: 1.015, x: 2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-card border border-border/60 shadow-sm hover:border-primary/40 hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-black text-primary bg-primary/10 px-1.5 py-0.5 whitespace-nowrap rounded group-hover:bg-primary/20 transition-colors">
                    Langkah {item.step}
                  </span>
                  <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}