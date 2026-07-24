"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"


export default function Post(){
    const router = useRouter();
    const [form, setForm] = useState({
        title: "",
        description: "",
        location: "",   
        Type: "",
        salary: "",
        applyHere: "",
        company: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    
        };
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            setError("");
            try{
                const res= await fetch("/api/jobs", {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });
                const data = await res.json();
                if(!res.ok){
                    throw new Error(data.error || "Failed to post job");
                }
                alert("Job posted successfully!");
                router.push("/Job");
            }
            catch(error:any){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        };
        
    return (
        <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
        <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2> Post a Job</h2>
                <div className="">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                    Title
                    </label>
                    <input
                    className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    required
                    onChange={handleChange}
                    />  
                
                </div>
                <div className="">
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type
                    </label>
                    <select
                    id="Type"
                    onChange={handleChange}
                    name="Type">
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                    </label>
                    <input
                    className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="description" className="block text-sm  text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                    className="h-20 w-full border-2 border-slate-900 rounded-2xl p-5"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="">
                    <label htmlFor="Location" className="block text-sm font-semibold text-gray-700 mb-2">
                        Location
                    </label>
                    <select
                    id="Location"
                    name="Location"
                    onChange={handleChange}>
                        <option value="onsite">Onsite</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                   
                </div>
                <div className="">
                    <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                        Salary
                    </label>
                    <select
                        id="salary"
                        name="salary"
                        
                        onChange={handleChange}>
                            <option value="$0-50k">$0-50k</option>
                            <option value="$50k-100k">$50k-100k</option>
                            <option value="$100k-150k">$100k-150k</option>
                            <option value="$150k+">$150k+</option>
                        </select>
                </div>
                <div className="">
                    <label htmlFor="applylink" className="block text-sm font-semibold text-gray-700 mb-2">
                        Apply Here
                    </label>
                    <input
                    className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="text"
                    id="applyHere"
                    name="applyHere"
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl" type="submit" disabled={loading}>
                        {loading ? "Posting..." : "Post Job"}
             
                    </button>
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl ml-4" type="submit">
                   Save draft
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
};
