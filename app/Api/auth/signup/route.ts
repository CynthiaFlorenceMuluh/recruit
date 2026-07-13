import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
  
    const {email, password, role, companyName,position} = await req.json();

    if (!email || !password || !role || !companyName || !position) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existinguser = await prisma.user.findUnique({
      where: { email }
    });

    if (existinguser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    const harshedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        fullName: "",
        email: email,
        password: harshedPassword,
        role: role
      }
    });
    if(role === "recruiter"){
      await prisma.recruiterProfile.create({
        data: {
          userId: user.id,
          companyName: companyName,
          position: position
        }
      });
    }

    return NextResponse.json(
      { user, message: "account created successfully" 
     
     },
    
    {status: 201}

    );
  } catch (error) {
    console.log(error);

   
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 500 }
      );
    }
  }
    

   
