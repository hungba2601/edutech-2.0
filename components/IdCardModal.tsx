
import React from 'react';
import { X, UserRound, CheckCircle2, Image as ImageIcon, Shirt, Layout } from 'lucide-react';

interface IdCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const IdCardModal: React.FC<IdCardModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-blue-600 p-8 text-center text-white relative">
          <h2 className="text-3xl font-extrabold font-outfit tracking-wider mb-2 uppercase italic">HƯỚNG DẪN SỬ DỤNG</h2>
          <p className="text-blue-50 opacity-90 text-sm font-medium">Tạo ảnh thẻ chuẩn quốc tế chỉ với vài thao tác AI.</p>
          <div className="absolute top-6 right-6 flex items-center space-x-3">
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="p-8 space-y-6 bg-white overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <ImageIcon size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-blue-400 italic mr-2 text-xl">01</span> Chọn ảnh gốc</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Tải lên ảnh chân dung rõ mặt, ánh sáng đều. AI sẽ tự động tách nền chính xác.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <Shirt size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-blue-400 italic mr-2 text-xl">02</span> Thay trang phục</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Lựa chọn vest, sơ mi công sở chuyên nghiệp phù hợp với nam và nữ.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <Layout size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-blue-400 italic mr-2 text-xl">03</span> Chọn kích thước</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Hỗ trợ các kích thước chuẩn: 2x3, 3x4, 4x6 cm hoặc theo chuẩn hộ chiếu.</p>
              </div>
            </div>
            <div className="p-5 rounded-3xl border border-blue-100 bg-white shadow-sm flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <CheckCircle2 size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-700"><span className="text-blue-400 italic mr-2 text-xl">04</span> Hoàn tất</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Xem trước kết quả và tải xuống bộ ảnh thẻ sắc nét sẵn sàng để in ấn.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 pt-2 flex justify-center">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-12 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            <UserRound size={18} />
            <span>BẮT ĐẦU TẠO ẢNH THẺ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
