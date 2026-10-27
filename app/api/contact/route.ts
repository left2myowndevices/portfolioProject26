import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please complete the form before sending." },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      ok: false,
      message: "Contact delivery is not configured yet. Please connect with Jess on LinkedIn.",
    },
    { status: 501 }
  );
}
