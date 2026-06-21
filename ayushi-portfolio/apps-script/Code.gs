var SPREADSHEET_ID = "1oHQ18bpspyIA2JfZhLJF44aDCd6GFk-PNBL8zTYrT-Q";
var NOTIFY_EMAIL = "aggarwalayushi545@gmail.com";

function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  return ss.getSheetByName("Sheet1") || ss.getActiveSheet();
}

function saveLead_(data) {
  var sheet = getSheet_();
  var lastRow = sheet.getLastRow();
  var serialNo = lastRow <= 1 ? 1 : lastRow;

  sheet.appendRow([
    serialNo,
    data.fullName || "",
    data.phoneNumber || "",
    data.emailId || "",
  ]);

  var emailResult = notifyLeadByEmail_(data, serialNo);

  return {
    success: true,
    serialNo: serialNo,
    emailSent: emailResult.sent === true,
    emailError: emailResult.sent === true ? "" : (emailResult.error || "Unknown email error"),
  };
}

function notifyLeadByEmail_(data, serialNo) {
  try {
    var subject = "New portfolio chatbot lead: " + (data.fullName || "Unknown");
    var body =
      "Someone shared their details on your portfolio chatbot.\n\n" +
      "Name: " + (data.fullName || "") + "\n" +
      "Phone: " + (data.phoneNumber || "") + "\n" +
      "Email: " + (data.emailId || "") + "\n" +
      "Session: " + (data.sessionId || "") + "\n" +
      "Sheet row: " + serialNo + "\n\n" +
      "Open sheet: https://docs.google.com/spreadsheets/d/" +
      SPREADSHEET_ID +
      "/edit";

    MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    return { sent: true };
  } catch (err) {
    return { sent: false, error: String(err) };
  }
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.action !== "saveLead") {
      return jsonResponse({ success: false, error: "Unknown action" });
    }
    return jsonResponse(saveLead_(data));
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function doGet(e) {
  try {
    var params = e && e.parameter ? e.parameter : {};
    if (params.action === "saveLead") {
      return jsonResponse(saveLead_(params));
    }
    return jsonResponse({
      success: true,
      status: "Ayushi chatbot webhook active",
      spreadsheetId: SPREADSHEET_ID,
    });
  } catch (err) {
    return jsonResponse({ success: false, error: String(err) });
  }
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function testWebhook() {
  var e = {
    postData: {
      contents: JSON.stringify({
        action: "saveLead",
        sessionId: "apps-script-test",
        fullName: "Apps Script Test",
        phoneNumber: "9999999999",
        emailId: "test@example.com"
      }),
    },
  };
  var result = doPost(e);
  Logger.log(result.getContent());
}

function testEmail() {
  var result = notifyLeadByEmail_(
    { sessionId: "apps-script-test-email", fullName: "Email Test", phoneNumber: "9999999999", emailId: "test@example.com" },
    0
  );
  Logger.log(JSON.stringify(result));
}
