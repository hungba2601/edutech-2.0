
import React from 'react';
import { X, TrendingUp, Info, PlayCircle, LogIn, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CryptoPredictionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const CryptoPredictionModal: React.FC<CryptoPredictionModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-6 border-b border-orange-100 flex items-center justify-between relative bg-white">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-100">
              <Info size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 font-outfit uppercase tracking-tight">HƯỚNG DẪN CHI TIẾT</h2>
              <p className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em]">Hệ thống phân tích thông minh</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1 px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-[10px] font-bold uppercase"
              >
                <PlayCircle size={14} />
                <span>Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white">
          
          {/* Section 1: Technology */}
          <section className="space-y-3">
            <h3 className="text-sm font-black text-orange-800 uppercase tracking-widest flex items-center">
              <span className="mr-2">1.</span> NỀN TẢNG CÔNG NGHỆ
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              Ứng dụng kết hợp sức mạnh của <span className="font-bold text-orange-600">Gemini 3.0 Pro Vision</span> và dữ liệu <span className="font-bold text-blue-600">OKX Market</span>. AI sẽ đọc hiểu biểu đồ kỹ thuật như một Trader chuyên nghiệp, xác định các vùng hỗ trợ/kháng cự và xu hướng giá.
            </p>
          </section>

          {/* Section 2: How it works */}
          <section className="space-y-4">
            <h3 className="text-sm font-black text-orange-800 uppercase tracking-widest flex items-center">
              <span className="mr-2">2.</span> CÁCH THỰC HIỆN
            </h3>
            
            <div className="space-y-4">
              {/* Step 01 */}
              <div className="p-5 rounded-[1.5rem] bg-orange-50/50 border border-orange-100 flex items-start space-x-5">
                <span className="text-3xl font-black text-orange-300 italic shrink-0">01</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-base uppercase tracking-tight">CẶP GIAO DỊCH</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Nhập mã đồng coin bạn quan tâm (VD: BTC-USDT, SOL-USDT).</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="p-5 rounded-[1.5rem] bg-orange-50/50 border border-orange-100 flex items-start space-x-5">
                <span className="text-3xl font-black text-orange-300 italic shrink-0">02</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-base uppercase tracking-tight">ĐỒNG BỘ BIỂU ĐỒ</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Nhấn "CẬP NHẬT BIỂU ĐỒ". Hệ thống tự động thu thập dữ liệu 4 khung: 15m, 1h, 4h, 1D từ OKX.</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="p-5 rounded-[1.5rem] bg-orange-50/50 border border-orange-100 flex items-start space-x-5">
                <span className="text-3xl font-black text-orange-300 italic shrink-0">03</span>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-800 text-base uppercase tracking-tight">NHẬN KẾT QUẢ</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Nhấn "BẮT ĐẦU PHÂN TÍCH AI". AI sẽ trả về chiến lược Scalping (ngắn hạn) và Swing (dài hạn).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Important Warning */}
          <section className="p-6 rounded-[2rem] bg-amber-50 border-2 border-orange-200 space-y-3">
            <div className="flex items-center space-x-2 text-orange-800 font-bold uppercase tracking-wider text-sm">
              <AlertTriangle size={20} className="text-orange-600" />
              <h3>KHUYẾN CÁO QUAN TRỌNG</h3>
            </div>
            <p className="text-[11px] text-orange-900 leading-relaxed font-bold italic text-justify">
              Thị trường Crypto tiềm ẩn rủi ro rất cao. Mọi dự báo của AI chỉ mang tính chất tham khảo dựa trên mô hình quá khứ. Tuyệt đối không sử dụng làm lời khuyên đầu tư tài chính duy nhất.
            </p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="p-8 pt-0 pb-10">
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-[0.98] uppercase tracking-widest text-sm flex items-center justify-center space-x-2"
          >
            <span>ĐÃ HIỂU - KHÁM PHÁ NGAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
