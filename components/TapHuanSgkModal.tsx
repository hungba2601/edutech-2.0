import React, { useState } from 'react';
import { X, BookOpen, Youtube } from 'lucide-react';

interface TapHuanSgkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RowData {
  stt: number;
  mon: string;
  answers: string[];
}

const DATA_LOP_6: RowData[] = [
  { stt: 1, mon: "Mĩ thuật 6", answers: ["E", "D", "B", "D", "D", "C", "A", "D", "B", "A"] },
  { stt: 2, mon: "Ngữ văn 6", answers: ["C", "C", "A", "D", "B", "A", "D", "C", "D", "B"] },
  { stt: 3, mon: "Tin học 6", answers: ["B", "A", "D", "C", "B", "C", "A", "D", "B", "C"] },
  { stt: 4, mon: "Toán 6", answers: ["B", "D", "A", "B", "D", "A", "D", "A", "A", "C"] },
  { stt: 5, mon: "Âm nhạc 6", answers: ["D", "B", "C", "A", "A", "A", "Tự chọn", "Tự chọn", "A", "Tự chọn"] },
  { stt: 6, mon: "Tiếng Anh 6", answers: ["D", "C", "A", "D", "C", "A", "C", "A", "D", "C"] },
  { stt: 7, mon: "GDTC 6", answers: ["D", "D", "D", "C", "A", "C", "D", "D", "D", "D"] },
  { stt: 8, mon: "HĐTN, HN 6", answers: ["B", "D", "A", "D", "A", "B", "D", "B", "C", "B"] },
  { stt: 9, mon: "Công nghệ 6", answers: ["B", "C", "D", "A", "A", "B", "A", "A", "D", "C"] },
  { stt: 10, mon: "GDCD 6", answers: ["B", "A", "B", "D", "A", "C", "A", "D", "C", "B"] },
  { stt: 11, mon: "KHTN 6", answers: ["A", "C", "B", "C", "B", "C", "B", "B", "A", "C"] },
  { stt: 12, mon: "LS&ĐL 6", answers: ["D", "C", "C", "D", "A", "C", "A", "C", "A", "B"] }
];

const DATA_LOP_7: RowData[] = [
  { stt: 1, mon: "Công nghệ 7", answers: ["C", "B", "D", "A", "A", "C", "D", "A", "C", "D"] },
  { stt: 2, mon: "GDCD 7", answers: ["B", "D", "C", "B", "A", "A", "D", "B", "C", "A"] },
  { stt: 3, mon: "KHTN 7", answers: ["B", "A", "B", "B", "B", "B", "A", "B", "A", "C"] },
  { stt: 4, mon: "LS&ĐL 7", answers: ["D", "C", "D", "C", "A", "C", "C", "A", "D", "D"] },
  { stt: 5, mon: "Mĩ thuật 7", answers: ["E", "C", "B", "A", "A", "D", "B", "D", "B", "A"] },
  { stt: 6, mon: "Ngữ văn 7", answers: ["C", "B", "D", "A", "C", "A", "B", "D", "A", "D"] },
  { stt: 7, mon: "Tin học 7", answers: ["B", "A", "D", "C", "B", "C", "A", "D", "B", "C"] },
  { stt: 8, mon: "Toán 7", answers: ["D", "C", "B", "A", "D", "B", "C", "B", "D", "C"] },
  { stt: 9, mon: "Âm nhạc 7", answers: ["C", "C", "D", "B", "C", "D", "C", "D", "Tự chọn", "Tự chọn"] },
  { stt: 10, mon: "Tiếng Anh 7", answers: ["D", "C", "A", "D", "C", "A", "C", "A", "C", "D"] },
  { stt: 11, mon: "GDTC 7", answers: ["D", "B", "D", "B", "C", "D", "A", "D", "D", "D"] },
  { stt: 12, mon: "HĐTN, HN 7", answers: ["B", "D", "A", "D", "C", "B", "D", "B", "C", "C"] }
];

const DATA_LOP_8: RowData[] = [
  { stt: 1, mon: "Công nghệ 8", answers: ["B", "A", "D", "B", "B", "C", "C", "C", "C", "D"] },
  { stt: 2, mon: "GDCD 8", answers: ["D", "B", "A", "B", "A", "D", "D", "C", "C", "A"] },
  { stt: 3, mon: "KHTN 8", answers: ["B", "B", "A", "B", "C", "D", "B", "A", "B", "C"] },
  { stt: 4, mon: "LS&ĐL 8", answers: ["D", "C", "C", "D", "C", "A", "C", "A", "D", "D"] },
  { stt: 5, mon: "Mĩ thuật 8", answers: ["E", "D", "B", "A", "B", "A", "C", "D", "B", "A"] },
  { stt: 6, mon: "Ngữ văn 8", answers: ["D", "A", "C", "B", "A", "C", "D", "D", "D", "B"] },
  { stt: 7, mon: "Tin học 8", answers: ["B", "A", "D", "C", "B", "C", "A", "D", "D", "C"] },
  { stt: 8, mon: "Toán 8", answers: ["A", "C", "A", "B", "C", "B", "A", "D", "D", "C"] },
  { stt: 9, mon: "Âm nhạc 8", answers: ["A", "D", "A", "D", "D", "B", "D", "B", "B", "D"] },
  { stt: 10, mon: "Tiếng Anh 8", answers: ["D", "C", "A", "D", "C", "A", "C", "A", "D", "C"] },
  { stt: 11, mon: "GDTC 8", answers: ["D", "D", "D", "D", "C", "D", "D", "D", "D", "D"] },
  { stt: 12, mon: "HĐTN-HN 8", answers: ["B", "A", "D", "A", "B", "A", "C", "D", "C", "D"] }
];

