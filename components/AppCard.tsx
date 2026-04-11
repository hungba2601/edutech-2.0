
import React from 'react';
import { AppItem } from '../types';
import { LogIn, ArrowRight } from 'lucide-react';

interface AppCardProps {
  app: AppItem;
  onAction?: (id: string) => void;
  onLogin?: (id: string) => void;
  count: number;
}

export const AppCard: React.FC<AppCardProps> = ({ app, onAction, onLogin, count }) => {
  return (
    <div 
      onClick={() => onAction?.(app.id)}
      className="group relative glass-card p-4 sm:p-6 rounded-[2rem] sm:rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-200/50 hover:-translate-y-2 cursor-pointer overflow-hidden border-2 border-green-500"
    >
      {/* Badges Container */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex flex-col items-end space-y-1">
        {/* Count Badge */}
        <span className="bg-sky-500/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
          Lượt: {count.toLocaleString()}
        </span>

        {/* NEW Badge */}
        {app.isNew && (
          <span className={`${(app.id === 'skkn-ai' || app.id === 'biology-sim' || app.id === 'learning-assistant' || app.id === 'ai-virtual-assistant' || app.id === 'text-to-speech' || app.id === 'pdf-to-word' || app.id === 'slide-assistant' || app.id === 'word-to-katex') ? 'bg-red-600 shadow-red-200' : 'bg-gradient-to-r from-emerald-500 to-teal-400 shadow-emerald-200'} text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg animate-pulse uppercase tracking-wider`}>
            NEW
          </span>
        )}
        
        {/* HOT Badge */}
        {app.isHot && (
          <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg shadow-red-200 animate-bounce uppercase tracking-wider">
            HOT
          </span>
        )}
        
        {/* FREE Badge */}
        {app.isFree && (
          <span className="bg-red-500 text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg shadow-red-200 animate-pulse uppercase tracking-wider">
            FREE
          </span>
        )}
      </div>

      <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 -mr-6 -mt-6 sm:-mr-8 sm:-mt-8 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150 ${app.color}`}></div>
      
      <div className="flex flex-col h-full space-y-3 sm:space-y-4">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${app.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
          {React.cloneElement(app.icon as React.ReactElement, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
        </div>
        
        <div className="space-y-1.5 flex-grow">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors uppercase tracking-tight pr-10 text-glow">
            {app.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-100 line-clamp-4 leading-relaxed font-bold">
            {app.description}
          </p>
        </div>
        
        <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-slate-100/50 dark:border-slate-800 mt-1">
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-green-700 dark:text-green-400 font-black text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
              <span className="mr-1 drop-shadow-sm">{app.secondaryLabel || 'Hướng dẫn'}</span> 
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onLogin?.(app.id);
            }}
            className="flex items-center space-x-1 px-2.5 sm:px-4 py-1.5 rounded-full tech-gradient text-white shadow-md hover:scale-105 hover:shadow-lg transition-all text-[9px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
          >
            <LogIn size={10} className="sm:w-3 sm:h-3" />
            <span>{app.buttonLabel || 'Đăng nhập'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
