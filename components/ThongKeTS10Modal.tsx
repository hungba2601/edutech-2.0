import React from 'react';
import { X, BookOpen, Download, Calculator, BarChart3, Info, Youtube } from 'lucide-react';

interface ThongKeTS10ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const ThongKeTS10Modal: React.FC<ThongKeTS10ModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 md:p-8 pb-4 flex items-center justify-between border-b border-slate-50 relative">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-100">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-800 font-outfit uppercase tracking-tight">Hướng Dẫn Sử Dụng App Thống Kê Tuyển Sinh 10</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 pt-4 space-y-6 scrollbar-hide bg-white text-slate-700 text-[13px] md:text-sm">
          
          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              1. Chuẩn bị Dữ liệu
            </h3>
            <p>Hệ thống yêu cầu các file Excel theo đúng định dạng được cung cấp. Bạn có thể tải các file mẫu tại mục <span className="font-bold">Upload Dữ Liệu</span>.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><span className="font-bold">Dữ liệu học sinh:</span> Gồm danh sách, điểm thi, nguyện vọng (Thường, Chuyên, Tích hợp). Đã hỗ trợ tự động cắt chữ cuối cùng làm mã môn.</li>
              <li><span className="font-bold">Giáo viên - Lớp dạy:</span> Phân công giáo viên chủ nhiệm hoặc bộ môn theo từng lớp.</li>
              <li><span className="font-bold">Điểm chuẩn:</span> Các file điểm chuẩn Thường, Chuyên và Tích hợp từ Sở GD&ĐT.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              2. Quy trình Xử lý Điểm
            </h3>
            <p>Thuật toán xét Đậu - Rớt chạy theo phân tầng ưu tiên:</p>
            <ol className="list-decimal pl-5 space-y-1.5 font-medium">
              <li><span className="font-bold">Xét hệ Chuyên:</span> Dò nguyện vọng chuyên khớp mã môn. Nếu đủ điểm <span className="text-emerald-600">➔ Đậu Chuyên</span>.</li>
              <li><span className="font-bold">Xét hệ Tích hợp:</span> Nếu không đậu Chuyên, xét nguyện vọng Tích hợp. Nếu đủ điểm <span className="text-emerald-600">➔ Đậu Tích hợp</span>.</li>
              <li><span className="font-bold">Xét hệ Thường:</span> Cuối cùng, dùng điểm thi 3 môn + Điểm Ưu tiên để xét 3 nguyện vọng thường.</li>
            </ol>
          </section>

          <section className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              3. Xem và Xuất Báo cáo
            </h3>
            <p>Sau khi Upload thành công toàn bộ dữ liệu, các thẻ Báo cáo bên tay trái sẽ sáng lên. Bạn có thể:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><span className="font-bold">Tổng hợp KQ thi - Theo lớp:</span> Thống kê phổ điểm (Giỏi, Khá, Trung bình...) theo từng lớp.</li>
              <li><span className="font-bold">Tổng hợp KQ chi tiết:</span> Đánh giá toàn trường theo từng môn thi.</li>
              <li><span className="font-bold">Danh sách Đậu - Rớt:</span> Tra cứu nhanh tình trạng trúng tuyển của từng học sinh.</li>
              <li><span className="font-bold">Thống kê Tổng hợp:</span> Bảng tổng kết số liệu và tỉ lệ Đậu/Rớt, phân chia theo trường trúng tuyển, có tính toán Tỉ lệ đậu.</li>
            </ul>
            <p>Tất cả các báo cáo đều hỗ trợ xuất <span className="font-bold">PDF</span> và <span className="font-bold">Excel</span> ở góc trên bên phải màn hình.</p>
          </section>

          <div className="bg-sky-50 rounded-xl p-4 flex items-start gap-3 border border-sky-100">
            <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <p className="text-sky-800">
              <span className="font-bold">Mẹo:</span> Nếu muốn xóa toàn bộ để làm lại từ đầu, bấm nút "Xóa toàn bộ dữ liệu" màu đỏ bên dưới cột menu trái.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 md:p-8 pt-4 pb-8 bg-white border-t border-slate-50 flex flex-col space-y-3">
          <a 
            href="https://youtu.be/xAmJ88DwxHs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-3xl shadow-lg transition-all active:scale-95 uppercase tracking-[0.15em] text-sm flex items-center justify-center space-x-2"
          >
            <Youtube className="w-5 h-5" />
            <span>XEM VIDEO HD</span>
          </a>
          <button 
            onClick={onLogin}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-3xl shadow-lg shadow-emerald-200 transition-all active:scale-95 uppercase tracking-[0.15em] text-sm md:text-base"
          >
            ĐÃ RÕ, BẮT ĐẦU SỬ DỤNG!
          </button>
        </div>
      </div>
    </div>
  );
};
