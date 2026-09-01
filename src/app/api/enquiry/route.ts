import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, propertyType, buildingArea, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const enquiry = await db.enquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        location: location || null,
        propertyType: propertyType || null,
        buildingArea: buildingArea || null,
        message: message || null,
        status: "new",
      },
    });

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    console.error("Enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const enquiries = await db.enquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ data: enquiries });
  } catch (error) {
    console.error("Fetch enquiries error:", error);
    return NextResponse.json(
      { error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}