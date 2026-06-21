import { google } from "googleapis";

export type LeadEntry = {
  sessionId: string;
  fullName: string;
  phoneNumber: string;
  emailId: string;
};

export type SaveLeadResult = {
  success: boolean;
  error?: string;
  serialNo?: number;
  skipped?: boolean;
  saved?: boolean;
  warning?: string;
};

const DEFAULT_SHEET_ID = "1oHQ18bpspyIA2JfZhLJF44aDCd6GFk-PNBL8zTYrT-Q";
const DEFAULT_SHEET_TAB = "Sheet1";

function parseWebhookResponse(text: string): {
  parsed: {
    success?: boolean;
    error?: string;
    serialNo?: number;
    emailSent?: boolean;
    emailError?: string;
  };
  isHtmlError: boolean;
  htmlError?: string;
} {
  const trimmed = text.trim();

  if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html")) {
    const match = trimmed.match(/<div[^>]*>([^<]+)<\/div>\s*<\/body>/i);
    const message = match?.[1]?.trim() ?? "Google Apps Script returned an HTML error page";
    return { parsed: {}, isHtmlError: true, htmlError: message };
  }

  try {
    return {
      parsed: JSON.parse(trimmed) as {
        success?: boolean;
        error?: string;
        serialNo?: number;
        emailSent?: boolean;
        emailError?: string;
      },
      isHtmlError: false,
    };
  } catch {
    return { parsed: {}, isHtmlError: false };
  }
}

function webhookMisconfiguredMessage(detail?: string): string {
  const hint = detail ? ` (${detail})` : "";
  return (
    "Apps Script needs the correct code pasted once" +
    hint +
    ". Open your project → replace Code.gs with ayushi-portfolio/apps-script/Code.gs → Save → Run testWebhook → Deploy → New deployment → Web app."
  );
}

async function saveViaWebhook(entry: LeadEntry, webhookUrl: string): Promise<SaveLeadResult> {
  const payload = {
    action: "saveLead",
    sessionId: entry.sessionId,
    fullName: entry.fullName,
    phoneNumber: entry.phoneNumber,
    emailId: entry.emailId,
  };

  const attempts: Array<{ label: string; url: string; init: RequestInit }> = [
    {
      label: "POST",
      url: webhookUrl,
      init: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow",
      },
    },
    {
      label: "GET",
      url:
        webhookUrl +
        "?" +
        new URLSearchParams({
          action: "saveLead",
          sessionId: entry.sessionId,
          fullName: entry.fullName,
          phoneNumber: entry.phoneNumber,
          emailId: entry.emailId,
        }).toString(),
      init: { method: "GET", redirect: "follow" },
    },
  ];

  let lastError = "Failed to save to Google Sheets";

  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, attempt.init);
      const text = await response.text();
      const { parsed, isHtmlError, htmlError } = parseWebhookResponse(text);

      if (isHtmlError) {
        lastError = webhookMisconfiguredMessage(htmlError);
        continue;
      }

      if (!response.ok) {
        lastError = parsed.error ?? `Failed to save to Google Sheets (HTTP ${response.status})`;
        continue;
      }

      if (parsed.success === true) {
        const emailSent = parsed.emailSent !== false;
        const emailError =
          typeof parsed.emailError === "string" ? parsed.emailError.trim() : "";

        return {
          success: true,
          saved: true,
          serialNo: parsed.serialNo,
          warning: emailSent ? undefined : `Saved to sheet, but email failed: ${emailError || "Unknown error"}`,
        };
      }

      lastError = parsed.error ?? webhookMisconfiguredMessage();
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Network error while saving";
    }
  }

  return { success: false, error: lastError };
}

async function saveViaServiceAccount(entry: LeadEntry): Promise<SaveLeadResult | null> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!email || !privateKey) {
    return null;
  }

  const sheetId = process.env.GOOGLE_SHEET_ID?.trim() || DEFAULT_SHEET_ID;
  const sheetTab = process.env.GOOGLE_SHEET_TAB?.trim() || DEFAULT_SHEET_TAB;

  try {
    const auth = new google.auth.JWT({
      email,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${sheetTab}!A:A`,
    });

    const rowCount = existing.data.values?.length ?? 0;
    const serialNo = rowCount <= 1 ? 1 : rowCount;

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetTab}!A:D`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[serialNo, entry.fullName, entry.phoneNumber, entry.emailId]],
      },
    });

    return { success: true, saved: true, serialNo };
  } catch (error) {
    console.error("[Ayushi] Google Sheets API (service account) failed:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? `Google Sheets API error: ${error.message}`
          : "Google Sheets API save failed",
    };
  }
}

/**
 * Saves visitor lead to Website_Chatbot sheet.
 * Tries Apps Script webhook first, then Google Sheets API via service account.
 */
export async function saveLeadToGoogleSheet(entry: LeadEntry): Promise<SaveLeadResult> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    const webhookResult = await saveViaWebhook(entry, webhookUrl);
    if (webhookResult.success) {
      return webhookResult;
    }

    const serviceAccountResult = await saveViaServiceAccount(entry);
    if (serviceAccountResult?.success) {
      return serviceAccountResult;
    }

    console.warn("[Ayushi] Lead save failed — allowing chat:", webhookResult.error, entry);
    return {
      success: true,
      saved: false,
      skipped: true,
      warning: webhookResult.error,
    };
  }

  const serviceAccountResult = await saveViaServiceAccount(entry);
  if (serviceAccountResult) {
    if (serviceAccountResult.success) {
      return serviceAccountResult;
    }
    return serviceAccountResult;
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[Ayushi] Lead save skipped (no webhook) — dev mode allows chat:", entry);
    return { success: true, saved: false, skipped: true };
  }

  return {
    success: false,
    error:
      "Google Sheets is not configured. Add GOOGLE_SHEETS_WEBHOOK_URL to .env.local (see .env.example) or set GOOGLE_SERVICE_ACCOUNT_EMAIL + GOOGLE_PRIVATE_KEY.",
  };
}
