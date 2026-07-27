
import React from 'react';
import { X, Sparkles, Book, MousePointer2, Key, Star, GraduationCap, Youtube } from 'lucide-react';

interface LearningAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
  videoUrl?: string;
}

export const LearningAssistantModal: React.FC<LearningAssistantModalProps> = ({ isOpen, onClose, onLogin, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - White with blue/purple icons */}
        <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-50 relative">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
              <Book className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
              <p className="text-indigo-600 text-xs font-bold uppercase tracking-wider">LÀM CHỦ TRỢ LÝ HỌC TẬP AI</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-8 pt-6 space-y-8 scrollbar-hide bg-white">
          
          {/* Intro Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-500">
              <Sparkles size={18} fill="currentColor" />
              <h3 className="font-black text-slate-800 text-sm uppercase">Giới thiệu về App</h3>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed text-justify font-medium">
              <span className="font-bold text-slate-800">Trợ lý học tập AI</span> là ứng dụng thông minh giúp học sinh ôn luyện kiến thức bám sát chương trình <span className="font-bold">Kết nối tri thức</span> và <span className="font-bold">Global Success</span>. Ứng dụng sử dụng công nghệ AI tiên tiến (Google Gemini) để soạn đề thi cá nhân hóa và hỗ trợ tư duy học tập hiệu quả.
            </p>
          </section>

          {/* Steps Section */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2 text-indigo-600">
              <GraduationCap size={18} />
              <h3 className="font-black text-slate-800 text-sm uppercase">Các bước sử dụng</h3>
            </div>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-indigo-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-indigo-600 font-black text-base shadow-sm">1</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Cấu hình API Key</h4>
                    <Key size={14} className="text-slate-400" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Nhấp vào biểu tượng <span className="font-bold">Cài đặt</span> (bánh răng) để nhập mã API Key từ Google AI Studio. Đây là "nhiên liệu" để AI hoạt động.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-indigo-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-indigo-600 font-black text-base shadow-sm">2</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Chọn Môn học & Chủ đề</h4>
                    <MousePointer2 size={14} className="text-slate-400 rotate-45" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Chọn cấp học (Tiểu học/THCS/THPT), môn học, khối lớp và bài học cụ thể bạn muốn ôn luyện.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center space-x-4 p-5 rounded-[1.5rem] bg-slate-50/80 border border-slate-100 group hover:border-indigo-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-indigo-600 font-black text-base shadow-sm">3</div>
                <div className="flex-grow space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-slate-800 text-[13px] uppercase tracking-tight">Luyện tập thông minh</h4>
                    <Sparkles size={14} className="text-indigo-400" />
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Nhấn <span className="font-bold">"Soạn đề ngay"</span>. AI sẽ tạo bộ câu hỏi trắc nghiệm với đầy đủ đáp án và lời giải chi tiết cho từng câu.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Action - Dark Navy Button as in Image */}
        <div className="p-8 pt-2 pb-10 flex flex-col space-y-3 justify-center bg-white">
          <a 
            href="https://youtu.be/Z2lM0bvPsss"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-3xl shadow-lg transition-all active:scale-95 uppercase tracking-[0.15em] text-sm flex items-center justify-center space-x-2"
          >
            <Youtube className="w-5 h-5" />
            <span>XEM VIDEO HD</span>
          </a>
          <button 
            onClick={onLogin}
            className="w-full py-5 bg-[#0f172a] hover:bg-black text-white font-black rounded-3xl shadow-2xl transition-all active:scale-95 uppercase tracking-[0.15em] text-sm"
          >
            ĐÃ RÕ, BẮT ĐẦU HỌC THÔI!
          </button>
        </div>
      </div>
    </div>
  );
};
