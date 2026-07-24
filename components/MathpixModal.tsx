import React from 'react';
import { X, Download, PlayCircle, Monitor, Laptop, ArrowRight } from 'lucide-react';

interface MathpixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrack?: (title: string, url?: string) => void;
}

export const MathpixModal: React.FC<MathpixModalProps> = ({ isOpen, onClose, onTrack }) => {
  if (!isOpen) return null;

  const handleAction = (title: string, url: string) => {
    onTrack?.(title, url);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-3 text-orange-600">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <Download className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight">Tải Tool & Hướng dẫn</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 border-2 border-slate-200 dark:border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-4 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white text-sm">1</span>
              <span>TẢI TOOL</span>
            </h3>
            
            <div className="ml-10">
              <button 
                onClick={() => handleAction('Mathpix (Giành cho Windows và Mac OS)', 'https://drive.google.com/drive/folders/1RcENLuyejVS3ANyyY-rcwFkTAtPJjOYf?usp=drive_link')}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Monitor className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">Mathpix ( Giành cho Windows và Mac OS)</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-all" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white text-sm">2</span>
              <span>XEM VIDEO HƯỚNG DẪN</span>
            </h3>
            
            <div className="ml-10">
              <button 
                onClick={() => handleAction('XEM VIDEO HƯỚNG DẪN MATHPIX', 'https://youtu.be/SuGQYjiFeoI')}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 hover:bg-orange-600 hover:text-white transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <PlayCircle className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  <span className="font-bold">Xem video hướng dẫn thực hiện</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 pb-10">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black rounded-2xl transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
