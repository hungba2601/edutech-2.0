
import React, { useState } from 'react';
import { APP_CATEGORIES } from './constants';
import { CategorySection } from './components/CategorySection';
import { WelcomeModal } from './components/WelcomeModal';
import { MatrixModal } from './components/MatrixModal';
import { KHBDModal } from './components/KHBDModal';
import { StoryModal } from './components/StoryModal';
import { PhotoRestorationModal } from './components/PhotoRestorationModal';
import { StudioAIModal } from './components/StudioAIModal';
import { IdCardModal } from './components/IdCardModal';
import { ImageToExcelModal } from './components/ImageToExcelModal';
import { CryptoPredictionModal } from './components/CryptoPredictionModal';
import { SKKNModal } from './components/SKKNModal';
import { SKKNReviewModal } from './components/SKKNReviewModal';
import { PricingModal } from './components/PricingModal';
import { BiologySimModal } from './components/BiologySimModal';
import { LearningAssistantModal } from './components/LearningAssistantModal';
import { AIVirtualAssistantModal } from './components/AIVirtualAssistantModal';
import { TextToSpeechModal } from './components/TextToSpeechModal';
import { SlideAssistantModal } from './components/SlideAssistantModal';
import { DesignPictureModal } from './components/DesignPictureModal';
import { HWSolverModal } from './components/HWSolverModal';
import { GoogleScriptModal } from './components/GoogleScriptModal';
import { ATHDModal } from './components/ATHDModal';
import { TuViUpdateModal } from './components/TuViUpdateModal';
import { GVGModal } from './components/GVGModal';
import { BotTradeModal } from './components/BotTradeModal';
import { TugOfWarModal } from './components/TugOfWarModal';
import { ExcelSyncModal } from './components/ExcelSyncModal';
import { VietlottModal } from './components/VietlottModal';
import { WordToKatexModal } from './components/WordToKatexModal';
import { MathpixModal } from './components/MathpixModal';
import { DailyInfoModal } from './components/DailyInfoModal';
import { CryptoGuideModal } from './components/CryptoGuideModal';
import { ExamShufflerModal } from './components/ExamShufflerModal';
import { AutoCommentModal } from './components/AutoCommentModal';
import { PrintProModal } from './components/PrintProModal';
import { SgkSummaryModal } from './components/SgkSummaryModal';
import { ProverbGameModal } from './components/ProverbGameModal';
import { PdfEditorModal } from './components/PdfEditorModal';
import { AIPhotoEditorModal } from './components/AIPhotoEditorModal';
import { BinhDanHocVuModal } from './components/BinhDanHocVuModal';
import { TapHuanSgkModal } from './components/TapHuanSgkModal';
import { SoanCongVanModal } from './components/SoanCongVanModal';
import { CreateImageVideoModal } from './components/CreateImageVideoModal';
import { InstallPWAButton } from './components/InstallPWAButton';
import { SalaryCalculatorModal } from './components/SalaryCalculatorModal';
import { SimulationToolModal } from './components/SimulationToolModal';
import { GDriveDownloaderModal } from './components/GDriveDownloaderModal';
import { CreateContentVideoShortModal } from './components/CreateContentVideoShortModal';
import { LayoutGrid, CreditCard, Youtube, Key, Sigma, Phone, FileCode, ClipboardList, Download, Sun, Moon, Table, FileSpreadsheet, PlayCircle, Code, FileText, ArrowRight, Video, Image, GraduationCap, Users, BookOpen, Target, Eye, Lock, EyeOff } from 'lucide-react';
import { Category } from './types';
import { fetchAppCounts, trackAppVisit, AppCounts, fetchPricingVisibility, savePricingVisibility } from './services/tracking';

