'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock Data Afiliator (Bisa diganti dengan data dari props/API)
const row1 = [
  { username: 'Tuahhappy', photo_filename: '' },
  { username: 'Yudizorro', photo_filename: '' },
  { username: 'ikballll', photo_filename: '' },
  { username: 'Ulfa', photo_filename: '' },
  { username: 'Sunata', photo_filename: '' },
  { username: 'achmad', photo_filename: '' },
];

const row2 = [
  { username: 'Cokyboy', photo_filename: '' },
  { username: 'Syafar68', photo_filename: '' },
  { username: 'Kevinzulanggara', photo_filename: '' },
  { username: 'Codot235', photo_filename: '' },
  { username: 'Tedika', photo_filename: '' },
  { username: 'shelly', photo_filename: '' },
];

const row3 = [
  { username: 'Akmal', photo_filename: '' },
  { username: 'Kesactra', photo_filename: '' },
  { username: 'Dora71', photo_filename: '' },
  { username: 'fitriani', photo_filename: '' },
  { username: 'Irfanrecing86', photo_filename: '' },
  { username: 'Hendrarnldi', photo_filename: '' },
];

// Komponen Avatar Card dengan Penanganan Foto Rusak/Kosong
function AffiliatorCard({ username, photoFilename, isWoman = false }) {
  const [imgError, setImgError] = useState(false);

  const fallbackPhoto = isWoman 
    ? '/img/testimonial/woman-profile.svg' 
    : '/img/testimonial/man-profile.svg';

  const photoUrl = photoFilename 
    ? `https://cdn.konksi.com/affiliators/${photoFilename}` 
    : fallbackPhoto;

  if (!username) return null;

  return (
    <Link
      href={`/${username}`}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/80 border border-border/60 shadow-sm hover:border-primary/50 hover:bg-card hover:shadow-md transition-all shrink-0 group"
    >
      {!imgError ? (
        <div className="relative w-6 h-6 rounded-full overflow-hidden bg-primary/10 shrink-0">
          <Image
            src={photoUrl}
            alt={username}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <span className="text-xs">👤</span>
      )}
      <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
        @{username}
      </span>
    </Link>
  );
}

// Komponen Baris Marquee Berjalan
function MarqueeRow({ items, direction = 'left', speed = 25, isWoman = false }) {
  // Duplikasi array agar looping marquee tidak terputus (seamless loop)
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-3 py-1 shrink-0"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {duplicatedItems.map((af, idx) => (
          <AffiliatorCard
            key={`${af.username}-${idx}`}
            username={af.username}
            photoFilename={af.photo_filename}
            isWoman={isWoman}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function AffiliatorMarquee() {
  return (
    <section className="py-12 bg-background border-t border-border/40 overflow-hidden">
      {/* Head Content */}
      <div className="px-5 max-w-xl mx-auto text-center mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold mb-3 border border-primary/20">
          500+ Afiliator di Konksi
        </div>
        <h2 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
          Bersama Membangun <em className="not-italic text-primary">Ekonomi Kolaborasi</em>
        </h2>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Konksi menyatukan keahlian penyedia jasa dengan kreativitas afiliator lewat satu platform afiliasi jasa Indonesia, jadi ekosistem bisnis yang saling menguntungkan buat semua pihak.
        </p>
      </div>

      {/* Marquee Tracks */}
      <div className="flex flex-col gap-3">
        {/* Row 1: Kiri ke Kanan */}
        <MarqueeRow items={row1} direction="left" speed={30} />

        {/* Row 2: Kanan ke Kiri */}
        <MarqueeRow items={row2} direction="right" speed={35} isWoman={true} />

        {/* Row 3: Kiri ke Kanan */}
        <MarqueeRow items={row3} direction="left" speed={28} />
      </div>
    </section>
  );
}