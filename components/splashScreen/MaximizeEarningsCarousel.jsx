'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Sparkles, TrendingUp, Wallet, ArrowRight } from 'lucide-react';

const tipsData = [
  {
    id: 1,
    title: 'Bagikan Biolink ke Medsos',
    desc: 'Pasang konksi.com/username di bio Instagram, TikTok, & WA Story.',
    badge: 'Tips #1',
    icon: Share2,
    img: '/img/illustrations/tips-1.jpe'
  },
  {
    id: 2,
    title: 'Rekomendasikan Jasa Sekitar',
    desc: 'Pilih layanan home service / kursus favorit yang paling sering kamu pakai.',
    badge: 'Tips #2',
    icon: TrendingUp,
    img: '/img/illustrations/tips-2.jpe'
  },
  {
    id: 3,
    title: 'Gunakan Fitur Diskon Mandiri',
    desc: 'Potong sebagian komisimu jadi voucher diskon menarik buat pembeli.',
    badge: 'Tips #3',
    icon: Sparkles,
    img: '/img/illustrations/tips-3.jpe'
  },
  {
    id: 4,
    title: 'Tarik Saldo Kapan Saja',
    desc: 'Komisi cair transparan langsung ke e-Wallet atau rekening bank lokal.',
    badge: 'Tips #4',
    icon: Wallet,
    img: '/img/illustrations/tips-4.jpe'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
};

export default function MaximizeEarningsCarousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 px-5 overflow-hidden border-t border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Dynamic Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 bg-primary/25 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[110px] pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />

      {/* Header Area */}
      <div className="relative z-10 flex items-end justify-between mb-8 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-primary tracking-widest uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full shadow-sm backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            Tips Afiliator
          </span>
          <h2 className="text-lg sm:text-xl font-black text-foreground mt-2 tracking-tight">
            Cara Mudah Maksimalin Pendapatan
          </h2>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => handleScroll('left')}
            className="p-2.5 rounded-full bg-card/80 backdrop-blur-md border border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm active:scale-90"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2.5 rounded-full bg-card/80 backdrop-blur-md border border-border/60 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm active:scale-90"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="relative z-10 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing -mx-5 px-5"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-5 w-max py-3"
        >
          {tipsData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="w-[250px] sm:w-[270px] h-[340px] rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 overflow-hidden shadow-lg shadow-black/5 flex flex-col justify-between relative group shrink-0 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40"
              >
                {/* Visual Top Area */}
                <div className="h-[195px] w-full relative overflow-hidden p-4 flex flex-col justify-between">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute bg-gradient-to-t from-card via-sky-500/10 to-sky-500/5 inset-0 z-[1]" />

                  {/* Badge */}
                  <div className="relative z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold w-fit border border-white/20 shadow-sm">
                    <Icon className="w-3.5 h-3.5 text-white" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-card/50 relative z-10">
                  <div>
                    <h3 className="text-xs font-bold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary mt-3 group/link"
                  >
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}