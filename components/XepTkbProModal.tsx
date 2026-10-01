import React from 'react';
import { X, CalendarDays, ArrowRight, ExternalLink, Sparkles, CheckCircle2, Clock, Zap } from 'lucide-react';

interface XepTkbProModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const XepTkbProModal: React.FC<XepTkbProModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 p-6 sm:p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <CalendarDays className="w-36 h-36 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3.5 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <CalendarDays className="w-8 h-8 text-blue-100" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight text-white drop-shadow-sm">
                XẾP TKB PRO 2.0
              </h2>
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-pulse tracking-wider">
                  NEW
                </span>
                <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-bounce tracking-wider">
                  HOT
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
          {/* Giới thiệu */}
          <div className="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/40 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5">
            <div className="p-2 bg-blue-600 text-white rounded-xl shadow-md mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Giới thiệu ứng dụng
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                <strong>XẾP TKB PRO 2.0</strong> là giải pháp xếp thời khóa biểu tự động thông minh thế hệ mới, hỗ trợ các trường học và giáo viên tối ưu hóa việc phân công chuyên môn, giải quyết các ràng buộc sư phạm phức tạp, tránh trùng lịch và xuất thời khóa biểu khoa học chỉ trong vài phút.
              </p>
            </div>
          </div>

          {/* Hướng dẫn nhanh */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Hướng dẫn truy cập & sử dụng nhanh
            </h4>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Nhấp nút &ldquo;Đăng nhập&rdquo; để vào Web App
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Hệ thống sẽ mở trang chính thức tại địa chỉ:{' '}
                    <a 
                      href="https://tkbpro20.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-semibold underline inline-flex items-center gap-1"
                    >
                      https://tkbpro20.vercel.app/
                      <ExternalLink size={12} />
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Nhập dữ liệu phân công & ràng buộc
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Khai báo danh sách giáo viên, lớp học, môn học và các điều kiện ràng buộc tiết dạy (tiết trống, ngày nghỉ, phòng chức năng...).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                    Xếp tự động & xuất file TKB
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Bấm khởi chạy thuật toán xếp tự động, kiểm tra kết quả và xuất thời khóa biểu toàn trường hoặc từng giáo viên/lớp ra Excel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tính năng nổi bật */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Xử lý siêu tốc</span>
            </div>
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Không trùng lịch</span>
            </div>
            <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <Clock className="w-4 h-4 text-blue-500 shrink-0" />
              <span>Tiết kiệm 90% thời gian</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Phiên bản</span>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">TKB PRO 2.0 • Trực Tuyến</span>
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
              className="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-black rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm group"
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
