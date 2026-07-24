
import React from 'react';
import { X, Volume2, Sparkles, MousePointer2, Key, Star, Mic } from 'lucide-react';

interface TextToSpeechModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const TextToSpeechModal: React.FC<TextToSpeechModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-50 relative">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-100">
              <Volume2 className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
              <p className="text-teal-600 text-xs font-bold uppercase tracking-wider">CHUYỂN VĂN BẢN THÀNH GIỌNG NÓI AI</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 pt-6 space-y-8 scrollbar-hide bg-white">
          
          {/* Intro Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-500">
              <Sparkles size={18} fill="currentColor" />
              <h3 className="font-black text-slate-800 text-sm uppercase">Giới thiệu về App</h3>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed text-justify font-medium">
              <span className="font-bold text-slate-800">Chuyển văn bản thành giọng nói AI</span> là công cụ mạnh mẽ giúp bạn tạo ra các file âm thanh chất lượng cao từ văn bản. Phù hợp cho việc tạo bài giảng điện tử, video thuyết minh hoặc hỗ trợ người khiếm thị.
            </p>
          </section>

          {/* Steps Section */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2 text-teal-600">
              <Mic size={18} />
              <h3 className="font-black text-slate-800 text-sm uppercase">Các bước sử dụng</h3>
            </div>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-teal-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-teal-600 font-black text-base shadow-sm">1</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Nhập văn bản</h4>
                    <MousePointer2 size={14} className="text-slate-400 rotate-45" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Dán hoặc nhập nội dung văn bản bạn muốn chuyển đổi vào ô nhập liệu.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-teal-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-teal-600 font-black text-base shadow-sm">2</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Chọn giọng đọc</h4>
                    <Star size={14} className="text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Lựa chọn các giọng đọc AI khác nhau (Nam/Nữ, vùng miền) để phù hợp với nội dung của bạn.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-teal-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-teal-600 font-black text-base shadow-sm">3</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Tạo & Tải về</h4>
                    <Sparkles size={14} className="text-teal-400" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Nhấn nút chuyển đổi, nghe thử và tải file âm thanh (.mp3) về máy tính của bạn.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Action */}
        <div className="p-8 pt-2 pb-10 flex justify-center bg-white">
          <button 
            onClick={onLogin}
            className="w-full py-5 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-3xl shadow-2xl transition-all active:scale-95 uppercase tracking-[0.15em] text-sm"
          >
            BẮT ĐẦU CHUYỂN ĐỔI NGAY!
          </button>
        </div>
      </div>
    </div>
  );
};
