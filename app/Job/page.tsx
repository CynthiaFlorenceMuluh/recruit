"use client"
import Link from "next/link";
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
    const[jobs, setJobs]=useState<Job[]>([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((data)=> setJobs(data.slice(0,10)));
    }, []); 
    return(
        <div className="bg-slate-900 min-h-screen p-10">
            <h2 className="text-3xl text-white text-center font-bold p-10">Browser available Jobs</h2>
            
        <div className="grid text-white gap-6 md:grid-cols-3">
          {jobs.map((job:any) => (
            <div key={job.id} className="job-card bg-white rounded-3xl  p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg" >
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{job.title}</h3>
              <p className="mt-4 text-xl font-semibold text-slate-900">{job.type}</p>
              <p className="mt-2 text-slate-500">{job.company}</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">{job.description}</p>
              <p className="mt-4 text-sm text-slate-600">{job.location}</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">{job.salary}</p>
              <p className="mt-4 text-xl font-semibold text-slate-900">{job.apply}</p>
              <button className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800" type="button" >
              <Link href="/Apply">Apply</Link>
              </button>
            </div>
          ))}
        </div>
                
            </div>

            
      
    )
}