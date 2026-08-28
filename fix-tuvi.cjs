const fs = require('fs');
let file = 'd:/DU AN/edutech-main2.0/components/TuViUpdateModal.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Tăng bề ngang hộp thoại: max-w-lg -> max-w-4xl (hoặc 3xl)
content = content.replace('max-w-lg', 'max-w-4xl');

// 2. Xóa bớt 1 dòng MobileInstallInstructions bị trùng
let target = `<MobileInstallInstructions url="https://tuvi-tuongso-apk.vercel.app/" />\n          <MobileInstallInstructions url="https://tuvi-tuongso-apk.vercel.app/" />`;
let replacement = `<MobileInstallInstructions url="https://tuvi-tuongso-apk.vercel.app/" />`;
content = content.replace(target, replacement);

// Nếu nó lọt ra ngoài phần content
let badTarget = `          <MobileInstallInstructions url="https://tuvi-tuongso-apk.vercel.app/" />\n        </div>\n\n\n        {/* Footer */}`;
let badReplacement = `        </div>\n\n\n        {/* Footer */}`;
content = content.replace(badTarget, badReplacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed TuViUpdateModal');
