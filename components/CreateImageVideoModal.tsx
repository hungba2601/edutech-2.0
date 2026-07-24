import React from 'react';
import { X, Sparkles, Image, Settings, Wand2, CheckCircle2, UserCircle, PlayCircle, Video } from 'lucide-react';

interface CreateImageVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const CreateImageVideoModal: React.FC<CreateImageVideoModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
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
            <button 
              onClick={onClose}
              className="p-2 bg-slate-50 hover:bg-slate-100 text-slate-400 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-rose-100 mb-6">
            <Video className="w-10 h-10 animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#be123c] font-outfit italic tracking-tight leading-tight uppercase">
            CÔNG CỤ TẠO ẢNH - INFORGRAPHIC <br />
            <span className="text-rose-600">- VIDEO CHO BÀI HỌC</span>
          </h2>
          <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 font-bold text-sm tracking-widest uppercase mt-4">Hệ thống tạo ảnh Infographic và video MC chuyên nghiệp</p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-8 pb-8 space-y-6 scrollbar-hide">
          <div className="bg-rose-50 border-2 border-rose-100 rounded-3xl p-5 flex items-start space-x-4 shadow-sm">
            <div className="bg-rose-500 p-2 rounded-2xl text-white shadow-md">
              <UserCircle size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="text-rose-800 font-black text-sm uppercase tracking-wider">Hướng dẫn sử dụng</h4>
              <p className="text-slate-700 text-xs font-bold leading-relaxed">
                Ứng dụng giúp thầy cô tạo ảnh Infographic tóm tắt bài học, làm video mở đầu bài học với MC ảo. Thầy cô nhấp <span className="text-rose-600 underline decoration-2">Đăng nhập</span> phía dưới để truy cập trực tiếp hệ thống.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-[2rem] bg-[#fff1f2] border border-rose-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Image size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 1: Chọn mẫu</h4>
                <p className="text-[10px] text-[#be123c] font-medium leading-relaxed">Lựa chọn phong cách thiết kế cho ảnh Infographic hoặc định dạng video có MC ảo.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#fff1f2] border border-rose-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Settings size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 2: Nhập nội dung</h4>
                <p className="text-[10px] text-[#be123c] font-medium leading-relaxed">Cung cấp nội dung tóm tắt bài học hoặc lời thoại để MC ảo nói theo kịch bản có sẵn.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#eff6ff] border border-blue-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm">
                <Wand2 size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-slate-800 text-[13px] italic uppercase">Bước 3: Tinh chỉnh AI</h4>
                <p className="text-[10px] text-[#2563eb] font-medium leading-relaxed">Điều chỉnh lại các thông số, phông nền, âm thanh để tác phẩm trở nên hoàn hảo nhất.</p>
              </div>
            </div>
            <div className="p-5 rounded-[2rem] bg-[#fdf4ff] border border-purple-50 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-rose-400 shadow-sm">
                <Sparkles size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-[#701a75] text-[13px] italic uppercase">Bước 4: Xuất bản</h4>
                <p className="text-[10px] text-[#a21caf] font-medium leading-relaxed">Tải xuống ảnh Infographic sắc nét hoặc video giới thiệu để sử dụng trong bài giảng.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-0 pb-10 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-[90%] mx-auto">
          <button 
            onClick={onLogin}
            className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-full shadow-xl shadow-green-100 flex items-center justify-center space-x-2 transition-all active:scale-[0.97] uppercase tracking-widest text-sm"
          >
            <CheckCircle2 size={18} />
            <span>ĐĂNG NHẬP HỆ THỐNG</span>
          </button>
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-extrabold rounded-full shadow-xl shadow-green-100 flex items-center justify-center space-x-2 transition-all active:scale-[0.97] uppercase tracking-widest text-sm"
            >
              <PlayCircle size={18} />
              <span>XEM VIDEO HD</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
