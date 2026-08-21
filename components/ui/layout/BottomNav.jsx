'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Receipt, Wallet, User } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Beranda', href: '/home', icon: Home },
  { label: 'Feeds', href: '/feeds/katalog', icon: Compass },
  { label: 'Transaksi', href: '/transaction', icon: Receipt },
  { label: 'Saldo', href: '/balance', icon: Wallet },
  { label: 'Profil', href: '/profile', icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  const hiddenRoutes = ['/', '/login', '/splash'];
  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[412px] bg-card/90 backdrop-blur-lg border-t border-x border-border/40 z-50 px-2 py-2">
      <nav className="flex justify-around items-center">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full py-1 gap-1 transition-all duration-200 ${
                isActive
                  ? 'text-primary font-bold scale-105'
                  : 'text-muted-foreground hover:text-foreground font-medium'
              }`}
            >
              <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-primary/10' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              </div>
              <span className="text-[11px] leading-none tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}