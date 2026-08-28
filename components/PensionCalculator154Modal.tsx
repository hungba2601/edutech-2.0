import React, { useState } from 'react';
import { X, LogIn, PlayCircle, FileSpreadsheet, Sparkles, Smartphone, Share, MoreVertical, Copy, Check } from 'lucide-react';

interface PensionCalculator154ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const PensionCalculator154Modal: React.FC<PensionCalculator154ModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  const [copied, setCopied] = useState(false);
  const appLink = 'https://tinh-luong-huu.vercel.app/';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(appLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh] transition-colors duration-300 border border-blue-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 sm:p-8 flex items-center justify-between text-white relative shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md shadow-inner animate-pulse">
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-wider drop-shadow-sm">
                  CÔNG CỤ TÍNH LƯƠNG HƯU THEO NĐ 154
                </h2>
                <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md animate-bounce">
                  NEW
                </span>
                <span className="bg-yellow-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                  HOT
                </span>
              </div>
              <p className="text-blue-50 opacity-90 text-sm font-medium mt-0.5">
                Công cụ giúp tính lương hưu nghỉ trước tuổi, nghỉ ngay theo NĐ 154
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 scrollbar-hide bg-slate-50 dark:bg-slate-900/95 transition-colors duration-300">
          
          {/* Badge & Intro Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-blue-100 dark:border-slate-700/50">
            <div className="relative w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center border-2 border-blue-200 dark:border-blue-800 shadow-inner flex-shrink-0">
              <FileSpreadsheet className="w-16 h-16 text-blue-600 dark:text-blue-400 animate-pulse" />
              <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                FREE
              </div>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                <Sparkles size={12} className="mr-1" /> Tiện ích đột phá
              </span>
              <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed text-sm md:text-base text-justify">
                Công cụ giúp tính lương hưu nghỉ trước tuổi, nghỉ ngay theo NĐ 154. Đảm bảo tính chính xác cao, dễ dàng sử dụng và hoàn toàn miễn phí.
              </p>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 border-blue-600 pl-3">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">
                  HƯỚNG DẪN CÀI ĐẠT THÀNH APP MOBILE
                </h3>
              </div>
              
              <div className="flex items-center bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-1 shadow-sm w-full sm:w-auto max-w-sm">
                <div className="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400 font-medium truncate flex-1 select-all">
                  {appLink}
                </div>
                <button
                  onClick={handleCopyLink}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Đã copy</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Android Instructions */}
              <div className="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 shadow-sm flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-emerald-700 dark:text-emerald-400">
                  <div className="bg-emerald-100 dark:bg-emerald-800/50 p-2 rounded-xl">
                    <Smartphone size={24} />
                  </div>
                  <h4 className="font-black text-lg">Trên Android (Chrome)</h4>
                </div>
                <div className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-start">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">1.</span>
                    <p>Truy cập trang web bằng trình duyệt Chrome.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">2.</span>
                    <p>Nhấn vào <span className="inline-flex items-center bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm"><MoreVertical size={14} className="text-slate-500" /> (dấu 3 chấm)</span> ở góc trên bên phải.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold mr-2">3.</span>
                    <p>Chọn <strong className="text-blue-600 dark:text-blue-400">Cài đặt ứng dụng</strong> hoặc <strong className="text-blue-600 dark:text-blue-400">Thêm vào màn hình chính</strong>.</p>
                  </div>
                </div>
              </div>

              {/* iOS Instructions */}
              <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 shadow-sm flex flex-col space-y-4">
                <div className="flex items-center space-x-3 text-blue-700 dark:text-blue-400">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-xl">
                    <Share size={24} />
                  </div>
                  <h4 className="font-black text-lg">Trên iPhone (Safari)</h4>
                </div>
                <div className="space-y-3 text-sm md:text-base text-slate-700 dark:text-slate-300 font-medium">
                  <div className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">1.</span>
                    <p>Truy cập trang web bằng trình duyệt Safari.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">2.</span>
                    <p>Nhấn vào nút <span className="inline-flex items-center bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm text-blue-600 dark:text-blue-400 font-bold"><Share size={14} className="mr-1" /> Chia sẻ</span> ở thanh dưới cùng.</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mr-2">3.</span>
                    <p>Cuộn xuống và chọn <strong className="text-blue-600 dark:text-blue-400">Thêm vào màn hình chính</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4 transition-colors">
          <button 
            onClick={onLogin}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <LogIn size={18} />
            <span>Đăng nhập</span>
          </button>
          
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
            >
              <PlayCircle size={18} />
              <span>Xem Video HD</span>
            </a>
          )}
          
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-2xl shadow transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
