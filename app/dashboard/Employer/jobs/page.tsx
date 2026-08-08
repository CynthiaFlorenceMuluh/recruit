"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EmployerJobs() {

  const router = useRouter();

  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {

    async function fetchJobs() {

      const res = await fetch("/api/employer/jobs");

      const data = await res.json();

      setJobs(data);

    }

    fetchJobs();

  }, []);


  const handleDelete = async (jobId: string) => {

    const confirmDelete = confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;


    try {

      const res = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
      });


      if (!res.ok) {
        throw new Error("Failed to delete job");
      }


      setJobs((prev) =>
        prev.filter((job) => job.id !== jobId)
      );


      alert("Job deleted successfully");


    } catch (error:any) {

      alert(error.message);

    }

  };


  return (

    <div className="bg-slate-900 min-h-screen p-10">

      <h2 className="text-3xl text-white text-center font-bold p-10">
        My Posted Jobs
      </h2>


      <div className="grid text-white gap-6 md:grid-cols-3">


        {jobs.length === 0 ? (

          <p>No Jobs Posted Yet</p>


        ) : (


          jobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {job.title}
              </h3>


              <p className="mt-4 text-xl font-semibold text-slate-900">
                {job.type}
              </p>


              <p className="mt-2 text-slate-500">
                {job.company}
              </p>


              <p className="mt-4 text-slate-700">
                {job.description}
              </p>


              <p className="mt-4 text-sm text-slate-600">
                {job.location}
              </p>


              <p className="mt-4 text-xl font-semibold text-slate-900">
                {job.salary}
              </p>


              <div className="flex gap-3 mt-6">


                <button
                  className="rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                  onClick={() =>
                    router.push(
                      `/dashboard/employer/jobs/${job.id}/edit`
                    )
                  }
                >
                  Edit
                </button>



                <button
                  className="rounded-full bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                  onClick={() =>
                    handleDelete(job.id)
                  }
                >
                  Delete
                </button>


              </div>


            </div>

          ))

        )}


      </div>

    </div>

  );
}