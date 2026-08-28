import React, { useState } from 'react';
import { X, PlayCircle, BookOpen, ArrowRight, Video, ArrowLeft } from 'lucide-react';

interface BinhDanHocVuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTrack?: (title: string, url?: string) => void;
}

const ANSWERS_DATA = [
  {
    title: "Bài 1",
    content: "1C, 2A, 3B, 4B, 5A, 6B, 7C, 8C, 9A, 10D, 11B, 12B, 13A, 14C, 15D, 16A"
  },
  {
    title: "Bài 2",
    content: "1B, 2C, 3A, 4C, 5B, 6C, 7B, 8B, 9A, 10B, 11C, 12B, 13A, 14B, 15B, 16B, 17B, 18B, 19AB, 20A"
  },
  {
    title: "Bài 3",
    content: "1C, 2B, 3B, 4B, 5C, 6B, 7B, 8A, 9B, 10B, 11C, 12B, 13B, 14A, 15B"
  },
  {
    title: "Bài 4",
    content: "1B, 2C, 3B, 4B, 5A, 6B, 7B, 8A, 9A, 10A, 11A, 12A, 13A, 14B, 15B, 16A, 17B, 18B, 19D"
  },
  {
    title: "Bài 5",
    content: "1C, 2C, 3B, 4D, 5C, 6A, 7C, 8C, 9A, 10B, 11D, 12C, 13B, 14C, 15B, 16B, 17A, 18B, 19B, 20B"
  },
  {
    title: "Bài 6",
    content: "1C, 2C, 3C, 4A, 5B, 6A, 7A, 8A, 9C, 10A, 11C, 12C, 13B, 14C, 15B, 16A, 17A"
  }
];

export const BinhDanHocVuModal: React.FC<BinhDanHocVuModalProps> = ({ isOpen, onClose, onTrack }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const handleAction = (title: string, url: string) => {
    onTrack?.(title, url);
    window.open(url, '_blank');
  };

  const handleClose = () => {
    setShowAnswers(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-xl md:max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-3 text-teal-600 dark:text-teal-400">
            {showAnswers && (
              <button 
                onClick={() => setShowAnswers(false)}
                className="mr-2 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
                title="Quay lại"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
              {showAnswers ? <BookOpen className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight">
              {showAnswers ? "Đáp Án Chuyên Đề" : "Bình Dân Học Vụ Số"}
            </h2>
          </div>
          <button 
            onClick={handleClose}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 border-2 border-slate-200 dark:border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-4 flex-grow overflow-y-auto max-h-[60vh] space-y-6">
          {!showAnswers ? (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center space-x-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white text-sm">1</span>
                  <span>VIDEO HƯỚNG DẪN THỰC HIỆN</span>
                </h3>
                
                <div className="ml-10">
                  <button 
                    onClick={() => handleAction('1. Video hướng dẫn thực hiện (Bình dân học vụ số)', 'https://youtu.be/C9HxzlrV2Fc')}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 hover:bg-teal-600 hover:text-white transition-all group text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <PlayCircle className="w-6 h-6 text-teal-600 group-hover:text-white" />
                      <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">Xem video hướng dẫn thực hiện</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center space-x-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-600 text-white text-sm">2</span>
                  <span>ĐÁP ÁN CHUYÊN ĐỀ HỌC TẬP</span>
                </h3>
                
                <div className="ml-10">
                  <button 
                    onClick={() => {
                      setShowAnswers(true);
                      onTrack?.('2. Đáp án chuyên đề học tập (Bình dân học vụ số)');
                    }}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-600 hover:text-white transition-all group text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                      <span className="font-bold text-slate-700 dark:text-slate-200 group-hover:text-white">Xem đáp án chuyên đề học tập</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Tabs for selecting Bài */}
              <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                {ANSWERS_DATA.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl transition-all ${activeTab === idx ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              {/* Answers Grid */}
              <div className="space-y-4">
                <h4 className="text-base font-extrabold text-slate-800 dark:text-white uppercase tracking-tight">
                  Đáp án Bình dân học vụ số: {ANSWERS_DATA[activeTab].title}
                </h4>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800/80">
                  {ANSWERS_DATA[activeTab].content.split(',').map((ans, idx) => {
                    const trimmed = ans.trim();
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center justify-center p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-150 dark:border-slate-700/60 shadow-sm hover:scale-105 transition-transform"
                      >
                        <span className="text-xs sm:text-sm font-black text-slate-700 dark:text-slate-200 font-mono tracking-tight text-center">
                          {trimmed}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 pb-10">
          <button 
            onClick={handleClose}
            className="w-full py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black rounded-2xl transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
