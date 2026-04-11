
import React from 'react';
import { X, Book, FileText, Layout, PenTool, Download, CheckCircle2, AlertCircle, Mail, Key } from 'lucide-react';

interface SKKNModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const SKKNModal: React.FC<SKKNModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-5 flex items-center justify-center text-white relative">
          <div className="flex items-center space-x-2">
            <Book className="w-6 h-6" />
            <h2 className="text-xl font-bold font-outfit uppercase tracking-tight">Hướng dẫn sử dụng</h2>
          </div>
          <button 
            onClick={onClose}
            className="absolute right-5 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-5 bg-white scrollbar-hide">
          
          {/* Highlighted Alerts */}
          <div className="space-y-3">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex items-start space-x-3 shadow-sm">
              <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-blue-900 text-[13px] font-bold leading-relaxed">
                1. Dùng tài khoản để sử dụng trải nghiệm chỉ cần <span className="text-blue-700 underline">nhập Mail</span>, không cần nhập mật khẩu.
              </p>
            </div>
            
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 flex items-start space-x-3 shadow-sm">
              <Key className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-amber-900 text-[13px] font-bold leading-relaxed">
                2. Trước khi sử dụng cần <span className="text-amber-700 underline">nhập API KEY</span> để AI có thể hoạt động.
              </p>
            </div>
          </div>

          {/* Intro Box */}
          <div className="pl-4 border-l-4 border-teal-500 py-1">
            <p className="text-slate-600 text-[13px] leading-relaxed italic">
              Chào mừng quý thầy cô! Ứng dụng này sử dụng trí tuệ nhân tạo (AI) để hỗ trợ viết Sáng kiến kinh nghiệm (SKKN) chuẩn chuyên môn.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center text-teal-500">
                <FileText size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-[14px]">Bước 1: Nhập thông tin</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">Điền tên đề tài, môn học và trường công tác của bạn để AI hiểu ngữ cảnh.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center text-blue-500">
                <Layout size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-[14px]">Bước 2: Lập dàn ý</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">AI sẽ tạo khung xương chi tiết cho bài SKKN. Bạn có thể xem trước dàn ý này.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center text-purple-500">
                <PenTool size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-[14px]">Bước 3: Viết chi tiết từng phần</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">Nhấn 'Viết phần tiếp theo' để AI hoàn thiện lần lượt: Đặt vấn đề, Thực trạng, Giải pháp...</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center text-green-500">
                <Download size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 text-[14px]">Bước 4: Xuất file Word</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">Sau khi hoàn tất (hoặc bất kỳ lúc nào), bạn có thể xuất nội dung ra file Word (.doc).</p>
              </div>
            </div>
          </div>

          {/* FREE Notice Box */}
          <div className="bg-teal-50/50 rounded-2xl p-4 border border-teal-100 space-y-2">
            <h5 className="text-[11px] font-black text-teal-800 uppercase tracking-widest">LƯU Ý CHO BẢN FREE</h5>
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-[11px] text-teal-700">
                <CheckCircle2 size={14} className="flex-shrink-0" />
                <p>Viết được Dàn ý, Phần I, II và Phần III (Thực trạng).</p>
              </div>
              <div className="flex items-start space-x-2 text-[11px] text-red-600 font-bold">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <p>Để viết các Giải pháp trọng tâm, cần nâng cấp lên tài khoản PRO.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 pt-0">
          <button 
            onClick={onLogin}
            className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-[0.97] uppercase tracking-wider text-sm"
          >
            Đã hiểu, bắt đầu thôi!
          </button>
        </div>
      </div>
    </div>
  );
};
