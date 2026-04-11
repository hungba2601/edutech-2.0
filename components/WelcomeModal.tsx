
import React from 'react';
import { X, Info, Check, Lightbulb, PlayCircle } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh] transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Blue to Purple Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex items-center justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-outfit uppercase tracking-tight">Giới thiệu & Hướng dẫn sử dụng</h2>
              <p className="text-blue-50 opacity-90 text-sm font-medium">Chào mừng bạn đến với ứng dụng Tích hợp Năng lực số + AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
             {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-sm font-bold border border-white/10"
              >
                <PlayCircle size={16} />
                <span>Xem Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-10 scrollbar-hide bg-white dark:bg-slate-900 transition-colors duration-300">
          {/* Overview Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-extrabold text-blue-900 dark:text-white font-outfit uppercase">Tổng quan về ứng dụng</h3>
            </div>
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 space-y-4 transition-colors">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                Ứng dụng <span className="font-bold">Tool tích hợp Năng lực số + AI vào các loại KH (KHBD, KHGD...)</span> được phát triển nhằm hỗ trợ giáo viên trong việc hiện đại hóa các Kế hoạch bài dạy (KHBD), Kế hoạch giáo dục (KHGD) theo chuẩn năng lực số của Bộ Giáo dục và Đào tạo (Công văn 3456/BGDĐT-GDPT).
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                Thay vì phải tra cứu và viết lại từng mục một cách thủ công, trí tuệ nhân tạo (Gemini AI) sẽ tự động phân tích tài liệu của bạn và lồng ghép các yêu cầu cần đạt về năng lực số một cách logic, phù hợp với từng cấp học và lớp học cụ thể.
              </p>
            </div>
          </section>

          {/* 3 Step Workflow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/20 dark:bg-blue-900/10 text-center space-y-4 transition-colors">
              <div className="mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200 dark:shadow-blue-900/20">1</div>
              <h4 className="font-bold text-blue-900 dark:text-white uppercase text-sm">Chọn thông tin</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Chọn loại tài liệu (Phụ lục 1, 3...), cấp học (THCS/THPT) và khối lớp tương ứng.</p>
            </div>
            <div className="relative p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/20 dark:bg-indigo-900/10 text-center space-y-4 transition-colors">
              <div className="mx-auto w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">2</div>
              <h4 className="font-bold text-indigo-900 dark:text-white uppercase text-sm">Tải tài liệu</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Hỗ trợ tệp <span className="font-bold">.docx</span> (Word) hoặc <span className="font-bold">.pdf</span>. Bạn cũng có thể kéo thả tệp vào vùng tải lên.</p>
            </div>
            <div className="relative p-6 rounded-3xl border border-teal-100 dark:border-teal-900/30 bg-teal-50/20 dark:bg-teal-900/10 text-center space-y-4 transition-colors">
              <div className="mx-auto w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-200 dark:shadow-teal-900/20">3</div>
              <h4 className="font-bold text-teal-900 dark:text-white uppercase text-sm">Nhận kết quả</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Nhấn nút "Phân tích", AI sẽ tạo bản thảo mới. Bạn có thể sao chép hoặc xuất trực tiếp sang tệp Word.</p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center space-x-3 border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-extrabold text-blue-900 dark:text-white font-outfit uppercase">Các tính năng nổi bật</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Tự động chèn mục "Năng lực số" vào phần Mục tiêu bài dạy.',
                'Thêm cột tích hợp NLS vào các bảng hoạt động dạy học.',
                'Tự động gắn mã định danh NLS (ví dụ: 1.1.TC1a) chính xác.',
                'Hỗ trợ xuất Word giữ nguyên định dạng bảng biểu cơ bản.'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-yellow-50/80 dark:bg-yellow-900/20 rounded-3xl p-6 border border-yellow-100 dark:border-yellow-900/30 flex items-start space-x-4 transition-colors">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm text-yellow-500">
              <Lightbulb className="w-7 h-7 fill-yellow-500" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-yellow-900 dark:text-white text-lg font-outfit">Mẹo nhỏ:</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                Để có kết quả tốt nhất, hãy đảm bảo tệp Word của bạn có cấu trúc rõ ràng (Phần I, II, III...). Nếu tệp quá dài, ứng dụng sẽ tự động chia nhỏ để xử lý một cách mượt mà nhất.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Video Link */}
        {videoUrl && (
          <div className="sm:hidden px-8 pb-4">
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-red-500 text-white rounded-xl font-bold shadow-md"
            >
              <PlayCircle size={18} />
              <span>Xem Video HD</span>
            </a>
          </div>
        )}

        <div className="p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col items-center justify-center gap-4 text-center transition-colors">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-12 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all active:scale-[0.97] uppercase tracking-widest text-base"
          >
            TÔI ĐÃ HIỂU, KHÁM PHÁ NGAY
          </button>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Mọi hỗ trợ xin liên hệ: Thầy Hùng - 0938.750.424</p>
        </div>
      </div>
    </div>
  );
};
