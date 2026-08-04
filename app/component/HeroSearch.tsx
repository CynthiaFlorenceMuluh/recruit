"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("title", query);
    router.push(`/Job?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white/95 p-5 shadow-lg shadow-slate-900/5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, company or location"
        className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="mt-3 w-full rounded-lg bg-cyan-500 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Search jobs
      </button>
      <p className="mt-2 text-sm text-slate-600">Find relevant openings by title, company or location.</p>
    </form>
  );
}