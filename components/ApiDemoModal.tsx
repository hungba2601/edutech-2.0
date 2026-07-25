import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface ApiDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

export const ApiDemoModal: React.FC<ApiDemoModalProps> = ({ isOpen, onClose, isDarkMode = false }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const apiKeys = [
    "AIzaSyBH0yJTV5Hy16iGxEBvP-6Hmb-ZC6ApGCo",
    "AIzaSyC0i5ietdrXztfQRTP4fDxIElorHx6aOsQ",
    "AIzaSyDCRCo4amvV6Tg7S15tYX9ERDRo2OzGQFg"
  ];

  const handleCopy = (key: string, index: number) => {
    navigator.clipboard.writeText(key);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div 
        className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
        }`}
      >
        <div className={`p-4 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50'}`}>
          <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            Mã API DEMO
          </h2>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'}`}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-3">
          <p className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-red-400' : 'text-red-700'}`}>
            Thầy / Cô có thể sử dụng mã API Key dưới đây để xài thử các App. Nên tạo API Key FREE để xài riêng để không bị hết quota khi sử dụng. Xem video hướng dẫn ở mục cuối web.
          </p>
          
          <div className="space-y-3">
            {apiKeys.map((key, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-3 rounded-xl border ${
                  isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <code className={`text-xs sm:text-sm truncate mr-4 flex-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {key}
                </code>
                <button
                  onClick={() => handleCopy(key, index)}
                  className={`shrink-0 p-2 rounded-lg transition-all flex items-center justify-center ${
                    copiedIndex === index
                      ? 'bg-emerald-500 text-white'
                      : isDarkMode
                        ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        : 'bg-white text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-200'
                  }`}
                  title="Sao chép"
                >
                  {copiedIndex === index ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
