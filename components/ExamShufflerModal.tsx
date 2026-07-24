
import React from 'react';
import { X, Info, Settings, RefreshCcw, FileText, HelpCircle, BookOpen, Lightbulb, PlayCircle, Shuffle } from 'lucide-react';

interface ExamShufflerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const ExamShufflerModal: React.FC<ExamShufflerModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Emerald Gradient */}
        <div className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 p-6 flex items-start justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <Shuffle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
              <p className="text-emerald-50 opacity-90 text-sm md:text-base font-medium">Đảo đề thông minh - Giữ trọn định dạng</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-xs font-bold border border-white/10"
              >
                <PlayCircle size={14} />
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

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white">
          <div className="relative p-6 rounded-3xl border-2 border-dashed border-emerald-200 bg-emerald-50/30 text-center space-y-2">
            <h3 className="text-xl font-bold text-emerald-800 font-outfit">Công nghệ Trộn đề AI Thế hệ mới!</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Giải pháp hoàn hảo giúp Thầy/Cô tạo ra nhiều mã đề từ một đề gốc chỉ trong vài giây, tự động đảo cả câu hỏi và các phương án trả lời.
            </p>
          </div>

          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-l-4 border-emerald-500 pl-4">
              <h3 className="text-xl font-extrabold text-slate-800 uppercase tracking-tight font-outfit">TÍNH NĂNG NỔI BẬT</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 font-bold text-lg">01</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Giữ nguyên định dạng</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Đảm bảo các bảng biểu, hình ảnh, công thức toán học (MathType/LaTeX) không bị xô lệch.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 font-bold text-lg">02</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Đảo câu hỏi & đáp án</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">AI tự động nhận diện câu hỏi và các lựa chọn A, B, C, D để đảo vị trí một cách logic.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 font-bold text-lg">03</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <RefreshCcw className="w-4 h-4 text-orange-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Tự động đánh số lại</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Cập nhật số thứ tự câu hỏi và tạo các mã đề khác nhau (ví dụ: 101, 102, 103, 104).</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 font-bold text-lg">04</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <h4 className="font-bold text-slate-800 text-sm">Xuất Phiếu đáp án</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Tự động tạo file đáp án cho từng mã đề, hỗ trợ quét QR để chấm điểm nhanh.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-100 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-900 font-bold text-lg uppercase tracking-wide">
              <Lightbulb className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h3>LƯU Ý QUAN TRỌNG</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-[10px] font-bold flex items-center justify-center mt-1">1</span>
                <p className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-emerald-900">Chuẩn hóa đề gốc:</span> Thầy/Cô nên sử dụng đề có cấu trúc câu hỏi rõ ràng (Câu 1, Câu 2...) để AI nhận diện tốt nhất.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 text-[10px] font-bold flex items-center justify-center mt-1">2</span>
                <p className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-emerald-900">API Key:</span> Tương tự các công cụ khác, Thầy/Cô cần dán mã API Key để AI có thể xử lý việc đảo đề.
                </p>
              </div>
            </div>
          </section>
        </div>

        {videoUrl && (
          <div className="md:hidden px-8 pb-4">
             <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-red-500 text-white rounded-xl font-bold shadow-md uppercase text-xs"
            >
              <PlayCircle size={18} />
              <span>Xem Video Hướng Dẫn</span>
            </a>
          </div>
        )}

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center gap-4 text-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-emerald-400 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-[0.98] uppercase tracking-widest text-base"
          >
            TRUY CẬP ỨNG DỤNG NGAY
          </button>
        </div>
      </div>
    </div>
  );
};
