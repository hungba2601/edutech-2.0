
import React from 'react';
import { X, BookOpen, CheckCircle2 } from 'lucide-react';

interface GVGModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const GVGModal: React.FC<GVGModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  const steps = [
    {
      number: 1,
      title: "Đăng nhập hệ thống",
      description: "Sử dụng tài khoản và mật khẩu được cấp. Sau khi đăng nhập, tên bạn và nhãn PRO sẽ xuất hiện ở góc phải.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      number: 2,
      title: "Cấu hình Gemini AI",
      description: "Nhấn vào nút Cấu hình Gemini AI ở bên trái. Dán API Key Gemini của bạn và nhấn Lưu.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      number: 3,
      title: "Soạn thảo nội dung chi tiết Biện pháp + SKKN",
      description: "Bạn có thể cho AI viết hết toàn bộ bằng nút \"VIẾT TOÀN BỘ (AI)\". Hoặc tại mỗi phần, bạn có thể tự soạn, hoặc tự nhập gợi ý rồi nhấn nút \"Viết theo gợi ý (AI)\" để app viết, hoặc nhấn \"Viết tự động (AI)\" để AI tự viết.",
      color: "bg-rose-50 text-rose-600"
    },
    {
      number: 4,
      title: "Hoàn thành và Xuất Word",
      description: "Sau khi nội dung xong, nhấn Hoàn thành và cuối cùng Xuất Word (.docx).",
      color: "bg-green-50 text-green-600"
    },
    {
      number: 5,
      title: "THẨM ĐỊNH BIỆN PHÁP + SKKN + TỰ ĐỘNG CHỈNH SỬA HOÀN CHỈNH",
      description: "Sử dụng tính năng thẩm định để kiểm tra, đánh giá và nhận gợi ý chỉnh sửa để hoàn thiện bản Biện pháp hoặc SKKN của bạn một cách chuyên nghiệp nhất.",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 flex items-center justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <BookOpen className="w-8 h-8" />
            <h2 className="text-2xl font-black font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white">
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6 group">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-xl font-black shadow-sm transition-transform group-hover:scale-110`}>
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-800 tracking-tight leading-none uppercase">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-4 pb-10 flex justify-end bg-slate-50/50 border-t border-slate-100">
          <button 
            onClick={onLogin}
            className="px-12 py-4 bg-[#0095FF] hover:bg-[#0085E6] text-white font-black rounded-full shadow-xl shadow-blue-200 transition-all active:scale-95 uppercase tracking-widest text-base"
          >
            ĐÃ HIỂU
          </button>
        </div>
      </div>
    </div>
  );
};
