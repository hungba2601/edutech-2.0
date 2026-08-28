import React from 'react';
import { X, FileSpreadsheet, CheckCircle2, Zap, ArrowRight, BookOpen, Layers, FileCheck, Sparkles, PlayCircle } from 'lucide-react';

interface KHGDPhuLucModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  videoUrl?: string;
}

export const KHGDPhuLucModal: React.FC<KHGDPhuLucModalProps> = ({ 
  isOpen, 
  onClose, 
  onLogin, 
  videoUrl = 'https://youtu.be/ocs87GCFza0' 
}) => {
  if (!isOpen) return null;

  const features = [
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      title: "Phụ lục 1 - Kế hoạch dạy học của Tổ chuyên môn",
      description: "Phân phối chương trình chi tiết theo từng bài học/chủ đề, số tiết, yêu cầu cần đạt, thiết bị dạy học và địa điểm thực hiện."
    },
    {
      icon: <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      bg: "bg-teal-100 dark:bg-teal-900/30",
      title: "Phụ lục 2 - Kế hoạch tổ chức hoạt động giáo dục",
      description: "Xây dựng kế hoạch chuyên đề, hoạt động trải nghiệm, câu lạc bộ, phụ đạo và bồi dưỡng học sinh năng khiếu."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      title: "Phụ lục 3 - Kế hoạch giáo dục của cá nhân Giáo viên",
      description: "Tổng hợp phân công giảng dạy, kế hoạch bài dạy theo tuần/tháng, thiết bị và địa điểm cho từng khối lớp."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      bg: "bg-amber-100 dark:bg-amber-900/30",
      title: "Trí tuệ nhân tạo AI & Xuất Word/Excel nhanh chóng",
      description: "Tự động chuẩn hóa theo khung chương trình GDPT 2018, định dạng bảng biểu chuẩn chỉnh, xuất trực tiếp sang file Word/Excel."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Đăng nhập hệ thống",
      desc: "Nhấp nút Đăng nhập để mở ứng dụng tạo KHGD & Phụ lục trực tuyến."
    },
    {
      step: "02",
      title: "Chọn loại Kế hoạch / Phụ lục",
      desc: "Lựa chọn Phụ lục 1, Phụ lục 2, Phụ lục 3 hoặc Kế hoạch giáo dục tổng thể."
    },
    {
      step: "03",
      title: "Nhập thông tin hoặc tải tài liệu",
      desc: "Nhập môn học, khối lớp, phân phối chương trình hoặc để AI tự động gợi ý nội dung."
    },
    {
      step: "04",
      title: "Xem trước & Xuất file",
      desc: "Kiểm tra kết quả, tùy chỉnh trực tiếp và tải xuống file Word/Excel hoàn thiện."
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <FileSpreadsheet className="w-36 h-36 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <FileSpreadsheet className="w-8 h-8 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-black font-outfit uppercase tracking-tight leading-tight">
                CÔNG CỤ TẠO CÁC LOẠI KHGD, PHỤ LỤC 1,2,3
              </h2>
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-pulse">
                  NEW
                </span>
                <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                  FREE
                </span>
                <span className="text-emerald-100 text-xs font-semibold hidden sm:inline">
                  Chuẩn Bộ GD&ĐT
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 relative z-10">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 hover:bg-red-700 rounded-full text-white shadow-lg transition-all text-xs font-bold border border-white/20 uppercase tracking-wider hover:scale-105 active:scale-95"
              >
                <PlayCircle size={15} />
                <span>Xem Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-all group"
              aria-label="Đóng"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 sm:space-y-8 overflow-y-auto flex-1 scrollbar-hide">
          {/* Highlight intro */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-[2rem] border border-emerald-200/60 dark:border-emerald-800/40 shadow-sm">
            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                Công cụ hỗ trợ Tổ trưởng chuyên môn (TCCM) và Giáo viên tạo các loại Kế hoạch Giáo dục (KHGD), Phụ lục 1, Phụ lục 2, Phụ lục 3 chuẩn quy định của Bộ GD&ĐT một cách nhanh chóng, chuẩn xác và đồng bộ.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
              TÍNH NĂNG NỔI BẬT & CÁC LOẠI PHỤ LỤC HỖ TRỢ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {features.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all"
                >
                  <div className={`${item.bg} p-2.5 rounded-xl shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs sm:text-sm tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              CÁC BƯỚC THỰC HIỆN DỄ DÀNG
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {steps.map((stepItem, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between group hover:border-teal-400 transition-colors shadow-sm"
                >
                  <div>
                    <span className="text-xl sm:text-2xl font-black text-emerald-400/80 dark:text-emerald-500/60 italic leading-none">
                      {stepItem.step}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white uppercase tracking-tight mt-1 mb-1">
                      {stepItem.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full -ml-4.5"></div>
            <span className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-bold uppercase tracking-wide">
              Công cụ Online Miễn phí 100%
            </span>
          </div>
          
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-wider text-sm sm:text-base group"
          >
            <span>ĐĂNG NHẬP SỬ DỤNG NGAY</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
