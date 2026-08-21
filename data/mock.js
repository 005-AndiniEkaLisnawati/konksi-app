export const products = [
  { name: "Skincare Glow Serum 30ml", category: "Beauty", price: 129000, commission: 15 },
  { name: "Wireless Earbuds Pro", category: "Elektronik", price: 349000, commission: 8 },
  { name: "Tote Bag Premium Kanvas", category: "Fashion", price: 189000, commission: 12 },
  { name: "Smartwatch Active 2", category: "Elektronik", price: 699000, commission: 7 },
  { name: "Hydrating Sunscreen SPF50", category: "Beauty", price: 89000, commission: 18 },
  { name: "Air Fryer Mini 2L", category: "Rumah", price: 459000, commission: 9 },
  { name: "Sneakers Daily Run", category: "Fashion", price: 279000, commission: 11 },
  { name: "Kopi Susu Gula Aren 1L", category: "Makanan", price: 65000, commission: 14 },
  { name: "Aroma Diffuser Kayu", category: "Lifestyle", price: 149000, commission: 13 },
  { name: "Matras Yoga Anti Slip", category: "Lifestyle", price: 199000, commission: 10 },
];

export const productCategories = [
  "Semua",
  "Fashion",
  "Beauty",
  "Elektronik",
  "Rumah",
  "Lifestyle",
  "Makanan",
];

export const contentCategories = [
  "Semua",
  "Video",
  "Reels",
  "Caption",
  "Edukasi",
  "Trending",
];

export const contents = [
  {
    type: "Reels",
    title: "5 Cara Bikin Skincare Routine yang Konsisten",
    creator: "@beautywithsera",
    views: "12,4K",
    likes: "842",
    description: "Hook 3 detik pertama yang bikin penonton berhenti scroll.",
  },
  {
    type: "Video",
    title: "Review Jujur Earbuds Rp350 Ribuan",
    creator: "@gadgetharian",
    views: "28,1K",
    likes: "1.930",
    description: "Struktur review: unboxing, tes suara, verdict singkat.",
  },
  {
    type: "Caption",
    title: "Template Caption Soft Selling untuk Produk Beauty",
    creator: "@katakonten",
    views: "6,8K",
    likes: "512",
    description: "Formula PAS: problem, agitate, solution dalam 4 baris.",
  },
  {
    type: "Edukasi",
    title: "Cara Baca Data Klik & Conversion Affiliate",
    creator: "@konksiacademy",
    views: "9,3K",
    likes: "701",
    description: "Metrik mana yang layak dikejar tiap minggu.",
  },
  {
    type: "Trending",
    title: "Tren Konten Ramadan untuk Produk Rumah Tangga",
    creator: "@trendwatchid",
    views: "15,7K",
    likes: "1.204",
    description: "Ide konten musiman yang gampang direplikasi.",
  },
  {
    type: "Video",
    title: "GRWM Pakai Sunscreen SPF50 Seharian",
    creator: "@dindaglow",
    views: "21,6K",
    likes: "1.588",
    description: "Konsep get ready with me yang cocok untuk beauty affiliate.",
  },
];

export const transactions = [
  { product: "Glow Serum 30ml", orderId: "#KNX-82931", date: "21 Agu 2026", commission: 19350, status: "Berhasil" },
  { product: "Wireless Earbuds Pro", orderId: "#KNX-82910", date: "21 Agu 2026", commission: 27920, status: "Pending" },
  { product: "Tote Bag Premium Kanvas", orderId: "#KNX-82887", date: "20 Agu 2026", commission: 22680, status: "Berhasil" },
  { product: "Air Fryer Mini 2L", orderId: "#KNX-82854", date: "20 Agu 2026", commission: 41310, status: "Dibatalkan" },
  { product: "Hydrating Sunscreen SPF50", orderId: "#KNX-82830", date: "19 Agu 2026", commission: 16020, status: "Berhasil" },
  { product: "Smartwatch Active 2", orderId: "#KNX-82799", date: "19 Agu 2026", commission: 48930, status: "Pending" },
  { product: "Kopi Susu Gula Aren 1L", orderId: "#KNX-82744", date: "18 Agu 2026", commission: 9100, status: "Berhasil" },
  { product: "Sneakers Daily Run", orderId: "#KNX-82701", date: "17 Agu 2026", commission: 30690, status: "Berhasil" },
];

export const balanceHistory = [
  { title: "Komisi penjualan", detail: "Glow Serum 30ml", date: "21 Agu 2026", amount: 19350, status: "Diterima" },
  { title: "Penarikan saldo", detail: "BCA •••• 4821", date: "18 Agu 2026", amount: -1000000, status: "Selesai" },
  { title: "Bonus affiliate", detail: "Target 150 penjualan", date: "15 Agu 2026", amount: 250000, status: "Diterima" },
  { title: "Komisi penjualan", detail: "Wireless Earbuds Pro", date: "14 Agu 2026", amount: 27920, status: "Pending" },
  { title: "Penarikan saldo", detail: "BCA •••• 4821", date: "05 Agu 2026", amount: -750000, status: "Selesai" },
];

export const activities = [
  { type: "sale", title: "Penjualan baru", detail: "Glow Serum 30ml · 2 menit lalu", amount: "+Rp19.350" },
  { type: "commission", title: "Komisi diterima", detail: "Tote Bag Premium · 1 jam lalu", amount: "+Rp22.680" },
  { type: "click", title: "Produk diklik 128x", detail: "Wireless Earbuds Pro · 3 jam lalu", amount: "" },
  { type: "withdraw", title: "Penarikan berhasil", detail: "BCA •••• 4821 · kemarin", amount: "-Rp1.000.000" },
];
