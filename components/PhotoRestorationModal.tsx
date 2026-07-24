
import React from 'react';
import { X, Upload, Sparkles, ArrowLeftRight, Download, CheckCircle2, PlayCircle } from 'lucide-react';

interface PhotoRestorationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const PhotoRestorationModal: React.FC<PhotoRestorationModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#10b981] p-8 text-center text-white relative">
          <h2 className="text-3xl font-extrabold font-outfit italic tracking-wider mb-2 uppercase">HƯỚNG DẪN SỬ DỤNG</h2>
          <p className="text-emerald-50 opacity-90 text-sm font-medium">Mang hơi thở mới cho những kỷ niệm xưa cũ qua 4 bước đơn giản.</p>
          <div className="absolute top-6 right-6 flex items-center space-x-3">
             {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-[10px] font-bold border border-white/10 uppercase"
              >
                <PlayCircle size={14} />
                <span>Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="p-8 space-y-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl border border-emerald-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Upload size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-emerald-300 italic mr-2 text-xl">01</span> Tải ảnh lên</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Chọn những bức ảnh cũ, mờ nét hoặc bị ố vàng từ thiết bị của bạn.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-emerald-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-emerald-300 italic mr-2 text-xl">02</span> Phục chế AI</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Công nghệ AI sẽ tự động phân tích và tái tạo lại các chi tiết bị mất.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-emerald-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                <ArrowLeftRight size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-emerald-300 italic mr-2 text-xl">03</span> So sánh</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Sử dụng thanh trượt "Trước/Sau" để cảm nhận sự kỳ diệu của phục chế.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-emerald-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                <Download size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-emerald-300 italic mr-2 text-xl">04</span> Tải về</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Lưu giữ những kỷ niệm quý giá với chất lượng sắc nét nhất có thể.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-2 flex justify-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-12 py-3.5 bg-[#059669] hover:bg-[#047857] text-white font-bold rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            <CheckCircle2 size={18} />
            <span>ĐÃ HIỂU, KHÁM PHÁ NGAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
