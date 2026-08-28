import React from 'react';
import { MobileInstallInstructions } from './MobileInstallInstructions';
import { X, BookOpen, Settings, Target, PlayCircle, Download, Copy } from 'lucide-react';

interface BotTradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const BotTradeModal: React.FC<BotTradeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 flex items-center justify-between text-white shadow-md z-10">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md shadow-inner">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-outfit uppercase tracking-wider drop-shadow-sm">HƯỚNG DẪN SỬ DỤNG BOT</h2>
              <p className="text-amber-50 opacity-90 text-sm font-medium">Bot Trade Vàng (XAU), BTC Tự Động</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 scrollbar-hide bg-slate-50 dark:bg-slate-900/95">
          
          {/* Bước 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-amber-100 dark:border-amber-900/30 hover:border-amber-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-amber-100 dark:bg-amber-900/40 p-2 rounded-xl group-hover:bg-amber-200 transition-colors">
                <Settings className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-black text-amber-600 dark:text-amber-400 uppercase tracking-wide">BƯỚC 1: Cấu hình tài khoản</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-amber-500">
              <li>Nhấp vào nút <span className="font-bold text-slate-900 dark:text-white">⚙ CÀI ĐẶT</span> ở góc phải.</li>
              <li>Nhập thông tin <span className="font-bold text-blue-600 dark:text-blue-400">OKX API</span> (API Key, Secret Key, Passphrase) nếu muốn giao dịch thật.</li>
              <li>Đánh dấu <span className="font-bold text-emerald-600 dark:text-emerald-400">MÔ PHỎNG (Vốn ảo)</span> nếu chỉ muốn chạy test (khuyên dùng lúc đầu).</li>
              <li>Cấu hình Vốn, Đòn bẩy, Khối lượng 1 lệnh và Số lượng lệnh tối đa.</li>
            </ul>
          </div>

          {/* Bước 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-orange-100 dark:border-orange-900/30 hover:border-orange-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 dark:bg-orange-900/40 p-2 rounded-xl group-hover:bg-orange-200 transition-colors">
                <Target className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-black text-orange-600 dark:text-orange-400 uppercase tracking-wide">BƯỚC 2: Thiết lập chiến thuật</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-orange-500">
              <li>Vẫn trong bảng CÀI ĐẶT, kéo xuống phần <span className="font-bold text-slate-900 dark:text-white">CHỈ BÁO CHIẾN THUẬT</span>.</li>
              <li>Tích chọn <span className="font-bold text-emerald-600 dark:text-emerald-400">MUA</span>/<span className="font-bold text-rose-600 dark:text-rose-400">BÁN</span> ở các khung giờ/chỉ báo (MA34, MA89, EMA200) tùy chiến lược.</li>
              <li>Cài đặt điều kiện <span className="font-bold text-blue-600 dark:text-blue-400">RSI</span> để quyết định mua/bán tại vùng quá bán/quá mua.</li>
              <li>Nhấn nút <span className="font-bold text-slate-900 dark:text-white">💾 LƯU CÀI ĐẶT</span> để lưu cấu hình.</li>
            </ul>
          </div>

          {/* Bước 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
                <PlayCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">BƯỚC 3: Vận hành Bot</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-emerald-500">
              <li>Nhấn nút <span className="font-bold text-emerald-600 dark:text-emerald-400">CHẠY</span> ở bảng HỆ THỐNG để bot bắt đầu quét tín hiệu.</li>
              <li>Theo dõi giá, trạng thái lệnh mở và số dư ở bảng điều khiển.</li>
              <li>Lệnh sinh ra sẽ hiện ở phần LỊCH SỬ. Bạn có thể <span className="font-bold text-indigo-600 dark:text-indigo-400">chốt/cắt lệnh thủ công</span> nếu cần ngắt sớm.</li>
              <li>Nút <span className="font-bold text-rose-600 dark:text-rose-400">DỪNG</span> để ngừng việc quét tín hiệu.</li>
            </ul>
          </div>

          
          <MobileInstallInstructions url="https://drive.google.com/drive/folders/1NFNTi1qtujlVro4QEmbUlEOqDottU8ad?usp=sharing" />
        </div>


        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onDownload}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" /> TẢI APP
          </button>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-xl shadow transition-all active:scale-95 uppercase tracking-wider"
          >
            ĐÓNG HƯỚNG DẪN
          </button>
        </div>
      </div>
    </div>
  );
};
