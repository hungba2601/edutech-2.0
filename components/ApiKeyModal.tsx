
import React, { useState } from 'react';
import { X, Key, Copy, Check, Info } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const apiKeys = [
    "AIzaSyDchfwgemJR2v-Vc-9-qcEHwJSUNNmJNkM",
    "AIzaSyBUQJh01kHCQZKjukBO1FtTCFO_9DXj_tk",
    "AIzaSyAVdc6fhhpsp76Flp_o7oJ3A_L-CuStamY",
    "AIzaSyDlrQUIpp4YDdr58jZRCnVzJNuVHmiAV8U"
  ];

  if (!isOpen) return null;

  const handleCopy = (key: string, index: number) => {
    navigator.clipboard.writeText(key);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 pb-8 flex items-center justify-between relative">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Key className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-outfit uppercase tracking-tight leading-none">MÃ API KEY DEMO</h2>
              <p className="text-white/90 text-[10px] font-bold uppercase tracking-wider mt-1">Hỗ trợ trải nghiệm ứng dụng AI</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 bg-white dark:bg-slate-900 overflow-y-auto max-h-[60vh] transition-colors duration-300">
          <div className="flex items-start space-x-4 p-5 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 transition-colors">
            <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              Thầy / Cô có thể sử dụng mã API Key dưới đây để xài thử các App. Còn muốn tạo API Key FREE để xài riêng thì xem video hướng dẫn ở mục dưới web.
            </p>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest ml-1">Danh sách mã API</label>
            
            {apiKeys.map((key, index) => (
              <div key={index} className="space-y-2">
                <div className="relative group">
                  <div className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl px-5 py-4 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 break-all pr-14 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors">
                    {key}
                  </div>
                  <button 
                    onClick={() => handleCopy(key, index)}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl transition-all active:scale-90 ${
                      copiedIndex === index ? 'bg-green-500 text-white' : 'bg-white dark:bg-slate-700 text-slate-400 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-600'
                    }`}
                  >
                    {copiedIndex === index ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                {copiedIndex === index && (
                  <p className="text-[10px] text-green-600 dark:text-green-400 font-bold uppercase tracking-wider text-center animate-in fade-in slide-in-from-top-1">
                    Đã sao chép mã {index + 1} vào bộ nhớ tạm!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 pb-10 flex justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
          <button 
            onClick={onClose}
            className="w-full py-4 bg-slate-900 dark:bg-slate-800 hover:bg-black dark:hover:bg-slate-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đóng lại
          </button>
        </div>
      </div>
    </div>
  );
};
