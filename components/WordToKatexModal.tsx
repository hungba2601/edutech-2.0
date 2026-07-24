import React from 'react';
import { X, Info } from 'lucide-react';

interface WordToKatexModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const WordToKatexModal: React.FC<WordToKatexModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-3 text-[#6366F1]">
            <Info className="w-6 h-6" />
            <h2 className="text-3xl font-black font-outfit text-[#6366F1]">Hướng dẫn sử dụng</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 border-2 border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-4 space-y-8 bg-white">
          
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-[#6366F1] text-white rounded-full flex items-center justify-center font-black flex-shrink-0">1</div>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">Chuẩn bị tài liệu</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Đảm bảo các công thức trong file Word (.docx) của bạn được viết dưới dạng mã LaTeX và kẹp giữa dấu <span className="font-bold text-slate-700">$</span> (ví dụ: $x^2 + y^2$) hoặc <span className="font-bold text-slate-700">$$</span> cho công thức nằm giữa dòng.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-[#6366F1] text-white rounded-full flex items-center justify-center font-black flex-shrink-0">2</div>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">Tải file lên hệ thống</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Kéo thả file .docx vào vùng nhận diện hoặc nhấn để chọn file từ máy tính của bạn.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-[#6366F1] text-white rounded-full flex items-center justify-center font-black flex-shrink-0">3</div>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">Bắt đầu chuyển đổi</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Nhấn nút <span className="font-bold text-slate-700">"Bắt đầu chuyển đổi"</span>. Hệ thống sẽ tự động quét và thay thế các mã LaTeX thành công thức Word Equation nguyên bản.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-[#6366F1] text-white rounded-full flex items-center justify-center font-black flex-shrink-0">4</div>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">Kiểm tra & Tải về</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Xem trước kết quả ở bảng dưới cùng và nhấn <span className="font-bold text-slate-700">"Tải file kết quả"</span> để nhận file Word mới đã được xử lý.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="p-6 rounded-2xl bg-[#EEF2FF] border-l-4 border-[#6366F1]">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="mr-2">💡</span>
              <span className="font-bold">Mẹo nhỏ:</span> Nếu bạn mở file trực tiếp (không qua server), chương trình vẫn hoạt động nhưng bạn nên mở file kết quả bằng phần mềm Microsoft Word để thấy công thức chuẩn nhất.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-8 pt-0 flex justify-center pb-10">
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-[#6366F1] hover:bg-[#4F46E5] text-white font-black rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đăng nhập để bắt đầu
          </button>
        </div>
      </div>
    </div>
  );
};
