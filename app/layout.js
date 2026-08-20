import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/ui/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Konksi Affiliate',
  description: 'Satu platform untuk kelola transaksi affiliate, biolink, dan komisi.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0c0d12] text-foreground min-h-screen flex justify-center`}
      >
        {/* Main Layout Container - Terunci di 412px dengan Border Samping */}
        <main className="w-full max-w-[412px] min-h-screen bg-background text-foreground relative pb-20 border-x border-border/40 shadow-2xl overflow-x-hidden">
          {children}
          <BottomNav />
        </main>
      </body>
    </html>
  );
}