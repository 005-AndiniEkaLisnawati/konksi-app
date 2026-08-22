'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Phone } from 'lucide-react';

// Pastikan import ini sesuai dengan struktur shadcn kamu
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 

export default function LoginPage() {
  const router = useRouter();
  
  const handleGoogleLogin = () => {
    const ua = navigator.userAgent || '';
    const isWebView = /wv|Android.*Chrome\/[.0-9]* Mobile|iPhone.*Safari/i.test(ua) && !/Safari/i.test(ua);
    const platform = isWebView ? 'app' : 'website';

    window.location.href = `/api/auth/google?platform=${platform}`;
  };

  return (
    // Background utama. Pastikan path dan ekstensi file gambarnya sudah benar (misal .jpg atau .png)
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-slate-50 relative overflow-hidden">
      
      {/* Container utama */}
      <div className="relative w-full max-w-[400px] mt-32 z-10"> 
        
        {/* WRAPPER MASKOT - Posisi tetap di left-3/4 sesuai request */}
        <div className="absolute -top-[110px] left-3/4 -translate-x-1/2 w-[280px] z-30 pointer-events-none drop-shadow-xl">
          <Image 
            src="/img/illustrations/login-page.png" 
            alt="Login Mascot" 
            width={250}
            height={250}
            className="w-full h-auto"
            priority 
          />
        </div>

        {/* CARD UI - Upgrade Glassmorphism! 
            bg-white/40 dan backdrop-blur-xl bikin efek kacanya jauh lebih kerasa.
            border-white/50 ngasih highlight tipis di ujung kaca. 
        */}
        <Card className="relative z-20 rounded-[2rem] shadow-2xl shadow-purple-900/20 border border-white/50 bg-white/40 backdrop-blur-xl overflow-visible">
          <CardHeader className="text-center pb-6 pt-10">
            <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight drop-shadow-sm">
              Selamat Datang! 👋
            </CardTitle>
            <CardDescription className="text-base text-slate-700 mt-2 font-medium">
              Masuk atau daftarkan akun afiliator kamu.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pb-8 px-6 sm:px-8 flex flex-col gap-3">
            
            {/* Button Google - Dibikin bg-white/60 biar ikut tema glass */}
            <Button
              variant="outline"
              onClick={() => router.push('/home')} 
              className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border-white/60 bg-white/60 hover:bg-white transition-all text-slate-800 shadow-sm backdrop-blur-md"
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5" 
              />
              <span className="font-semibold text-[15px]">Lanjutkan dengan Google</span>
            </Button>

            {/* Button Phone */}
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 h-12 rounded-xl border-white/60 bg-white/60 hover:bg-white transition-all text-slate-800 shadow-sm backdrop-blur-md"
              onClick={() => router.push('/home')}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-[15px]">Lanjutkan dengan Nomor HP</span>
            </Button>

            {/* Divider "OR" / "ATAU" - Warna disesuaikan biar kontras di atas kaca */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-400/40"></div>
              <span className="flex-shrink-0 mx-4 text-slate-600 text-xs font-bold uppercase tracking-wider">Atau</span>
              <div className="flex-grow border-t border-slate-400/40"></div>
            </div>

            {/* Input Email - bg-white/50 biar tetap ada efek tembus pandangnya sedikit */}
            <Input 
              type="email" 
              placeholder="Alamat email" 
              className="h-12 rounded-xl border-white/60 bg-white/50 backdrop-blur-sm focus-visible:ring-purple-500 text-[15px] text-slate-900 placeholder:text-slate-500"
            />

            {/* Button Continue */}
            <Button 
              onClick={() => router.push('/home')}
              className="w-full h-12 rounded-xl bg-primary shadow-md text-white hover:bg-primary/90 transition-all font-semibold text-[15px] mt-1"
            >
              Lanjutkan
            </Button>

          </CardContent>
        </Card>

      </div>
    </div>
  );
}