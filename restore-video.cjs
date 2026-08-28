const fs = require('fs');

// 1. Cập nhật MobileInstallInstructions
let mobileFile = 'd:/DU AN/edutech-main2.0/components/MobileInstallInstructions.tsx';
let mobileContent = fs.readFileSync(mobileFile, 'utf8');

if (!mobileContent.includes('videoUrl')) {
  mobileContent = mobileContent.replace('interface MobileInstallInstructionsProps {\n  url: string;\n}', 'interface MobileInstallInstructionsProps {\n  url: string;\n  videoUrl?: string;\n}');
  mobileContent = mobileContent.replace('= ({ url }) => {', '= ({ url, videoUrl }) => {');
  
  if (!mobileContent.includes('MonitorPlay')) {
    mobileContent = mobileContent.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, MonitorPlay } from 'lucide-react';");
  }

  let titleRegex = /<h3 className="text-sm sm:text-base lg:text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">\s*HƯỚNG DẪN CÀI ĐẶT THÀNH APP MOBILE\s*<\/h3>/s;
  let newTitleBlock = `<h3 className="text-sm sm:text-base lg:text-lg font-black text-slate-800 dark:text-white uppercase tracking-wide">
            HƯỚNG DẪN CÀI ĐẶT THÀNH APP MOBILE
          </h3>
          {videoUrl && (
            <a 
              href={videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto flex items-center justify-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95 shrink-0"
            >
              <MonitorPlay size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>XEM VIDEO</span>
            </a>
          )}`;
  mobileContent = mobileContent.replace(titleRegex, newTitleBlock);
  fs.writeFileSync(mobileFile, mobileContent, 'utf8');
}

// 2. Cập nhật VietlottModal và DailyInfoModal
function addVideoProp(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<MobileInstallInstructions url="([^"]+)" \/>/g, '<MobileInstallInstructions url="$1" videoUrl="https://youtu.be/d_vjNZ0R3lw" />');
  fs.writeFileSync(file, content, 'utf8');
}

addVideoProp('d:/DU AN/edutech-main2.0/components/DailyInfoModal.tsx');
addVideoProp('d:/DU AN/edutech-main2.0/components/VietlottModal.tsx');

console.log('Video button restored.');
