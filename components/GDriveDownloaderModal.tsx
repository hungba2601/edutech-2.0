import React from 'react';
import { X, Download, PlayCircle, HardDrive, CheckCircle2, Sparkles } from 'lucide-react';

interface GDriveDownloaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const GDriveDownloaderModal: React.FC<GDriveDownloaderModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh] transition-colors duration-300 border border-blue-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-6 sm:p-8 flex items-center justify-between text-white relative shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md shadow-inner animate-pulse">
              <HardDrive className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-wider drop-shadow-sm">
                  TIỆN ÍCH TẢI TÀI LIỆU BỊ GOOGLE DRIVE CHẶN
                </h2>
                <span className="bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md animate-bounce">
                  NEW
                </span>
              </div>
              <p className="text-blue-50 opacity-90 text-sm font-medium mt-0.5">
                Giải pháp tải tài liệu hiệu quả
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 scrollbar-hide bg-slate-50 dark:bg-slate-900/95 transition-colors duration-300">
          
          {/* Badge & Intro Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-blue-100 dark:border-slate-700/50">
            <div className="relative w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center border-2 border-blue-200 dark:border-blue-800 shadow-inner flex-shrink-0">
              <Download className="w-16 h-16 text-blue-600 dark:text-blue-400 animate-pulse" />
              <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-md">
                FREE
              </div>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                <Sparkles size={12} className="mr-1" /> Tiện ích đột phá
              </span>
              <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed text-sm md:text-base text-justify">
                Công cụ hỗ trợ tải các tài liệu trên Google Drive bị giới hạn hoặc chặn tải về. Giúp bạn dễ dàng lưu trữ các file quan trọng một cách nhanh chóng và an toàn.
              </p>
            </div>
          </div>

          {/* Core Features */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-l-4 border-blue-600 pl-3">
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">
                Các tính năng ưu việt
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start space-x-3">
                <div className="text-blue-500 mt-0.5 flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Vượt rào cản dễ dàng</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Xử lý các link Google Drive bị chặn tải xuống chỉ với vài thao tác cơ bản.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-start space-x-3">
                <div className="text-blue-500 mt-0.5 flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">An toàn & Bảo mật</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Tiện ích hoạt động an toàn, không yêu cầu cấp quyền truy cập nhạy cảm.</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Guide */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 border-l-4 border-amber-500 pl-3">
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">
                HƯỚNG DẪN CÀI TIỆN ÍCH
              </h3>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-100 dark:border-amber-900/30">
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <li>Nhấn nút <strong>Tải tiện ích</strong> bên dưới để lấy file cài đặt.</li>
                <li>Giải nén file vừa tải về máy tính của bạn.</li>
                <li>Mở trình duyệt Chrome, vào phần <strong>Quản lý tiện ích</strong> (Extensions).</li>
                <li>Bật chế độ <strong>Dành cho nhà phát triển</strong> (Developer mode).</li>
                <li>Chọn <strong>Tải tiện ích đã giải nén</strong> (Load unpacked) và chọn thư mục vừa giải nén.</li>
                <li>Truy cập link Google Drive bị chặn tải và sử dụng tiện ích để tải file.</li>
              </ol>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4 transition-colors">
          <button 
            onClick={onLogin}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <Download size={18} />
            <span>Tải tiện ích</span>
          </button>
          
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
            >
              <PlayCircle size={18} />
              <span>Xem Video HD</span>
            </a>
          )}
          
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-2xl shadow transition-all active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