const DATA_LOP_9: RowData[] = [
  { stt: 1, mon: "Công nghệ 9", answers: ["D", "C", "C", "D", "B", "C", "B", "D", "B", "B"] },
  { stt: 2, mon: "GDCD 9", answers: ["D", "B", "A", "B", "A", "D", "D", "C", "C", "A"] },
  { stt: 3, mon: "KHTN 9", answers: ["B", "C", "B", "A", "D", "B", "A", "B", "C", "B"] },
  { stt: 4, mon: "LS&ĐL 9", answers: ["D", "D", "C", "C", "D", "C", "A", "C", "C", "A"] },
  { stt: 5, mon: "Mĩ thuật 9", answers: ["E", "A", "B", "A", "A", "C", "D", "D", "B", "A"] },
  { stt: 6, mon: "Ngữ văn 9", answers: ["B", "D", "C", "B", "B", "C", "D", "C", "B", "A"] },
  { stt: 7, mon: "Tin học 9", answers: ["B", "A", "D", "C", "B", "C", "A", "D", "D", "C"] },
  { stt: 8, mon: "Toán 9", answers: ["A", "C", "A", "B", "C", "B", "A", "D", "D", "C"] },
  { stt: 9, mon: "Âm nhạc 9", answers: ["A", "B", "C", "A", "C", "C", "B", "B", "B", "D"] },
  { stt: 10, mon: "Tiếng Anh 9", answers: ["D", "C", "A", "D", "C", "A", "C", "A", "D", "C"] },
  { stt: 11, mon: "GDTC 9", answers: ["D", "D", "B", "C", "D", "A", "B", "D", "C", "A"] },
  { stt: 12, mon: "HĐTN-HN 9", answers: ["B", "D", "A", "C", "D", "D", "B", "A", "C", "A"] }
];

const GRADES = [
  { id: "lop-6", name: "Lớp 6", data: DATA_LOP_6 },
  { id: "lop-7", name: "Lớp 7", data: DATA_LOP_7 },
  { id: "lop-8", name: "Lớp 8", data: DATA_LOP_8 },
  { id: "lop-9", name: "Lớp 9", data: DATA_LOP_9 }
];

export const TapHuanSgkModal: React.FC<TapHuanSgkModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("lop-6");

  if (!isOpen) return null;

  const currentGrade = GRADES.find(g => g.id === activeTab) || GRADES[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-3 text-teal-600 dark:text-teal-400">
            <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-outfit uppercase tracking-tight">Đáp án Tập huấn SGK KNTT</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-400 border-2 border-slate-200 dark:border-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 pt-4 flex-grow overflow-hidden flex flex-col space-y-6 max-h-[75vh]">
          {/* Grade selection tabs */}
          <div className="flex gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            {GRADES.map((grade) => (
              <button
                key={grade.id}
                onClick={() => setActiveTab(grade.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl transition-all ${
                  activeTab === grade.id 
                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {grade.name}
              </button>
            ))}
          </div>

          {/* Table Container */}
          <div className="flex-grow overflow-auto rounded-2xl border border-slate-200 dark:border-slate-800/80">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 uppercase font-black font-outfit border-b border-slate-200 dark:border-slate-800/80 sticky top-0 z-10">
                  <th className="p-3 text-center bg-slate-100 dark:bg-slate-800">STT</th>
                  <th className="p-3 min-w-[120px] bg-slate-100 dark:bg-slate-800">Môn</th>
                  {[...Array(10)].map((_, i) => (
                    <th key={i} className="p-3 text-center min-w-[45px] bg-slate-100 dark:bg-slate-800">C.{i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 dark:divide-slate-800/60">
                {currentGrade.data.map((row) => (
                  <tr 
                    key={row.stt} 
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300 transition-colors"
                  >
                    <td className="p-3 text-center font-bold">{row.stt}</td>
                    <td className="p-3 font-extrabold text-slate-900 dark:text-white">{row.mon}</td>
                    {row.answers.map((ans, idx) => (
                      <td key={idx} className="p-3 text-center">
                        <span className={`inline-flex items-center justify-center rounded-lg font-bold font-mono text-xs ${
                          ans === 'Tự chọn' 
                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-1' 
                            : 'w-7 h-7 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400'
                        }`}>
                          {ans}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend / Caption */}
          <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed italic border-t border-slate-100 dark:border-slate-800/80 pt-4">
            * Chú thích: A, B, C, D, E: Đáp án các phương án lựa chọn; Tự chọn: Học viên tự lựa chọn đáp án phù hợp.
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 pb-10 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => window.open('https://youtu.be/nM3N02WhxG8', '_blank')}
            className="flex-1 py-4 tech-gradient text-white font-black rounded-2xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 uppercase tracking-wider text-sm flex items-center justify-center space-x-2"
          >
            <Youtube className="w-5 h-5" />
            <span>XEM VIDEO THỰC HIỆN</span>
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-black rounded-2xl transition-all active:scale-95 uppercase tracking-wider text-sm"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
