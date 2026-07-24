
import React from 'react';
import { X } from 'lucide-react';

interface BiologySimModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const BiologySimModal: React.FC<BiologySimModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Màu xanh mòng két đậm */}
        <div className="bg-[#0d9488] p-8 text-center text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-8 h-8 opacity-70" />
          </button>
          <h2 className="text-3xl font-black font-outfit tracking-wider mb-2 uppercase">HƯỚNG DẪN SỬ DỤNG</h2>
          <p className="text-emerald-50 opacity-90 text-sm font-medium italic">Chào mừng bạn đến với Mô Phỏng Sinh Học AI</p>
        </div>

        {/* Steps Grid - Theo hình ảnh a1 */}
        <div className="p-10 space-y-10 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] font-bold text-lg">
                1
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-[#1e293b] text-base uppercase tracking-tight">TÌM KIẾM LOÀI</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Nhập tên bất kỳ loài sinh vật nào bạn muốn khám phá vào ô tìm kiếm và nhấn nút quét.
                </p>
              </div>
            </div>

            {/* Step 3 (Theo hình là cột 2 hàng 1) */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] font-bold text-lg">
                3
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-[#1e293b] text-base uppercase tracking-tight">BỘ NHỚ ĐỆM</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Các bộ phận đã được tạo hình sẽ được lưu lại. Khi bạn quay lại chọn bộ phận đó, hình ảnh sẽ hiện ra tức thì không cần tải lại.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] font-bold text-lg">
                2
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-[#1e293b] text-base uppercase tracking-tight">XEM CHI TIẾT</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Sau khi quét xong, chọn các thẻ hệ thống (Tiêu hóa, Tuần hoàn...) để xem ảnh giải phẫu chi tiết riêng cho phần đó.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#ccfbf1] flex items-center justify-center text-[#0d9488] font-bold text-lg">
                4
              </div>
              <div className="space-y-1">
                <h4 className="font-black text-[#1e293b] text-base uppercase tracking-tight">TƯƠNG TÁC & XUẤT</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Phóng to để soi chi tiết. Bạn có thể tải sơ đồ ảnh PNG hoặc báo cáo Word đầy đủ thông tin.
                </p>
              </div>
            </div>
          </div>

          {/* Footer - Nút màu đen/xanh đen */}
          <div className="pt-6 flex justify-center">
            <button 
              onClick={onLogin}
              className="px-16 py-4 bg-[#0f172a] hover:bg-black text-white font-black rounded-3xl shadow-xl transition-all active:scale-95 uppercase tracking-widest text-base"
            >
              ĐÃ HIỂU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
