const fs = require('fs');

function fixModal(file, url, footerPattern) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Thêm Component nếu chưa có
    if (!content.includes('MobileInstallInstructions')) {
        content = content.replace(/import React from 'react';/, "import React from 'react';\nimport { MobileInstallInstructions } from './MobileInstallInstructions';");
    }
    
    // Xóa component nếu nó nằm ngoài phần Content (trước Footer)
    let badPlacement = new RegExp(`\\s*<MobileInstallInstructions url="[^"]+" />\\s*(?=\\{\\/\\* ${footerPattern} \\*\\/\\})`, "s");
    if (badPlacement.test(content)) {
        content = content.replace(badPlacement, '');
    }

    // Nếu chưa có component trong file (sau khi đã xóa cái sai chỗ), thì chèn vào TRONG Content (trước thẻ đóng </div> cuối cùng của Content)
    let regexFooter = new RegExp(`(\\s*)(<\\/div>\\s*\\{\\/\\* ${footerPattern} \\*\\/\\})`, "s");
    content = content.replace(regexFooter, `$1  <MobileInstallInstructions url="${url}" />$1$2`);

    // Fix Modal height and Content scroll
    content = content.replace(/className=\"bg-white dark:bg-slate-900 w-full ([a-zA-Z0-9\-\[\]\s]+) shadow-2xl overflow-hidden flex flex-col( max-h-\[[^\]]+\])? animate-in/g, 'className="bg-white dark:bg-slate-900 w-full $1 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in');
    
    // Content part
    content = content.replace(/className=\"p-([0-9]) (sm:p-8 )?space-y-6( overflow-y-auto)?( max-h-\[[^\]]+\])?( flex-1)?\"/g, 'className="p-$1 $2space-y-6 overflow-y-auto flex-1"');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed ' + file);
}

fixModal('d:/DU AN/edutech-main2.0/components/CryptoGuideModal.tsx', 'https://dudoancrypto-apk.vercel.app/', 'Footer');
fixModal('d:/DU AN/edutech-main2.0/components/TuViUpdateModal.tsx', 'https://tuvi-tuongso-apk.vercel.app/', 'Footer');
fixModal('d:/DU AN/edutech-main2.0/components/BotTradeModal.tsx', 'https://drive.google.com/drive/folders/1NFNTi1qtujlVro4QEmbUlEOqDottU8ad?usp=sharing', 'Footer');
fixModal('d:/DU AN/edutech-main2.0/components/VietlottModal.tsx', 'https://dudoan-vietlott.vercel.app/', 'Footer');
fixModal('d:/DU AN/edutech-main2.0/components/DailyInfoModal.tsx', 'https://daily-infor.vercel.app/', 'Footer');
fixModal('d:/DU AN/edutech-main2.0/components/SalaryCalculatorModal.tsx', 'https://tool-tinhluong.vercel.app/', 'Footer Actions');

