
import React from 'react';
import { X, CreditCard, CheckCircle2, MessageCircle } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Cố định ở trên */}
        <div className="tech-gradient p-6 sm:p-8 text-white relative text-center shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-md">
            <CreditCard size={24} className="sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-xl sm:text-3xl font-black font-outfit uppercase tracking-tight">Bảng Giá Dịch Vụ</h2>
          <p className="text-white/80 text-[10px] sm:text-sm font-medium mt-1 uppercase tracking-widest">Nâng tầm công nghệ giáo dục</p>
        </div>

        {/* Nội dung có thể cuộn */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4 scrollbar-hide bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="space-y-3">
            {[
              { id: 1, text: "APP TẠO CÁC LOẠI KH CÓ TÍCH HỢP NLS", price: "199K" },
              { id: 2, text: "APP TẠO KHBD 5512 + POWERPOINT + SĐTD", price: "299K" },
              { id: 3, text: "APP TẠO MA TRẬN + CÂU HỎI ÔN TẬP + ĐỀ THI THEO CV 7991", price: "299K" },
              { id: 4, text: "APP VIẾT SÁNG KIẾN KINH NGHIỆM (SKKN)", price: "99K" },
              { id: 5, text: "TOOL VIẾT BIỆN PHÁP + SKKN + THẨM ĐỊNH / HOÀN CHỈNH", price: "199K" },
              { id: 6, text: "APP THẨM ĐỊNH + TỰ ĐỘNG CHỈNH SỬA SKKN", price: "99K" },
              { id: 7, text: "TIỆN ÍCH TỰ ĐỘNG GIẢI TN+TL TRÊN CÁC TRANG WEB", price: "99K" }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:border-green-200 dark:hover:border-green-800 hover:bg-green-50/30 dark:hover:bg-green-900/20 transition-all">
                <div className="flex items-start space-x-3 flex-1">
                  <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
                  <span className="text-[12px] sm:text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">{item.text}</span>
                </div>
                <div className="ml-3 sm:ml-4 text-right">
                  <span className="text-base sm:text-lg font-black text-red-600 dark:text-red-400 font-outfit">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-6 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-100 dark:border-emerald-900/30 text-center space-y-2 sm:space-y-3 transition-colors">
            <div className="flex items-center justify-center space-x-2 text-emerald-800 dark:text-emerald-400 font-bold">
              <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              <span className="uppercase tracking-wider text-[11px] sm:text-sm">Liên hệ hỗ trợ</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-[11px] sm:text-sm font-medium">Mọi chi tiết xin liên hệ Zalo:</p>
            <a 
              href="https://zalo.me/0938750424" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-outfit hover:scale-105 transition-transform"
            >
              0938750424
            </a>
          </div>
        </div>

        {/* Footer - Cố định ở dưới */}
        <div className="p-6 sm:p-8 pt-0 sm:pb-10 shrink-0 bg-white dark:bg-slate-900 transition-colors duration-300">
          <button 
            onClick={onClose}
            className="w-full py-3 sm:py-4 bg-slate-900 dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white font-black rounded-xl sm:rounded-2xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-widest text-[11px] sm:text-sm"
          >
            Đóng bảng giá
          </button>
        </div>
      </div>
    </div>
  );
};
