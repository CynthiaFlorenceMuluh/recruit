
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    console.log("Session:", session);
    if (!session?.user?.id) {

      return NextResponse.json(
        { error: "Not logged in" },
        { status: 401 }
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
        recruiterId: recruiter.id,
        userId: session.user.id,
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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") ?? undefined;
    const company = searchParams.get("company") ?? undefined;
    const location = searchParams.get("location") ?? undefined;

    const jobs = await prisma.job.findMany({
      where: {
        AND: [
          title ? { title: { contains: title, mode: "insensitive" } } : {},
          company ? { company: { contains: company, mode: "insensitive" } } : {},
          location ? { location: { contains: location, mode: "insensitive" } } : {},
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(jobs);

  } catch (error) {
    console.error("Fetch jobs error:", error);

    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}