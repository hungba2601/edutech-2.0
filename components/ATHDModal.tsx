
import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, Copy, Smartphone, Download, AlertTriangle } from 'lucide-react';

interface ATHDModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

export const ATHDModal: React.FC<ATHDModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showInstallModal, setShowInstallModal] = useState(false);

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

      {/* Universal Install Instructions Modal */}
      {showInstallModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowInstallModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={18} className="text-slate-500" />
            </button>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-blue-500 relative">
                <Smartphone size={24} />
                <Download size={12} className="absolute -left-1 -bottom-1 text-indigo-500 bg-white rounded-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Cài đặt ứng dụng
              </h3>
            </div>
            
            <div className="space-y-5 text-sm">
              <div className="text-center space-y-2">
                <p className="text-amber-500 font-bold flex items-center justify-center gap-1.5">
                  <AlertTriangle size={16} />
                  Bạn đang mở trong trình duyệt nhúng
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Trình duyệt này không hỗ trợ cài đặt trực tiếp. Vui lòng mở bằng <strong className="text-slate-800 dark:text-slate-200">Chrome</strong> hoặc <strong className="text-slate-800 dark:text-slate-200">Safari</strong> để cài app.
                </p>
              </div>

              <div className="bg-indigo-50/50 dark:bg-indigo-900/10 rounded-2xl p-4 border border-indigo-100 dark:border-indigo-500/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 text-center">Link ứng dụng:</p>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 mb-4 text-center overflow-x-auto no-scrollbar">
                  <span className="text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                    https://safeschool-apk.vercel.app/
                  </span>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText("https://safeschool-apk.vercel.app/");
                    alert('Đã copy link!');
                  }}
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/30 transition-transform active:scale-95"
                >
                  <Copy size={18} />
                  <span>Copy Link</span>
                </button>
              </div>

              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <p className="font-bold flex items-center gap-1 text-slate-800 dark:text-white">
                  <span className="text-red-500">📌</span> Cách cài đặt:
                </p>
                <div className="space-y-2.5 text-[13px] leading-relaxed">
                  <p>1. Nhấn <strong className="text-indigo-600 dark:text-indigo-400">"Copy Link"</strong> ở trên.</p>
                  <p>2. Mở trình duyệt <strong>Chrome</strong> (Android) hoặc <strong>Safari</strong> (iPhone).</p>
                  <p>3. Dán link vào thanh địa chỉ và truy cập.</p>
                  <p>4. <strong>Android (Chrome):</strong> Nhấn menu 3 chấm ⋮ → "Thêm vào MH chính".</p>
                  <p>5. <strong>iPhone (Safari):</strong> Nhấn nút Chia sẻ (vuông mũi tên) → "Thêm vào MH chính".</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setShowInstallModal(false)}
              className="w-full mt-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold transition-colors"
            >
              Đóng
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
              "1. Hướng dẫn cài đặt app lên điện thoại",
              "2. Hướng dẫn Học sinh sử dụng App",
              "3. Hướng dẫn Giáo viên sử dụng App",
              "4. Hướng dẫn Admin sử dụng App"
            ].map((text, index) => {
              const links: Record<number, string> = {
                1: "https://youtu.be/qbf3DnoMVn4",
                2: "https://youtu.be/ph9-RWXpJMI",
                3: "https://youtu.be/bGefB0r5iYQ"
              };
              
              const href = links[index];
              const isLink = !!href;
              const isInstallInstruction = index === 0;
              
              const itemContent = (
                <div 
                  onClick={() => isInstallInstruction && setShowInstallModal(true)}
                  className={`flex items-start space-x-3 p-3 rounded-xl border transition-colors ${
                    isLink || isInstallInstruction
                      ? 'border-blue-200 bg-blue-50/50 hover:bg-blue-100 dark:border-blue-900/30 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 cursor-pointer' 
                      : 'border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isLink || isInstallInstruction ? 'text-blue-700 dark:text-blue-400' : 'text-blue-600'}`} />
                  <p className={`font-medium ${isLink || isInstallInstruction ? 'text-blue-700 dark:text-blue-400 underline underline-offset-4' : 'text-slate-700 dark:text-slate-300'}`}>
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

            {/* Section 5 in Red */}
            <div className="p-5 rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <h4 className="font-bold text-red-600 text-lg">5. Tài khoản và Mật khẩu xài trải nghiệm App</h4>
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
