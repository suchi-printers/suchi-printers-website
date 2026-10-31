import { NextRequest, NextResponse } from "next/server";

const DEFAULT_ADMIN_PASS = process.env.ADMIN_PASSWORD || "suchi1995";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password || password !== DEFAULT_ADMIN_PASS) {
      return NextResponse.json(
        { success: false, error: "Incorrect admin password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Admin authentication successful",
    });

    // Set secure httpOnly cookie
    response.cookies.set("sp_admin_auth", "authenticated_session_valid", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Server authentication error" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.delete("sp_admin_auth");
  return response;
}

