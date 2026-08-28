
import React from 'react';
import { MobileInstallInstructions } from './MobileInstallInstructions';
import { X, AlertCircle, PlayCircle } from 'lucide-react';

interface TuViUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TuViUpdateModal: React.FC<TuViUpdateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-6 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold font-outfit uppercase tracking-tight">THÔNG BÁO CẬP NHẬT</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1 overflow-y-auto">
          <div className="space-y-4">
            <p className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
              <span className="mr-2">🕗</span> ĐÃ CÓ BẢN CẬP NHẬT TỬ VI & TƯỚNG SỐ AI
            </p>
            
            <div className="space-y-3 text-slate-600 dark:text-slate-300 font-medium">
              <p>1. TẢI FILE DOCX XEM ĐƯỢC TRÊN ĐT.</p>
              <p>2. 2 MỤC SỐ MAY MẮN [01-45] VIETTLOT MEGA - [01-55] VIETTLOT POWER</p>
              <p className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                MN CHỈ CẦN XÓA CACHE ( XÓA DỮ LIỆU DUYỆT WEB CỦA TRÌNH DUYỆT CHROME HOẶC SAFARI CHỌN XÓA ALL TỪ TRƯỚC ĐẾN NAY ) LÀ APP TỰ CẬP NHẬT PHIÊN BẢN MỚI. 
              </p>
            </div>
          </div>
          <MobileInstallInstructions url="https://tuvi-tuongso-apk.vercel.app/" />
        </div>


        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4">

          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wider"
          >
            ĐÃ HIỂU
          </button>
        </div>
      </div>
    </div>
  );
};
