import React from 'react';
import { X, Sparkles, Image, Settings, Wand2, CheckCircle2, UserCircle, PlayCircle } from 'lucide-react';

interface AIPhotoEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const AIPhotoEditorModal: React.FC<AIPhotoEditorModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
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

          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-orange-100 mb-6">
            <Sparkles className="w-10 h-10 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#9a3412] font-outfit italic tracking-tight leading-tight uppercase">
            CHỈNH SỬA ẢNH AI <br />
            <span className="text-orange-600">CÔNG CỤ THẾ HỆ MỚI</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mt-4">Hệ thống chỉnh sửa hình ảnh AI thông minh đa tính năng</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-8 pb-8 space-y-6 scrollbar-hide">
          <div className="bg-orange-50 border-2 border-orange-100 rounded-3xl p-5 flex items-start space-x-4 shadow-sm">
            <div className="bg-orange-500 p-2 rounded-2xl text-white shadow-md">
              <UserCircle size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-orange-800 font-black text-sm uppercase tracking-wider">Hướng dẫn truy cập miễn phí</h4>
              <p className="text-slate-700 text-xs font-bold leading-relaxed">
                Ứng dụng tích hợp trực tiếp trên nền tảng AI Studio. Thầy cô chỉ cần nhấp nút <span className="text-orange-600 underline decoration-2">Đăng nhập</span> phía dưới để liên kết và sử dụng các tính năng chỉnh sửa ảnh chuyên sâu hoàn toàn miễn phí.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[2rem] bg-[#fff7ed] border border-orange-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Image size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 1: Tải ảnh gốc</h4>
                <p className="text-[10px] text-[#c2410c] font-medium leading-relaxed">Chọn ảnh chân dung, ảnh chụp sản phẩm hoặc phong cảnh từ thiết bị cần chỉnh sửa và tải lên hệ thống.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#fff7ed] border border-orange-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Settings size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 2: Chọn tính năng AI</h4>
                <p className="text-[10px] text-[#c2410c] font-medium leading-relaxed">Chọn tính năng mong muốn như xóa vật thể thừa, mở rộng khung hình, chỉnh sửa khuôn mặt hoặc đổi phong cách.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#eff6ff] border border-blue-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Wand2 size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 3: Gửi mô tả yêu cầu</h4>
                <p className="text-[10px] text-[#2563eb] font-medium leading-relaxed">Nhập mô tả chi tiết bằng tiếng Việt hoặc tiếng Anh để AI hiểu rõ mong muốn chỉnh sửa của bạn và thực hiện chính xác.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#fdf4ff] border border-purple-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-400 shadow-sm">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#701a75] text-[13px] italic uppercase">Bước 4: Nhận ảnh kết quả</h4>
                <p className="text-[10px] text-[#a21caf] font-medium leading-relaxed">Xem trước hình ảnh đã chỉnh sửa, điều chỉnh thêm nếu cần và tải về thiết bị với độ phân giải cao nhất.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0 pb-10 flex justify-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-[80%] py-5 bg-orange-600 hover:bg-orange-700 text-white font-extrabold rounded-full shadow-2xl shadow-orange-100 flex items-center justify-center space-x-2 transition-all active:scale-[0.97] uppercase tracking-widest text-sm"
          >
            <CheckCircle2 size={18} />
            <span>BẮT ĐẦU CHỈNH SỬA NGAY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
