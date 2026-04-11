
import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface ATHDModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const ATHDModal: React.FC<ATHDModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showIphoneInstructions, setShowIphoneInstructions] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      {/* Update Alert Overlay */}
      {showUpdateAlert && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-blue-100 dark:border-blue-900/30 max-w-sm w-full text-center animate-in fade-in zoom-in duration-200">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">THÔNG BÁO</h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">ĐANG CẬP NHẬT</p>
            <button 
              onClick={() => setShowUpdateAlert(false)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all active:scale-95"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* iPhone Instructions Overlay */}
      {showIphoneInstructions && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-indigo-100 dark:border-indigo-900/30 max-w-md w-full animate-in fade-in zoom-in duration-200">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center uppercase">Cách cài đặt lên Iphone</h3>
            <div className="text-slate-600 dark:text-slate-400 font-medium mb-6 space-y-2">
              <p className="font-bold text-indigo-600 dark:text-indigo-400">Trên iPhone:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mở trình duyệt Safari</li>
                <li>Truy cập link web <span className="text-blue-600 dark:text-blue-400 break-all">* https://tuvi-tuongso-apk.vercel.app/ *</span></li>
                <li>Nhấn nút Share (mũi tên lên)</li>
                <li>Chọn "Thêm vào màn hình chính"</li>
              </ul>
            </div>
            <button 
              onClick={() => setShowIphoneInstructions(false)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all active:scale-95"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-outfit uppercase tracking-tight">HƯỚNG DẪN SỬ DỤNG</h2>
              <p className="text-blue-50 opacity-90 text-sm font-medium">Ứng dụng An toàn học đường (ATHĐ)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-8 space-y-6 scrollbar-hide bg-white dark:bg-slate-900">
          <div className="space-y-4">
            {[
              "1. Tải Ứng dụng ATHĐ",
              "2. Hướng dẫn cài đặt Ứng dụng lên điện thoại HĐH Android",
              "3. Hướng dẫn sử dụng trên điện thoại HĐH iOS (Iphone)",
              "4. Hướng dẫn Học sinh sử dụng App",
              "5. Hướng dẫn Giáo viên sử dụng App",
              "6. Hướng dẫn Admin sử dụng App"
            ].map((text, index) => {
              const links: Record<number, string> = {
                0: "https://drive.google.com/drive/folders/1tNdNZfj1qv7wQxrvYQOG65pIhi1zYLOH?usp=sharing",
                1: "https://www.youtube.com/watch?v=_Rs3DHZ2wWQ",
                3: "https://youtu.be/qbf3DnoMVn4",
                4: "https://youtu.be/ph9-RWXpJMI",
                5: "https://youtu.be/bGefB0r5iYQ"
              };
              
              const href = links[index];
              const isLink = !!href;
              const isIphoneInstructions = index === 2;
              
              const itemContent = (
                <div 
                  onClick={() => isIphoneInstructions && setShowIphoneInstructions(true)}
                  className={`flex items-start space-x-3 p-3 rounded-xl border transition-colors ${
                    isLink || isIphoneInstructions
                      ? 'border-blue-200 bg-blue-50/50 hover:bg-blue-100 dark:border-blue-900/30 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 cursor-pointer' 
                      : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isLink || isIphoneInstructions ? 'text-blue-700 dark:text-blue-400' : 'text-blue-600'}`} />
                  <p className={`font-medium ${isLink || isIphoneInstructions ? 'text-blue-700 dark:text-blue-400 underline underline-offset-4' : 'text-slate-700 dark:text-slate-300'}`}>
                    {text}
                  </p>
                </div>
              );

              if (isLink) {
                return (
                  <a 
                    key={index}
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block no-underline"
                  >
                    {itemContent}
                  </a>
                );
              }

              return <div key={index}>{itemContent}</div>;
            })}

            {/* Section 7 in Red */}
            <div className="p-5 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <h4 className="font-bold text-red-600 text-lg">7. Tài khoản và Mật khẩu xài trải nghiệm App</h4>
              </div>
              <div className="pl-8 space-y-3 text-red-600 font-semibold">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-50 dark:border-red-900/20">
                  <p>* Tk Hs: hocsinh</p>
                  <p className="ml-4">Mk: 1234</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-50 dark:border-red-900/20">
                  <p>* Tk Giáo viên: giaovien</p>
                  <p className="ml-4">Mk: 1234</p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-red-50 dark:border-red-900/20">
                  <p>* Tk admin: admin</p>
                  <p className="ml-4">Mk: 1234</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onLogin}
            className="w-full sm:w-auto px-10 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-wider"
          >
            Xem Video
          </button>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-10 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-bold rounded-xl shadow-md transition-all active:scale-95 uppercase tracking-wider"
          >
            Đóng hướng dẫn
          </button>
        </div>
      </div>
    </div>
  );
};
