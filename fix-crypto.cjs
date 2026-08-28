const fs = require('fs');
let file = 'd:/DU AN/edutech-main2.0/components/CryptoGuideModal.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Tăng bề ngang hộp thoại: max-w-xl -> max-w-4xl
content = content.replace('max-w-xl', 'max-w-4xl');

// 2. Xóa bớt 1 dòng MobileInstallInstructions bị trùng
let target = `<MobileInstallInstructions url="https://dudoancrypto-apk.vercel.app/" />\n          <MobileInstallInstructions url="https://dudoancrypto-apk.vercel.app/" />`;
let replacement = `<MobileInstallInstructions url="https://dudoancrypto-apk.vercel.app/" />`;
content = content.replace(target, replacement);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed CryptoGuideModal');
