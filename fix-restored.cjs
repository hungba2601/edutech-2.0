const fs = require('fs');

function fixFile(file, url, footerPattern) {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Remove PWA Instructions block EXACTLY
  const startIndex = content.indexOf('{/* PWA Instructions */}');
  if (startIndex !== -1) {
    let count = 0;
    let endIndex = startIndex;
    let started = false;
    let substr = content.substring(startIndex);
    const regex = /<div|<\/div>/g;
    let match;
    while ((match = regex.exec(substr)) !== null) {
        if (match[0] === '<div') {
            count++;
            started = true;
        } else if (match[0] === '</div>') {
            count--;
        }
        if (started && count === 0) {
            endIndex = startIndex + match.index + 6; // '</div>'.length
            break;
        }
    }
    // Remove the block and trailing spaces/newlines
    let blockToReplace = content.substring(startIndex, endIndex);
    content = content.replace(blockToReplace, '');
  }

  // 2. Add MobileInstallInstructions import
  if (!content.includes('MobileInstallInstructions')) {
    content = content.replace(/import React from 'react';/, "import React from 'react';\nimport { MobileInstallInstructions } from './MobileInstallInstructions';");
  }

  // 3. Delete any bad MobileInstallInstructions outside of Content block
  let badPlacement = new RegExp(`\\s*<MobileInstallInstructions url="[^"]+" />\\s*(?=\\{\\/\\* ${footerPattern} \\*\\/\\})`, "s");
  if (badPlacement.test(content)) {
      content = content.replace(badPlacement, '');
  }

  // 4. Insert into the correct place (before the closing </div> of Content, which is right before {/* Footer ... */})
  let regexFooter = new RegExp(`(\\s*)(<\\/div>\\s*\\{\\/\\* ${footerPattern} \\*\\/\\})`, "s");
  content = content.replace(regexFooter, `$1  <MobileInstallInstructions url="${url}" />$1$2`);

  // 5. CSS Adjustments
  content = content.replace(/className=\"bg-white dark:bg-slate-900 w-full ([a-zA-Z0-9\-\[\]\s]+) shadow-2xl overflow-hidden flex flex-col( max-h-\[[^\]]+\])? animate-in/g, 'className="bg-white dark:bg-slate-900 w-full $1 shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in');
  
  content = content.replace(/className=\"p-([0-9]) (sm:p-8 )?space-y-6( overflow-y-auto)?( max-h-\[[^\]]+\])?( flex-1)?\"/g, 'className="p-$1 $2space-y-6 overflow-y-auto flex-1"');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed ' + file);
}

fixFile('d:/DU AN/edutech-main2.0/components/DailyInfoModal.tsx', 'https://daily-infor.vercel.app/', 'Footer');
fixFile('d:/DU AN/edutech-main2.0/components/VietlottModal.tsx', 'https://dudoan-vietlott.vercel.app/', 'Footer');

