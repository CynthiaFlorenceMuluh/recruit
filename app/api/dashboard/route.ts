import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth();

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

    if (user.role === "candidate") {
      const candidateProfile = user.candidateProfile;
      if (!candidateProfile) {
        return NextResponse.json({
          role: "candidate",
          stats: { applications: 0, interviews: 0, jobsSaved: 0 },
          recentApplications: [],
        });
      }

      const applications = await prisma.application.findMany({
        where: { candidateId: candidateProfile.id },
        include: { job: true, interviews: true },
        orderBy: { createdAt: "desc" },
        take: 5,
      });

      return NextResponse.json({
        role: "candidate",
        stats: {
          applications: applications.length,
          interviews: applications.reduce((sum, app) => sum + app.interviews.length, 0),
          jobsSaved: 0,
        },
        recentApplications: applications,
      });
    }

    if (user.role === "recruiter") {
      const recruiterProfile = user.recruiterProfile;
      if (!recruiterProfile) {
        return NextResponse.json({
          role: "recruiter",
          stats: { totalJobs: 0, applicants: 0, interviews: 0 },
          recentJobs: [],
        });
      }

      const jobs = await prisma.job.findMany({
        where: { recruiterId: recruiterProfile.id },
        include: { applications: { include: { interviews: true } } },
      });

      return NextResponse.json({
        role: "recruiter",
        stats: {
          totalJobs: jobs.length,
          applicants: jobs.reduce((sum, job) => sum + job.applications.length, 0),
          interviews: jobs.reduce(
            (sum, job) =>
              sum + job.applications.reduce((s, app) => s + app.interviews.length, 0),
            0
          ),
        },
        recentJobs: jobs.slice(0, 5),
      });
    }

    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  } catch (error) {
    console.error("Dashboard fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}