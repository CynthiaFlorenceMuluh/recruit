"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardRoot() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      const role = (session.user as any).role;
      if (role === "recruiter") {
        router.push("/Dashboard/Employer");
      } else if (role === "candidate") {
        router.push("/Dashboard/Candidate");
      }
    }
  }, [session, router]);

  return <div className="p-8">Loading...</div>;
}
