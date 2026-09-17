import React, { useState } from 'react';
import { X, Copy, Check, Code } from 'lucide-react';

interface GoogleScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleScriptModal: React.FC<GoogleScriptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const code = `/**
 * =========================================================================
 * HỆ THỐNG TỰ ĐỘNG KHÓA Ô SAU 5 PHÚT BẤT HOẠT
 * =========================================================================
 */

// Cấu hình thời gian chờ: ĐÚNG 5 PHÚT
var INACTIVITY_MINUTES = 5;

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🛡️ Cài đặt Khóa')
    .addItem('🚀 BƯỚC 1: Cấp quyền và Bật Hệ Thống (Hẹn giờ 5 phút)', 'installTrigger')
    .addItem('🎯 BƯỚC 2: Ghi nhớ VÙNG ĐANG BÔI ĐEN', 'setAutoLockRange')
    .addSeparator()
    .addItem('⚡ Khóa ngay các ô đang chờ (Không cần đợi hết 5 phút)', 'forceProcessQueue')
    .addItem('🔓 MỞ KHÓA TOÀN BỘ FILE (Xóa hết khóa)', 'removeAllProtections')
    .addItem('❌ Tắt hệ thống tự khóa (Xóa ghi nhớ & Hàng đợi)', 'clearAutolockSystem')
    .addToUi();
}

/**
 * BƯỚC 1: CÀI ĐẶT TRÌNH KÍCH HOẠT (TRIGGER CHỈNH SỬA + TRIGGER HẸN GIỜ QUÉT)
 */
function installTrigger() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      ScriptApp.deleteTrigger(triggers[i]);
    }
    
    // 1. Bắt sự kiện khi có người gõ phím / sửa ô
    ScriptApp.newTrigger('onCellEdit')
      .forSpreadsheet(ss)
      .onEdit()
      .create();

    // 2. Chạy ngầm mỗi phút để quét các ô đã đủ 5 phút
    ScriptApp.newTrigger('processInactiveLocks')
      .timeBased()
      .everyMinutes(1)
      .create();
      
    SpreadsheetApp.getUi().alert("✅ Đã bật Hệ Thống! Thời gian chờ là ĐÚNG " + INACTIVITY_MINUTES + " PHÚT.\\nTiếp theo hãy bôi đen vùng cần bảo vệ và chọn Bước 2.");
  } catch(e) {
    SpreadsheetApp.getUi().alert("Lỗi khi cài đặt: " + e.message);
  }
}

/**
 * BƯỚC 2: GHI NHỚ VÙNG CẦN BẢO VỆ
 */
function setAutoLockRange() {
  var range = SpreadsheetApp.getActiveRange();
  var rangeNotation = range.getA1Notation();
  var sheetName = range.getSheet().getName();
  
  var props = PropertiesService.getScriptProperties();
  props.setProperty('AUTOLOCK_RANGE', rangeNotation);
  props.setProperty('AUTOLOCK_SHEET', sheetName);
  
  SpreadsheetApp.getUi().alert("✅ Đã ghi nhớ vùng: " + rangeNotation + " tại Sheet: " + sheetName);
}

/**
 * HÀM THEO DÕI NHẬP LIỆU: CẬP NHẬT THỜI GIAN SỬA GẦN NHẤT
 * (Nếu người dùng sửa lại thì tự động đếm lại trọn vẹn 5 phút từ đầu)
 */
function onCellEdit(e) {
  if (!e) return;
  var range = e.range;
  var sheet = range.getSheet();
  var sheetName = sheet.getName();
  
  var props = PropertiesService.getScriptProperties();
  var savedRange = props.getProperty('AUTOLOCK_RANGE');
  var savedSheet = props.getProperty('AUTOLOCK_SHEET');
  
  if (savedRange && savedSheet && sheetName === savedSheet) {
    var checkRange = sheet.getRange(savedRange);
    
    var editRow = range.getRow();
    var editLastRow = range.getLastRow();
    var editCol = range.getColumn();
    var editLastCol = range.getLastColumn();
    
    var checkRow = checkRange.getRow();
    var checkLastRow = checkRange.getLastRow();
    var checkCol = checkRange.getColumn();
    var checkLastCol = checkRange.getLastColumn();
    
    var intersects = !(editLastRow < checkRow || editRow > checkLastRow || editLastCol < checkCol || editCol > checkLastCol);
    if (!intersects) return;
    
    var queueJson = props.getProperty('LOCK_QUEUE');
    var queue = queueJson ? JSON.parse(queueJson) : {};
    
    // Ghi nhận mốc thời gian hiện tại
    var now = Date.now();
    for (var r = Math.max(editRow, checkRow); r <= Math.min(editLastRow, checkLastRow); r++) {
      for (var c = Math.max(editCol, checkCol); c <= Math.min(editLastCol, checkLastCol); c++) {
        var cellA1 = sheet.getRange(r, c).getA1Notation();
        var key = sheetName + "!" + cellA1;
        queue[key] = now;
      }
    }
    
    props.setProperty('LOCK_QUEUE', JSON.stringify(queue));
  }
}

/**
 * HÀM CHẠY NGẦM MỖI PHÚT: KHÓA CÁC Ô ĐÃ ĐỦ 5 PHÚT BẤT HOẠT
 */
function processInactiveLocks() {
  var props = PropertiesService.getScriptProperties();
  var queueJson = props.getProperty('LOCK_QUEUE');
  if (!queueJson) return;
  
  var queue = JSON.parse(queueJson);
  var keys = Object.keys(queue);
  if (keys.length === 0) return;
  
  var now = Date.now();
  var timeoutMs = INACTIVITY_MINUTES * 60 * 1000; // Đúng 5 phút = 300.000 ms
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var me = Session.getEffectiveUser();
  
  var remainingQueue = {};
  var cellsToLockBySheet = {};
  
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var lastEditTime = queue[key];
    
    // Nếu ô đã không còn ai sửa đủ 5 phút
    if (now - lastEditTime >= timeoutMs) {
      var parts = key.split("!");
      var sName = parts[0];
      var a1 = parts[1];
      if (!cellsToLockBySheet[sName]) {
        cellsToLockBySheet[sName] = [];
      }
      cellsToLockBySheet[sName].push(a1);
    } else {
      // Chưa đủ 5 phút -> tiếp tục chờ
      remainingQueue[key] = lastEditTime;
    }
  }
  
  // Khóa các ô đã quá 5 phút
  for (var sName in cellsToLockBySheet) {
    var sheet = ss.getSheetByName(sName);
    if (!sheet) continue;
    
    var a1List = cellsToLockBySheet[sName];
    for (var j = 0; j < a1List.length; j++) {
      try {
        var cellRange = sheet.getRange(a1List[j]);
        if (cellRange.isBlank()) continue; // Ô trống thì không khóa
        
        var protection = cellRange.protect().setDescription('Khóa sau 5 phút: ' + a1List[j]);
        protection.addEditor(me);
        protection.removeEditors(protection.getEditors());
        if (protection.canDomainEdit()) {
          protection.setDomainEdit(false);
        }
      } catch (err) {
        console.error("Lỗi khi khóa: " + err.message);
      }
    }
  }
  
  props.setProperty('LOCK_QUEUE', JSON.stringify(remainingQueue));
}

/**
 * TÙY CHỌN: KHÓA CƯỠNG CHẾ TOÀN BỘ CÁC Ô ĐANG CHỜ
 */
function forceProcessQueue() {
  var props = PropertiesService.getScriptProperties();
  var queueJson = props.getProperty('LOCK_QUEUE');
  if (!queueJson) {
    SpreadsheetApp.getUi().alert("Hàng đợi đang trống, không có ô nào chờ khóa.");
    return;
  }
  
  var queue = JSON.parse(queueJson);
  for (var k in queue) {
    queue[k] = 0;
  }
  props.setProperty('LOCK_QUEUE', JSON.stringify(queue));
  processInactiveLocks();
  SpreadsheetApp.getUi().alert("✅ Đã khóa ngay tất cả các ô trong hàng đợi!");
}

/**
 * HÀM MỞ KHÓA TOÀN BỘ FILE
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
  
  PropertiesService.getScriptProperties().deleteProperty('LOCK_QUEUE');
  SpreadsheetApp.getUi().alert("✅ Đã xóa toàn bộ vùng khóa và làm sạch hàng đợi!");
}

/**
 * HÀM TẮT TOÀN BỘ HỆ THỐNG
 */
function clearAutolockSystem() {
  PropertiesService.getScriptProperties().deleteAllProperties();
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  SpreadsheetApp.getUi().alert("✅ Đã tắt tính năng tự khóa và xóa toàn bộ bộ nhớ!");
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
