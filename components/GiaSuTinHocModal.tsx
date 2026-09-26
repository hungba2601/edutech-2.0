import React from 'react';
import { X, Code, ArrowRight, ExternalLink, Sparkles, CheckCircle2, Laptop } from 'lucide-react';

interface GiaSuTinHocModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const GiaSuTinHocModal: React.FC<GiaSuTinHocModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 p-6 sm:p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <Code className="w-36 h-36 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3.5 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <Laptop className="w-8 h-8 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight text-white drop-shadow-sm">
                GIA SƯ TIN HỌC THCS
              </h2>
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-pulse tracking-wider">
                  NEW
                </span>
                <span className="bg-emerald-400 text-emerald-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm tracking-wider">
                  FREE
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all group relative z-10 text-white"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5">
            <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-md mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Giới thiệu ứng dụng
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                <strong>GIA SƯ TIN HỌC THCS</strong> là nền tảng trợ lý học tập trực tuyến thông minh, giúp học sinh cấp Trung học cơ sở nắm vững kiến thức lý thuyết, giải bài tập và thực hành môn Tin học theo chương trình mới một cách dễ dàng và hiệu quả.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Hướng dẫn truy cập và sử dụng
            </h4>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Nhấp vào nút &ldquo;Đăng nhập&rdquo;
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Hệ thống sẽ chuyển bạn đến địa chỉ web app chính thức: <span className="text-emerald-600 dark:text-emerald-400 font-semibold underline">https://giasu-tinhoc-thcs.vercel.app/</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-teal-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Chọn chương trình & khối lớp
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Lựa chọn nội dung theo khối lớp (Lớp 6, 7, 8, 9) hoặc chuyên đề lý thuyết/thực hành bạn muốn học.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Tương tác cùng Gia Sư AI
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Đặt câu hỏi, giải đáp thắc mắc, hướng dẫn viết mã nguồn và luyện tập các dạng bài tập Tin học.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Trạng thái</span>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">Miễn phí & Sẵn sàng</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-all"
            >
              Đóng
            </button>
            <button 
              onClick={onLogin}
              className="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm group"
            >
              <span>ĐĂNG NHẬP APP</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
