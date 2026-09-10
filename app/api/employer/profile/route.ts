import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: session.user.id },
      include: { user: true },
    });

    if (!recruiter) {
      return NextResponse.json({ error: "Recruiter profile not found" }, { status: 404 });
    }

    return NextResponse.json({
      fullName: recruiter.user.fullName,
      email: recruiter.user.email,
      companyName: recruiter.companyName,
      position: recruiter.position,
      companyWebsite: recruiter.companyWebsite,
    });
  } catch (error) {
    console.error("Fetch profile error:", error);
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const { companyName, position, companyWebsite, fullName } = await req.json();

    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: session.user.id },
    });

    if (!recruiter) {
      return NextResponse.json({ error: "Recruiter profile not found" }, { status: 404 });
    }

    const updatedRecruiter = await prisma.recruiterProfile.update({
      where: { userId: session.user.id },
      data: { companyName, position, companyWebsite },
    });

    if (fullName) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { fullName },
      });
    }

    return NextResponse.json(updatedRecruiter);
  } catch (error) {
    console.error("Update profile error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}