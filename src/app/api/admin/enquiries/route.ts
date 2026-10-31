import { NextRequest, NextResponse } from "next/server";
import { getAllEnquiries, updateEnquiryStatus, deleteEnquiry } from "@/lib/db";

function isAuthorized(req: NextRequest): boolean {
  const cookie = req.cookies.get("sp_admin_auth");
  const authHeader = req.headers.get("x-admin-key");
  const adminPass = process.env.ADMIN_PASSWORD || "suchi1995";

  if (cookie?.value === "authenticated_session_valid") return true;
  if (authHeader && authHeader === adminPass) return true;
  return false;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const enquiries = await getAllEnquiries();
  return NextResponse.json({ success: true, data: enquiries });
}

export async function PATCH(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = await updateEnquiryStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update enquiry" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
    }

    const deleted = await deleteEnquiry(id);
    return NextResponse.json({ success: deleted });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

