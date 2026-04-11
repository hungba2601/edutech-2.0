import React from 'react';
import { X, Info, AlertTriangle, ChevronRight } from 'lucide-react';

interface CryptoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export const CryptoGuideModal: React.FC<CryptoGuideModalProps> = ({ isOpen, onClose, onExplore }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200 dark:shadow-none">
              <Info size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight text-slate-900 dark:text-white leading-tight">HƯỚNG DẪN CHI TIẾT</h2>
              <p className="text-[10px] sm:text-xs font-bold text-orange-600 dark:text-orange-400 tracking-widest uppercase">Hệ thống phân tích thông minh</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[70vh]">
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center uppercase tracking-wide">
              <span className="text-orange-600 mr-2">1.</span> NỀN TẢNG CÔNG NGHỆ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Ứng dụng kết hợp sức mạnh của <span className="text-orange-600 font-bold">Gemini 3.0 Pro Vision</span> và dữ liệu <span className="text-blue-600 font-bold">OKX Market</span>. AI sẽ đọc hiểu biểu đồ kỹ thuật như một Trader chuyên nghiệp, xác định các vùng hỗ trợ/kháng cự và xu hướng giá.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center uppercase tracking-wide">
              <span className="text-orange-600 mr-2">2.</span> CÁCH THỰC HIỆN
            </h3>
            
            <div className="space-y-3">
              {/* Step 01 */}
              <div className="p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100/50 dark:border-orange-900/20 flex items-start space-x-4 group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-orange-200 dark:text-orange-900 italic leading-none group-hover:text-orange-300 transition-colors">01</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">CẶP GIAO DỊCH</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Nhập mã đồng coin bạn quan tâm (VD: BTC-USDT, SOL-USDT).</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100/50 dark:border-orange-900/20 flex items-start space-x-4 group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-orange-200 dark:text-orange-900 italic leading-none group-hover:text-orange-300 transition-colors">02</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">ĐỒNG BỘ BIỂU ĐỒ</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Nhấn "CẬP NHẬT BIỂU ĐỒ". Hệ thống tự động thu thập dữ liệu 4 khung: 15m, 1h, 4h, 1D từ OKX.</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="p-4 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100/50 dark:border-orange-900/20 flex items-start space-x-4 group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-orange-200 dark:text-orange-900 italic leading-none group-hover:text-orange-300 transition-colors">03</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">NHẬN KẾT QUẢ</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Nhấn "BẮT ĐẦU PHÂN TÍCH AI". AI sẽ trả về chiến lược Scalping (ngắn hạn) và Swing (dài hạn).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-900/50 space-y-2">
            <div className="flex items-center space-x-2 text-orange-700 dark:text-orange-400">
              <AlertTriangle size={18} />
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider">KHUYẾN CÁO QUAN TRỌNG</h4>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 font-bold italic leading-relaxed">
              Thị trường Crypto tiềm ẩn rủi ro rất cao. Mọi dự báo của AI chỉ mang tính chất tham khảo dựa trên mô hình quá khứ. Tuyệt đổi không sử dụng làm lời khuyên đầu tư tài chính duy nhất.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={onExplore}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2 text-sm sm:text-base uppercase tracking-wider group"
          >
            <span>ĐÃ HIỂU - KHÁM PHÁ NGAY</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
