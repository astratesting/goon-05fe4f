import { NextRequest, NextResponse } from "next/server";
import { generateThankYouEmail } from "@/lib/email";

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get("name") || "Friend";

  const html = generateThankYouEmail({ name });

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Email-Subject": `Thank you, ${name} — from Goon`,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const html = generateThankYouEmail({ name: name || "Friend" });

    return NextResponse.json({ html, subject: `Thank you, ${name || "Friend"} — from Goon` });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
