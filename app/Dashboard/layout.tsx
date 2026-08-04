"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  BarChart3,
  Settings,
} from "lucide-react";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">
        
        
        <h1 className="text-2xl font-bold mb-10">
          RECruitiq
        </h1>

        <nav className="space-y-3">

          <Link
            href="/recruiter/dashboard"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/recruiter/dashboard/jobs"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Briefcase size={20} />
            Jobs
          </Link>

          <Link
            href="/recruiter/dashboard/applicants"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Users size={20} />
            Applicants
          </Link>

          <Link
            href="/recruiter/dashboard/interviews"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Calendar size={20} />
            Interviews
          </Link>

          <Link
            href="/recruiter/dashboard/analytics"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <BarChart3 size={20} />
            Analytics
          </Link>

          <Link
            href="/recruiter/dashboard/settings"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
          >
            <Settings size={20} />
            Settings
          </Link>

        </nav>
      </aside>
      <main className="flex-1 bg-white p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}