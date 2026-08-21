// components/splashScreen/KonksiShowcase.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Tag, Layers, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

const mockServices = [
  {
    id: '1',
    title: 'Jasa Integrasi APIDOIT',
    category: 'Layanan API',
    location: 'Sistem Integrasi Fast-Track',
    rating: 4.8,
    reviews: 1240,
    originalPrice: 8500000,
    price: 7500000,
    maxCommission: 3750000,
    badge: 'Populer',
    stockRemaining: 2,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Setup Infrastructure Cloud & DevOps',
    category: 'Cloud Services',
    location: 'AWS & Google Cloud Platform',
    rating: 4.9,
    reviews: 856,
    originalPrice: 12000000,
    price: 10000000,
    maxCommission: 5000000,
    badge: 'Top Seller',
    stockRemaining: 1,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Custom Payment Gateway Integration',
    category: 'Fintech Solution',
    location: 'Multi-Bank & QRIS System',
    rating: 4.7,
    reviews: 2100,
    originalPrice: 6000000,
    price: 4800000,
    maxCommission: 2400000,
    badge: 'Promo',
    stockRemaining: 5,
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Audit Keamanan & Penetration Testing',
    category: 'Cybersecurity',
    location: 'Full Web & Mobile Audit',
    rating: 4.9,
    reviews: 432,
    originalPrice: null,
    price: 15000000,
    maxCommission: 6000000,
    badge: 'Enterprise',
    stockRemaining: null,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
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

export default function KonksiShowcase() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(number).replace('Rp', 'Rp ');
  };

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
            <Layers className="w-3 h-3" />
            Favorit saat ini
          </span>
          <h2 className="text-lg sm:text-xl font-black text-foreground mt-2 tracking-tight">
            Katalog Siap Dibagikan
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
          viewport={{ once: true, margin: "100px" }} // Pemicu dimajukan 100px sebelum elemen terlihat agar tidak delay
          className="flex gap-5 w-max py-3"
        >
          {mockServices.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className="w-[250px] sm:w-[270px] h-[340px] rounded-3xl bg-card/80 backdrop-blur-xl border border-border/60 overflow-hidden shadow-lg shadow-black/5 flex flex-col justify-between relative group shrink-0 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40"
            >
              {/* Visual Top Area */}
              <div className="h-[150px] w-full relative overflow-hidden p-3 flex flex-col justify-between shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 250px, 270px"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute bg-gradient-to-t from-card via-card/20 to-transparent inset-0 z-[1]" />

                {/* Badge Container */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-sm">
                    <Tag className="w-3 h-3 text-white" />
                    <span>{item.badge}</span>
                  </div>
                  {item.stockRemaining && (
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 text-amber-500 rounded-full backdrop-blur-md">
                      Sisa {item.stockRemaining}
                    </span>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-card/50 relative z-10">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                    <span className="truncate max-w-[130px]">{item.category}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-semibold shrink-0">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                      <span className="text-muted-foreground">({item.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200 min-h-[32px]">
                    {item.title}
                  </h3>

                  {/* Komisi Highlight Banner */}
                  <div className="mt-2.5 p-2 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-medium">Komisi Max</span>
                    <span className="text-[11px] font-extrabold text-primary">
                      {formatRupiah(item.maxCommission)}
                    </span>
                  </div>

                  {/* Pricing Info */}
                  <div className="mt-2 pt-2 border-t border-border/40 flex items-baseline justify-between">
                    <span className="text-[10px] text-muted-foreground">Harga</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-extrabold text-foreground">
                        {formatRupiah(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[9px] text-muted-foreground line-through">
                          {formatRupiah(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => router.push('/login')}
                  className="w-full mt-2.5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-sm shadow-primary/20"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Bagikan & Raih Komisi
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}