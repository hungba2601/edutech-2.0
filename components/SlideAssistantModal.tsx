
import React from 'react';
import { X, HelpCircle, Settings, PlayCircle, FileText, MonitorPlay, Download, Info } from 'lucide-react';

interface SlideAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const SlideAssistantModal: React.FC<SlideAssistantModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F97316] p-8 pb-8 flex items-center justify-between relative">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black font-outfit uppercase tracking-tight leading-none">Hướng dẫn sử dụng</h2>
              <p className="text-white/90 text-sm font-bold uppercase tracking-wider mt-1">LÀM CHỦ TRỢ LÝ TẠO SLIDE AI</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 space-y-10 scrollbar-hide bg-white">
          
          {/* Step 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-black text-sm">1</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Thiết lập ban đầu</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
                <Settings className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Vào <span className="font-bold text-slate-800">Setting</span> để nhập API để sử dụng app. Đây là bước bắt buộc để kích hoạt trí tuệ nhân tạo.
              </p>
            </div>
          </section>

          {/* Step 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-black text-sm">2</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Bắt đầu</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
                <PlayCircle className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhấn nút <span className="font-bold text-slate-800 uppercase text-orange-600">Bắt đầu tạo slide</span> để mở giao diện thiết kế bài thuyết trình.
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-black text-sm">3</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Nhập nội dung</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nhập chủ đề hoặc tải file nội dung lên, chọn môn, lớp. Bạn có thể chọn <span className="font-bold text-slate-800">Mô phỏng trực quan</span> (nếu muốn) để AI tạo hình ảnh minh họa sinh động.
              </p>
            </div>
          </section>

          {/* Step 4 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-black text-sm">4</div>
              <h3 className="font-black text-slate-800 text-xl uppercase tracking-tight">Xuất bản</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-start space-x-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tạo slide và tải <span className="font-bold text-slate-800">HTML</span> về xài offline hoặc tải file <span className="font-bold text-slate-800">Powerpoint</span> để sử dụng và chỉnh sửa thêm.
              </p>
            </div>
          </section>

          {/* Note */}
          <div className="flex items-start space-x-4 p-5 rounded-3xl bg-blue-50 border border-blue-100">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <p className="text-xs text-blue-700 leading-relaxed">
              <span className="font-bold">Lưu ý:</span> Việc tải file Powerpoint giúp bạn giữ được khả năng chỉnh sửa linh hoạt nhất trên máy tính cá nhân.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-8 pt-4 pb-10 flex justify-end bg-white border-t border-slate-50">
          <button 
            onClick={onLogin}
            className="px-10 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-black rounded-2xl shadow-xl shadow-orange-200 transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đã hiểu!
          </button>
        </div>
      </div>
    </div>
  );
};
