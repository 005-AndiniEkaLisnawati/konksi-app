'use client';

export default function LoginPage() {
  const handleGoogleLogin = () => {
    const ua = navigator.userAgent || '';
    const isWebView = /wv|Android.*Chrome\/[.0-9]* Mobile|iPhone.*Safari/i.test(ua) && !/Safari/i.test(ua);
    const platform = isWebView ? 'app' : 'website';

    window.location.href = `/api/auth/google?platform=${platform}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-sm text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Selamat Datang! 👋</h2>
        <p className="text-sm text-gray-500 mb-6">Masuk atau daftarkan akun afiliator kamu.</p>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium text-gray-700"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google" 
            className="w-5 h-5" 
          />
          <span>Lanjutkan dengan Google</span>
        </button>
      </div>
    </div>
  );
}