const App: React.FC = () => {
  const [appCounts, setAppCounts] = useState<AppCounts>({});
  
  // Load số liệu từ Google Sheet khi App khởi chạy
  React.useEffect(() => {
    const loadCounts = async () => {
      const counts = await fetchAppCounts();
      setAppCounts(counts);
    };
    loadCounts();

    // Load trạng thái hiển thị nút Bảng Giá từ remote (verify ngầm, cache đã hiển thị ngay)
    const loadPricingVisibility = async () => {
      const visible = await fetchPricingVisibility();
      setIsPricingVisible(visible);
      localStorage.setItem('_pv_cache', visible ? '1' : '0');
    };
    loadPricingVisibility();

    // Track website visit once per session
    if (!sessionStorage.getItem('website_visited')) {
      trackAppVisit('LƯỢT TRUY CẬP WEB');
      sessionStorage.setItem('website_visited', 'true');
    }
  }, []);

  // Helper để lấy tên App từ ID
  const getAppTitle = (id: string): string => {
    for (const cat of APP_CATEGORIES) {
      const app = cat.apps.find(a => a.id === id);
      if (app) return app.title as string;
    }
    return id;
  };

  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [isMatrixModalOpen, setIsMatrixModalOpen] = useState(false);
  const [isKHBDModalOpen, setIsKHBDModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isStudioModalOpen, setIsStudioModalOpen] = useState(false);
  const [isIdCardModalOpen, setIsIdCardModalOpen] = useState(false);
  const [isImageToExcelModalOpen, setIsImageToExcelModalOpen] = useState(false);
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);
  const [isSKKNModalOpen, setIsSKKNModalOpen] = useState(false);
  const [isSKKNReviewModalOpen, setIsSKKNReviewModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isBiologySimModalOpen, setIsBiologySimModalOpen] = useState(false);
  const [isLearningAssistantModalOpen, setIsLearningAssistantModalOpen] = useState(false);
  const [isAIVirtualAssistantModalOpen, setIsAIVirtualAssistantModalOpen] = useState(false);
  const [isTextToSpeechModalOpen, setIsTextToSpeechModalOpen] = useState(false);
  const [isSlideAssistantModalOpen, setIsSlideAssistantModalOpen] = useState(false);
  const [isDesignPictureModalOpen, setIsDesignPictureModalOpen] = useState(false);
  const [isHWSolverModalOpen, setIsHWSolverModalOpen] = useState(false);
  const [isGoogleScriptModalOpen, setIsGoogleScriptModalOpen] = useState(false);
  const [isATHDModalOpen, setIsATHDModalOpen] = useState(false);
  const [isTuViUpdateModalOpen, setIsTuViUpdateModalOpen] = useState(false);
  const [isGVGModalOpen, setIsGVGModalOpen] = useState(false);
  const [isBotTradeModalOpen, setIsBotTradeModalOpen] = useState(false);
  const [isTugOfWarModalOpen, setIsTugOfWarModalOpen] = useState(false);
  const [isExcelSyncModalOpen, setIsExcelSyncModalOpen] = useState(false);
  const [isVietlottModalOpen, setIsVietlottModalOpen] = useState(false);
  const [isWordToKatexModalOpen, setIsWordToKatexModalOpen] = useState(false);
  const [isMathpixModalOpen, setIsMathpixModalOpen] = useState(false);
  const [isDailyInfoModalOpen, setIsDailyInfoModalOpen] = useState(false);
  const [isCryptoGuideModalOpen, setIsCryptoGuideModalOpen] = useState(false);
  const [isExamShufflerModalOpen, setIsExamShufflerModalOpen] = useState(false);
  const [isAutoCommentModalOpen, setIsAutoCommentModalOpen] = useState(false);
  const [isPrintProModalOpen, setIsPrintProModalOpen] = useState(false);
  const [isSgkSummaryModalOpen, setIsSgkSummaryModalOpen] = useState(false);
  const [isProverbGameModalOpen, setIsProverbGameModalOpen] = useState(false);
  const [isPdfEditorModalOpen, setIsPdfEditorModalOpen] = useState(false);
  const [isAIPhotoEditorModalOpen, setIsAIPhotoEditorModalOpen] = useState(false);
  const [isBinhDanHocVuModalOpen, setIsBinhDanHocVuModalOpen] = useState(false);
  const [isTapHuanSgkModalOpen, setIsTapHuanSgkModalOpen] = useState(false);
  const [isSoanCongVanModalOpen, setIsSoanCongVanModalOpen] = useState(false);
  const [isCreateImageVideoModalOpen, setIsCreateImageVideoModalOpen] = useState(false);
  const [isSalaryCalculatorModalOpen, setIsSalaryCalculatorModalOpen] = useState(false);
  const [isSimulationToolModalOpen, setIsSimulationToolModalOpen] = useState(false);
  const [isGDriveDownloaderModalOpen, setIsGDriveDownloaderModalOpen] = useState(false);
  const [isCreateContentVideoShortModalOpen, setIsCreateContentVideoShortModalOpen] = useState(false);
  const [activeCryptoId, setActiveCryptoId] = useState<'crypto-prediction' | 'crypto-prediction-mobile'>('crypto-prediction-mobile');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Lock / admin states
  const [isLockDialogOpen, setIsLockDialogOpen] = useState(false);
  const [lockPassword, setLockPassword] = useState('');
  const [lockError, setLockError] = useState(false);
  const [showLockPassword, setShowLockPassword] = useState(false);
  const [isVisibilityDialogOpen, setIsVisibilityDialogOpen] = useState(false);
  // Dùng cache localStorage để hiển thị ngay lập tức, remote verify ngầm sau
  const [isPricingVisible, setIsPricingVisible] = useState<boolean>(() => {
    const cached = localStorage.getItem('_pv_cache');
    return cached === null ? true : cached === '1';
  });
  const [isSavingVisibility, setIsSavingVisibility] = useState(false);

  const handleLockSubmit = () => {
    if (lockPassword === 'Hung@2601') {
      setLockError(false);
      setLockPassword('');
      setIsLockDialogOpen(false);
      setIsVisibilityDialogOpen(true);
    } else {
      setLockError(true);
    }
  };

  const handlePricingVisibility = async (visible: boolean) => {
    setIsSavingVisibility(true);
    setIsPricingVisible(visible);
    localStorage.setItem('_pv_cache', visible ? '1' : '0'); // cập nhật cache ngay
    await savePricingVisibility(visible);
    setIsSavingVisibility(false);
    setIsVisibilityDialogOpen(false);
  };

  const getVideoUrl = (id: string): string | undefined => {
    for (const cat of APP_CATEGORIES) {
      const app = cat.apps.find(a => a.id === id);
      if (app) return app.videoUrl;
    }
    return undefined;
  };

  const closeAllModals = () => {
    setIsWelcomeModalOpen(false);
    setIsKHBDModalOpen(false);
    setIsMatrixModalOpen(false);
    setIsStoryModalOpen(false);
    setIsPhotoModalOpen(false);
    setIsStudioModalOpen(false);
    setIsIdCardModalOpen(false);
    setIsImageToExcelModalOpen(false);
    setIsCryptoModalOpen(false);
    setIsSKKNModalOpen(false);
    setIsSKKNReviewModalOpen(false);
    setIsPricingModalOpen(false);
    setIsBiologySimModalOpen(false);
    setIsLearningAssistantModalOpen(false);
    setIsAIVirtualAssistantModalOpen(false);
    setIsTextToSpeechModalOpen(false);
    setIsSlideAssistantModalOpen(false);
    setIsDesignPictureModalOpen(false);
    setIsHWSolverModalOpen(false);
    setIsGoogleScriptModalOpen(false);
    setIsGVGModalOpen(false);
    setIsBotTradeModalOpen(false);
    setIsTugOfWarModalOpen(false);
    setIsExcelSyncModalOpen(false);
    setIsVietlottModalOpen(false);
    setIsWordToKatexModalOpen(false);
    setIsMathpixModalOpen(false);
    setIsDailyInfoModalOpen(false);
    setIsCryptoGuideModalOpen(false);
    setIsExamShufflerModalOpen(false);
    setIsAutoCommentModalOpen(false);
    setIsPrintProModalOpen(false);
    setIsSgkSummaryModalOpen(false);
    setIsProverbGameModalOpen(false);
    setIsPdfEditorModalOpen(false);
    setIsAIPhotoEditorModalOpen(false);
    setIsBinhDanHocVuModalOpen(false);
    setIsTapHuanSgkModalOpen(false);
    setIsSoanCongVanModalOpen(false);
    setIsCreateImageVideoModalOpen(false);
    setIsSalaryCalculatorModalOpen(false);
    setIsSimulationToolModalOpen(false);
    setIsGDriveDownloaderModalOpen(false);
    setIsCreateContentVideoShortModalOpen(false);
  };

  const handleAppAction = (id: string) => {
    if (id === 'kh-digital') {
      setIsWelcomeModalOpen(true);
    } else if (id === 'khbd-5512') {
      setIsKHBDModalOpen(true);
    } else if (id === 'matrix-exam') {
      setIsMatrixModalOpen(true);
    } else if (id === 'ai-stories') {
      setIsStoryModalOpen(true);
    } else if (id === 'photo-restoration') {
      setIsPhotoModalOpen(true);
    } else if (id === 'studio-ai') {
      setIsStudioModalOpen(true);
    } else if (id === 'id-card-ai') {
      setIsIdCardModalOpen(true);
    } else if (id === 'image-to-excel') {
      setIsImageToExcelModalOpen(true);
    } else if (id === 'crypto-prediction') {
      setActiveCryptoId('crypto-prediction');
      setIsCryptoGuideModalOpen(true);
    } else if (id === 'skkn-ai') {
      setIsSKKNModalOpen(true);
    } else if (id === 'skkn-review') {
      setIsSKKNReviewModalOpen(true);
    } else if (id === 'biology-sim') {
      setIsBiologySimModalOpen(true);
    } else if (id === 'learning-assistant') {
      setIsLearningAssistantModalOpen(true);
    } else if (id === 'ai-virtual-assistant') {
      setIsAIVirtualAssistantModalOpen(true);
    } else if (id === 'text-to-speech') {
      setIsTextToSpeechModalOpen(true);
    } else if (id === 'word-to-katex') {
      setIsWordToKatexModalOpen(true);
    } else if (id === 'slide-assistant') {
      setIsSlideAssistantModalOpen(true);
    } else if (id === 'design-picture-studio') {
      setIsDesignPictureModalOpen(true);
    } else if (id === 'hw-solver') {
      setIsHWSolverModalOpen(true);
    } else if (id === 'extension-youtube') {
      const title = getAppTitle(id);
      trackAppVisit(title);
      setAppCounts(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
      window.open('https://youtu.be/8YpTYpEid7U', '_blank');
    } else if (id === 'extension-excel') {
      const title = getAppTitle(id);
      trackAppVisit(title);
      setAppCounts(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
      window.open('https://www.youtube.com/watch?v=CXIWmLkR3xE&list=PLzvKqxpqCDBG7dP_c18mFHhiEOApx9Plq&index=14', '_blank');
    } else if (id === 'extension-attendance' || id === 'app-tksdb-qi') {
      const title = id === 'extension-attendance' ? getAppTitle(id) : 'APP THỐNG KÊ SĐB _Qi';
      trackAppVisit(title);
      setAppCounts(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
      window.open('https://youtu.be/HXzWU4hLqPk?si=6FqC2vuj__bwlnr9', '_blank');
    } else if (id === 'try-on-studio') {
      handleLoginAction(id);
    } else if (id === 'athd-app') {
      setIsATHDModalOpen(true);
    } else if (id === 'crypto-prediction-mobile') {
      setActiveCryptoId('crypto-prediction-mobile');
      setIsCryptoGuideModalOpen(true);
    } else if (id === 'tu-vi-tuong-so-ai') {
      setIsTuViUpdateModalOpen(true);
    } else if (id === 'gvg-assistant') {
      setIsGVGModalOpen(true);
    } else if (id === 'bot-trade-vang') {
      setIsBotTradeModalOpen(true);
    } else if (id === 'tug-of-war-game') {
      setIsTugOfWarModalOpen(true);
    } else if (id === 'excel-sync-app') {
      setIsExcelSyncModalOpen(true);
    } else if (id === 'du-doan-vietlott') {
      setIsVietlottModalOpen(true);
    } else if (id === 'daily-info') {
      setIsDailyInfoModalOpen(true);
    } else if (id === 'exam-shuffler-ai') {
      setIsExamShufflerModalOpen(true);
    } else if (id === 'auto-comment-utility') {
      setIsAutoCommentModalOpen(true);
    } else if (id === 'print-pro') {
      setIsPrintProModalOpen(true);
    } else if (id === 'sgk-summary') {
      setIsSgkSummaryModalOpen(true);
    } else if (id === 'pdf-editor-nph') {
      setIsPdfEditorModalOpen(true);
    } else if (id === 'guess-proverb-game') {
      setIsProverbGameModalOpen(true);
    } else if (id === 'ai-photo-editor') {
      setIsAIPhotoEditorModalOpen(true);
    } else if (id === 'soan-cong-van-ke-hoach') {
      setIsSoanCongVanModalOpen(true);
    } else if (id === 'create-image-video-app') {
      setIsCreateImageVideoModalOpen(true);
    } else if (id === 'salary-calculator') {
      setIsSalaryCalculatorModalOpen(true);
    } else if (id === 'simulation-tool') {
      setIsSimulationToolModalOpen(true);
    } else if (id === 'gdrive-unblock-downloader') {
      setIsGDriveDownloaderModalOpen(true);
    } else if (id === 'create-content-video-short') {
      setIsCreateContentVideoShortModalOpen(true);
    }
  };

  const handleLoginAction = (id: string) => {
    const links: Record<string, string> = {
      'kh-digital': 'https://nls-kappa.vercel.app/',
      'khbd-5512': 'https://nlspptx-1.vercel.app/',
      'matrix-exam': 'https://dekt-4.vercel.app/',
      'ai-stories': 'https://aistudio.google.com/apps/drive/1wjpd5h68bfsvnB7YpQEMvi5DLwzexgri?showPreview=true&showAssistant=true',
      'studio-ai': 'https://ai.studio/apps/drive/1fhSItG1Ov4ZoxzjvV01gaZmO1kJ1Mi1s?fullscreenApplet=true',
      'id-card-ai': 'https://ai.studio/apps/drive/1M46244tqn_id2xUxg2H08EeAp7f2GiTj',
      'photo-restoration': 'https://ai.studio/apps/drive/1GDgLuVWOfgQjyKA4aqZHg6FvEUJ-0ezK?fullscreenApplet=true',
      'image-to-excel': 'https://imagetoexcel-nph.vercel.app/',
      'crypto-prediction': 'https://dudoancrypto.vercel.app/',
      'skkn-ai': 'https://skkn-nph.vercel.app/',
      'skkn-review': 'https://check-skknpro-3-0.vercel.app/',
      'biology-sim': 'https://ai.studio/apps/drive/1pF2Gnha2Hwm83Wmlu9W5Dw5MO5C3dgdi?fullscreenApplet=true',
      'learning-assistant': 'https://trolyhoctap.vercel.app/',
      'ai-virtual-assistant': 'https://trolyao-nph.vercel.app/',
      'text-to-speech': 'https://text-to-speech-nph.vercel.app/',
      'word-to-katex': 'https://latex-to-katex.vercel.app/',
      'slide-assistant': 'https://trolytaoslide.vercel.app/',
      'design-picture-studio': 'https://ai.studio/apps/90d6be23-2467-4620-9f77-931f78d92b02?fullscreenApplet=true',
      'try-on-studio': 'https://ai.studio/apps/cbca1e41-1304-4e4c-add8-0ce1499baf21?fullscreenApplet=true',
      'extension-youtube': 'https://drive.google.com/drive/folders/19aoNGccugBcbTxo59AcBJJ3qKz1SOsak?usp=sharing',
      'extension-excel': 'https://drive.google.com/drive/folders/1cy8h5RCXYD-PYsyLqNaWrBHU4cEwZ__h?usp=sharing',
      'hw-solver': 'https://drive.google.com/drive/folders/1mnpWwsiN41F3RzRxqHXWnCiiUTuKMuKA?usp=drive_link',
      'extension-attendance': 'https://drive.google.com/drive/folders/1PEMIGj5naohMfJCIBlBDCGEoGPsvH3EL?usp=sharing',
      'app-tksdb-qi': 'https://tksdb-nph.vercel.app/',
      'athd-app': 'https://safeschool-apk.vercel.app/',
      'crypto-prediction-mobile': 'https://dudoancrypto-apk.vercel.app/',
      'tu-vi-tuong-so-ai': 'https://tuvi-tuongso-apk.vercel.app/',
      'gvg-assistant': 'https://bienphapgvcng.vercel.app/',
      'bot-trade-vang': 'https://drive.google.com/drive/folders/1NFNTi1qtujlVro4QEmbUlEOqDottU8ad?usp=sharing',
      'tug-of-war-game': 'https://drive.google.com/drive/folders/1v2eUNWOP_SZxY6RyHJmdb8yls2_Y3g8P?usp=sharing',
      'excel-sync-app': 'https://dongbodiem-excel.vercel.app/',
      'du-doan-vietlott': 'https://dudoan-vietlott.vercel.app/',
      'daily-info': 'https://daily-infor.vercel.app/',
      'exam-shuffler-ai': 'https://tronde-ai.vercel.app/',
      'auto-comment-utility': 'https://drive.google.com/drive/folders/1_DJhTufNUvtf4-imdZglU59sqS7Rj7-D?usp=sharing',
      'print-pro': 'https://congcu-inan-pro.vercel.app/',
      'sgk-summary': 'https://tomtat-baihoc.vercel.app/',
      'guess-proverb-game': 'https://game-cadao-tucngu.vercel.app/',
      'pdf-editor-nph': 'https://edit-pdf-nph.vercel.app/',
      'ai-photo-editor': 'https://ai.studio/apps/9d201b53-df13-42cd-b68c-11175548c78d?fullscreenApplet=true',
      'soan-cong-van-ke-hoach': 'https://soancongvan-kehoach.vercel.app/',
      'create-image-video-app': 'https://labs.google/fx/tools/flow/shared/tool/36ec89ea-8667-49f0-baaa-f514ec2024d7',
      'salary-calculator': 'https://tool-tinhluong.vercel.app/',
      'simulation-tool': 'https://tool-mophong.vercel.app/',
      'gdrive-unblock-downloader': 'https://drive.google.com/drive/folders/1E4Z7ViVzc9GnrUzDHfXyehggiShotCmI?usp=sharing',
      'create-content-video-short': 'https://drive.google.com/drive/folders/1CGCMZZp8ff9J7FR6nh6V3s009RKfqPjI?usp=sharing'
    };

    if (links[id]) {
      const title = getAppTitle(id);
      trackAppVisit(title);
      setAppCounts(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
      window.open(links[id], '_blank');
      closeAllModals();
    }
  };

  const handleResourceClick = (title: string, url?: string) => {
    trackAppVisit(title);
    setAppCounts(prev => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
    if (url) window.open(url, '_blank');
  };

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-500 ${isDarkMode ? 'dark text-white' : 'text-slate-900'}`}>
      {/* Animated Wave Background */}
      <div className="wave-container">
        <div className="wave-bg wave-top"></div>
        <div className="wave-bg wave-middle"></div>
        <div className="wave-bg wave-bottom"></div>
      </div>

      {/* QR Code for Access - Top Left */}
      <div className="fixed top-[105px] left-2 sm:left-4 z-[60]">
        <div className={`p-1 rounded-lg sm:rounded-xl shadow-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-green-500'}`}>
          <img 
            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://edutech-nph.vercel.app/')}`} 
            alt="QR Code" 
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-md"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Admin Lock Button */}
        <button
          onClick={() => { setLockPassword(''); setLockError(false); setIsLockDialogOpen(true); }}
          title="Admin"
          className={`mt-1.5 w-full flex items-center justify-center p-1 rounded-lg shadow border transition-all hover:scale-110 active:scale-95 ${
            isDarkMode ? 'bg-slate-800 border-slate-600 text-slate-400 hover:text-yellow-400' : 'bg-white border-slate-200 text-slate-400 hover:text-amber-600'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Lock / Password Dialog */}
      {isLockDialogOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={() => setIsLockDialogOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-sm rounded-2xl shadow-2xl p-6 transition-colors ${
              isDarkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className={`font-black text-base ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Xác thực Admin</h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Nhập mật khẩu để tiếp tục</p>
              </div>
            </div>
            <div className="relative">
              <input
                type={showLockPassword ? "text" : "password"}
                value={lockPassword}
                onChange={e => { setLockPassword(e.target.value); setLockError(false); }}
                onKeyDown={e => e.key === 'Enter' && handleLockSubmit()}
                placeholder="Nhập mật khẩu..."
                autoFocus
                className={`w-full pl-4 pr-10 py-2.5 rounded-xl border text-sm font-medium outline-none transition-all ${
                  lockError
                    ? 'border-red-500 bg-red-50 text-red-700 placeholder-red-400'
                    : isDarkMode
                      ? 'border-slate-600 bg-slate-800 text-white placeholder-slate-500 focus:border-amber-500'
                      : 'border-slate-300 bg-slate-50 text-slate-800 placeholder-slate-400 focus:border-amber-500'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowLockPassword(!showLockPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors ${
                  isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {showLockPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {lockError && (
              <div className="mt-2.5 flex items-center space-x-2 px-3 py-2 bg-red-500 text-white rounded-xl text-xs font-bold">
                <span>❌</span>
                <span>Sai mật khẩu! Vui lòng thử lại.</span>
              </div>
            )}
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => setIsLockDialogOpen(false)}
                className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all ${
                  isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Hủy
              </button>
              <button
                onClick={handleLockSubmit}
                className="flex-1 py-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white transition-all shadow"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Visibility Control Dialog */}
      {isVisibilityDialogOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" onClick={() => setIsVisibilityDialogOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-sm rounded-2xl shadow-2xl p-6 transition-colors ${
              isDarkMode ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-slate-200'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className={`font-black text-base ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Nút Bảng Giá</h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Hiện tại: <span className={`font-bold ${isPricingVisible ? 'text-emerald-500' : 'text-red-500'}`}>{isPricingVisible ? '✅ Đang hiện' : '🚫 Đang ẩn'}</span>
                </p>
              </div>
            </div>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Chọn trạng thái hiển thị nút <strong>Bảng Giá</strong> trên thanh điều hướng:
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => handlePricingVisibility(false)}
                disabled={isSavingVisibility}
                className={`flex-1 flex flex-col items-center space-y-1.5 py-3 rounded-xl border-2 transition-all font-bold text-sm disabled:opacity-60 ${
                  !isPricingVisible
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : isDarkMode ? 'border-slate-700 text-slate-400 hover:border-red-400' : 'border-slate-200 text-slate-500 hover:border-red-400'
                }`}
              >
                <EyeOff className="w-5 h-5" />
                <span>ẨN</span>
              </button>
              <button
                onClick={() => handlePricingVisibility(true)}
                disabled={isSavingVisibility}
                className={`flex-1 flex flex-col items-center space-y-1.5 py-3 rounded-xl border-2 transition-all font-bold text-sm disabled:opacity-60 ${
                  isPricingVisible
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-600'
                    : isDarkMode ? 'border-slate-700 text-slate-400 hover:border-emerald-400' : 'border-slate-200 text-slate-500 hover:border-emerald-400'
                }`}
              >
                <Eye className="w-5 h-5" />
                <span>HIỆN</span>
              </button>
            </div>
            <button
              onClick={() => setIsVisibilityDialogOpen(false)}
              className={`w-full mt-3 py-2 rounded-xl text-sm font-bold border transition-all ${
                isDarkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/70 border-green-100'}`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 shrink-0">
            <div className="w-7 h-7 sm:w-10 sm:h-10 tech-gradient rounded-lg sm:rounded-xl flex items-center justify-center text-white font-black text-sm sm:text-2xl shadow-md border border-white/20">E</div>
            <div className="flex items-baseline">
              <span className="font-outfit font-black tech-gradient bg-clip-text text-transparent tracking-tight uppercase text-sm sm:text-2xl md:text-3xl drop-shadow-sm">EduTech</span>
              <span className={`font-outfit font-black ml-1 sm:ml-2 tracking-tight uppercase text-xs sm:text-lg md:text-xl transition-colors ${isDarkMode ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' : 'text-slate-800 opacity-90 drop-shadow-sm'}`}>Studio</span>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-1 sm:space-x-3 w-full pl-0">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`shrink-0 p-1 sm:p-2 rounded-full transition-all active:scale-90 ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
              title={isDarkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
            <InstallPWAButton />

            {isPricingVisible && (
              <button 
                onClick={() => setIsPricingModalOpen(true)}
                className="shrink-0 flex items-center space-x-1 sm:space-x-2 px-1.5 sm:px-6 py-1.5 sm:py-2 tech-gradient text-white rounded-full font-bold shadow-md shadow-teal-200/50 hover:scale-105 active:scale-95 transition-all text-[8.5px] sm:text-sm uppercase tracking-wider whitespace-nowrap"
              >
                <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="max-[360px]:hidden">Bảng Giá</span>
              </button>
            )}

            <div className={`shrink-0 flex items-center space-x-1 px-1.5 sm:px-3 py-1.5 sm:py-2 rounded-full font-bold transition-all text-[9px] sm:text-sm border shadow-sm ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-white text-slate-600 border-slate-200'}`} title="Lượt truy cập web">
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              <span>{(appCounts['LƯỢT TRUY CẬP WEB'] || 0).toLocaleString('vi-VN')}</span>
            </div>
          </div>
        </div>
        
        <div className={`marquee-container py-2.5 overflow-hidden border-t shadow-inner transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="marquee-text font-outfit font-black text-red-600 text-xs sm:text-sm md:text-base uppercase tracking-wider flex items-center space-x-3">
            <Phone size={18} className="inline mr-1" />
            <span>Mọi chi tiết xin liên hệ Thầy Hùng Zalo 0938750424 — Công cụ hỗ trợ giáo viên 4.0 — Tích hợp Trí tuệ nhân tạo hiện đại</span>
          </div>
        </div>
      </nav>

      {/* The background image is now handled by .wave-container in index.html for better performance and aesthetic match */}

      <main className="relative max-w-7xl mx-auto pt-36 sm:pt-44 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20 space-y-4 sm:space-y-6">
          <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] sm:text-sm font-bold tracking-wide uppercase transition-colors ${isDarkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
            <LayoutGrid size={14} className="sm:w-4 sm:h-4" />
            <span>Hệ sinh thái công nghệ giáo dục</span>
          </div>
          <h1 className={`text-3xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight leading-snug md:leading-normal lg:leading-[1.2] uppercase transition-colors text-glow ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
            CÔNG CỤ HỖ TRỢ GIẢNG DẠY <br /> 
            <span className="bg-clip-text text-transparent tech-gradient drop-shadow-sm">TƯƠNG LAI SỐ</span>
          </h1>
          <p className={`text-sm sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 font-medium transition-colors text-glow ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            Hỗ trợ giáo viên tối ưu quy trình giảng dạy với các công cụ AI hiện đại và 
            nâng tầm sáng tạo đồ họa cho mọi nhu cầu.
          </p>
          <p className="text-red-600 font-bold text-sm sm:text-base mt-2 px-2 max-w-3xl mx-auto">
            Lưu ý: Tất cả các app có tích hợp trí tuệ nhân tạo (AI) đều cần gắn mã API Key vào trước khi sử dụng.
          </p>
          <p className="text-blue-700 font-bold text-sm sm:text-base mt-2 px-2 max-w-3xl mx-auto">
            Mọi người nên tự tạo mã API free cho riêng mình. Xem video hướng dẫn ở cuối Web. Nên có 3 TK mail mỗi Tk mail tạo 1 mã API để xài cho riêng mình tránh hết Quota API khi sử dụng
          </p>

        </div>

        {APP_CATEGORIES.map((category) => (
          <CategorySection 
            key={category.id} 
            category={category} 
            onAppAction={handleAppAction}
            onAppLogin={handleLoginAction}
            appCounts={appCounts}
          />
        ))}

        <section className="mt-16 sm:mt-24 px-2 sm:px-4">
          <div className="flex items-center space-x-3 mb-6 sm:mb-8">
            <div className={`p-2 rounded-lg sm:rounded-xl transition-colors ${isDarkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-100 text-red-600'}`}>
              <Youtube size={24} className="sm:w-7 sm:h-7" />
            </div>
            <h2 className={`text-xl sm:text-3xl font-extrabold font-outfit uppercase tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              Video Hướng Dẫn & Tài Nguyên
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <button 
              onClick={() => handleResourceClick('1. HƯỚNG DẪN LẤY API KEY FREE', 'https://youtu.be/R8z3VUpVCBw')}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-blue-900 to-indigo-950 border-white/10 shadow-blue-900/20' : 'bg-gradient-to-br from-blue-500 to-indigo-600 border-white/20 shadow-blue-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['1. HƯỚNG DẪN LẤY API KEY FREE'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <Key size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>1. HƯỚNG DẪN LẤY API KEY FREE</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>Cách thiết lập "nhiên liệu" để vận hành các công cụ AI miễn phí.</p>
              </div>
            </button>
            <button 
              onClick={() => handleResourceClick('2. LINK WEB LẤY TOOL MATHTYPE', 'https://Sites.google.com/view/tinhocannhon')}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-emerald-900 to-teal-950 border-white/10 shadow-emerald-900/20' : 'bg-gradient-to-br from-emerald-500 to-teal-600 border-white/20 shadow-emerald-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['2. LINK WEB LẤY TOOL MATHTYPE'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <Sigma size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>2. LINK WEB LẤY TOOL MATHTYPE</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>Công cụ soạn thảo công thức Toán học chuyên nghiệp.</p>
              </div>
            </button>
            <button 
              onClick={() => {
                handleResourceClick('3. HƯỚNG DẪN CÀI ĐẠT VÀ SỬ DỤNG CÔNG CỤ CHUYỂN ĐỔI FILE PDF CÓ CÔNG THỨC TOÁN HỌC SANG WORD KHÔNG BỊ LỖI CÔNG THỨC , VÀ CHUYỂN MÃ LATEX SANG MATHTYPE');
                setIsMathpixModalOpen(true);
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:shadow-xl hover:shadow-orange-900/20' : 'bg-white border-slate-100 hover:shadow-xl hover:shadow-orange-100'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-500/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['3. HƯỚNG DẪN CÀI ĐẠT VÀ SỬ DỤNG CÔNG CỤ CHUYỂN ĐỔI FILE PDF CÓ CÔNG THỨC TOÁN HỌC SANG WORD KHÔNG BỊ LỖI CÔNG THỨC , VÀ CHUYỂN MÃ LATEX SANG MATHTYPE'] || 0).toLocaleString()}
                </span>
              </div>
              
              <div className="w-full py-4 sm:py-5 px-4 sm:px-6 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 relative overflow-hidden group h-full flex flex-col justify-center">
                {/* Decorative backgrounds */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  {/* Icons Flow */}
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-white/20">
                        <FileText className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>

                    <ArrowRight className="text-white/60 w-3 h-3" />

                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shadow-xl ring-4 ring-white/20 group-hover:rotate-6 transition-transform">
                        <Sigma className="text-indigo-600 w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                    </div>

                    <ArrowRight className="text-white/60 w-3 h-3 rotate-180" />

                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg border-2 border-white/20">
                        <FileCode className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1">
                    <h4 className="text-white font-black text-[9px] sm:text-sm md:text-base leading-tight drop-shadow-md uppercase tracking-tight">
                      HƯỚNG DẪN CÀI ĐẠT & CHUYỂN ĐỔI PDF SANG WORD CÔNG THỨC TOÁN
                    </h4>
                  </div>

                  {/* Bottom logos representation */}
                  <div className="flex items-center space-x-3 opacity-90">
                    <div className="flex items-center space-x-1 px-1.5 py-0.5 bg-white/20 rounded-md">
                      <span className="text-[7px] sm:text-[9px] font-black text-white italic">LATEX</span>
                    </div>
                    <ArrowRight className="text-white/40 w-2 h-2" />
                    <div className="flex items-center space-x-1 px-1.5 py-0.5 bg-white/20 rounded-md">
                      <span className="text-[7px] sm:text-[9px] font-black text-white">MATHTYPE</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button 
              onClick={() => handleResourceClick('4. BIẾN FILE WORD ÔN TẬP THÀNH GOOGLE FORM', 'https://youtu.be/ptFJOHTmXMA?si=eTMLici6uoAAdprX')}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-amber-900 to-rose-950 border-white/10 shadow-amber-900/20' : 'bg-gradient-to-br from-amber-500 to-rose-600 border-white/20 shadow-amber-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['4. BIẾN FILE WORD ÔN TẬP THÀNH GOOGLE FORM'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <ClipboardList size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>4. BIẾN FILE WORD ÔN TẬP THÀNH GOOGLE FORM</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>Hướng dẫn cách biến file Word nội dung ôn tập thành Google Form trong 1 nốt nhạc.</p>
              </div>
            </button>
            <div 
              className={`group flex flex-col p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-rose-900 to-purple-950 border-white/10 shadow-rose-900/20' : 'bg-gradient-to-br from-rose-500 to-purple-600 border-white/20 shadow-rose-200'}`}
            >
              <div className="absolute top-3 right-3 z-10 text-right space-y-1">
                <div className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce inline-block">NEW</div>
                <div className="block">
                  <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                    Lượt: {(appCounts['5. TẠO GOOGLE SHEET CÓ CHỨC NĂNG TỰ ĐỘNG KHÓA SAU KHI NHẬP DỮ LIỆU'] || 0).toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                  <FileSpreadsheet size={20} className="sm:w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>5. TẠO GOOGLE SHEET CÓ CHỨC NĂNG TỰ ĐỘNG KHÓA SAU KHI NHẬP DỮ LIỆU</h4>
                  <p className={`text-[10px] sm:text-sm text-white/80`}>Không cho phép xóa, sửa nội dung đã nhập trên Google Sheet.</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <button 
                  onClick={() => {
                    handleResourceClick('5. TẠO GOOGLE SHEET CÓ CHỨC NĂNG TỰ ĐỘNG KHÓA SAU KHI NHẬP DỮ LIỆU');
                    handleResourceClick('5.1. MÃ CODE GOOGLE APP CRIPT');
                    setIsGoogleScriptModalOpen(true);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-all text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-rose-600 text-white border border-white/10`}
                >
                  <div className="flex items-center space-x-2">
                    <Code size={14} />
                    <span>1. Mã code Google app cript</span>
                  </div>
                  <span className="text-[8px] opacity-70">{(appCounts['5.1. MÃ CODE GOOGLE APP CRIPT'] || 0).toLocaleString()}</span>
                </button>
                <button 
                  onClick={() => {
                    handleResourceClick('5. TẠO GOOGLE SHEET CÓ CHỨC NĂNG TỰ ĐỘNG KHÓA SAU KHI NHẬP DỮ LIỆU');
                    handleResourceClick('5.2. XEM VIDEO HƯỚNG DẪN THỰC HIỆN', 'https://youtu.be/DSFmLVk-xN0?si=b_Pa2zJlM0I2AZvx');
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-all text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-blue-600 text-white border border-white/10`}
                >
                  <div className="flex items-center space-x-2">
                    <PlayCircle size={14} />
                    <span>2. Xem video hướng dẫn thực hiện</span>
                  </div>
                  <span className="text-[8px] opacity-70">{(appCounts['5.2. XEM VIDEO HƯỚNG DẪN THỰC HIỆN'] || 0).toLocaleString()}</span>
                </button>
              </div>
            </div>

            <div 
              className={`group flex flex-col p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-cyan-900 to-blue-950 border-white/10 shadow-cyan-900/20' : 'bg-gradient-to-br from-cyan-500 to-blue-600 border-white/20 shadow-cyan-200'}`}
            >
              <div className="absolute top-3 right-3 z-10 text-right space-y-1">
                <div className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce inline-block">NEW</div>
                <div className="block">
                  <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                    Lượt: {(appCounts['6. HƯỚNG DẪN CRACK CAPCUT PRO FREE'] || 0).toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                  <Video size={20} className="sm:w-7 h-7" />
                </div>
                <div className="flex-grow">
                  <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>6. HƯỚNG DẪN CRACK CAPCUT PRO FREE</h4>
                  <p className={`text-[10px] sm:text-sm text-white/80`}>Sử dụng đầy đủ tính năng Capcut Pro hoàn toàn miễn phí.</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-2">
                <button 
                  onClick={() => {
                    handleResourceClick('6. HƯỚNG DẪN CRACK CAPCUT PRO FREE');
                    handleResourceClick('6.1. XEM VIDEO HƯỚNG DẪN', 'https://www.youtube.com/watch?v=MmfAdIaIvjg');
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-all text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-cyan-600 text-white border border-white/10`}
                >
                  <div className="flex items-center space-x-2">
                    <PlayCircle size={14} />
                    <span>1. Xem video hướng dẫn</span>
                  </div>
                  <span className="text-[8px] opacity-70">{(appCounts['6.1. XEM VIDEO HƯỚNG DẪN'] || 0).toLocaleString()}</span>
                </button>
                <button 
                  onClick={() => {
                    handleResourceClick('6. HƯỚNG DẪN CRACK CAPCUT PRO FREE');
                    handleResourceClick('6.2. TẢI XUỐNG PHẦN MỀM', 'https://zalo.me/0938750424');
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl transition-all text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white hover:text-blue-600 text-white border border-white/10`}
                >
                  <div className="flex items-center space-x-2">
                    <Download size={14} />
                    <span>2. Tải xuống phần mềm</span>
                  </div>
                  <span className="text-[8px] opacity-70">{(appCounts['6.2. TẢI XUỐNG PHẦM MỀM'] || 0).toLocaleString()}</span>
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                handleResourceClick('7. INFORGRAPHIC TÓM TẮT NỘI DUNG BÀI HỌC SGK KNTT', 'https://drive.google.com/drive/folders/1NOC0lWnulfAA90agvyfekru9Y5GnOBeg?usp=sharing');
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-[#4a2c11] to-[#271402] border-white/10 shadow-amber-950/40' : 'bg-gradient-to-br from-[#6e4526] to-[#472912] border-white/20 shadow-amber-900/30'}`}
            >
              <div className="absolute top-3 right-3 z-10 flex flex-col items-end space-y-1">
                <div className="flex items-center space-x-1">
                  <span className="bg-emerald-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg inline-block">FREE</span>
                </div>
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['7. INFORGRAPHIC TÓM TẮT NỘI DUNG BÀI HỌC SGK KNTT'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-amber-200 shadow-xl`}>
                <Image size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className="font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white">7. INFORGRAPHIC TÓM TẮT NỘI DUNG BÀI HỌC SGK KNTT</h4>
                <p className="text-[10px] sm:text-sm text-white/80">Bộ sưu tập Inforgraphic tóm tắt nội dung bài học sách giáo khoa Kết nối tri thức — tải xuống miễn phí.</p>
                <div className={`mt-3 inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all group-hover:scale-105 ${isDarkMode ? 'bg-white/20 hover:bg-white hover:text-[#4a2c11]' : 'bg-white/20 hover:bg-white hover:text-[#6e4526]'} text-white border-white/10`}>
                  <Download size={14} />
                  <span>Tải xuống</span>
                </div>
              </div>
            </button>
          </div>
        </section>

        <section className="mt-16 sm:mt-24 px-2 sm:px-4">
          <div className="flex flex-col mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className={`p-2 rounded-lg sm:rounded-xl transition-colors ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
                <GraduationCap size={24} className="sm:w-7 sm:h-7" />
              </div>
              <h2 className={`text-xl sm:text-3xl font-extrabold font-outfit uppercase tracking-tight transition-colors ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                HỖ TRỢ CHUYÊN MÔN
              </h2>
            </div>
            <p className={`text-xs sm:text-sm transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Cung cấp các video hướng dẫn , Tài nguyên , Đáp án các cuộc thi, các lĩnh vực chuyên môn cho Giáo viên
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <button 
              onClick={() => {
                handleResourceClick('BÌNH DÂN HỌC VỤ SỐ');
                setIsBinhDanHocVuModalOpen(true);
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-teal-900 to-emerald-950 border-white/10 shadow-teal-900/20' : 'bg-gradient-to-br from-teal-500 to-emerald-600 border-white/20 shadow-teal-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['BÌNH DÂN HỌC VỤ SỐ'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <Video size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>BÌNH DÂN HỌC VỤ SỐ</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>các khoá học cung cấp kiến thức vê chuyển đổi số</p>
              </div>
            </button>

            <button 
              onClick={() => {
                handleResourceClick('TẬP HUẤN SGK KNTT');
                setIsTapHuanSgkModalOpen(true);
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-orange-950 to-amber-950/80 border-white/10 shadow-orange-900/20' : 'bg-gradient-to-br from-orange-500 to-amber-600 border-white/20 shadow-orange-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['TẬP HUẤN SGK KNTT'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <GraduationCap size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>TẬP HUẤN SGK KNTT</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>đáp án bài thu hoạch sau tập huấn sgk</p>
              </div>
            </button>

            <button 
              onClick={() => {
                handleResourceClick('HƯỚNG DẪN XOÁ NỀN FILE ẢNH ( CHỮ KÝ )', 'https://www.youtube.com/watch?v=zoYjDG7MsPg');
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-indigo-900 to-purple-950 border-white/10 shadow-indigo-900/20' : 'bg-gradient-to-br from-indigo-500 to-purple-600 border-white/20 shadow-indigo-200'}`}
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                  Lượt: {(appCounts['HƯỚNG DẪN XOÁ NỀN FILE ẢNH ( CHỮ KÝ )'] || 0).toLocaleString()}
                </span>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <Image size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>HƯỚNG DẪN XOÁ NỀN FILE ẢNH</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>cách xoá nền ảnh chữ ký dễ dàng nhất</p>
              </div>
            </button>

            <button 
              onClick={() => {
                handleResourceClick('ĐĂNG KÝ THÁNG HỌC TIẾNG ANH MIỄN PHÍ CHO GIÁO VIÊN 2026', 'https://youtu.be/dNmg4VCKiKc');
              }}
              className={`group flex items-center p-4 sm:p-6 border rounded-[1.5rem] sm:rounded-[2rem] transition-all hover:-translate-y-1 relative text-left w-full shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-violet-900 to-fuchsia-950 border-white/10 shadow-violet-900/20' : 'bg-gradient-to-br from-violet-500 to-fuchsia-600 border-white/20 shadow-violet-200'}`}
            >
              <div className="absolute top-3 right-3 z-10 text-right space-y-1">
                <div className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce inline-block">NEW</div>
                <div className="block">
                  <span className="bg-sky-400/80 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-black px-1.5 py-0.5 rounded-lg shadow-lg border border-white/20 uppercase tracking-tighter">
                    Lượt: {(appCounts['ĐĂNG KÝ THÁNG HỌC TIẾNG ANH MIỄN PHÍ CHO GIÁO VIÊN 2026'] || 0).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-5 transition-colors bg-white/20 backdrop-blur-md text-white shadow-xl`}>
                <BookOpen size={20} className="sm:w-7 h-7" />
              </div>
              <div className="flex-grow">
                <h4 className={`font-black uppercase tracking-wide transition-colors text-xs sm:text-base text-white`}>ĐĂNG KÝ THÁNG HỌC TIẾNG ANH MIỄN PHÍ CHO GIÁO VIÊN 2026</h4>
                <p className={`text-[10px] sm:text-sm text-white/80`}>ĐĂNG KÝ HỌC TIẾNG ANH MIỄN PHÍ</p>
              </div>
            </button>
          </div>
        </section>

        <div className={`mt-16 sm:mt-24 py-4 sm:py-6 px-4 sm:px-8 glass-card rounded-[2rem] sm:rounded-[3rem] shadow-xl flex flex-wrap justify-around gap-4 sm:gap-6 text-center transition-colors relative overflow-hidden ${isDarkMode ? 'shadow-slate-900/50 border-slate-800' : 'shadow-green-100/50 border-white/50'}`}>
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-200/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
          
          <div className="flex flex-col items-center justify-center space-y-1 z-10 group">
            <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isDarkMode ? 'bg-green-900/40 text-green-400' : 'bg-green-100 text-green-600'}`}>
              <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className={`text-2xl sm:text-4xl font-bold font-outfit transition-colors ${isDarkMode ? 'text-white' : 'text-green-600'}`}>10k+</div>
            <div className={`text-xs sm:text-base font-medium transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>Giáo viên tin dùng</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 z-10 group">
            <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 ${isDarkMode ? 'bg-teal-900/40 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className={`text-2xl sm:text-4xl font-bold font-outfit transition-colors ${isDarkMode ? 'text-white' : 'text-teal-600'}`}>50+</div>
            <div className={`text-xs sm:text-base font-medium transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>Mẫu giáo án AI</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-1 z-10 group">
            <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${isDarkMode ? 'bg-emerald-900/40 text-emerald-400' : 'bg-emerald-100 text-emerald-600'}`}>
              <Target className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className={`text-2xl sm:text-4xl font-bold font-outfit transition-colors ${isDarkMode ? 'text-white' : 'text-emerald-600'}`}>99%</div>
            <div className={`text-xs sm:text-base font-medium transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>Độ chính xác AI</div>
          </div>
        </div>
      </main>

      <footer className={`backdrop-blur-md border-t py-8 sm:py-12 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-green-100'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2 sm:space-y-3">
          <p className={`font-bold text-lg sm:text-xl font-outfit transition-colors ${isDarkMode ? 'text-emerald-400' : 'text-emerald-900'}`}>Made by Nguyễn Phi Hùng</p>
          <p className={`font-bold text-sm sm:text-lg transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>Mọi chi tiết xin liên hệ Zalo 0938750424</p>
        </div>
      </footer>

      <WelcomeModal isOpen={isWelcomeModalOpen} onClose={() => setIsWelcomeModalOpen(false)} onLogin={() => handleLoginAction('kh-digital')} videoUrl={getVideoUrl('kh-digital')} />
      <KHBDModal isOpen={isKHBDModalOpen} onClose={() => setIsKHBDModalOpen(false)} onLogin={() => handleLoginAction('khbd-5512')} videoUrl={getVideoUrl('khbd-5512')} />
      <MatrixModal isOpen={isMatrixModalOpen} onClose={() => setIsMatrixModalOpen(false)} onLogin={() => handleLoginAction('matrix-exam')} videoUrl={getVideoUrl('matrix-exam')} />
      <StoryModal isOpen={isStoryModalOpen} onClose={() => setIsStoryModalOpen(false)} onLogin={() => handleLoginAction('ai-stories')} videoUrl={getVideoUrl('ai-stories')} />
      <PhotoRestorationModal isOpen={isPhotoModalOpen} onClose={() => setIsPhotoModalOpen(false)} onLogin={() => handleLoginAction('photo-restoration')} videoUrl={getVideoUrl('photo-restoration')} />
      <StudioAIModal isOpen={isStudioModalOpen} onClose={() => setIsStudioModalOpen(false)} onLogin={() => handleLoginAction('studio-ai')} videoUrl={getVideoUrl('studio-ai')} />
      <IdCardModal isOpen={isIdCardModalOpen} onClose={() => setIsIdCardModalOpen(false)} onLogin={() => handleLoginAction('id-card-ai')} videoUrl={getVideoUrl('id-card-ai')} />
      <ImageToExcelModal isOpen={isImageToExcelModalOpen} onClose={() => setIsImageToExcelModalOpen(false)} onLogin={() => handleLoginAction('image-to-excel')} videoUrl={getVideoUrl('image-to-excel')} />
      <CryptoPredictionModal isOpen={isCryptoModalOpen} onClose={() => setIsCryptoModalOpen(false)} onLogin={() => handleLoginAction('crypto-prediction')} videoUrl={getVideoUrl('crypto-prediction')} />
      <SKKNModal isOpen={isSKKNModalOpen} onClose={() => setIsSKKNModalOpen(false)} onLogin={() => handleLoginAction('skkn-ai')} />
      <SKKNReviewModal isOpen={isSKKNReviewModalOpen} onClose={() => setIsSKKNReviewModalOpen(false)} onLogin={() => handleLoginAction('skkn-review')} videoUrl={getVideoUrl('skkn-review')} />
      <PricingModal isOpen={isPricingModalOpen} onClose={() => setIsPricingModalOpen(false)} />
      <BiologySimModal isOpen={isBiologySimModalOpen} onClose={() => setIsBiologySimModalOpen(false)} onLogin={() => handleLoginAction('biology-sim')} />
      <LearningAssistantModal isOpen={isLearningAssistantModalOpen} onClose={() => setIsLearningAssistantModalOpen(false)} onLogin={() => handleLoginAction('learning-assistant')} />
      <AIVirtualAssistantModal isOpen={isAIVirtualAssistantModalOpen} onClose={() => setIsAIVirtualAssistantModalOpen(false)} onLogin={() => handleLoginAction('ai-virtual-assistant')} />
      <TextToSpeechModal isOpen={isTextToSpeechModalOpen} onClose={() => setIsTextToSpeechModalOpen(false)} onLogin={() => handleLoginAction('text-to-speech')} />
      <WordToKatexModal isOpen={isWordToKatexModalOpen} onClose={() => setIsWordToKatexModalOpen(false)} onLogin={() => handleLoginAction('word-to-katex')} videoUrl={getVideoUrl('word-to-katex')} />
      <MathpixModal 
        isOpen={isMathpixModalOpen} 
        onClose={() => setIsMathpixModalOpen(false)} 
        onTrack={handleResourceClick}
      />
      <SlideAssistantModal isOpen={isSlideAssistantModalOpen} onClose={() => setIsSlideAssistantModalOpen(false)} onLogin={() => handleLoginAction('slide-assistant')} />
      <DesignPictureModal isOpen={isDesignPictureModalOpen} onClose={() => setIsDesignPictureModalOpen(false)} onLogin={() => handleLoginAction('design-picture-studio')} />
      <HWSolverModal 
        isOpen={isHWSolverModalOpen} 
        onClose={() => setIsHWSolverModalOpen(false)} 
        onDownload={() => handleLoginAction('hw-solver')} 
        videoUrl={getVideoUrl('hw-solver')} 
      />
      <GoogleScriptModal 
        isOpen={isGoogleScriptModalOpen} 
        onClose={() => setIsGoogleScriptModalOpen(false)} 
      />
      <ATHDModal isOpen={isATHDModalOpen} onClose={() => setIsATHDModalOpen(false)} onLogin={() => handleLoginAction('athd-app')} />
      <TuViUpdateModal 
        isOpen={isTuViUpdateModalOpen} 
        onClose={() => setIsTuViUpdateModalOpen(false)} 
      />
      <GVGModal 
        isOpen={isGVGModalOpen} 
        onClose={() => setIsGVGModalOpen(false)} 
        onLogin={() => handleLoginAction('gvg-assistant')} 
      />
      <BotTradeModal 
        isOpen={isBotTradeModalOpen} 
        onClose={() => setIsBotTradeModalOpen(false)} 
        onDownload={() => handleLoginAction('bot-trade-vang')} 
      />
      <TugOfWarModal
        isOpen={isTugOfWarModalOpen}
        onClose={() => setIsTugOfWarModalOpen(false)}
        onDownload={() => handleLoginAction('tug-of-war-game')}
      />
      <ExcelSyncModal
        isOpen={isExcelSyncModalOpen}
        onClose={() => setIsExcelSyncModalOpen(false)}
      />
      <VietlottModal
        isOpen={isVietlottModalOpen}
        onClose={() => setIsVietlottModalOpen(false)}
        onLogin={() => handleLoginAction('du-doan-vietlott')}
      />
      <DailyInfoModal
        isOpen={isDailyInfoModalOpen}
        onClose={() => setIsDailyInfoModalOpen(false)}
        onLogin={() => handleLoginAction('daily-info')}
      />
      <CryptoGuideModal
        isOpen={isCryptoGuideModalOpen}
        onClose={() => setIsCryptoGuideModalOpen(false)}
        onExplore={() => {
          handleLoginAction(activeCryptoId);
          setIsCryptoGuideModalOpen(false);
        }}
      />
      <ExamShufflerModal
        isOpen={isExamShufflerModalOpen}
        onClose={() => setIsExamShufflerModalOpen(false)}
        onLogin={() => handleLoginAction('exam-shuffler-ai')}
        videoUrl={getVideoUrl('exam-shuffler-ai')}
      />
      <AutoCommentModal
        isOpen={isAutoCommentModalOpen}
        onClose={() => setIsAutoCommentModalOpen(false)}
        onDownload={() => handleLoginAction('auto-comment-utility')}
        videoUrl={getVideoUrl('auto-comment-utility') || "https://youtube.com"}
      />
      <PrintProModal
        isOpen={isPrintProModalOpen}
        onClose={() => setIsPrintProModalOpen(false)}
        onDownload={() => handleLoginAction('print-pro')}
        videoUrl={getVideoUrl('print-pro')}
      />
      <SgkSummaryModal
        isOpen={isSgkSummaryModalOpen}
        onClose={() => setIsSgkSummaryModalOpen(false)}
        onLogin={() => handleLoginAction('sgk-summary')}
        videoUrl={getVideoUrl('sgk-summary')}
      />
      <ProverbGameModal
        isOpen={isProverbGameModalOpen}
        onClose={() => setIsProverbGameModalOpen(false)}
        onLogin={() => handleLoginAction('guess-proverb-game')}
        videoUrl={getVideoUrl('guess-proverb-game')}
      />
      <PdfEditorModal
        isOpen={isPdfEditorModalOpen}
        onClose={() => setIsPdfEditorModalOpen(false)}
        onLogin={() => handleLoginAction('pdf-editor-nph')}
        videoUrl={getVideoUrl('pdf-editor-nph')}
      />
      <AIPhotoEditorModal
        isOpen={isAIPhotoEditorModalOpen}
        onClose={() => setIsAIPhotoEditorModalOpen(false)}
        onLogin={() => handleLoginAction('ai-photo-editor')}
        videoUrl={getVideoUrl('ai-photo-editor')}
      />
      <BinhDanHocVuModal
        isOpen={isBinhDanHocVuModalOpen}
        onClose={() => setIsBinhDanHocVuModalOpen(false)}
        onTrack={handleResourceClick}
      />
      <TapHuanSgkModal
        isOpen={isTapHuanSgkModalOpen}
        onClose={() => setIsTapHuanSgkModalOpen(false)}
      />
      <SoanCongVanModal
        isOpen={isSoanCongVanModalOpen}
        onClose={() => setIsSoanCongVanModalOpen(false)}
        onLogin={() => handleLoginAction('soan-cong-van-ke-hoach')}
      />
      <CreateImageVideoModal
        isOpen={isCreateImageVideoModalOpen}
        onClose={() => setIsCreateImageVideoModalOpen(false)}
        onLogin={() => handleLoginAction('create-image-video-app')}
        videoUrl={getVideoUrl('create-image-video-app')}
      />
      <SalaryCalculatorModal
        isOpen={isSalaryCalculatorModalOpen}
        onClose={() => setIsSalaryCalculatorModalOpen(false)}
        onLogin={() => handleLoginAction('salary-calculator')}
      />
      <SimulationToolModal
        isOpen={isSimulationToolModalOpen}
        onClose={() => setIsSimulationToolModalOpen(false)}
        onLogin={() => handleLoginAction('simulation-tool')}
        videoUrl={getVideoUrl('simulation-tool')}
      />
      <GDriveDownloaderModal
        isOpen={isGDriveDownloaderModalOpen}
        onClose={() => setIsGDriveDownloaderModalOpen(false)}
        onLogin={() => handleLoginAction('gdrive-unblock-downloader')}
        videoUrl={getVideoUrl('gdrive-unblock-downloader')}
      />
      <CreateContentVideoShortModal
        isOpen={isCreateContentVideoShortModalOpen}
        onClose={() => setIsCreateContentVideoShortModalOpen(false)}
        onLogin={() => handleLoginAction('create-content-video-short')}
      />
    </div>
  );
};

export default App;
