const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    applicants: 32,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    applicants: 18,
  },
];

export default function JobsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Jobs
        </h1>

        <button className="bg-black text-white px-4 py-2 rounded-xl">
          Create Job
        </button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-5 rounded-2xl border"
          >
            <h2 className="text-xl font-semibold">
              {job.title}
            </h2>

            <p className="text-gray-500 mt-2">
              {job.applicants} applicants
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}