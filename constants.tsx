import React from 'react';
import { 
  Zap, 
  Presentation, 
  Sparkles, 
  Camera, 
  RefreshCcw,
  Table2,
  BookOpen,
  FileSpreadsheet,
  GraduationCap,
  Palette,
  Cpu,
  TrendingUp,
  UserRound,
  ClipboardList,
  Microscope,
  BookOpenCheck,
  ShieldCheck,
  Bot,
  Volume2,
  FileText,
  MonitorPlay,
  Shirt,
  Download,
  Table,
  Smartphone,
  Trophy,
  Sigma,
  Shuffle,
  Printer,
  Image,
  Video
} from 'lucide-react';
import { Category } from './types';

export const APP_CATEGORIES: Category[] = [
  {
    id: 'teaching-support',
    name: 'Hỗ trợ giảng dạy',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Các công cụ thông minh giúp tối ưu hóa quá trình soạn bài và giảng dạy tích hợp công nghệ số.',
    apps: [
      {
        id: 'ai-virtual-assistant',
        title: 'TRỢ LÝ ẢO AI',
        icon: <Bot className="w-8 h-8" />,
        color: 'bg-violet-600',
        description: 'Trợ lý ảo thông minh hỗ trợ giải đáp, soạn thảo và tương tác đa năng.',
        isNew: true,
        isHot: true,
        isFree: true
      },
      {
        id: 'kh-digital',
        title: 'APP TÍCH HỢP NĂNG LỰC SỐ + AI VÀO CÁC LOẠI KH ( KHBD , KHGD ,.....)',
        icon: <Zap className="w-8 h-8" />,
        color: 'bg-blue-500',
        description: 'Số hóa kế hoạch giảng dạy theo chuẩn năng lực 4.0',
        videoUrl: 'https://youtu.be/GiU2a0rQ8mk'
      },
      {
        id: 'khbd-5512',
        title: 'APP TẠO KHBD NLS + AI 5512 + POWERPOINT + SƠ ĐỒ TƯ DUY',
        icon: <Presentation className="w-8 h-8" />,
        color: 'bg-indigo-500',
        description: 'Trọn bộ giáo án, bài giảng và sơ đồ tư duy chỉ trong vài phút',
        videoUrl: 'https://youtu.be/j_tlirpoFrY'
      },
      {
        id: 'matrix-exam',
        title: 'APP TẠO MA TRẬN + CÂU HỎI ÔN TẬP + ĐỀ THI THEO CV 7991',
        icon: <Table2 className="w-8 h-8" />,
        color: 'bg-cyan-500',
        description: 'Tự động hóa quy trình ra đề và ma trận kiểm tra chuẩn quy định',
        videoUrl: 'https://www.youtube.com/watch?v=wWkUbTdy6wc'
      },
      {
        id: 'skkn-ai',
        title: 'APP VIẾT SÁNG KIẾN KINH NGHIỆM (SKKN)',
        icon: <ClipboardList className="w-8 h-8" />,
        color: 'bg-rose-500',
        description: 'Tự động hóa viết báo cáo thành tích và sáng kiến kinh nghiệm chuẩn quy định',
        isGifted: true
      },
      {
        id: 'skkn-review',
        title: 'APP THẨM ĐỊNH VÀ TỰ ĐỘNG CHỈNH SỬA HOÀN CHỈNH SKKN',
        icon: <ShieldCheck className="w-8 h-8" />,
        color: 'bg-indigo-600',
        description: 'Tự động hóa thẩm định, đánh giá và hoàn thiện bài viết sáng kiến kinh nghiệm chuyên sâu.',
        isGifted: true,
        videoUrl: 'https://youtu.be/PVAT21m5drA'
      },
      {
        id: 'biology-sim',
        title: 'MÔ PHỎNG SINH HỌC',
        icon: <Microscope className="w-8 h-8" />,
        color: 'bg-emerald-500',
        description: 'Mô phỏng các quá trình sinh học và giải phẫu 3D trực quan bằng AI.',
        isFree: true,
        isNew: true
      },
      {
        id: 'ai-stories',
        title: 'APP TẠO CHUYỆN KỂ AI',
        icon: <BookOpen className="w-8 h-8" />,
        color: 'bg-teal-500',
        description: 'Sáng tạo câu chuyện giáo dục sinh động với trợ lý trí tuệ nhân tạo',
        isFree: true
      },
      {
        id: 'slide-assistant',
        title: 'TRỢ LÝ TẠO SLIDE',
        icon: <MonitorPlay className="w-8 h-8" />,
        color: 'bg-orange-600',
        description: 'Tự động tạo bài thuyết trình chuyên nghiệp từ nội dung văn bản chỉ trong vài giây.',
        isFree: true,
        isNew: true
      },
      {
        id: 'gvg-assistant',
        title: 'TOOL VIẾT BIỆN PHÁP GVG/GVCNG + SKKN + THẨM ĐỊNH VÀ HOÀN CHỈNH',
        icon: <FileText className="w-8 h-8" />,
        color: 'bg-orange-500',
        description: 'Công cụ giúp viết biện pháp khi thi GVG hoặc GVCN Giỏi từ A-Z. từ khâu chọn đề tài đến hết. Có thể mô tả ý để Ai viết theo',
        isNew: true,
        isHot: true
      },
      {
        id: 'exam-shuffler-ai',
        title: 'APP TRỘN ĐỀ KIỂM TRA (AI)',
        icon: <Shuffle className="w-8 h-8" />,
        color: 'bg-emerald-600',
        description: 'Công cụ AI giúp đảo câu hỏi và đáp án tự động, giữ nguyên định dạng file gốc, tích hợp mã QR đáp án.',
        isNew: true,
        isHot: true,
        isFree: true
      }
    ]
  },
  {
    id: 'learning',
    name: 'Học tập',
    icon: <BookOpenCheck className="w-8 h-8" />,
    description: 'Hệ thống trợ lý học tập thông minh giúp học sinh ôn luyện và nắm vững kiến thức mọi lúc mọi nơi.',
    apps: [
      {
        id: 'learning-assistant',
        title: 'ÔN LUYỆN KIẾN THỨC (AI)',
        icon: <Sparkles className="w-8 h-8" />,
        color: 'bg-amber-500',
        description: 'Giải đáp thắc mắc, tóm tắt bài học và tạo đề ôn luyện cá nhân hóa theo trình độ.',
        isNew: true,
        isHot: true,
        isFree: true
      },
      {
        id: 'tug-of-war-game',
        title: 'TRÒ CHƠI KÉO CO',
        icon: <Trophy className="w-8 h-8" />,
        color: 'bg-blue-600',
        description: (
          <div className="flex flex-col">
            <span>Trò chơi Kéo co Tài trí giúp thầy cô tổ chức ôn tập cuối giờ cho học sinh một cách sôi nổi và hiệu quả.</span>
            <img src="/keo-co.png" alt="Tug of War" className="w-20 h-auto mt-2 mx-auto rounded-lg shadow-sm border border-blue-50" />
          </div>
        ),
        isNew: true,
        isFree: true,
        buttonLabel: 'Tải App'
      },
      {
        id: 'guess-proverb-game',
        title: 'NHÌN HÌNH ĐOÁN CA DAO TỤC NGỮ',
        icon: <Image className="w-8 h-8" />,
        color: 'bg-green-600',
        description: 'Trò chơi tương tác giúp học sinh tìm hiểu và ghi nhớ các câu ca dao, tục ngữ Việt Nam.',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtube.com'
      }
    ]
  },
  {
    id: 'graphics',
    name: 'Đồ họa',
    icon: <Palette className="w-8 h-8" />,
    description: 'Nâng tầm hình ảnh và sáng tạo nội dung thị giác với sức mạnh từ AI.',
    apps: [
      {
        id: 'studio-ai',
        title: 'CHỤP ẢNH STUDIO AI',
        icon: <Camera className="w-8 h-8" />,
        color: 'bg-purple-500',
        description: 'Tạo ảnh chân dung nghệ thuật chuyên nghiệp không cần studio',
        isFree: true,
        isHot: true,
        videoUrl: 'https://youtu.be/hvEKvOab2wQ?si=5CuJCDqgYnIrfm18'
      },
      {
        id: 'id-card-ai',
        title: 'APP TẠO HÌNH THẺ CHUYÊN NGHIỆP',
        icon: <UserRound className="w-8 h-8" />,
        color: 'bg-blue-600',
        description: 'Tạo ảnh thẻ chuẩn kích thước, tự động thay phông nền và trang phục chuyên nghiệp.',
        isFree: true,
        isHot: true,
        videoUrl: 'https://youtu.be/hvEKvOab2wQ?si=5CuJCDqgYnIrfm18'
      },
      {
        id: 'photo-restoration',
        title: 'PHỤC CHẾ ẢNH CŨ',
        icon: <RefreshCcw className="w-8 h-8" />,
        color: 'bg-pink-500',
        description: 'Làm mới những bức ảnh cũ, mờ nét trở nên sắc nét và sống động',
        isFree: true
      },
      {
        id: 'try-on-studio',
        title: 'APP THAY TRANG PHỤC STUDIO',
        icon: <Shirt className="w-8 h-8" />,
        color: 'bg-pink-600',
        description: 'Thử các loại trang phục, phong cách thời trang khác nhau bằng công nghệ AI Studio.',
        isFree: true,
        isNew: true
      },
      {
        id: 'design-picture-studio',
        title: 'DESIGN PICTURE STUDIO',
        icon: <Sparkles className="w-8 h-8" />,
        color: 'bg-indigo-600',
        description: 'Thiết kế và sáng tạo hình ảnh chuyên nghiệp với công cụ AI Studio hiện đại.',
        isNew: true,
        isHot: true,
        isFree: true
      },
      {
        id: 'ai-photo-editor',
        title: 'CHỈNH SỬA ẢNH AI',
        icon: <Image className="w-8 h-8" />,
        color: 'bg-orange-500',
        description: 'Công cụ chỉnh sửa và thiết kế hình ảnh thông minh tích hợp trí tuệ nhân tạo (AI) giúp tối ưu hóa hình ảnh nhanh chóng.',
        isHot: true,
        isFree: true
      },
      {
        id: 'create-image-video-app',
        title: 'CÔNG CỤ TẠO ẢNH - INFORGRAPHIC - VIDEO CHO BÀI HỌC',
        icon: <Video className="w-8 h-8" />,
        color: 'bg-rose-500',
        description: 'TẠO ẢNH INFORGRAPHIC TÓM TẮT BÀI HỌC VÀ VIDEO MỞ ĐẦU BÀI HỌC, MC......',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtu.be/aV97Dy55Bsk'
      }
    ]
  },
  {
    id: 'utilities',
    name: 'Tiện ích',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Các công cụ hữu ích giúp đơn giản hóa công việc văn phòng và xử lý dữ liệu.',
    apps: [
      {
        id: 'print-pro',
        title: 'CÔNG CỤ HỖ TRỢ IN ẤN PRO',
        icon: <Printer className="w-8 h-8" />,
        color: 'bg-emerald-600',
        description: 'CÔNG CỤ GIÚP ADMIN DỄ DÀNG IN HÀNG LOẠT SỔ ĐIỂM , BẢNG ĐIỂM TỔNG HỢP TỪ FILE EXCEL XUẤT RA TỪ HỆ THỐNG Qi 1 CÁCH NHANH CHÓNG , TIỆN LỢI',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        videoUrl: 'https://www.youtube.com/watch?v=CyNva1rSBGg&feature=youtu.be'
      },
      {
        id: 'word-to-katex',
        title: 'CHUYỂN ĐỔI MÃ LATEX TRÊN WORD SANG CÔNG THỨC TOÁN HỌC ( KATEX )',
        icon: <Sigma className="w-8 h-8" />,
        color: 'bg-blue-700',
        description: 'Công cụ chuyên dụng giúp chuyển đổi mã LaTeX trực tiếp trên file Word sang định dạng KaTex/MathType chuyên nghiệp.',
        isNew: true,
        isHot: true,
        isFree: true
      },
      {
        id: 'text-to-speech',
        title: 'CHUYỂN VĂN BẢN THÀNH GIỌNG NÓI',
        icon: <Volume2 className="w-8 h-8" />,
        color: 'bg-teal-600',
        description: 'Chuyển đổi văn bản thành giọng nói tự nhiên với nhiều tùy chọn giọng đọc AI.',
        isNew: true,
        isFree: true
      },
      {
        id: 'image-to-excel',
        title: 'BIẾN HÌNH ẢNH THÀNH EXCEL',
        icon: <FileSpreadsheet className="w-8 h-8" />,
        color: 'bg-green-600',
        description: 'Trích xuất dữ liệu từ hình ảnh bảng biểu sang định dạng Excel chính xác cao.',
        isFree: true
      },
      {
        id: 'hw-solver',
        title: 'TIỆN ÍCH TỰ ĐỘNG GIẢI TN+TL TRÊN CÁC TRANG WEB',
        icon: <Sparkles className="w-8 h-8" />,
        color: 'bg-indigo-500',
        description: 'TIỆN ÍCH GIẢI BÀI TẬP TN+TL TẤT CẢ CÁC TRANG WEB . ĐẶC BIỆT LÀ TRANG BDTX.',
        isNew: true,
        isHot: true,
        buttonLabel: 'Tải tiện ích',
        videoUrl: 'https://youtu.be/8_QOQBYmnKg'
      },
      {
        id: 'auto-comment-utility',
        title: 'TIỆN ÍCH TỰ ĐỘNG NHẬN XÉT HK & HỌC BẠ CÁC MÔN HỌC',
        icon: <ClipboardList className="w-8 h-8" />,
        color: 'bg-indigo-500',
        description: 'Tiện ích hỗ trợ giáo viên tự động nhận xét học kỳ và học bạ cho các môn học nhanh chóng và chính xác.',
        isNew: true,
        isHot: true,
        buttonLabel: 'Tải tiện ích',
        secondaryLabel: 'Xem hướng dẫn',
        videoUrl: 'https://youtu.be/nYbso-lv6Nk'
      },
      {
        id: 'extension-youtube',
        title: 'EXTENSION DOWLOAD VIDEO YOUTUBE',
        icon: <Download className="w-8 h-8" />,
        color: 'bg-red-600',
        description: 'Tiện ích hỗ trợ tải video từ Youtube nhanh chóng và dễ dàng.',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Tải tiện ích',
        videoUrl: 'https://youtu.be/8YpTYpEid7U'
      },
      {
        id: 'extension-excel',
        title: 'EXTENSION TRÍCH XUẤT DỮ LIỆU WEB SANG EXCEL , WORD',
        icon: <Table className="w-8 h-8" />,
        color: 'bg-red-600',
        description: 'Tiện ích trích xuất dữ liệu từ bảng trên web sang file Excel, Word',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Tải tiện ích',
        videoUrl: 'https://www.youtube.com/watch?v=CXIWmLkR3xE&list=PLzvKqxpqCDBG7dP_c18mFHhiEOApx9Plq&index=14'
      },
      {
        id: 'extension-attendance',
        title: 'TIỆN ÍCH THỐNG KÊ SỔ ĐẦU BÀI',
        icon: <ClipboardList className="w-8 h-8" />,
        color: 'bg-emerald-600',
        description: 'THỐNG KÊ TIẾT THIẾU CỦA GIÁO VIÊN NÀO TRÊN TRANG QUẢNG ÍCH',
        isNew: true,
        isFree: true,
        buttonLabel: 'Tải tiện ích',
        videoUrl: 'https://youtu.be/HXzWU4hLqPk?si=6FqC2vuj__bwlnr9'
      },
      {
        id: 'app-tksdb-qi',
        title: 'APP THỐNG KÊ SĐB _Qi',
        icon: <Table className="w-8 h-8" />,
        color: 'bg-teal-600',
        description: 'Trang web Thống kê Sổ đầu bài , hiện tiêt thiếu và tên Giáo viên _Môn thiếu tiết trên Sổ đầu bài Qi',
        isNew: true,
        isFree: true,
        videoUrl: 'https://youtu.be/HXzWU4hLqPk?si=6FqC2vuj__bwlnr9'
      },
      {
        id: 'excel-sync-app',
        title: 'ĐỒNG BỘ ĐIỂM EXCEL',
        icon: <FileSpreadsheet className="w-8 h-8" />,
        color: 'bg-green-700',
        description: 'Giúp đồng bộ điểm theo danh sách từ file danh sách có điểm sang file danh sách có nhiều sheet lớp.',
        isNew: true,
        isFree: true
      },
      {
        id: 'sgk-summary',
        title: 'CÔNG CỤ TÓM TẮT NỘI DUNG BÀI HỌC SGK KNTT',
        icon: <BookOpen className="w-8 h-8" />,
        color: 'bg-indigo-600',
        description: 'Công cụ giúp tóm tắt nội dung sách giáo khoa Kết nối tri thức một cách nhanh chóng và hiệu quả.',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtu.be/jYJviVR3PdI'
      },
      {
        id: 'pdf-editor-nph',
        title: 'Tool edit file Pdf',
        icon: <FileText className="w-8 h-8" />,
        color: 'bg-red-500',
        description: 'Công cụ chỉnh sửa file Pdf trực tiếp giống như chỉnh sửa word , giữ nguyên font chữ , định dạng...',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtu.be/K507LjkDzDc'
      },
      {
        id: 'soan-cong-van-ke-hoach',
        title: 'CÔNG CỤ SOẠN THẢO CÔNG VĂN - KẾ HOẠCH',
        icon: <FileText className="w-8 h-8" />,
        color: 'bg-emerald-600',
        description: 'Công cụ soạn công văn kế hoạch theo đúng chuẩn NĐ 30/2020/NĐ-CP',
        isNew: true,
        isHot: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn'
      },
      {
        id: 'simulation-tool',
        title: 'TOOL TẠO MÔ PHỎNG BÀI HỌC',
        icon: <Microscope className="w-8 h-8" />,
        color: 'bg-indigo-600',
        description: 'TẠO CÁC MÔ PHỎNG THÍ NGHIỆP , MÔ PHỔNG BÀI TẬP KHTN, TOÁN ....',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtu.be/eOQE4ccX8dA'
      },
      {
        id: 'gdrive-unblock-downloader',
        title: 'TIỆN ÍCH TẢI TÀI LIỆU BỊ GOOGLE DRIVE CHẶN',
        icon: <Download className="w-8 h-8" />,
        color: 'bg-blue-600',
        description: 'Tải tài liệu trên google drive bị chặn tải về',
        isNew: true,
        isFree: true,
        buttonLabel: 'Tải tiện ích',
        secondaryLabel: 'Hướng dẫn',
        videoUrl: 'https://youtu.be/k6Z3e_U_VV8'
      },
      {
        id: 'thongke-ts10',
        title: 'CÔNG CỤ THỐNG KÊ TUYỂN SINH 10 CHI TIẾT',
        icon: <Table className="w-8 h-8" />,
        color: 'bg-emerald-600',
        description: 'Công cụ thống kê kết quả thi tuyển sinh lớp 10 chi tiết.',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn'
      }
    ]
  },
  {
    id: 'desktop-apps',
    name: 'APP DESKTOP',
    icon: <MonitorPlay className="w-8 h-8" />,
    description: 'Các ứng dụng dành cho máy tính giúp nâng cao hiệu suất làm việc.',
    apps: [
      {
        id: 'create-content-video-short',
        title: 'APP TẠO CONTENT VIDEO SHORT',
        icon: <Video className="w-8 h-8" />,
        color: 'bg-indigo-600',
        description: 'APP TẠO CONTENT , VIDEO SHORT TỪ LINK CÁC TRANG WEB BÁO CHÍ',
        isNew: true,
        isFree: true,
        buttonLabel: 'Tải App'
      }
    ]
  },
  {
    id: 'mobile-apps',
    name: 'APP MOBILE',
    icon: <Smartphone className="w-8 h-8" />,
    description: 'Các ứng dụng di động tiện lợi giúp bạn làm việc và học tập mọi lúc mọi nơi.',
    apps: [
      {
        id: 'athd-app',
        title: 'ỨNG DỤNG AN TOÀN HỌC ĐƯỜNG',
        icon: <ShieldCheck className="w-8 h-8" />,
        color: 'bg-blue-700',
        description: 'Ứng dụng này giúp Học sinh và nhà trường có kết nối with nhau để hạn chế các vụ bạo lực học đường',
        isNew: true,
        isHot: true,
        buttonLabel: 'Đăng nhập'
      },
      {
        id: 'crypto-prediction-mobile',
        title: 'DỰ ĐOÁN CRIPTO',
        icon: <TrendingUp className="w-8 h-8" />,
        color: 'bg-orange-500',
        description: 'Phân tích xu hướng và dự đoán biến động thị trường tiền điện tử bằng AI.',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Xem'
      },
      {
        id: 'tu-vi-tuong-so-ai',
        title: 'TỬ VI & TƯỚNG SỐ AI',
        icon: <Sparkles className="w-8 h-8" />,
        color: 'bg-purple-600',
        description: 'APP CHO BIẾT TỬ VI TƯỚNG SỐ CỦA BẠN . ĐẶC BIỆT CÓ DỰ ĐOÁN VÉ SỐ VIETTLOT',
        isNew: true,
        isFree: true,
        isHot: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Xem'
      },
      {
        id: 'bot-trade-vang',
        title: 'BOT TRADE VÀNG (XAU), BTC',
        icon: <TrendingUp className="w-8 h-8" />,
        color: 'bg-amber-500',
        description: 'BOT THỰC HIỆN CÁC LỆNH MUA BÁN TỰ ĐỘNG THEO CHIẾN LƯỢC CÀI ĐẶT CỦA NGƯỜI DÙNG',
        isNew: true,
        isFree: true,
        buttonLabel: 'Tải App',
        secondaryLabel: 'Xem'
      },
      {
        id: 'du-doan-vietlott',
        title: 'DỰ ĐOÁN VÉ SỐ VIETLOTT & LÔ ĐỀ',
        icon: <Trophy className="w-8 h-8" />,
        color: 'bg-red-600',
        description: 'DỰ ĐOÁN VÉ SỐ VIETLOTT & LÔ ĐỀ DỰA VÀO DỮ LIỆU THỐNG KÊ 100 KỲ QUAY VÀ TÊN, NGÀY SINH, NHÂN SINH TƯỚNG ĐỂ DỰ ĐOÁN CON SỐ CHO BẠN',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Xem'
      },
      {
        id: 'daily-info',
        title: 'DAILY INFOR',
        icon: <Zap className="w-8 h-8" />,
        color: 'bg-blue-600',
        description: 'CUNG CẤP NHANH CÁC TIN TÚC MỚI, GIÁ CẢ MỚI NHẤT TRONG NGÀY.',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Xem'
      },
      {
        id: 'salary-calculator',
        title: 'TOOL TÍNH TIỀN LƯƠNG',
        icon: <FileSpreadsheet className="w-8 h-8" />,
        color: 'bg-green-600',
        description: 'TÍNH TIỀN LƯƠNG CHO NGƯỜI LAO ĐỘNG',
        isNew: true,
        isFree: true,
        buttonLabel: 'Đăng nhập',
        secondaryLabel: 'Hướng dẫn'
      }
    ]
  }
];
