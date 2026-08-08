import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { sendApplicationEmail } from "@/lib/email";

export async function POST(req: Request) {

  try {

    const session = await auth();

    if (!session?.user?.id) {

      return NextResponse.json(
        { error: "Login required" },
        { status: 401 }
      );

    }

    const { jobId } = await req.json();

    const candidate = await prisma.candidateProfile.findUnique({
      where: {
        userId: session.user.id
      },
      include: {
        user: true, 
      },
    });

    if (!candidate) {
      return NextResponse.json(
        { error: "Candidate profile not found" },
        { status: 404 }
      );
    }

   
    const existing = await prisma.application.findFirst({
      where: { jobId, candidateId: candidate.id },
    });
    if (existing) {
      return NextResponse.json(
        alert("You already applied to this job" ),
        { status: 409 }
      );
    }

    const job = await prisma.job.findUnique({
      where: { id: jobId },
      include: {
        recruiter: {         
          include: { user: true }, 
        },
      },
    });

    if (!job) {
      return NextResponse.json(
        { error: "Job not found" },
        { status: 404 }
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId,
        candidateId: candidate.id,
        status: "pending"
      }
    });

    if (job.recruiter?.user?.email) {
      await sendApplicationEmail({
        to: job.recruiter.user.email,
        jobTitle: job.title,
        candidateName: candidate.user?.fullName ?? "A candidate",
      });
    }

    return NextResponse.json(application);

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      { error: "Application failed" },
      { status: 500 }
    );

  }

}