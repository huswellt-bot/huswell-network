// Paste this file into a Google Apps Script project bound to the destination sheet.
// Replace the token below with a long random value, then use that same value in
// GOOGLE_SHEETS_WEBHOOK_TOKEN in .env.local.
const WEBHOOK_TOKEN = "replace-with-a-long-random-secret";
const SHEET_NAME = "Join Applications";

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);

    if (payload.token !== WEBHOOK_TOKEN) {
      return jsonResponse({ ok: false });
    }

    const fullName = cleanValue(payload.fullName, 120);
    const companyName = cleanValue(payload.companyName, 160);
    const phoneNumber = cleanValue(payload.phoneNumber, 32);

    if (!fullName || !companyName || !phoneNumber) {
      return jsonResponse({ ok: false });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Submitted at", "Full name", "Company name", "Contact number"]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([new Date(), fullName, companyName, phoneNumber]);
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false });
  }
}

function cleanValue(value, maximumLength) {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim().slice(0, maximumLength)
    : null;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
