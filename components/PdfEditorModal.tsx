import React from 'react';
import { X, FileText, Sparkles, Target, Zap, ArrowRight, PlayCircle } from 'lucide-react';

interface PdfEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  videoUrl?: string;
}

export const PdfEditorModal: React.FC<PdfEditorModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-rose-700 p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FileText className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <FileText className="w-8 h-8 text-red-200" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight">Tool edit file Pdf</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-yellow-400 text-red-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">NEW</span>
                <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">FREE</span>
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">HOT</span>
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
          <div className="space-y-6">
            <div className="p-6 bg-red-50 dark:bg-red-950/20 rounded-[2rem] border border-red-100 dark:border-red-900/30">
              <p className="text-lg font-bold text-red-800 dark:text-red-300 leading-relaxed text-center italic">
                "Công cụ chỉnh sửa file Pdf trực tiếp giống như chỉnh sửa word , giữ nguyên font chữ , định dạng..."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-xl text-red-600 dark:text-red-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Giữ nguyên font chữ</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tự động nhận diện và khớp font chữ gốc, không lo lỗi font khi nhập văn bản mới.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-xl text-rose-600 dark:text-rose-400 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Bảo toàn định dạng</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Các phần tử, bảng biểu, hình ảnh được cố định đúng vị trí như file Word.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                Các bước thực hiện chỉnh sửa PDF:
              </h4>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300 font-medium">
                <li>Bấm nút <span className="text-red-600 font-bold">ĐĂNG NHẬP</span> để đi tới trang chỉnh sửa trực tuyến.</li>
                <li>Tải tệp PDF từ thiết bị của bạn lên trình soạn thảo.</li>
                <li>Nhấn đúp chuột vào phần văn bản hoặc hình ảnh muốn sửa đổi và bắt đầu chỉnh sửa.</li>
                <li>Sau khi hoàn thành, xuất bản và tải file PDF mới đã chỉnh sửa về thiết bị.</li>
              </ol>
            </div>

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
                    <span>XEM NGAY</span>
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
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white font-black rounded-2xl shadow-xl shadow-red-500/20 hover:shadow-red-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-tighter text-lg group"
          >
            <span>ĐĂNG NHẬP</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
