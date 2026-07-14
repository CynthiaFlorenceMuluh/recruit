"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RecruiterDashboard() {
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await fetch("/api/Dashboard");
      const data = await response.json();
      setDashboard(data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="bg-slate-50">

      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl  text-slate-900 font-bold ">
            Welcome back, {dashboard?.user?.companyName}
          </h1>

          <p className="text-slate-900 mt-2">
            Manage your hiring process smarter.
          </p>
        </div>

        <button className="bg-slate-900 hover:bg-cyan-900 px-5 py-3 rounded-xl font-semibold transition m-3">
          <Link href="/Post">+ Create Job</Link>
        </button>
      </div>

      
      <div className="grid grid-cols-1 items-center m-3 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Total Jobs
          </h3>

          <p className="text-3xl font-bold mt-2">
            {dashboard?.stats?.totalJobs || 0}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Applicants
          </h3>

          <p className="text-3xl font-bold mt-2">
            {dashboard?.stats?.applicants || 0}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Interviews
          </h3>

          <p className="text-3xl font-bold mt-2">
            {dashboard?.stats?.interviews || 0}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Hired
          </h3>

          <p className="text-3xl font-bold mt-2">
            {dashboard?.stats?.hired || 0}
          </p>
        </div>

      </div>

    
      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Jobs
        </h2>

        <div className="space-y-4">
          {dashboard?.recentJobs?.length > 0 ? (
            dashboard.recentJobs.map((job: any) => (
              <div key={job.id} className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-semibold">
                    {job.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {job.applications?.length || 0} applicant{(job.applications?.length || 0) !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="flex gap-3">
                <Link
                href={`/EditJob/${job.id}`}
               className="bg-cyan-700 px-4 py-2 rounded-lg">
                Edit
                </Link>


              <button

              onClick={async()=>{
              await fetch(`/api/jobs/${job.id}`,{
              method:"DELETE"
            });
            fetchDashboard();
          }}
          className="bg-red-600 px-4 py-2 rounded-lg">
            Delete
            </button>
            </div>

              </div>
            ))
          ) : (
            <p className="text-slate-400">No jobs created yet</p>
          )}
        </div>
      </div>

    </div>
  );
}