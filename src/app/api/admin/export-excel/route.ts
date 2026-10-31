import { NextRequest, NextResponse } from "next/server";
import { getAllEnquiries } from "@/lib/db";
import { generateEnquiriesExcelBuffer } from "@/lib/excel";

function isAuthorized(req: NextRequest): boolean {
  const cookie = req.cookies.get("sp_admin_auth");
  const authKey = req.nextUrl.searchParams.get("key");
  const adminPass = process.env.ADMIN_PASSWORD || "suchi1995";

  if (cookie?.value === "authenticated_session_valid") return true;
  if (authKey && authKey === adminPass) return true;
  return false;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const enquiries = await getAllEnquiries();
    const buffer = generateEnquiriesExcelBuffer(enquiries);

    const now = new Date().toISOString().slice(0, 10);
    const filename = `Suchi_Printers_Enquiries_${now}.xlsx`;

    // Convert Buffer to Uint8Array for Next.js BodyInit compatibility
    const uint8Array = new Uint8Array(buffer);

    return new NextResponse(uint8Array, {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Excel generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate Excel file" },
      { status: 500 }
    );
  }
}
