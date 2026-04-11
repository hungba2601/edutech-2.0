
import React from 'react';
import { X, Sparkles, Book, Image as ImageIcon, Mic, Video, Lightbulb, PlayCircle } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 flex items-center justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
              <Sparkles className="w-8 h-8 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-outfit uppercase tracking-wider">KHÁM PHÁ PHÉP MÀU</h2>
              <p className="text-purple-50 opacity-90 text-sm md:text-base font-medium">Biến trí tưởng tượng thành video sống động</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden lg:flex items-center space-x-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-sm font-bold border border-white/10 uppercase"
              >
                <PlayCircle size={16} />
                <span>Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-indigo-500 shadow-sm">
                <Book size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-base">1. Lên Ý Tưởng</h4>
                <p className="text-xs text-slate-500 leading-relaxed">AI sẽ tự động dệt nên kịch bản 4 cảnh hấp dẫn dựa trên yêu cầu của bạn.</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-purple-500 shadow-sm">
                <ImageIcon size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-base">2. Nhân Vật Riêng</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Tải lên ảnh mẫu để AI giữ nguyên tạo hình nhân vật xuyên suốt câu chuyện.</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-green-500 shadow-sm">
                <Mic size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-base">3. Giọng Đọc AI</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Mang đến giọng đọc tiếng Việt/Anh truyền cảm, tự nhiên cho từng cảnh.</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-orange-500 shadow-sm">
                <Video size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-base">4. Xuất Video</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Tải video về máy để chia sẻ lên lớp học hoặc mạng xã hội.</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50/50 rounded-3xl p-6 border-2 border-dashed border-yellow-200 flex items-start space-x-4">
            <div className="bg-white p-2.5 rounded-full shadow-sm text-orange-600 border border-yellow-100">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-orange-800 text-sm uppercase tracking-wider">Mẹo nhỏ cho bạn</h4>
              <p className="text-slate-600 text-[13px] leading-relaxed italic">
                "Hãy mô tả chi tiết một chút về bối cảnh hoặc tính cách nhân vật để AI hiểu đúng ý đồ sư phạm của bạn nhất nhé!"
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0">
          <button 
            onClick={onLogin}
            className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.97] uppercase tracking-widest text-base"
          >
            ĐÃ HIỂU, BẮT ĐẦU NGAY!
          </button>
        </div>
      </div>
    </div>
  );
};
