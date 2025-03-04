import { NextResponse } from "next/server";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";

  if (userAgent.toLowerCase().includes("mozilla")) {
    return NextResponse.next();
  }

  return new NextResponse("404 | Not Found", { status: 404 });
}

export const config = {
  matcher: "/",
};
