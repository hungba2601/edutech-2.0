
import React from 'react';
import { X, Book, Lightbulb, PlayCircle } from 'lucide-react';

interface SKKNReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const SKKNReviewModal: React.FC<SKKNReviewModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Purple Style */}
        <div className="bg-[#5d5fef] p-5 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
              <Book className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-outfit leading-tight">Hướng dẫn sử dụng</h2>
              <p className="text-[10px] opacity-80 font-medium tracking-wider uppercase">SKKN Checker Pro v1.5</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {videoUrl && (
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-all text-xs font-bold border border-white/10 uppercase"
              >
                <PlayCircle size={14} />
                <span className="hidden sm:inline">Xem Video HD</span>
                <span className="sm:hidden">Video HD</span>
              </a>
            )}
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-6 space-y-6 bg-white scrollbar-hide">
          
          {/* Step 1: Blue Background */}
          <div className="p-6 rounded-[2rem] bg-[#eff6ff] border border-blue-100 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-200">1</div>
              <h3 className="font-black text-[#1e3a8a] text-sm md:text-base uppercase tracking-tight">NHẬP THÔNG TIN SKKN</h3>
            </div>
            <ul className="space-y-3 pl-11">
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#2563eb] font-bold mr-2">•</span>
                <p>Điền <span className="font-bold text-[#1e40af]">Tên đề tài</span> và chọn <span className="font-bold text-[#1e40af]">Lĩnh vực</span></p>
              </li>
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#2563eb] font-bold mr-2">•</span>
                <p>Tải tệp <span className="font-bold text-[#1e40af]">.docx</span> (Hệ thống sẽ giữ nguyên bảng biểu và định dạng)</p>
              </li>
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#2563eb] font-bold mr-2">•</span>
                <p>Sau đó bấm <span className="font-bold text-[#1e40af]">"Bắt đầu thẩm định"</span></p>
              </li>
            </ul>
          </div>

          {/* Step 2: Green Background */}
          <div className="p-6 rounded-[2rem] bg-[#f0fdf4] border border-green-100 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-green-200">2</div>
              <h3 className="font-black text-[#14532d] text-sm md:text-base uppercase tracking-tight">ĐỌC KẾT QUẢ PHÂN TÍCH</h3>
            </div>
            
            <div className="pl-11 space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-bold text-[#166534] flex items-center">
                   <span className="mr-2">📊</span> Điểm số tổng quan (Theo Thông tư 27):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 ml-4">
                  <p className="text-[13px] text-slate-600">• <span className="font-bold">Tính mới (20đ):</span> Sáng tạo, độc đáo</p>
                  <p className="text-[13px] text-slate-600">• <span className="font-bold">Khả thi (20đ):</span> Khả năng áp dụng</p>
                  <p className="text-[13px] text-slate-600">• <span className="font-bold">Hiệu quả (30đ):</span> Kết quả sau thực hiện</p>
                  <p className="text-[13px] text-slate-600">• <span className="font-bold">Khoa học (20đ):</span> Trình bày và bố cục</p>
                  <p className="text-[13px] text-slate-600">• <span className="font-bold">Phạm vi (10đ):</span> Tầm ảnh hưởng</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-bold text-[#166534] flex items-center">
                   <span className="mr-2">📋</span> Nhận xét chi tiết Bố cục:
                </p>
                <p className="text-[13px] text-slate-600 ml-4 leading-relaxed">
                  Hội đồng sẽ chỉ rõ <span className="font-bold text-green-700">Ưu điểm</span> và <span className="font-bold text-red-600">Hạn chế</span> của từng đề mục I, II, III...
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Pink/Purple Background */}
          <div className="p-6 rounded-[2rem] bg-[#faf5ff] border border-purple-100 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#9333ea] text-white flex items-center justify-center font-bold text-sm shadow-md shadow-purple-200">3</div>
              <h3 className="font-black text-[#581c87] text-sm md:text-base uppercase tracking-tight">HOÀN THIỆN FILE GỐC</h3>
            </div>
            <ul className="space-y-3 pl-11">
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#9333ea] font-bold mr-2">•</span>
                <p>Bấm <span className="font-bold text-[#7e22ce]">"Sửa & Viết lại"</span> để AI tự nâng cấp bài</p>
              </li>
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#9333ea] font-bold mr-2">•</span>
                <p>Hệ thống cam kết <span className="font-bold text-[#7e22ce]">giữ nguyên 100% định dạng và bảng biểu</span></p>
              </li>
              <li className="text-sm text-slate-700 flex items-start">
                <span className="text-[#9333ea] font-bold mr-2">•</span>
                <p>Tải file <span className="font-bold text-[#7e22ce]">.doc</span> đã được bổ sung nội dung chuyên sâu</p>
              </li>
            </ul>
          </div>

          {/* Mẹo nhỏ - Yellow Dotted */}
          <div className="p-6 rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50/50 space-y-3">
            <div className="flex items-center space-x-2 text-amber-700 font-bold uppercase text-xs tracking-wider">
              <Lightbulb size={16} fill="currentColor" />
              <h4>MẸO NHỎ</h4>
            </div>
            <ul className="space-y-2 pl-2">
              <li className="text-[13px] text-slate-700 flex items-start">
                <span className="text-amber-500 font-bold mr-2">•</span>
                <p>Bật nút <span className="font-bold">"Đạo văn"</span> để xem các đoạn trùng lặp và xử lý AI từng đoạn</p>
              </li>
              <li className="text-[13px] text-slate-700 flex items-start">
                <span className="text-amber-500 font-bold mr-2">•</span>
                <p>Sử dụng <span className="font-bold">API Key</span> riêng để đạt tốc độ xử lý nhanh nhất</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-8 pt-2 pb-10 flex justify-center bg-white border-t border-slate-50">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-16 py-4 bg-[#5d5fef] hover:bg-[#4a4ce0] text-white font-black rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-[0.98] uppercase tracking-widest text-sm"
          >
            KHÁM PHÁ NGAY
          </button>
        </div>
      </div>
    </div>
  );
};
