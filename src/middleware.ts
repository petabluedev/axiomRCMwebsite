import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * If NEXT_PUBLIC_APP_ORIGIN is set, visiting /login on the marketing deployment
 * sends users to the hosted app’s login (same tab).
 */
export function middleware(request: NextRequest) {
  const raw = process.env.NEXT_PUBLIC_APP_ORIGIN?.trim();
  if (!raw) return NextResponse.next();

  const base = raw.replace(/\/$/, "");
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/login", base));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};
