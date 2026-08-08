import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { fullName, email, password, companyName } = await req.json();

    if (!fullName || !email || !password || !companyName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }


    // Check existing user
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    // Create employer user
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        role: "recruiter",
      },
    });


    // Create recruiter profile
    await prisma.recruiterProfile.create({
      data: {
        userId: user.id,
        companyName,
      },
    });


    return NextResponse.json(
      {
        message: "Employer account created successfully",
        user,
      },
      { status: 201 }
    );


  } catch (error) {
    console.log("Employer signup error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}