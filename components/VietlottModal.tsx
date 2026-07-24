
import React from 'react';
import { X, Trophy, Sparkles, User, Calendar, BarChart3, ArrowRight, Smartphone, Share2, MonitorPlay } from 'lucide-react';

interface VietlottModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const VietlottModal: React.FC<VietlottModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Trophy className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <Trophy className="w-8 h-8 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight">DỰ ĐOÁN VÉ SỐ VIETLOTT & LÔ ĐỀ</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-yellow-400 text-red-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">NEW</span>
                <span className="bg-green-400 text-green-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">FREE</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all group relative z-10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-[2rem] border border-red-100 dark:border-red-900/30">
              <p className="text-lg font-bold text-red-800 dark:text-red-300 leading-relaxed text-center italic">
                "Dự đoán vé số Vietlott & Lô đề dựa vào dữ liệu thống kê 100 kỳ quay và Tên, Ngày sinh, Nhân sinh tướng để dự đoán con số cho bạn"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Dữ liệu 100 kỳ</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Phân tích chuyên sâu từ 100 kỳ quay gần nhất để tìm qui luật số.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Cá nhân hóa AI</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Kết hợp Tên và Nhân sinh tướng để chọn lọc con số hợp mệnh.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-xl text-amber-600 dark:text-amber-400 shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Tử vi số học</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Dựa trên ngày sinh để tính toán chu kỳ may mắn tài lộc.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Mega & Power</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Hỗ trợ dự đoán cho cả hai loại hình Mega 6/45 và Power 6/55.</p>
                </div>
              </div>
            </div>

            {/* PWA Instructions */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h4 className="flex items-center space-x-2 text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  <Smartphone className="w-5 h-5 text-red-600" />
                  <span>Hướng dẫn cài đặt thành App Mobile</span>
                </h4>
                <a 
                  href="https://youtu.be/d_vjNZ0R3lw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-red-500/25 active:scale-95 shrink-0"
                >
                  <MonitorPlay size={16} />
                  <span>XEM VIDEO</span>
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Android Section */}
                <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600">
                      <Smartphone size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Trên Android (Chrome)</span>
                  </div>
                  <ol className="space-y-2 text-[11px] text-slate-500 dark:text-slate-400 list-decimal ml-4">
                    <li>Truy cập trang web bằng Chrome.</li>
                    <li>Nhấn vào dấu 3 chấm ở góc trên bên phải.</li>
                    <li>Chọn <strong className="text-red-500">Cài đặt ứng dụng</strong> (Install App) hoặc <strong className="text-red-600 font-bold">Thêm vào màn hình chính</strong>.</li>
                  </ol>
                </div>

                {/* iPhone Section */}
                <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
                      <Share2 size={16} />
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Trên iPhone (Safari)</span>
                  </div>
                  <ol className="space-y-2 text-[11px] text-slate-500 dark:text-slate-400 list-decimal ml-4">
                    <li>Truy cập trang web bằng Safari.</li>
                    <li>Nhấn vào nút <strong className="text-blue-500">Chia sẻ</strong> (biểu tượng hình vuông có mũi tên lên).</li>
                    <li>Kéo xuống và chọn <strong className="text-red-600 font-bold">Thêm vào màn hình chính</strong> (Add to Home Screen).</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Trạng thái hệ thống</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wide">Hoạt động ổn định</span>
            </div>
          </div>
          
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-black rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-red-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-tighter text-lg group"
          >
            <span>BẮT ĐẦU DỰ ĐOÁN</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
