import React, { useState } from 'react';
import { X, Copy, Check, Code } from 'lucide-react';

interface GoogleScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleScriptModal: React.FC<GoogleScriptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const code = `/**
 * =========================================================
 * HỆ THỐNG TỰ ĐỘNG KHÓA Ô SAU KHI NHẬP (BẢN TỐC ĐỘ CAO)
 * =========================================================
 */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🛡️ Cài đặt Khóa')
    .addItem('🚀 BƯỚC 1: Cấp quyền và Bật Hệ Thống', 'installTrigger')
    .addItem('🎯 BƯỚC 2: Ghi nhớ VÙNG ĐANG BÔI ĐEN', 'setAutoLockRangeFast')
    .addSeparator()
    .addItem('🔓 MỞ KHÓA TOÀN BỘ FILE (Xóa hết khóa)', 'removeAllProtections')
    .addItem('❌ Tắt hệ thống tự khóa (Xóa ghi nhớ)', 'clearAutolockRangeFast')
    .addToUi();
}

/**
 * BƯỚC 1: HÀM CÀI ĐẶT TRÌNH KÍCH HOẠT (CHẠY LẦN ĐẦU)
 */
function installTrigger() {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
    
    // Tạo trigger mới chạy khi có người sửa ô
    ScriptApp.newTrigger('triggerAutoLockFast')
      .forSpreadsheet(sheet)
      .onEdit()
      .create();
      
    SpreadsheetApp.getUi().alert("✅ Đã bật Hệ Thống! Tiếp theo hãy bôi đen vùng cần khóa và chọn Bước 2.");
  } catch(e) {
    SpreadsheetApp.getUi().alert("Lỗi: " + e.message);
  }
}

/**
 * BƯỚC 2: GHI NHỚ VÙNG CẦN KHÓA
 */
function setAutoLockRangeFast() {
  var range = SpreadsheetApp.getActiveRange();
  var rangeNotation = range.getA1Notation();
  var sheetName = range.getSheet().getName();
  
  // Lưu vùng đã chọn vào bộ nhớ của script
  var props = PropertiesService.getScriptProperties();
  props.setProperty('AUTOLOCK_RANGE', rangeNotation);
  props.setProperty('AUTOLOCK_SHEET', sheetName);
  
  SpreadsheetApp.getUi().alert("✅ Đã ghi nhớ vùng: " + rangeNotation + " tại Sheet: " + sheetName);
}

/**
 * HÀM CHÍNH: TỰ ĐỘNG KHÓA KHI CÓ NGƯỜI NHẬP LIỆU
 */
function triggerAutoLockFast(e) {
  if (!e) return;
  var range = e.range;
  var sheet = range.getSheet();
  
  var props = PropertiesService.getScriptProperties();
  var savedRange = props.getProperty('AUTOLOCK_RANGE');
  var savedSheet = props.getProperty('AUTOLOCK_SHEET');
  
  // Kiểm tra nếu sửa đúng Sheet và đúng Vùng đã cài đặt
  if (savedRange && savedSheet && sheet.getName() == savedSheet) {
    var checkRange = sheet.getRange(savedRange);
    
    // Nếu ô vừa sửa nằm trong vùng bảo vệ
    if (range.getRow() >= checkRange.getRow() && 
        range.getRow() <= checkRange.getLastRow() &&
        range.getColumn() >= checkRange.getColumn() && 
        range.getColumn() <= checkRange.getLastColumn()) {
      
      // Tiến hành khóa ô đó lại ngay lập tức
      var protection = range.protect().setDescription('Auto-locked');
      
      // Loại bỏ quyền sửa của mọi người (trừ Chủ sở hữu)
      var me = Session.getEffectiveUser();
      protection.addEditor(me);
      protection.removeEditors(protection.getEditors());
      if (protection.canDomainEdit()) {
        protection.setDomainEdit(false);
      }
    }
  }
}

/**
 * HÀM MỞ KHÓA TOÀN BỘ TRANG TÍNH
 */
function removeAllProtections() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var rangeProtections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
  for (var i = 0; i < rangeProtections.length; i++) {
    if (rangeProtections[i].canEdit()) rangeProtections[i].remove();
  }
  var sheetProtections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  for (var i = 0; i < sheetProtections.length; i++) {
    if (sheetProtections[i].canEdit()) sheetProtections[i].remove();
  }
  SpreadsheetApp.getUi().alert("✅ Đã xóa toàn bộ các vùng đang bị khóa!");
}

/**
 * HÀM TẮT HỆ THỐNG (XÓA GHI NHỚ)
 */
function clearAutolockRangeFast() {
  PropertiesService.getScriptProperties().deleteAllProperties();
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  SpreadsheetApp.getUi().alert("✅ Đã tắt tính năng tự khóa và xóa sạch bộ nhớ!");
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6 flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-md">
              <Code className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-outfit uppercase tracking-tight">Mã Code Google Apps Script</h2>
              <p className="text-rose-50 opacity-90 text-sm font-medium">Tự động khóa dữ liệu Google Sheet</p>
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
        <div className="p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950">
          <div className="relative group">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-md hover:scale-110 active:scale-95 transition-all z-10 flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Sao chép mã</span>
                </>
              )}
            </button>
            <pre className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
              <code>{code}</code>
            </pre>
          </div>
          
          <div className="mt-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30">
            <p className="text-amber-800 dark:text-amber-400 text-sm font-medium leading-relaxed">
              <strong>Lưu ý:</strong> Copy toàn bộ đoạn mã trên, sau đó vào Google Sheet của bạn {'>'} Tiện ích mở rộng {'>'} Apps Script, xóa hết mã cũ và dán đoạn mã này vào. Nhớ lưu lại và chạy hàm <code>onOpen</code> lần đầu tiên để tạo Menu.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-2.5 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all active:scale-95 uppercase text-xs tracking-widest"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
