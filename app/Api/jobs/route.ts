import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if(!session?.user?.id){

    return NextResponse.json(
    {error:"Not logged in"},
    {status:401}
    );

}

    const {
      title,
      description,
      location,
      Type,
      company,
      salary,
      applyHere,
     
    } = await req.json();
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: {
        userId: session.user.id
      }
    });
      if (!recruiter) {
      return NextResponse.json(
        { error: "Recruiter profile not found" },
        { status: 404 }
      );
      }


    const job = await prisma.job.create({
      data: {
       
        title,
        description,
        location,
        Type,
        company,
        salary,
        applyHere,
        recruiterId:recruiter.id,
        userId:session.user.id,
      },
    });


    return NextResponse.json(job, { status: 201 });


  } catch (error) {
    console.error("Create job error:", error);

    return NextResponse.json(
      { error: "Failed to create job" },
      { status: 500 }
    );
  }
}


