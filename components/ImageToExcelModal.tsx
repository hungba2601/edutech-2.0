
import React from 'react';
import { X, HelpCircle, Lightbulb, LogIn, PlayCircle, CheckCircle2 } from 'lucide-react';

interface ImageToExcelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const ImageToExcelModal: React.FC<ImageToExcelModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-8 pb-4 flex items-start justify-between relative">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
              <HelpCircle size={36} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-800 font-outfit uppercase tracking-tight">Hướng dẫn sử dụng</h2>
              <p className="text-slate-500 text-sm font-medium">Làm thế nào để chuyển ảnh thành bảng Excel?</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
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
              className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-8 py-4 space-y-8 scrollbar-hide">
          {/* Overview Section */}
          <section className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
              <h3 className="text-lg font-bold text-green-700 uppercase tracking-tight font-outfit">Tổng quan về ứng dụng</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              AI Image To Table sử dụng sức mạnh của <span className="font-bold text-slate-800">Gemini 3 Pro</span> để nhận diện cấu trúc bảng từ hình ảnh. Ứng dụng này giúp bạn tiết kiệm hàng giờ nhập liệu thủ công bằng cách tự động trích xuất dữ liệu từ các báo cáo, hóa đơn hoặc tài liệu dạng bảng.
            </p>
          </section>

          {/* Steps Section */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-6 bg-green-600 rounded-full"></div>
              <h3 className="text-lg font-bold text-green-700 uppercase tracking-tight font-outfit">Các bước thực hiện</h3>
            </div>
            
            <div className="space-y-6 pl-2">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-lg shadow-sm">1</div>
                <div className="space-y-1 pt-1">
                  <h4 className="font-bold text-slate-800 text-base">Tải ảnh lên</h4>
                  <p className="text-xs text-slate-500 leading-relaxed italic">Chọn một hoặc nhiều hình ảnh chứa bảng biểu. Bạn có thể chọn file từ máy tính hoặc kéo thả vào vùng tải ảnh.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-lg shadow-sm">2</div>
                <div className="space-y-1 pt-1">
                  <h4 className="font-bold text-slate-800 text-base">Trích xuất bảng</h4>
                  <p className="text-xs text-slate-500 leading-relaxed italic">Nhấn nút "Trích xuất bảng". AI sẽ phân tích cấu trúc cột và hàng từ tất cả các ảnh đã chọn và hợp nhất chúng lại.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-black text-lg shadow-sm">3</div>
                <div className="space-y-1 pt-1">
                  <h4 className="font-bold text-slate-800 text-base">Xuất File Excel</h4>
                  <p className="text-xs text-slate-500 leading-relaxed italic">Sau khi dữ liệu hiển thị, hãy kiểm tra lại lần cuối và nhấn "Xuất File Excel" để tải về máy tính.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="p-6 rounded-[2rem] bg-green-50/50 border border-green-100 space-y-4">
            <div className="flex items-center space-x-3 text-green-700 font-bold uppercase tracking-wider text-sm">
              <Lightbulb size={20} className="text-green-600" />
              <h3>Mẹo trích xuất hiệu quả</h3>
            </div>
            <ul className="space-y-2 pl-2">
              {[
                "Ảnh nên có độ phân giải cao và đủ ánh sáng.",
                "Cố gắng chụp ảnh bảng thẳng nhất có thể, tránh góc nghiêng quá lớn.",
                "Nếu ảnh có nhiều rác (văn bản thừa xung quanh bảng), kết quả có thể kém chính xác hơn."
              ].map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs text-slate-600 leading-relaxed">
                  <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5 shrink-0"></div>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="p-8 pt-4 pb-10 space-y-4">
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-slate-900 hover:bg-black text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-widest text-sm flex items-center justify-center space-x-2"
          >
            <span>BẮT ĐẦU NGAY</span>
          </button>
          <div className="flex justify-center">
             <button 
              onClick={onClose}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 uppercase tracking-widest transition-colors"
            >
              Bỏ qua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
