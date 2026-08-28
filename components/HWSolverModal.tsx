
import React from 'react';
import { X, Info, Download, PlayCircle } from 'lucide-react';

interface HWSolverModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
  videoUrl?: string;
}

export const HWSolverModal: React.FC<HWSolverModalProps> = ({ isOpen, onClose, onDownload, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 flex items-center justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-outfit uppercase tracking-tight">Hướng dẫn sử dụng</h2>
              <p className="text-indigo-50 opacity-90 text-sm font-medium">TIỆN ÍCH TỰ ĐỘNG GIẢI TN+TL TRÊN CÁC TRANG WEB</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 space-y-6 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">1</div>
              <div className="flex-1 w-full">
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-3">Hướng dẫn cài tiện ích:</p>
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30">
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <li>Nhấn nút <strong>Tải tiện ích</strong> bên dưới để lấy file cài đặt.</li>
                    <li>Giải nén file vừa tải về máy tính của bạn.</li>
                    <li>Mở trình duyệt Chrome, vào phần <strong>Quản lý tiện ích</strong> (Extensions).</li>
                    <li>Bật chế độ <strong>Dành cho nhà phát triển</strong> (Developer mode).</li>
                    <li>Chọn <strong>Tải tiện ích đã giải nén</strong> (Load unpacked) và chọn thư mục vừa giải nén.</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">2</div>
              <p className="text-slate-700 dark:text-slate-300 font-medium text-justify">
                Xem video Hướng dẫn để thực hiện cài đặt tiện ích lên Trình duyệt và cách sử dụng
              </p>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">3</div>
              <div className="space-y-1">
                <p className="text-red-600 dark:text-red-400 font-black uppercase">TK ĐĂNG NHẬP TIỆN ÍCH</p>
                <div className="flex flex-col space-y-0.5 text-red-600 dark:text-red-400 font-bold text-sm">
                  <span>TK: mail đã đăng ký</span>
                  <span>MK: 1234</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4 transition-colors">
          <button 
            onClick={onDownload}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 uppercase text-sm"
          >
            <Download size={18} />
            <span>Tải tiện ích</span>
          </button>
          
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 uppercase text-sm"
            >
              <PlayCircle size={18} />
              <span>Xem Video HD</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
