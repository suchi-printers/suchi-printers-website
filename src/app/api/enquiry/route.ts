import { NextRequest, NextResponse } from "next/server";
import { createEnquiry } from "@/lib/db";
import { appendToGoogleSheet } from "@/lib/googleSheets";
import { sendEnquiryEmailNotification } from "@/lib/email";

// Indian 10-digit mobile number validator (starts with 6, 7, 8, or 9)
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      company,
      product,
      quantity,
      size,
      message,
      sourcePage,
      _hp_gotcha, // Honeypot field
    } = body;

    // Honeypot spam check: if filled, drop silently
    if (_hp_gotcha) {
      console.warn("Spam honeypot triggered; discarding bot submission.");
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll contact you within 24 hours.",
      });
    }

    // Required fields validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Sanitize phone (remove +91, 0, spaces, dashes)
    const cleanPhone = (phone || "").toString().replace(/[\s\-\+\(\)]/g, "").replace(/^0|^91/, "");

    if (!cleanPhone || !INDIAN_PHONE_REGEX.test(cleanPhone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit Indian mobile number (e.g., 9415405306).",
        },
        { status: 400 }
      );
    }

    if (!product || typeof product !== "string" || product.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select a product type." },
        { status: 400 }
      );
    }

    // 1. Save to local persistent database (guaranteed Excel exportable)
    const newLead = await createEnquiry({
      name: name.trim(),
      phone: cleanPhone,
      email: email ? email.trim() : "",
      company: company ? company.trim() : "",
      product: product.trim(),
      quantity: quantity ? quantity.trim() : "",
      size: size ? size.trim() : "",
      message: message ? message.trim() : "",
      sourcePage: sourcePage || "Website Form",
    });

    // 2. Asynchronously sync to Google Sheets (non-blocking)
    appendToGoogleSheet(newLead).then((res) => {
      if (!res.success) {
        console.info("[GoogleSheets Info]", res.message);
      } else {
        console.log("[GoogleSheets Sync] Appended lead to sheet successfully.");
      }
    }).catch((err) => {
      console.error("[GoogleSheets Error]", err);
    });

    // 3. Asynchronously send email notification (non-blocking)
    sendEnquiryEmailNotification(newLead).then((res) => {
      if (!res.success) {
        console.info("[EmailNotification Info]", res.message);
      } else {
        console.log("[EmailNotification] Sent email notification successfully.");
      }
    }).catch((err) => {
      console.error("[EmailNotification Error]", err);
    });

    return NextResponse.json({
      success: true,
      id: newLead.id,
      message: "Thank you! We'll contact you within 24 hours.",
    });
  } catch (error: any) {
    console.error("API /api/enquiry POST error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please call 9415405306 directly." },
      { status: 500 }
    );
  }
}

