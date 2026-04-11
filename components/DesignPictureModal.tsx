
import React, { useState } from 'react';
import { X, BookOpen } from 'lucide-react';

interface DesignPictureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: () => void;
}

type TabType = 'tách' | 'ghép' | 'thay';

export const DesignPictureModal: React.FC<DesignPictureModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [activeTab, setActiveTab] = useState<TabType>('tách');

  if (!isOpen) return null;

  const tabs = [
    { id: 'tách' as TabType, label: 'Tách & Phối đồ', color: 'emerald' },
    { id: 'ghép' as TabType, label: 'Ghép người', color: 'blue' },
    { id: 'thay' as TabType, label: 'Thay nền', color: 'orange' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tách':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 1: Tải ảnh trang phục</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên ảnh chứa trang phục bạn muốn lấy. Có thể là ảnh chụp sản phẩm hoặc ảnh người đang mặc.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 2: Tách trang phục</h4>
                <p className="text-slate-500 text-sm mt-1">Nhập mô tả (ví dụ: 'Lấy áo khoác xanh') và nhấn 'Tách trang phục'. AI sẽ xóa người và nền.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 3: Tải ảnh người mẫu</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên ảnh người mẫu bạn muốn mặc thử đồ vào.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 4: Phối đồ</h4>
                <p className="text-slate-500 text-sm mt-1">Nhấn 'Thực hiện phối đồ'. AI sẽ mặc trang phục đã tách lên người mẫu một cách tự nhiên.</p>
              </div>
            </div>
          </div>
        );
      case 'ghép':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 1: Chọn ảnh nền</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên bức ảnh gốc mà bạn muốn ghép thêm người vào.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 2: Chọn người ghép</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên ảnh chân dung hoặc toàn thân của người cần ghép.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 3: Nhập yêu cầu</h4>
                <p className="text-slate-500 text-sm mt-1">Mô tả vị trí và tương tác (ví dụ: 'Đứng bên phải, khoác vai').</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 4: Thực hiện</h4>
                <p className="text-slate-500 text-sm mt-1">Nhấn 'Thực hiện ghép người'. AI sẽ tự động xử lý ánh sáng và bóng đổ.</p>
              </div>
            </div>
          </div>
        );
      case 'thay':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 1: Chọn ảnh gốc</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên ảnh chứa chủ thể bạn muốn giữ lại.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 2: Chọn nền mới</h4>
                <p className="text-slate-500 text-sm mt-1">Tải lên ảnh nền có sẵn HOẶC nhập mô tả bối cảnh bạn muốn AI tạo ra.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-800">Bước 3: Xử lý</h4>
                <p className="text-slate-500 text-sm mt-1">Nhấn 'Thay đổi hình nền'. AI sẽ tách chủ thể và hòa trộn vào bối cảnh mới.</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const getActiveColor = () => {
    const tab = tabs.find(t => t.id === activeTab);
    if (tab?.color === 'emerald') return 'bg-emerald-500';
    if (tab?.color === 'blue') return 'bg-blue-500';
    if (tab?.color === 'orange') return 'bg-orange-500';
    return 'bg-emerald-500';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Hướng dẫn sử dụng</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-sm font-bold transition-all relative ${
                activeTab === tab.id 
                  ? `text-${tab.color}-600` 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className={`absolute bottom-0 left-0 w-full h-1 ${getActiveColor()} rounded-t-full`} />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-8 min-h-[400px] overflow-y-auto scrollbar-hide">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="p-6 flex justify-end border-t border-slate-50">
          <button 
            onClick={onLogin}
            className="px-8 py-3 bg-[#262626] hover:bg-black text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
};
