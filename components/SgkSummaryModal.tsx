import React from 'react';
import { X, BookOpen, Sparkles, Target, Zap, ArrowRight, PlayCircle } from 'lucide-react';

interface SgkSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  videoUrl?: string;
}

export const SgkSummaryModal: React.FC<SgkSummaryModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <BookOpen className="w-32 h-32 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <BookOpen className="w-8 h-8 text-blue-200" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight">CÔNG CỤ TÓM TẮT NỘI DUNG BÀI HỌC SGK KNTT</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-yellow-400 text-indigo-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase shadow-sm">NEW</span>
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
            <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem] border border-indigo-100 dark:border-indigo-900/30">
              <p className="text-lg font-bold text-indigo-800 dark:text-indigo-300 leading-relaxed text-center italic">
                "Công cụ tự động tóm tắt nội dung bài học Sách giáo khoa Kết nối tri thức, giúp học sinh ôn tập nhanh và giáo viên chuẩn bị bài hiệu quả."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Nhanh chóng</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tóm tắt nội dung cực nhanh, tiết kiệm thời gian học tập.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-wider mb-1">Chính xác</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bám sát nội dung chương trình Sách giáo khoa Kết nối tri thức.</p>
                </div>
              </div>
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
          
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
            <button 
              onClick={onLogin}
              className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-700 hover:from-indigo-700 hover:to-blue-800 text-white font-black rounded-2xl shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-tighter text-lg group"
            >
              <span>ĐĂNG NHẬP</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-red-500 dark:text-red-400 font-bold text-sm mt-3 text-center sm:text-right">Tiện ích đăng nhập không cần Tk , Mk xài free</p>
          </div>
        </div>
      </div>
    </div>
  );
};
