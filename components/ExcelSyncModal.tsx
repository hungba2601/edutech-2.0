import React from 'react';
import { X, FileSpreadsheet, Layers, RefreshCw, Smartphone, CheckCircle2 } from 'lucide-react';

interface ExcelSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExcelSyncModal: React.FC<ExcelSyncModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 flex items-center justify-between text-white shadow-md z-10">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md shadow-inner">
              <FileSpreadsheet className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-outfit uppercase tracking-wider drop-shadow-sm">ĐỒNG BỘ ĐIỂM EXCEL</h2>
              <p className="text-green-50 opacity-90 text-sm font-medium">Đồng bộ điểm từ file danh sách sang nhiều sheet lớp</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide bg-slate-50 dark:bg-slate-900/95">
          
          <div className="flex justify-center -mt-4 mb-2">
            <div className="relative w-48 h-48 bg-emerald-50 dark:bg-emerald-900/20 rounded-3xl flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
               <FileSpreadsheet className="w-24 h-24 text-green-600 animate-pulse" />
               <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg">FREE</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Bước 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-green-100 dark:border-green-900/30 hover:border-green-300 transition-colors group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 dark:bg-green-900/40 p-2 rounded-xl group-hover:bg-green-200 transition-colors">
                  <FileSpreadsheet className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-black text-green-600 dark:text-green-400 uppercase tracking-wide">BƯỚC 1: Chọn File Nguồn</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                Thầy cô chọn file Excel danh sách tổng (file có chứa điểm của tất cả học sinh các lớp).
              </p>
              <div className="flex items-center space-x-2 text-xs text-green-600 dark:text-green-400 font-bold italic">
                <CheckCircle2 size={14} />
                <span>Yêu cầu: Có cột Tên học sinh và Điểm số tương ứng.</span>
              </div>
            </div>

            {/* Bước 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-teal-100 dark:border-teal-900/30 hover:border-teal-300 transition-colors group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/40 p-2 rounded-xl group-hover:bg-teal-200 transition-colors">
                  <Layers className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-black text-teal-600 dark:text-teal-400 uppercase tracking-wide">BƯỚC 2: Chọn File Đích (Nhiều Sheet)</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Chọn file Excel có chứa nhiều sheet lớp (mỗi sheet là một lớp học).
              </p>
            </div>

            {/* Bước 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 transition-colors group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
                  <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">BƯỚC 3: Đồng Bộ Tự Động</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                Nhấn "Đồng bộ" để App tự động tìm tên học sinh và cập nhật điểm vào từng sheet lớp tương ứng chỉ trong vài giây.
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-xl shadow transition-all active:scale-95 uppercase tracking-wider"
          >
            ĐÓNG HƯỚNG DẪN
          </button>
        </div>
      </div>
    </div>
  );
};
