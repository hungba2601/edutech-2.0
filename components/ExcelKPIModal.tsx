import React from 'react';
import { X, FileSpreadsheet, Sparkles, CheckCircle2, Zap, ArrowRight, TableProperties, BarChart3, SlidersHorizontal, Layers } from 'lucide-react';

interface ExcelKPIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  videoUrl?: string;
}

export const ExcelKPIModal: React.FC<ExcelKPIModalProps> = ({ 
  isOpen, 
  onClose, 
  onLogin 
}) => {
  if (!isOpen) return null;

  const features = [
    {
      icon: <TableProperties className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      title: "Chuẩn Hóa Mẫu Biểu KPI",
      description: "Tạo cấu trúc bảng tính khoa học theo chuẩn đánh giá hiệu suất, phân bổ chỉ tiêu công việc rõ ràng và chuyên nghiệp."
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
      bg: "bg-teal-100 dark:bg-teal-900/30",
      title: "Tự Động Thiết Lập Công Thức",
      description: "Tích hợp sẵn các công thức Excel tự động tính tỷ lệ hoàn thành, trọng số (weight), điểm quy đổi và xếp loại KPI."
    },
    {
      icon: <SlidersHorizontal className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      bg: "bg-cyan-100 dark:bg-cyan-900/30",
      title: "Tùy Biến Trọng Số & Chỉ Tiêu",
      description: "Dễ dàng thêm bớt danh mục tiêu chí, điều chỉnh tỷ trọng và mức độ ưu tiên phù hợp với từng vị trí công tác."
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      bg: "bg-amber-100 dark:bg-amber-900/30",
      title: "Xuất File Excel Tương Thích Cao",
      description: "Xuất định dạng .xlsx hoàn hảo, giữ nguyên định dạng thẩm mỹ, màu sắc trang nhã, tương thích Microsoft Excel và Google Sheets."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Đăng nhập hệ thống",
      desc: "Nhấp nút 'Đăng nhập' bên dưới để truy cập vào ứng dụng trực tuyến tại kpi-nph.vercel.app."
    },
    {
      step: "02",
      title: "Cấu hình mục tiêu & trọng số",
      desc: "Lựa chọn lĩnh vực, nhập danh sách tiêu chí KPI, phân bổ phần trăm trọng số và thiết lập thang đo kết quả."
    },
    {
      step: "03",
      title: "Xem trước & Xuất file mẫu Excel",
      desc: "Kiểm tra cấu trúc bảng tính tự động tạo, sau đó tải về máy file Excel đã cài sẵn định dạng và công thức hoàn chỉnh."
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-100 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 flex items-center justify-between text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <FileSpreadsheet className="w-36 h-36 rotate-12" />
          </div>
          <div className="flex items-center space-x-4 relative z-10">
            <div className="bg-white/20 p-3.5 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
              <FileSpreadsheet className="w-8 h-8 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tighter leading-tight text-white drop-shadow-sm">
                TẠO FILE MẪU EXCEL KPI
              </h2>
              <div className="flex items-center space-x-2 mt-1.5">
                <span className="bg-red-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-pulse tracking-wider">
                  NEW
                </span>
                <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm animate-bounce tracking-wider">
                  HOT
                </span>
                <span className="bg-emerald-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-sm tracking-wider">
                  TIỆN ÍCH
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all group relative z-10 text-white"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
          {/* Giới thiệu */}
          <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-2xl p-4 sm:p-5 flex items-start space-x-3.5">
            <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-md mt-0.5 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Giới thiệu ứng dụng
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-1">
                Công cụ hỗ trợ nhanh chóng xây dựng biểu mẫu Excel đánh giá chỉ số KPI, tự động phân bổ chỉ tiêu, thiết lập công thức tính điểm và xuất file Excel chuẩn chỉnh chỉ trong vài thao tác.
              </p>
            </div>
          </div>

          {/* Các tính năng chính */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Tính năng nổi bật</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`p-2.5 rounded-xl ${item.bg} shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm uppercase tracking-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hướng dẫn các bước */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Quy trình thực hiện</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {steps.map((st, idx) => (
                <div 
                  key={idx}
                  className="relative p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/50 dark:from-slate-800/60 dark:to-slate-800/30 border border-slate-200/60 dark:border-slate-700/60"
                >
                  <span className="text-2xl font-black font-outfit text-emerald-600/30 dark:text-emerald-400/30 block mb-1">
                    {st.step}
                  </span>
                  <h6 className="font-bold text-slate-900 dark:text-white text-xs mb-1">
                    {st.title}
                  </h6>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-0.5">Trạng thái</span>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">Sẵn sàng sử dụng</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-all"
            >
              Đóng
            </button>
            <button 
              onClick={onLogin}
              className="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-black rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center space-x-2 uppercase tracking-wide text-sm group"
            >
              <span>ĐĂNG NHẬP APP</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
