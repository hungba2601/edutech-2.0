import React from 'react';
import { X, Info, ChevronRight, FileSpreadsheet } from 'lucide-react';

interface ExcelMergerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
}

export const ExcelMergerGuideModal: React.FC<ExcelMergerGuideModalProps> = ({ isOpen, onClose, onExplore }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200 dark:shadow-none">
              <FileSpreadsheet size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight text-slate-900 dark:text-white leading-tight">HƯỚNG DẪN CHI TIẾT</h2>
              <p className="text-[10px] sm:text-xs font-bold text-green-600 dark:text-green-400 tracking-widest uppercase">Công cụ ghép file Excel</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors group"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center uppercase tracking-wide">
              <span className="text-green-600 mr-2">1.</span> GIỚI THIỆU CÔNG CỤ
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Công cụ giúp bạn tự động ghép <span className="text-green-600 font-bold">nhiều file excel thành 1 file</span>, <span className="text-blue-600 font-bold">nhiều sheet thành 1 sheet</span> một cách nhanh chóng và chính xác. Tiết kiệm tối đa thời gian xử lý dữ liệu báo cáo, điểm số.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white flex items-center uppercase tracking-wide">
              <span className="text-green-600 mr-2">2.</span> CÁCH THỰC HIỆN
            </h3>
            
            <div className="space-y-3">
              {/* Step 01 */}
              <div className="p-4 rounded-2xl bg-green-50/50 dark:bg-green-900/10 border border-green-100/50 dark:border-green-900/20 flex items-start space-x-4 group hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-green-200 dark:text-green-900 italic leading-none group-hover:text-green-300 transition-colors">01</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">TẢI FILE LÊN</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Chọn các file Excel cần ghép từ máy tính của bạn.</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="p-4 rounded-2xl bg-green-50/50 dark:bg-green-900/10 border border-green-100/50 dark:border-green-900/20 flex items-start space-x-4 group hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-green-200 dark:text-green-900 italic leading-none group-hover:text-green-300 transition-colors">02</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">CHỌN CHẾ ĐỘ GHÉP</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Tùy chọn: Ghép nhiều file thành 1 file (giữ nguyên sheet) hoặc ghép tất cả sheet thành 1 sheet duy nhất.</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="p-4 rounded-2xl bg-green-50/50 dark:bg-green-900/10 border border-green-100/50 dark:border-green-900/20 flex items-start space-x-4 group hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-green-200 dark:text-green-900 italic leading-none group-hover:text-green-300 transition-colors">03</span>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">XUẤT KẾT QUẢ</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-pre-wrap">Nhấn nút thực hiện và tải xuống file Excel đã được ghép hoàn chỉnh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Footer */}
        <div className="p-6 sm:p-8 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={onExplore}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black rounded-2xl shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-2 text-sm sm:text-base uppercase tracking-wider group"
          >
            <span>ĐĂNG NHẬP SỬ DỤNG NGAY</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
