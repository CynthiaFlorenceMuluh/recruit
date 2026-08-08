"use client"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react"


export default function Job(){
    type Job = {
        userId:number;
        id:number;
        title:string;
        description:string;
        Type:string;
        company:string;
        salary:string;
        location:string;
    };

    const router = useRouter();
    const [jobs, setJobs] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

    useEffect(() => {
      async function fetchJobs() {
        const params = new URLSearchParams();
        if (title) params.set("title", title);
        if (company) params.set("company", company);
        if (location) params.set("location", location);

        const res = await fetch(`/api/jobs?${params.toString()}`);
        const data = await res.json();
        setJobs(data);
      }

      const debounce = setTimeout(fetchJobs, 400);
      return () => clearTimeout(debounce);
    }, [title, company, location]);

    const toggleExpand = (jobId: number) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(jobId)) {
          next.delete(jobId);
        } else {
          next.add(jobId);
        }
        return next;
      });
    };

    const handleApply = async (jobId: string) => {
  try {
    const res = await fetch("/api/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jobId,
      }),
    });

    if (res.status === 401) {
      const wantsToLogin = confirm("You need an account to apply. Log in now?");
      if (wantsToLogin) {
        router.push(`/Login?redirect=/Job`);
      }
      return;
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    alert("Application submitted successfully!");
    router.push(`/Apply/${jobId}`);

  } catch (error: any) {
    alert(error.message);
  }
};

    return(
        <div className="bg-slate-900 min-h-screen p-10">
            <h2 className="text-3xl text-white text-center font-bold p-10">Browse available Jobs</h2>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <input
                type="text"
                placeholder="Job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
            </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {jobs.length === 0 ? (
            <p className="text-white text-center col-span-full">No Jobs Available</p>
          ) : (
            jobs.map((job) => {
              const isExpanded = expandedIds.has(job.id);
              const isLong = job.description && job.description.length > 150;
              const displayText = isExpanded || !isLong
                ? job.description
                : `${job.description.slice(0, 150)}...`;

              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg flex flex-col"
                >
                  <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>

                  <p className="mt-4 text-slate-600 leading-relaxed flex-grow">
                    {displayText}
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(job.id)}
                        className="ml-1 text-cyan-600 font-semibold hover:underline"
                      >
                        {isExpanded ? "See less" : "See more"}
                      </button>
                    )}
                  </p>

                  <p className="mt-6 text-slate-900 font-medium">{job.company}</p>
                  <p className="mt-1 text-slate-500">{job.Type ?? job.location}</p>

                  <p className="mt-4 text-2xl font-bold text-cyan-600">{job.salary}</p>

                  <button
                    className="mt-6 self-start inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    type="button"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply
                  </button>
                </div>
              );
            })
          )}
        </div>

            </div>


    );
}

/*"use client"
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react"


export default function Job(){
    type Job = {
        userId:number;
        id:number;
        title:string;
        body:string;
        type:string;
        company:string;
        salary:number;
        location:string;
    };

    const router = useRouter();
    const [jobs, setJobs] = useState<any[]>([]);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
      async function fetchJobs() {
        const params = new URLSearchParams();
        if (title) params.set("title", title);
        if (company) params.set("company", company);
        if (location) params.set("location", location);

        const res = await fetch(`/api/jobs?${params.toString()}`);
        const data = await res.json();
        setJobs(data);
      }

      const debounce = setTimeout(fetchJobs, 400);
      return () => clearTimeout(debounce);
    }, [title, company, location]);

    const handleApply = async (jobId: string) => {
      try {
        const res = await fetch("/api/applications", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jobId,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        alert("Application submitted successfully!");
        router.push(`/Apply/${jobId}`);

      } catch (error: any) {
        alert(error.message);
      }
    };

    return(
        <div className="bg-slate-900 min-h-screen p-10">
            <h2 className="text-3xl text-white text-center font-bold p-10">Browse available Jobs</h2>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <input
                type="text"
                placeholder="Job title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-full px-4 py-2 text-sm bg-white text-slate-900"
              />
            </div>

        <div className="grid text-white gap-6 md:grid-cols-3">
          {jobs.length === 0 ? (
            <p>No Jobs Available</p>):

          (jobs.map((job) => (
            <div key={job.id} className="job-card bg-white rounded-3xl  p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" >
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{job.title}</h3>

              <p className="mt-4 text-sm  text-slate-900">{job.description}</p>
              <p className="mt-2 text-slate-500">{job.company}</p>
              <p className="mt-4 text-sm text-slate-600">{job.location}</p>
              <p className="mt-4 text-xl font-bold text-cyan-600">{job.salary}</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">{job.apply}</p>
              <button className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800" type="button"
              onClick={() => router.push(`/Apply/${job.id}`)}>

              Apply
              </button>
            </div>
          ))
          )}
        </div>

            </div>


    );
}
    */