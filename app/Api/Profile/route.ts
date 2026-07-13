import { getServerSession } from "next-auth";
import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        candidateProfile: true,
        recruiterProfile: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      candidateProfile: user.candidateProfile,
      recruiterProfile: user.recruiterProfile,
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getServerSession();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Update user info
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        fullName: body.fullName || user.fullName,
      },
    });

    // Update candidate or recruiter profile based on role
    if (user.role === "candidate") {
      const updatedProfile = await prisma.candidateProfile.upsert({
        where: { userId: user.id },
        create: {
          userId: user.id,
          title: body.title,
          bio: body.bio,
          phone: body.phone,
          location: body.location,
          profileImage: body.profileImage,
          profileCompletion: body.profileCompletion || 0,
        },
        update: {
          title: body.title,
          bio: body.bio,
          phone: body.phone,
          location: body.location,
          profileImage: body.profileImage,
          profileCompletion: body.profileCompletion,
        },
      });

      return NextResponse.json({
        user: updatedUser,
        candidateProfile: updatedProfile,
      });
    } else if (user.role === "recruiter") {
      const updatedProfile = await prisma.recruiterProfile.upsert({
        where: { userId: user.id },
        create: {
          userId: user.id,
          companyName: body.companyName || "",
          position: body.position,
          companyWebsite: body.companyWebsite,
        },
        update: {
          companyName: body.companyName,
          position: body.position,
          companyWebsite: body.companyWebsite,
        },
      });

      return NextResponse.json({
        user: updatedUser,
        recruiterProfile: updatedProfile,
      });
    }

    return NextResponse.json({ user: updatedUser });
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, password } = body;

    if (!fullName || !email || !password) {
      return NextResponse.json(
        { success: false, error: "fullName, email, and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password,
        role: "candidate",
      },
    });

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create profile" },
      { status: 500 }
    );
  }
}