import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white h-30 border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
        <Link href="/" className="text-lg font-bold text-slate-900">
          Recruitiq
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          <Link href="/" className="transition hover:text-cyan-600">
            Home
          </Link>
          <Link href="/Users/candidateSignup" className="transition hover:text-cyan-600">
            Candidate Signup
          </Link>
          <Link href="/Users/EmployeeSignup" className="transition hover:text-cyan-600">
            Recruiter Signup
          </Link>
          <Link href="/Users/Job" className="transition hover:text-cyan-600">
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}
