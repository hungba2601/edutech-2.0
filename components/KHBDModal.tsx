
import React from 'react';
import { X, Info, Rocket, FileText, Presentation, Share2, Lightbulb, PlayCircle } from 'lucide-react';

interface KHBDModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const KHBDModal: React.FC<KHBDModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Vibrant Blue/Cyan Gradient */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 flex items-start justify-between text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-outfit">Chào mừng bạn đến với App Tạo KHBD NLS + AI</h2>
              <p className="text-blue-50 opacity-90 text-sm md:text-base">Công cụ hỗ trợ giáo viên 4.0</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
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
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 scrollbar-hide">
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-800 font-bold text-lg">
              <Rocket className="w-5 h-5 text-blue-500" />
              <h3>Tổng quan ứng dụng</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Ứng dụng sử dụng Trí tuệ nhân tạo (AI) Gemini tiên tiến nhất để giúp quý thầy cô tiết kiệm thời gian trong việc soạn thảo hồ sơ dạy học, đảm bảo đúng quy chuẩn và hiện đại.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl border border-blue-100 bg-white space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <FileText size={20} />
                </div>
                <h4 className="font-bold text-blue-700 text-xs uppercase tracking-tight">KHBD (Word)</h4>
                <p className="text-[10px] text-slate-500 leading-normal">Chuẩn Công văn 5512, tích hợp Năng lực số (NLS) chi tiết vào bảng 4 cột.</p>
              </div>
              <div className="p-4 rounded-2xl border border-blue-100 bg-white space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-orange-400">
                  <Presentation size={20} />
                </div>
                <h4 className="font-bold text-orange-600 text-xs uppercase tracking-tight">Slide (PPTx)</h4>
                <p className="text-[10px] text-slate-500 leading-normal">Tự động tóm tắt nội dung, tạo slide trắc nghiệm, củng cố sinh động.</p>
              </div>
              <div className="p-4 rounded-2xl border border-blue-100 bg-white space-y-2 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-green-500">
                  <Share2 size={20} />
                </div>
                <h4 className="font-bold text-green-600 text-xs uppercase tracking-tight">Sơ đồ Tư duy</h4>
                <p className="text-[10px] text-slate-500 leading-normal">Trực quan hóa kiến thức bài học bằng sơ đồ cây sinh động, dễ nhớ.</p>
              </div>
            </div>
          </section>

          <section className="bg-yellow-50/50 rounded-2xl p-6 border border-yellow-100 space-y-4">
            <div className="flex items-center space-x-2 text-orange-800 font-bold text-lg">
              <Lightbulb className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <h3>3 Bước để bắt đầu</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center mt-1">1</span>
                <p className="text-slate-700 text-sm">
                  <span className="font-bold">Tải file tài liệu:</span> Tải lên file SGK (PDF) và file PPCT/Yêu cầu cần đạt (PDF) của môn học.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center mt-1">2</span>
                <p className="text-slate-700 text-sm">
                  <span className="font-bold">Nhập thông tin:</span> Chọn lớp và ghi rõ Chủ đề, Tên bài cần soạn.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center mt-1">3</span>
                <p className="text-slate-700 text-sm">
                  <span className="font-bold">Tạo & Xuất file:</span> Chọn nút tương ứng để tạo Word, PowerPoint hoặc Sơ đồ tư duy.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="p-6 pt-2">
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-100 transition-all active:scale-95 uppercase tracking-widest text-base"
          >
            TÔI ĐÃ HIỂU, KHÁM PHÁ NGAY
          </button>
        </div>
      </div>
    </div>
  );
};
