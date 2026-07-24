function doGet(e) {
  var action = e.parameter.action;
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sheet1") || ss.getSheets()[0];

  if (sheet.getLastRow() == 0) {
    sheet.appendRow(["NAME", "COUNT"]);
    sheet.getRange(1, 1, 1, 2).setFontWeight("bold").setBackground("#f3f3f3");
  }

  if (action === 'getCounts') {
    var data = sheet.getDataRange().getValues();
    var counts = {};
    for (var i = 0; i < data.length; i++) {
      if (i > 0 && data[i][0]) counts[data[i][0]] = data[i][1];
      if (data[i][2]) counts[data[i][2]] = data[i][3];
    }
    return ContentService
      .createTextOutput(JSON.stringify(counts))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (action === 'setValue') {
    var setKey = e.parameter.key;
    var setVal = Number(e.parameter.value);
    var lastRow = sheet.getLastRow();
    var setFound = false;

    for (var si = 1; si <= lastRow; si++) {
      var cellVal = sheet.getRange(si, 3).getValue();
      if (cellVal == setKey) {
        sheet.getRange(si, 4).setValue(setVal);
        setFound = true;
        break;
      }
    }

    if (!setFound) {
      sheet.getRange(1, 3).setValue(setKey);
      sheet.getRange(1, 4).setValue(setVal);
    }

    return ContentService
      .createTextOutput('OK')
      .setMimeType(ContentService.MimeType.JSON);
  }

  var appName = e.parameter.name;
  if (!appName) return ContentService.createTextOutput("Missing name");

  var data = sheet.getDataRange().getValues();
  var found = false;

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] == appName) {
      sheet.getRange(i + 1, 2).setValue(Number(data[i][1]) + 1);
      found = true;
      break;
    }
  }

  if (!found) {
    sheet.appendRow([appName, 1]);
  }

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}
