import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";


export async function GET() {

  try {

    const session = await auth();


    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }


    const recruiter = await prisma.recruiterProfile.findUnique({
      where: {
        userId: ""
      }
    });


    if (!employer) {
      return NextResponse.json(
        { error: "Employer profile not found" },
        { status: 404 }
      );
    }


    const jobs = await prisma.job.findMany({

      where: {
        recruiterId: employer.id
      },

      orderBy: {
        createdAt: "desc"
      }

    });


    return NextResponse.json(jobs);


  } catch (error) {

    console.error("Employer jobs fetch error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );

  }

}