"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EmployerJobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = () => {
    fetch("/api/employer/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error fetching jobs:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-900">Your Jobs</h1>
        <Link
          href="/post"
          className="bg-slate-900 hover:bg-cyan-900 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          + Create Job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <p className="text-slate-400">No jobs created yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900">{job.title}</h3>
                <p className="text-slate-500 text-sm">{job.location}</p>
              </div>
              <div className="flex gap-3">
                <Link href={`/EditJob/${job.id}`} className="bg-cyan-700 text-white px-4 py-2 rounded-lg">
                  Edit
                </Link>
                <button
                  onClick={async () => {
                    await fetch(`/api/jobs/${job.id}`, { method: "DELETE" });
                    fetchJobs();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}