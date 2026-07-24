import React from 'react';
import { X, Image as ImageIcon, Sparkles, Target, Zap, ArrowRight, PlayCircle } from 'lucide-react';

interface ProverbGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  videoUrl?: string;
}

export const ProverbGameModal: React.FC<ProverbGameModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ImageIcon className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <ImageIcon className="w-8 h-8 text-emerald-200" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight">NHÌN HÌNH ĐOÁN CA DAO TỤC NGỮ</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-yellow-400 text-teal-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">NEW</span>
                <span className="bg-emerald-400 text-teal-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">FREE</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all group relative z-10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <p className="font-bold text-lg text-slate-900 dark:text-white">
              Chào mừng bạn đến với trò chơi Nhìn Hình Đoán Ca Dao Tục Ngữ!
            </p>
            
            <ul className="space-y-3 list-disc pl-5">
              <li>
                <strong>Mục tiêu:</strong> Nhìn bức tranh do AI vẽ và đoán câu ca dao, tục ngữ tương ứng.
              </li>
              <li>
                <strong>Thời gian:</strong> Bạn có 60 giây (mặc định) cho mỗi câu. Có thể chỉnh trong Cài đặt.
              </li>
              <li>
                <strong>Gợi ý:</strong> Nhấn nút "💡 Gợi ý" nếu bạn thấy quá khó.
              </li>
              <li>
                <strong>API Key:</strong> Cần cung cấp <strong>Gemini API Key</strong> hợp lệ trong phần Cài đặt (⚙️) để AI có thể vẽ hình ảnh minh họa cho câu ca dao.
              </li>
              <li>
                <strong>Thêm Dữ Liệu:</strong> Bạn có thể đóng góp và mở rộng ngân hàng câu hỏi bằng cách thêm ca dao, tục ngữ mới tại tab "Kho Dữ Liệu" trong phần Cài đặt.
              </li>
            </ul>

            <p className="font-bold text-emerald-600 dark:text-emerald-400 italic pt-2">
              Chúc bạn có những giây phút trải nghiệm văn hóa Việt thú vị!
            </p>

            {videoUrl && (
              <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="flex items-center justify-center space-x-2 text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  <PlayCircle className="w-5 h-5 text-red-600" />
                  <span>Video Hướng Dẫn Sử Dụng</span>
                </h4>
                <div className="flex justify-center">
                  <a 
                    href={videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-red-500/25 active:scale-95"
                  >
                    <PlayCircle size={18} />
                    <span>HƯỚNG DẪN</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Trạng thái hệ thống</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wide">Sẵn sàng</span>
            </div>
          </div>
          
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-tighter text-lg group"
          >
            <span>ĐĂNG NHẬP</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
