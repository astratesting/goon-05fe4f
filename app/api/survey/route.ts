import { NextRequest, NextResponse } from "next/server";
import { saveSurveyResponse, getAllSurveyResponses } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const body = await req.json();

    const { name, email, experienceRating, whatWorked, frictionPoints, featureRequests, recommendRating } = body;

    if (!name || !email || !experienceRating || recommendRating === undefined) {
      return NextResponse.json(
        { error: "Name, email, experience rating, and recommend rating are required." },
        { status: 400 }
      );
    }

    const response = saveSurveyResponse({
      userId: session?.user?.id ? Number((session.user as { id: string }).id) : undefined,
      name,
      email,
      experienceRating: Number(experienceRating),
      whatWorked: whatWorked || "",
      frictionPoints: frictionPoints || "",
      featureRequests: featureRequests || "",
      recommendRating: Number(recommendRating),
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Survey submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong saving your response." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const responses = getAllSurveyResponses();
    return NextResponse.json(responses);
  } catch (error) {
    console.error("Survey fetch error:", error);
    return NextResponse.json(
      { error: "Something went wrong fetching responses." },
      { status: 500 }
    );
  }
}
