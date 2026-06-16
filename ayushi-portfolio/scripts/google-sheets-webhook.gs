/**
 * Google Apps Script for Website_Chatbot sheet
 * Sheet: https://docs.google.com/spreadsheets/d/1oHQ18bpspyIA2JfZhLJF44aDCd6GFk-PNBL8zTYrT-Q/edit?gid=0#gid=0
 *
 * Columns (row 1):
 * A: S.NO . | B: FULL NAME | C: PHONE NUMBER | D: EMAIL ID
 *
 * Setup:
 * 1. Open the Google Sheet above
 * 2. Extensions → Apps Script → paste this code → Save
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into .env.local as GOOGLE_SHEETS_WEBHOOK_URL
 */

var SPREADSHEET_ID = "1oHQ18bpspyIA2JfZhLJF44aDCd6GFk-PNBL8zTYrT-Q";

function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName("Sheet1") || ss.getActiveSheet();
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    if (data.action !== "saveLead") {
      return jsonResponse({ success: false, error: "Unknown action" });
    }

    var sheet = getSheet_();
    var lastRow = sheet.getLastRow();
    var serialNo = lastRow <= 1 ? 1 : lastRow;

    sheet.appendRow([
      serialNo,
      data.fullName || "",
      data.phoneNumber || "",
      data.emailId || "",
    ]);

    return jsonResponse({ success: true, serialNo: serialNo });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({
    status: "Ayushi chatbot webhook active",
    spreadsheetId: SPREADSHEET_ID,
  });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
