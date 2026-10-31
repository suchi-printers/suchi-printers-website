import { google } from "googleapis";
import { Enquiry } from "@/types";

export interface AppendResult {
  success: boolean;
  message: string;
  details?: unknown;
}

/**
 * Appends a new lead row to Google Sheets via Service Account
 * Expects environment variables:
 * - GOOGLE_SHEET_ID
 * - GOOGLE_SERVICE_ACCOUNT_EMAIL
 * - GOOGLE_PRIVATE_KEY
 */
export async function appendToGoogleSheet(enquiry: Enquiry): Promise<AppendResult> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!sheetId || !clientEmail || !privateKey) {
    return {
      success: false,
      message:
        "Google Sheets integration skipped: GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY not set in environment.",
    };
  }

  try {
    // Format private key in case newlines were escaped
    privateKey = privateKey.replace(/\\n/g, "\n");

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Format IST date string
    const formattedDate = new Date(enquiry.timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const values = [
      [
        formattedDate,
        enquiry.name,
        enquiry.phone,
        enquiry.email || "-",
        enquiry.company || "-",
        enquiry.product,
        enquiry.quantity || "-",
        enquiry.size || "-",
        enquiry.message || "-",
        enquiry.sourcePage || "Website Quote Form",
      ],
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    return {
      success: true,
      message: "Successfully synced enquiry to Google Sheet",
      details: response.data,
    };
  } catch (error: any) {
    console.error("Google Sheets sync error:", error?.message || error);
    return {
      success: false,
      message: error?.message || "Failed to append to Google Sheet",
      details: error,
    };
  }
}

