
import React from 'react';
import { X, Info, Settings, BarChart3, Edit3, FileText, HelpCircle, BookOpen, Lightbulb, PlayCircle } from 'lucide-react';

interface MatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const MatrixModal: React.FC<MatrixModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Blue to Purple Gradient */}
        <div className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 p-6 flex items-start justify-between text-white relative">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <Info className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
              <p className="text-blue-50 opacity-90 text-sm md:text-base font-medium">Khám phá sức mạnh AI trong soạn thảo đề thi</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:flex items-center space-x-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-xs font-bold border border-white/10"
              >
                <PlayCircle size={14} />
                <span>Video HD</span>
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
        <div className="overflow-y-auto p-8 space-y-8 scrollbar-hide bg-white">
          <div className="relative p-6 rounded-3xl border-2 border-dashed border-sky-200 bg-sky-50/30 text-center space-y-2">
            <h3 className="text-xl font-bold text-sky-800 font-outfit">Chào mừng Quý Thầy/Cô đến với Ver 3.1!</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Đây là công cụ hỗ trợ giáo viên tự động hóa quy trình xây dựng ma trận và đặc tả theo Công văn 7991, giúp tiết kiệm hàng giờ làm việc mỗi tuần.
            </p>
          </div>

          <section className="space-y-6">
            <div className="flex items-center space-x-3 border-l-4 border-sky-500 pl-4">
              <h3 className="text-xl font-extrabold text-slate-800 uppercase tracking-tight font-outfit">QUY TRÌNH 6 BƯỚC TINH GỌN</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">01</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Cấu hình Thông số</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Tải file SGK & PPCT. Thiết lập tỷ lệ Trắc nghiệm/Tự luận và các mức độ nhận thức.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">02</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Ma trận AI</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">AI sẽ tự động phân tích dữ liệu và đề xuất bảng ma trận cân đối cho Thầy/Cô.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">03</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Edit3 className="w-4 h-4 text-orange-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Ma trận Mẫu</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Bạn có thể tự tay điều chỉnh lại số lượng câu hỏi nếu muốn ma trận hoàn hảo theo ý mình.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">04</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-orange-400" />
                    <h4 className="font-bold text-slate-800 text-sm">Bản Đặc tả</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Tự động chi tiết hóa các Yêu cầu cần đạt tương ứng với từng nội dung kiến thức.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">05</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <HelpCircle className="w-4 h-4 text-rose-500" />
                    <h4 className="font-bold text-slate-800 text-sm">Ngân hàng Câu hỏi</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Tạo hàng loạt câu hỏi ôn tập (TN, Đ/S, Trả lời ngắn, TL) bám sát nội dung đã học.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 font-bold text-lg">06</div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <h4 className="font-bold text-slate-800 text-sm">Xuất Đề & Đáp án</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">Sản xuất 2 đề thi chính thức kèm đáp án chi tiết dưới dạng file Word chuẩn.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-indigo-50/60 rounded-3xl p-6 border border-indigo-100 space-y-4">
            <div className="flex items-center space-x-2 text-indigo-900 font-bold text-lg uppercase tracking-wide">
              <Lightbulb className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h3>MẸO SỬ DỤNG HIỆU QUẢ</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 text-[10px] font-bold flex items-center justify-center mt-1">1</span>
                <p className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-indigo-900">File Phân phối (PPCT):</span> Rất quan trọng! Thầy/Cô chỉ nên tải lên phần nội dung kiến thức của kỳ kiểm tra đang làm thay vì tải cả năm để AI không bị loãng.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-200 text-indigo-700 text-[10px] font-bold flex items-center justify-center mt-1">2</span>
                <p className="text-slate-600 text-[13px] leading-relaxed">
                  <span className="font-bold text-indigo-900">API Key:</span> Đây là "nhiên liệu" cho AI. Hãy nhấn nút <span className="font-bold">API KEY</span> trên thanh tiêu đề và dán mã từ Google AI Studio vào để ứng dụng hoạt động.
                </p>
              </div>
            </div>
          </section>
        </div>

        {videoUrl && (
          <div className="md:hidden px-8 pb-4">
             <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3 bg-red-500 text-white rounded-xl font-bold shadow-md uppercase text-xs"
            >
              <PlayCircle size={18} />
              <span>Xem Video Hướng Dẫn</span>
            </a>
          </div>
        )}

        <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center gap-4 text-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-[0.98] uppercase tracking-widest text-base"
          >
            TÔI ĐÃ HIỂU, KHÁM PHÁ NGAY
          </button>
        </div>
      </div>
    </div>
  );
};
