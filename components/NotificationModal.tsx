import React from 'react';
import { X, Bell } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  isDarkMode?: boolean;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, text, isDarkMode = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div 
        className={`relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
        }`}
      >
        <div className={`p-4 border-b flex justify-between items-center ${isDarkMode ? 'border-slate-800 bg-slate-800/50' : 'border-slate-100 bg-slate-50'}`}>
          <div className="flex items-center space-x-2">
            <Bell className={`w-5 h-5 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              Thông báo mới
            </h2>
          </div>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'}`}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-base sm:text-lg font-bold text-red-600 text-left whitespace-pre-wrap">
            {text || "Không có thông báo mới."}
          </p>
        </div>
        
        <div className={`p-4 border-t flex justify-center ${isDarkMode ? 'border-slate-800 bg-slate-800/30' : 'border-slate-100 bg-slate-50/50'}`}>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors shadow-md"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
