import React from 'react';
import { X, BookOpen, Users, Trophy, PlayCircle, Download } from 'lucide-react';

interface TugOfWarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const TugOfWarModal: React.FC<TugOfWarModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 flex items-center justify-between text-white shadow-md z-10">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md shadow-inner">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black font-outfit uppercase tracking-wider drop-shadow-sm">TRÒ CHƠI KÉO CO</h2>
              <p className="text-blue-50 opacity-90 text-sm font-medium">Ôn tập cuối giờ sôi nổi & hiệu quả</p>
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
          
          <div className="flex justify-center -mt-4 mb-2">
            <img src="/keo-co.png" alt="Tug of War" className="w-48 h-auto rounded-3xl shadow-xl border-4 border-white dark:border-slate-800 transform -rotate-2 hover:rotate-0 transition-transform duration-500" />
          </div>

          {/* Bước 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-xl group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-black text-blue-600 dark:text-blue-400 uppercase tracking-wide">BƯỚC 1: Chuẩn bị câu hỏi</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-blue-500">
              <li>Thầy cô chuẩn bị bộ câu hỏi trắc nghiệm hoặc câu hỏi ngắn.</li>
              <li>Có thể nhập trực tiếp hoặc tải từ file Excel (nếu bản app hỗ trợ).</li>
              <li>Thiết lập thời gian trả lời cho mỗi câu hỏi.</li>
            </ul>
          </div>

          {/* Bước 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-indigo-100 dark:border-indigo-900/30 hover:border-indigo-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-100 dark:bg-indigo-900/40 p-2 rounded-xl group-hover:bg-indigo-200 transition-colors">
                <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">BƯỚC 2: Chia đội thi đấu</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-indigo-500">
              <li>Chia lớp thành 2 đội (Đội Xanh và Đội Đỏ hoặc tên tùy chọn).</li>
              <li>Đại diện đội hoặc cả đội sẽ tham gia trả lời.</li>
              <li>Mỗi câu trả lời đúng sẽ giúp đội của mình kéo sợi dây về phía mình.</li>
            </ul>
          </div>

          {/* Bước 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 transition-colors group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
                <PlayCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">BƯỚC 3: Tổ chức trò chơi</h3>
            </div>
            <ul className="space-y-3 ms-2 text-slate-700 dark:text-slate-300 font-medium list-disc list-inside marker:text-emerald-500">
              <li>Nhấn <span className="font-bold text-emerald-600">BẮT ĐẦU</span> để hiện câu hỏi đầu tiên.</li>
              <li>Đội nào nhanh tay và trả lời chính xác sẽ giành điểm.</li>
              <li>Trò chơi kết thúc khi sợi dây được kéo hoàn toàn về một phía hoặc hết bộ câu hỏi.</li>
              <li>Vinh danh đội chiến thắng và tổng kết kiến thức.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onDownload}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2"
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
