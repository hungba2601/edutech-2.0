function Update-Modal {
    param ($filePath, $url, $footerText)
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    if ($content -notmatch "MobileInstallInstructions") {
        $content = $content -replace "import React from 'react';", "import React from 'react';`nimport { MobileInstallInstructions } from './MobileInstallInstructions';"
    }
    
    $regex = "(\s+)" + $footerText
    $replacement = "`${1}<MobileInstallInstructions url=`"$url`" />`n`${1}" + $footerText.Replace('\', '')
    
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, $regex, $replacement)
    
    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Updated $filePath"
}

Update-Modal "d:\DU AN\edutech-main2.0\components\CryptoGuideModal.tsx" "https://dudoancrypto-apk.vercel.app/" "\{\/\* Footer \*\/\}"
Update-Modal "d:\DU AN\edutech-main2.0\components\TuViUpdateModal.tsx" "https://tuvi-tuongso-apk.vercel.app/" "\{\/\* Footer \*\/\}"
Update-Modal "d:\DU AN\edutech-main2.0\components\BotTradeModal.tsx" "https://drive.google.com/drive/folders/1NFNTi1qtujlVro4QEmbUlEOqDottU8ad?usp=sharing" "\{\/\* Footer \*\/\}"
Update-Modal "d:\DU AN\edutech-main2.0\components\VietlottModal.tsx" "https://dudoan-vietlott.vercel.app/" "\{\/\* Footer \*\/\}"
Update-Modal "d:\DU AN\edutech-main2.0\components\DailyInfoModal.tsx" "https://daily-infor.vercel.app/" "\{\/\* Footer \*\/\}"
Update-Modal "d:\DU AN\edutech-main2.0\components\SalaryCalculatorModal.tsx" "https://tool-tinhluong.vercel.app/" "\{\/\* Footer Actions \*\/\}"
