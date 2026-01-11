import { NextResponse } from "next/server";

export function GET(request: Request) {
  const gumroad = process.env.GUMROAD_URL;

  if (!gumroad) {
    return NextResponse.json(
      { error: "Missing GUMROAD_URL in .env.local" },
      { status: 500 }
    );
  }

  // Optional: pass through UTM parameters from the landing page
  const url = new URL(request.url);
  const utm = url.search; // includes leading "?" if present

  return NextResponse.redirect(gumroad + utm, 302);
}
