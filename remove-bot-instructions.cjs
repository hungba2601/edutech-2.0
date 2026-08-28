const fs = require('fs');
let file = 'd:/DU AN/edutech-main2.0/components/BotTradeModal.tsx';
let content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('{/* Installation Instructions */}');
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
  let blockToReplace = content.substring(startIndex, endIndex);
  content = content.replace(blockToReplace, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed Installation Instructions');
} else {
  console.log('Installation Instructions not found');
}
