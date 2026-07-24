
import React from 'react';
import { X, HelpCircle, Shirt, Sparkles, Wand2, Download, Info, Camera } from 'lucide-react';

interface TryOnModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const TryOnModal: React.FC<TryOnModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#DB2777] p-8 pb-8 flex items-center justify-between relative">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black font-outfit uppercase tracking-tight leading-none">Hướng dẫn sử dụng</h2>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider mt-1">LÀM CHỦ APP THAY TRANG PHỤC STUDIO</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-10 scrollbar-hide bg-white">
          
          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-black text-sm">1</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Tải ảnh chân dung</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-500 shadow-sm flex-shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tải lên một bức ảnh chân dung rõ mặt của bạn. AI sẽ sử dụng ảnh này để "mặc" các bộ trang phục mới.
              </p>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-black text-sm">2</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Chọn trang phục</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-500 shadow-sm flex-shrink-0">
                <Shirt className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chọn mẫu trang phục từ thư viện hoặc mô tả bộ đồ bạn muốn thử bằng văn bản (Prompt).
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-black text-sm">3</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Xử lý AI</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-500 shadow-sm flex-shrink-0">
                <Wand2 className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhấn nút <span className="font-bold text-slate-800 uppercase text-pink-600">Thử đồ ngay</span> và đợi AI Studio xử lý việc ghép trang phục vào ảnh của bạn.
              </p>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center font-black text-sm">4</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Lưu kết quả</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-pink-500 shadow-sm flex-shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tải bức ảnh đã được "thử đồ" về máy với chất lượng cao để chia sẻ hoặc tham khảo phong cách.
              </p>
            </div>
          </section>

          {/* Note */}
          <div className="flex items-start space-x-4 p-5 rounded-3xl bg-blue-50 border border-blue-100">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-blue-700 leading-relaxed">
                <span className="font-bold">Lưu ý:</span> Để có kết quả tốt nhất, hãy sử dụng ảnh chân dung có ánh sáng tốt và phông nền đơn giản.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-8 pt-4 pb-10 flex justify-end bg-white border-t border-slate-50">
          <button 
            onClick={onLogin}
            className="px-10 py-4 bg-[#DB2777] hover:bg-[#BE185D] text-white font-black rounded-2xl shadow-xl shadow-pink-200 transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đã hiểu!
          </button>
        </div>
      </div>
    </div>
  );
};
