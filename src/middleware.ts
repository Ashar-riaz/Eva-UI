import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || request.headers.get("Authorization");
  const url = request.nextUrl.pathname;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Restrict normal users from accessing admin dashboard
  if (url.startsWith("/admin/dashboard")) {
    const email = request.cookies.get("email")?.value;
    if (email !== "123@gmail.com") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Restrict admin from accessing normal dashboard
  if (url.startsWith("/dashboard")) {
    const email = request.cookies.get("email")?.value;
    if (email === "123@gmail.com") {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

// Protect both /dashboard and /admin/dashboard
export const config = {
  matcher: ["/dashboard/:path*", "/Admin/dashboard/:path*"],
};
