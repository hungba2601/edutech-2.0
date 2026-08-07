import React from 'react';
import { Smartphone, Copy, Share, MoreVertical, MonitorPlay } from 'lucide-react';

interface MobileInstallInstructionsProps {
  url: string;
  videoUrl?: string;
}

export const MobileInstallInstructions: React.FC<MobileInstallInstructionsProps> = ({ url, videoUrl }) => {
  return (
    <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-700/50 mt-6">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
          <Smartphone className="w-6 h-6 text-blue-600 shrink-0" />
          <h3 className="text-sm sm:text-base lg:text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">
            HƯỚNG DẪN CÀI ĐẶT THÀNH APP MOBILE
          </h3>
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto flex items-center justify-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95 shrink-0"
            >
              <MonitorPlay size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>XEM VIDEO</span>
            </a>
          )}
        </div>
        
        <div className="flex w-full xl:w-auto items-center justify-between gap-2 border border-slate-200 dark:border-slate-700 p-1 rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
          <div className="px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate flex-1 min-w-0">
            {url}
          </div>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(url);
              alert('Đã copy link!');
            }}
            className="shrink-0 flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Android Card */}
        <div className="bg-[#f0fdf4] dark:bg-green-900/10 border border-green-100 dark:border-green-800/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <div className="bg-[#dcfce7] dark:bg-green-800/30 p-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-green-700 dark:text-green-400" />
            </div>
            <h4 className="font-bold text-green-700 dark:text-green-400 text-sm sm:text-base lg:text-lg">Trên Android (Chrome)</h4>
          </div>
          <div className="space-y-4 text-[13px] sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 font-medium">
            <p className="flex items-start gap-2">
              <span className="text-green-700 dark:text-green-400 font-bold mt-0.5">1.</span> 
              <span>Truy cập trang web bằng trình duyệt Chrome.</span>
            </p>
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="text-green-700 dark:text-green-400 font-bold mt-0.5">2.</span> 
              <span>
                Nhấn vào 
                <span className="bg-white dark:bg-slate-800 border dark:border-slate-600 rounded px-1.5 py-0.5 mx-1 inline-flex items-center shadow-sm whitespace-nowrap">
                  <MoreVertical className="w-3.5 h-3.5 text-slate-500 inline"/> (dấu 3 chấm)
                </span> 
                ở góc trên bên phải.
              </span>
            </p>
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="text-green-700 dark:text-green-400 font-bold mt-0.5">3.</span> 
              <span>
                Chọn <strong className="text-blue-600 dark:text-blue-400">Cài đặt ứng dụng</strong> hoặc <strong className="text-blue-600 dark:text-blue-400">Thêm vào màn hình chính</strong>.
              </span>
            </p>
          </div>
        </div>

        {/* iPhone Card */}
        <div className="bg-[#eff6ff] dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <div className="bg-[#dbeafe] dark:bg-blue-800/30 p-2 rounded-lg">
              <Share className="w-5 h-5 text-blue-700 dark:text-blue-400" />
            </div>
            <h4 className="font-bold text-blue-700 dark:text-blue-400 text-sm sm:text-base lg:text-lg">Trên iPhone (Safari)</h4>
          </div>
          <div className="space-y-4 text-[13px] sm:text-sm lg:text-base text-slate-700 dark:text-slate-300 font-medium">
            <p className="flex items-start gap-2">
              <span className="text-blue-700 dark:text-blue-400 font-bold mt-0.5">1.</span> 
              <span>Truy cập trang web bằng trình duyệt Safari.</span>
            </p>
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="text-blue-700 dark:text-blue-400 font-bold mt-0.5">2.</span> 
              <span>
                Nhấn vào nút 
                <span className="bg-white dark:bg-slate-800 border dark:border-slate-600 rounded px-1.5 py-0.5 mx-1 inline-flex items-center gap-1 shadow-sm text-blue-600 dark:text-blue-400 whitespace-nowrap">
                  <Share className="w-3.5 h-3.5 inline"/> Chia sẻ
                </span> 
                ở thanh dưới cùng.
              </span>
            </p>
            <p className="flex items-start gap-2 leading-relaxed">
              <span className="text-blue-700 dark:text-blue-400 font-bold mt-0.5">3.</span> 
              <span>
                Cuộn xuống và chọn <strong className="text-blue-600 dark:text-blue-400">Thêm vào màn hình chính</strong>.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
