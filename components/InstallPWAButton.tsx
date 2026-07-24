import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, X, Smartphone, Copy, AlertTriangle } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export const InstallPWAButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check user agent and display mode
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    const isAndroidDevice = /android/.test(userAgent);
    const inApp = /zalo|fbav|messenger|instagram|line|viber|kakaotalk/i.test(userAgent);
    
    setIsIOS(isIOSDevice);
    setIsAndroid(isAndroidDevice);
    setIsInAppBrowser(inApp);
    
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || ('standalone' in window.navigator && (window.navigator as any).standalone);
    setIsStandalone(isStandaloneMode);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setDeferredPrompt(null);
        }
      } catch (error) {
        console.error('Error prompting install:', error);
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="relative group mr-2 flex items-center">
        <button
          onClick={handleInstallClick}
          className="flex items-center space-x-1 sm:space-x-2 px-1.5 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold shadow-md shadow-emerald-200/50 hover:scale-105 active:scale-95 transition-all text-[8.5px] sm:text-xs uppercase tracking-wider whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Cài đặt Web App</span>
          <span className="sm:hidden max-[360px]:hidden">Cài App</span>
        </button>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-slate-800 text-white text-[10px] sm:text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 text-center shadow-xl pointer-events-none whitespace-nowrap">
          Cài Web App này lên điện thoại Android hoặc Iphone. Mở Link Web này trên điện thoại rồi nhấn nút Cài Web App
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </div>

      {/* Universal Install Instructions Modal */}
      {showModal && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={18} className="text-slate-500" />
            </button>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-500 relative">
                <Smartphone size={24} />
                <Download size={12} className="absolute -left-1 -bottom-1 text-indigo-500 bg-white rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Cài đặt ứng dụng
              </h3>
            </div>
            
            <div className="space-y-5 text-sm">
              <div className="text-center space-y-2">
                <p className="text-amber-500 font-bold flex items-center justify-center gap-1.5">
                  <AlertTriangle size={16} />
                  {isInAppBrowser ? 'Bạn đang mở trong trình duyệt nhúng' : 'Trình duyệt chưa hỗ trợ cài đặt trực tiếp'}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Vui lòng mở bằng <strong className="text-slate-800 dark:text-slate-200">Chrome</strong> hoặc <strong className="text-slate-800 dark:text-slate-200">Safari</strong> để cài app.
                </p>
              </div>

              <div className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl p-4 border border-indigo-100 dark:border-indigo-500/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-center">Link ứng dụng:</p>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 mb-4 text-center overflow-x-auto no-scrollbar">
                  <span className="text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                    {typeof window !== 'undefined' ? window.location.href : ''}
                  </span>
                </div>
                
                <button 
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Đã copy link!');
                    }
                  }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/30 transition-transform active:scale-95"
                >
                  <Copy size={18} />
                  <span>Copy Link</span>
                </button>
              </div>

              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <p className="font-bold flex items-center gap-1 text-slate-800 dark:text-white">
                  <span className="text-red-500">📌</span> Cách cài đặt:
                </p>
                <div className="space-y-2.5 text-[13px] leading-relaxed">
                  <p>1. Nhấn <strong className="text-indigo-600 dark:text-indigo-400">"Copy Link"</strong> ở trên.</p>
                  <p>2. Mở trình duyệt <strong>Chrome</strong> (Android) hoặc <strong>Safari</strong> (iPhone).</p>
                  <p>3. Dán link vào thanh địa chỉ và truy cập.</p>
                  <p>4. <strong>Android (Chrome):</strong> Nhấn menu 3 chấm ⋮ → "Thêm vào MH chính".</p>
                  <p>5. <strong>iPhone (Safari):</strong> Nhấn nút Chia sẻ (vuông mũi tên) → "Thêm vào MH chính".</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(false)}
              className="w-full mt-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

