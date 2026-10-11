import React from 'react';
import { X, BookOpenCheck, Download, PlayCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface SoDauBaiModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload?: () => void;
  videoUrl?: string;
}

export const SoDauBaiModal: React.FC<SoDauBaiModalProps> = ({ isOpen, onClose, onDownload, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 flex items-center justify-between text-white relative shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md shadow-inner">
              <BookOpenCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-outfit uppercase tracking-tight">Hướng dẫn giới thiệu</h2>
              <p className="text-amber-100 opacity-95 text-xs sm:text-sm font-semibold tracking-wide">
                TIỆN ÍCH NHẬN XÉT SỔ ĐẦU BÀI TỰ ĐỘNG NHANH CHÓNG ,TIỆN LỢI
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
            aria-label="Đóng"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-900 transition-colors duration-300">
          {/* Giới thiệu tính năng */}
          <div className="p-4 sm:p-5 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/60 dark:bg-amber-950/20">
            <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold mb-2">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">Giới thiệu tiện ích</span>
            </div>
            <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed text-justify font-medium">
              Tiện ích hỗ trợ quý thầy cô tự động nhận xét Sổ Đầu Bài (SĐB) một cách thông minh, nhanh chóng và chuẩn xác. Giúp tiết kiệm tối đa thời gian nhập liệu, tự động đề xuất và điền nội dung nhận xét tiết học theo quy chuẩn chỉ với một vài thao tác đơn giản.
            </p>
          </div>

          <div className="space-y-4">
            {/* Bước 1: Cài đặt */}
            <div className="flex items-start space-x-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">1</div>
              <div className="flex-1 w-full">
                <p className="text-slate-800 dark:text-slate-200 font-bold mb-2 text-sm sm:text-base">Các bước cài đặt tiện ích vào trình duyệt:</p>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    <li>Nhấn nút <strong className="text-amber-600 dark:text-amber-400">Tải tiện ích</strong> bên dưới để truy cập thư mục Google Drive và tải file về máy.</li>
                    <li>Giải nén file vừa tải về trên máy tính của bạn.</li>
                    <li>Mở trình duyệt (Chrome, Cốc Cốc, Edge), vào phần <strong className="text-slate-900 dark:text-white">Quản lý tiện ích</strong> (truy cập <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs font-mono">chrome://extensions</code>).</li>
                    <li>Bật chế độ <strong className="text-slate-900 dark:text-white">Dành cho nhà phát triển</strong> (Developer mode) ở góc phải trên.</li>
                    <li>Chọn <strong className="text-slate-900 dark:text-white">Tải tiện ích đã giải nén</strong> (Load unpacked) và chọn thư mục vừa giải nén.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Bước 2: Sử dụng */}
            <div className="flex items-start space-x-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold">2</div>
              <div className="flex-1 w-full">
                <p className="text-slate-800 dark:text-slate-200 font-bold mb-1 text-sm sm:text-base">Cách sử dụng trên hệ thống Sổ Đầu Bài:</p>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-medium text-justify">
                  Sau khi cài đặt, hãy mở trang web quản lý Sổ Đầu Bài của trường bạn. Biểu tượng tiện ích sẽ hiển thị hỗ trợ bạn chọn mẫu nhận xét, chỉnh sửa nhanh hoặc tự động áp dụng nhận xét hàng loạt cực kỳ tiện lợi.
                </p>
                <div className="flex items-center space-x-2 mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Xem thêm chi tiết trực quan trong video hướng dẫn bên dưới.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4 transition-colors">
          <button 
            onClick={onDownload}
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-95 uppercase text-xs sm:text-sm"
          >
            <Download size={18} />
            <span>Tải tiện ích</span>
          </button>
          
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-95 uppercase text-xs sm:text-sm"
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
