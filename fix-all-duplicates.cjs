const fs = require('fs');
const files = [
  'd:/DU AN/edutech-main2.0/components/CryptoGuideModal.tsx',
  'd:/DU AN/edutech-main2.0/components/TuViUpdateModal.tsx',
  'd:/DU AN/edutech-main2.0/components/BotTradeModal.tsx',
  'd:/DU AN/edutech-main2.0/components/VietlottModal.tsx',
  'd:/DU AN/edutech-main2.0/components/DailyInfoModal.tsx',
  'd:/DU AN/edutech-main2.0/components/SalaryCalculatorModal.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Tim tat ca MobileInstallInstructions
  const regex = /<MobileInstallInstructions url="[^"]+" \/>/g;
  const matches = [...content.matchAll(regex)];
  
  if (matches.length > 1) {
    console.log(`Found ${matches.length} instructions in ${file}`);
    let url = matches[0][0]; 
    
    // Xoa tat ca the
    content = content.replace(/\s*<MobileInstallInstructions url="[^"]+" \/>/g, '');
    
    // Chen lai 1 the vao cuoi
    let footerPattern = file.includes('SalaryCalculatorModal') ? 'Footer Actions' : 'Footer';
    let regexFooter = new RegExp(`(\\s*)(<\\/div>\\s*\\{\\/\\* ${footerPattern} \\*\\/\\})`, "s");
    content = content.replace(regexFooter, `$1  ${url}$1$2`);
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed duplicates in ${file}`);
  } else {
    console.log(`${file} is OK`);
  }
});
