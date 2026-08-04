"use client"
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Apply(){
    const router = useRouter();
    const params = useParams();
    const jobId = params.jobId as string;
    const { data: session, status } = useSession();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        resume: "",
        coverLetter: "",
    });

    useEffect(() => {
        if (status === "unauthenticated") {
            const wantsToLogin = confirm("You need an account to apply. Log in now?");
            if (wantsToLogin) {
                router.push(`/Login?redirect=/Apply/${jobId}`);
            } else {
                router.push("/Job");
            }
        }
    }, [status, jobId, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...form, jobId }),
        });
        const data = await res.json();
        console.log(data);
        if (res.ok) {
            router.push("/Job");
        }
    }

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center bg-slate-900 min-h-screen text-white">
                Loading...
            </div>
        );
    }

    if (status !== "authenticated") {
        return null;
    }

    return(
        <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
            <h2 className="text-3xl font-semibold text-slate-900 text-center"> Apply Here!</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </label>
                      <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        required
                        />

                </div>
                <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2" >
                        Email
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="">

                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                        Resume Upload
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}

                    />

                </div>
                <div className="">
                    <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-700 mb-2">
                        Cover Letter
                    </label>
                    <textarea className="h-20 w-full border-2 border-slate-900 rounded-2xl p-5"
                    id="coverLetter"
                    name="coverLetter"
                    onChange={handleChange}
                    />
                </div>
                <div className="items-center">
                    <button type="submit" className="px-20  py-3 bg-slate-900 rounded-2xl text-white">Submit Application</button>
                </div>
            </form>
            </div>
        </div>
    )
}
/*"use client"
import{useRouter} from "next/navigation";
import { useState} from "react";
export default function Apply(){
    const router = useRouter();
    const [form, setForm] = useState({
        name:"",
        email:"",
        phone:"",
        resume:"",
        coverLetter:"",
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
   
        
    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{    
        e.preventDefault();
        const res = await fetch("/api/application", {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
            
        });
        const data = await res.json();
        console.log(data);
        if (res.ok){
            router.push("/Job");
        }
    }
    
    return(
        <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
            <h2 className="text-3xl"> Apply By filling the form to apply for Role</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </label>
                      <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="text"
                        id=""
                        name=""
                        onChange={handleChange}
                        required
                        />
                        
                </div>
                <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2" >
                        Email
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="email"
                        id=""
                        name=""
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="">
                    
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                        Resume Upload
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleChange}
                  
                    />
                   
                </div>
                <div className="">
                    <label htmlFor="cover letter" className="block text-sm font-semibold text-gray-700 mb-2">
                        Cover Letter
                    </label> 
                    <textarea className="h-20 w-full border-2 border-slate-900 rounded-2xl p-5"
                    id="cover letter"
                    name="cover letter"
                    onChange={handleChange}
                    />   
                </div>
                <div className="">
                    <button type="submit" className="px-20 py-3 bg-slate-900 rounded-2xl text-white">Submit Application</button>
                </div>
            </form>
            </div>
        </div>
    )
}*/