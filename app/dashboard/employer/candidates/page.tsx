"use client";

import { useEffect, useState } from "react";

export default function ApplicantsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/employer/applicants")
      .then((res) => res.json())
      .then((data) => setApplications(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Error fetching applicants:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Applicants</h1>

      {applications.length === 0 ? (
        <p className="text-slate-400">No applicants yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-slate-900">
                  {app.candidate?.user?.fullName ?? "Unknown Candidate"}
                </h3>
                <p className="text-slate-500 text-sm">{app.candidate?.user?.email}</p>
                <p className="text-slate-500 text-sm mt-1">
                  Applied for: <span className="font-medium">{app.job?.title}</span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 capitalize">
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}