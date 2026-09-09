"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">RECruitiq</h1>

          <nav className="space-y-3">
            <Link href="/dashboard/employer/dashboard" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
            <Link href="/dashboard/employer/jobs" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <Briefcase size={20} />
              Jobs
            </Link>
            <Link href="/dashboard/employer/applicants" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <Users size={20} />
              Applicants
            </Link>
            <Link href="/dashboard/employer/interviews" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <Calendar size={20} />
              Interviews
            </Link>
            <Link href="/dashboard/employer/analytics" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <BarChart3 size={20} />
              Analytics
            </Link>
            <Link href="/dashboard/employer/settings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition">
              <Settings size={20} />
              Settings
            </Link>
          </nav>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition text-red-400"
        >
          <LogOut size={20} />
          Log out
        </button>
      </aside>
      <main className="flex-1 bg-white p-8 overflow-y-auto">{children}</main>
    </div>
  );
}