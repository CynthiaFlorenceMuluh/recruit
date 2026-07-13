"use client";

import { useEffect, useState } from "react";

export default function CandidateDashboard() {
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
    <div className="bg-slate-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              My Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Track your job applications and interviews.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-600 text-sm font-medium">
              Applications
            </h3>

            <p className="text-3xl font-bold mt-2">
              {dashboard?.stats?.applications || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-600 text-sm font-medium">
              Interviews
            </h3>

            <p className="text-3xl font-bold mt-2">
              {dashboard?.stats?.interviews || 0}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-600 text-sm font-medium">
              Saved Jobs
            </h3>

            <p className="text-3xl font-bold mt-2">
              {dashboard?.stats?.jobsSaved || 0}
            </p>
          </div>

        </div>

        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-6">
            Recent Applications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold">Job Title</th>
                  <th className="text-left py-3 px-4 font-semibold">Company</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Applied</th>
                </tr>
              </thead>
              <tbody>
                {dashboard?.recentApplications?.length > 0 ? (
                  dashboard.recentApplications.map((app: any) => (
                    <tr key={app.id} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-4">{app.job?.title}</td>
                      <td className="py-3 px-4">{app.job?.location || "N/A"}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                          app.status === 'shortlisted' ? 'bg-green-100 text-green-800' :
                          app.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 px-4 text-center text-slate-600">
                      No applications yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
