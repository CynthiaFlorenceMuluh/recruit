import Link from "next/link";
export default function RecruiterDashboard() {
  return (
    <div className="bg-slate-50">

      
      <div className="flex items-center  justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back 
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your hiring process smarter.
          </p>
        </div>

        <button className="bg-cyan-900 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition">
          <Link href="/Post">+ Create Job</Link>
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Total Jobs
          </h3>

          <p className="text-3xl font-bold mt-2">
            12
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Applicants
          </h3>

          <p className="text-3xl font-bold mt-2">
            248
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Interviews
          </h3>

          <p className="text-3xl font-bold mt-2">
            18
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-slate-400 text-sm">
            Hired
          </h3>

          <p className="text-3xl font-bold mt-2">
            7
          </p>
        </div>

      </div>

    
      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Applicants
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-semibold">
                John Doe
              </h3>

              <p className="text-slate-400 text-sm">
                Frontend Developer
              </p>
            </div>

            <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
              View
            </button>
          </div>

          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-semibold">
                Sarah Wilson
              </h3>

              <p className="text-slate-400 text-sm">
                UI/UX Designer
              </p>
            </div>

            <button className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-700">
              View
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}