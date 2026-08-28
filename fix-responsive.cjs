const fs = require('fs');
let file = 'd:/DU AN/edutech-main2.0/components/MobileInstallInstructions.tsx';
let content = fs.readFileSync(file, 'utf8');

// Title size
content = content.replace('text-base sm:text-lg font-bold', 'text-sm sm:text-base lg:text-lg font-black');

// URL Box
content = content.replace(/flex items-center justify-between xl:justify-start gap-2 border border-slate-200 dark:border-slate-700 p-1.5 rounded-xl bg-white dark:bg-slate-800 shadow-sm max-w-full overflow-hidden/, 'flex w-full xl:w-auto items-center justify-between gap-2 border border-slate-200 dark:border-slate-700 p-1 rounded-xl bg-white dark:bg-slate-800 shadow-sm overflow-hidden');

// URL Text
content = content.replace(/px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 truncate max-w-\[200px\] sm:max-w-\[300px\]/, 'px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate flex-1 min-w-0');

// Copy button
content = content.replace(/px-3 py-1.5 rounded-lg font-bold text-sm/, 'px-3 py-1.5 rounded-lg font-bold text-xs sm:text-sm');

// Card padding
content = content.replace(/p-5 md:p-6/g, 'p-4 sm:p-5 md:p-6');

// Card titles
content = content.replace(/text-base md:text-lg/g, 'text-sm sm:text-base lg:text-lg');

// Card texts
content = content.replace(/text-sm md:text-base/g, 'text-[13px] sm:text-sm lg:text-base');

fs.writeFileSync(file, content, 'utf8');
console.log("Responsive fixed");
