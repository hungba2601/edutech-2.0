import React from 'react';
import { X, FileText, CheckCircle, Sliders, Zap, ArrowRight, BookOpen } from 'lucide-react';

interface SoanCongVanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export const SoanCongVanModal: React.FC<SoanCongVanModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FileText className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <FileText className="w-8 h-8 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight">CÔNG CỤ SOẠN THẢO CÔNG VĂN - KẾ HOẠCH</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-yellow-400 text-emerald-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">NEW</span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">HOT</span>
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
            <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-[2rem] border border-emerald-100 dark:border-emerald-900/30">
              <p className="text-lg font-bold text-emerald-800 dark:text-emerald-300 leading-relaxed text-center italic">
                "Hỗ trợ soạn thảo công văn, kế hoạch hành chính chuẩn xác, nhanh chóng theo đúng thể thức và kỹ thuật trình bày quy định tại Nghị định số 30/2020/NĐ-CP."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Chuẩn Thể Thức NĐ 30</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tự động hóa căn lề, font chữ, cỡ chữ, khoảng cách dòng và cách bố trí các thành phần văn bản hành chính.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-xl text-teal-600 dark:text-teal-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Soạn Thảo Cực Nhanh</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tạo mẫu công văn, tờ trình, quyết định, kế hoạch chỉ với vài thao tác đơn giản.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-xl text-sky-600 dark:text-sky-400 shrink-0">
                  <Sliders size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Tùy Biến Linh Hoạt</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Cho phép điều chỉnh các trường thông tin cơ quan, số hiệu, trích yếu, nội dung chi tiết theo nhu cầu thực tế.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-xl text-amber-600 dark:text-amber-400 shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Thư Viện Mẫu Đa Dạng</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tích hợp sẵn các mẫu văn bản hành chính thông dụng trong nhà trường và cơ quan nhà nước.</p>
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
              <span className="text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wide">Sẵn sàng</span>
            </div>
          </div>
          
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-tighter text-lg group"
          >
            <span>ĐĂNG NHẬP</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
