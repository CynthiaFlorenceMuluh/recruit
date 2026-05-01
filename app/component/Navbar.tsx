"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b text-blue-950">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          <Image src="/image/Logo1.jpg" alt="logo" width={100} height={70} />
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div id="navbar-menu" className={`w-full md:flex md:w-auto ${menuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:border-none md:p-0 md:shadow-none">
            <Link href="/" className="transition hover:text-cyan-600" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/candidateSignup" className="transition hover:text-cyan-600" onClick={() => setMenuOpen(false)}>
              Candidate Signup
            </Link>
            <Link href="/EmployerSignup" className="transition hover:text-cyan-600" onClick={() => setMenuOpen(false)}>
              Recruiter Signup
            </Link>
            <Link href="/Post" className="transition hover:text-cyan-600" onClick={() => setMenuOpen(false)}>
              Post
            </Link>
            <Link href="/Job" className="transition hover:text-cyan-600" onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
