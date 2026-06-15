import { NextRequest, NextResponse } from "next/server";
import { saveLeadToGoogleSheet } from "@/lib/google-sheets";

export const runtime = "nodejs";

type SaveLeadBody = {
  sessionId: string;
  fullName: string;
  phoneNumber: string;
  emailId: string;
};

function validateLead(body: SaveLeadBody): string | null {
  if (!body.sessionId?.trim()) return "Session ID is required.";
  if (!body.fullName?.trim() || body.fullName.trim().length < 2) {
    return "A valid full name is required.";
  }

  const digits = (body.phoneNumber ?? "").replace(/\D/g, "");
  if (!body.phoneNumber?.trim() || digits.length < 10 || digits.length > 15) {
    return "A valid phone number is required.";
  }

  if (!body.emailId?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.emailId.trim())) {
    return "A valid email address is required.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SaveLeadBody;
    const validationError = validateLead(body);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    const result = await saveLeadToGoogleSheet({
      sessionId: body.sessionId.trim(),
      fullName: body.fullName.trim(),
      phoneNumber: body.phoneNumber.trim(),
      emailId: body.emailId.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? "Could not save to Google Sheets." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "Lead saved successfully." });
  } catch (error) {
    console.error("[Dhruv] Save lead API error:", error);
    return NextResponse.json(
      { error: "Something went wrong while saving your details." },
      { status: 500 }
    );
  }
}
