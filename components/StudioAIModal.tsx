
import React from 'react';
import { X, Sparkles, Camera, Settings, Wand2, CheckCircle2, UserCircle, PlayCircle } from 'lucide-react';

interface StudioAIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const StudioAIModal: React.FC<StudioAIModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="relative pt-12 pb-6 px-8 text-center space-y-4">
          <div className="absolute top-8 right-8 flex items-center space-x-2">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-[10px] font-bold border border-white/10 uppercase"
              >
                <PlayCircle size={14} />
                <span className="hidden sm:inline">Xem Video HD</span>
                <span className="sm:hidden">Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mx-auto w-20 h-20 tech-gradient rounded-full flex items-center justify-center text-white shadow-xl shadow-teal-100 mb-6">
            <Sparkles className="w-10 h-10" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#065f46] font-outfit italic tracking-tight leading-tight uppercase">
            STUDIO AI PRO <br />
            <span className="text-teal-600">NHIẾP ẢNH GIA ẢO</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#2dd4bf] mx-auto rounded-full"></div>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mt-4">Hệ thống nhiếp ảnh AI chuyên nghiệp thế hệ mới</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-8 pb-8 space-y-6 scrollbar-hide">
          <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-5 flex items-start space-x-4 shadow-sm">
            <div className="bg-red-500 p-2 rounded-2xl text-white shadow-md">
              <UserCircle size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-red-700 font-black text-sm uppercase tracking-wider">Hướng dẫn đăng nhập FREE</h4>
              <p className="text-slate-700 text-xs font-bold leading-relaxed">
                Ứng dụng hoàn toàn miễn phí. Thầy cô chỉ cần nhập <span className="text-red-600 underline decoration-2">tài khoản email cá nhân</span> để bắt đầu, <span className="text-red-600 underline decoration-2">hệ thống không yêu cầu mật khẩu</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[2rem] bg-[#f0fdfa] border border-teal-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Camera size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 1: Tải ảnh chân dung</h4>
                <p className="text-[10px] text-[#0d9488] font-medium leading-relaxed">Chọn một bức ảnh chụp rõ mặt, trực diện và có ánh sáng tốt để AI nhận diện đặc điểm khuôn mặt chính xác nhất.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#f0fdfa] border border-teal-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Settings size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 2: Cấu hình phong cách</h4>
                <p className="text-[10px] text-[#0d9488] font-medium leading-relaxed">Tùy chỉnh các thông số về phong cách (nghệ thuật, công sở, dã ngoại...) và góc chụp mong muốn theo ý thích.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#eff6ff] border border-blue-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Wand2 size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 3: Sáng tạo bối cảnh</h4>
                <p className="text-[10px] text-[#2563eb] font-medium leading-relaxed">Sử dụng tiếng Việt để mô tả bối cảnh hoặc trang phục bạn muốn xuất hiện. AI sẽ thực hiện phép màu để lồng ghép bạn vào đó.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#fdf4ff] border border-purple-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-400 shadow-sm">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#701a75] text-[13px] italic uppercase">Bước 4: Nhận kết quả</h4>
                <p className="text-[10px] text-[#a21caf] font-medium leading-relaxed">Hệ thống sẽ tạo ra những bức ảnh nghệ thuật chất lượng cao. Bạn có thể xem và tải về máy hoàn toàn miễn phí.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0 pb-10 flex justify-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-[80%] py-5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-extrabold rounded-full shadow-2xl shadow-teal-100 flex items-center justify-center space-x-2 transition-all active:scale-[0.97] uppercase tracking-widest text-sm"
          >
            <CheckCircle2 size={18} />
            <span>BẮT ĐẦU SÁNG TẠO NGAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
