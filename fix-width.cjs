const fs = require('fs');

function increaseWidth(file) {
    let content = fs.readFileSync(file, 'utf8');
    // Tìm các class max-w-... như max-w-xl, max-w-lg, max-w-md, max-w-2xl và đổi thành max-w-4xl
    content = content.replace(/max-w-(md|lg|xl|2xl)/g, 'max-w-4xl');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed width for ' + file);
}

increaseWidth('d:/DU AN/edutech-main2.0/components/VietlottModal.tsx');
increaseWidth('d:/DU AN/edutech-main2.0/components/DailyInfoModal.tsx');
