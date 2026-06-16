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
};

/**
 * Saves visitor lead to Website_Chatbot sheet via Apps Script webhook.
 * Columns: S.NO. | FULL NAME | PHONE NUMBER | EMAIL ID
 *
 * Set GOOGLE_SHEETS_WEBHOOK_URL in .env.local
 * Deploy scripts/google-sheets-webhook.gs from:
 * https://docs.google.com/spreadsheets/d/1oHQ18bpspyIA2JfZhLJF44aDCd6GFk-PNBL8zTYrT-Q
 */
export async function saveLeadToGoogleSheet(entry: LeadEntry): Promise<SaveLeadResult> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "development") {
      console.info("[Ayushi] Lead save skipped — configure GOOGLE_SHEETS_WEBHOOK_URL:", entry);
    }
    return {
      success: false,
      error:
        "Google Sheets webhook is not configured. Add GOOGLE_SHEETS_WEBHOOK_URL to .env.local (see .env.example).",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "saveLead",
        sessionId: entry.sessionId,
        fullName: entry.fullName,
        phoneNumber: entry.phoneNumber,
        emailId: entry.emailId,
      }),
      redirect: "follow",
    });

    const text = await response.text();
    let parsed: { success?: boolean; error?: string; serialNo?: number } = {};

    try {
      parsed = JSON.parse(text) as { success?: boolean; error?: string; serialNo?: number };
    } catch {
      if (response.ok) return { success: true };
    }

    if (!response.ok || parsed.success === false) {
      console.error("[Ayushi] Google Sheets webhook failed:", response.status, text);
      return {
        success: false,
        error: parsed.error ?? "Failed to save to Google Sheets",
      };
    }

    return { success: true, serialNo: parsed.serialNo };
  } catch (error) {
    console.error("[Ayushi] Failed to save lead to Google Sheets:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error while saving",
    };
  }
}
