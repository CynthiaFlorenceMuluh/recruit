"use client"
import React from "react";
import Link from "next/link";
import { useState } from "react"
import { useRouter } from "next/navigation";

type Form = {
   companyName: string;
    position: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function page(){
    const router = useRouter();
    const [form, setForm]= useState<Form>({
    companyName: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
});
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev, 
            [name]: value,
        } as unknown as Form));
    };
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);

        if (form.password !== form.confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }

        try {
          const res = await fetch("/api/auth/employersignup", {
            method: "POST",
            headers: {
             "Content-Type": "application/json",
       },
            body: JSON.stringify({
              fullName: form.companyName,
              companyName: form.companyName,
              position: form.position,
              email: form.email,
              password: form.password,
              role: "recruiter"
            })
          });
        

          if (!res.ok) {
            const data = await res.json();
            setError(data.error || "Signup failed");
            setLoading(false);
            return;
          }

          alert("Registration successful! Redirecting to login...");
          router.push("/Login/employerlogin");
        } catch (err) {
          setError("An error occurred. Please try again.");
          console.error(err);
          setLoading(false);
        }
    }

    return(
        
        <main className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700 ">
        <div className=" bg-white rounded-2xl w-full max-w-md p-8 m-10 ">
            <h2 className="text-center font-semibold  text-gray-700 ">Register </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="text"
                    name="companyName"
                    id="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
                    <input className="h-10 border-2 w-full border-slate-900 rounded-2xl p-5"
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
           <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
              Position
            </label>

                <input
                   className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                   type="text"
                   name="position"
                   id="position"
                   value={form.position}
                   onChange={handleChange}/>

                </div>
                <div className="">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input className="h-10 border-2 w-full border-slate-900 rounded-2xl p-2"
                    type="password"
                    name="password"
                    id="password"
                    value={form.password}
                    onChange={handleChange}
                    />

                </div>
                <div className="">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input className="h-10 border-2 w-full border-slate-900 rounded-2xl p-2"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    />

                </div>
               
                    <button
                       type="submit"
                       disabled={loading}
                      className="px-6 py-3 bg-slate-900 rounded-2xl text-white font-medium hover:bg-slate-800 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
               
               
                    <p className="py-10 text-center text-sm text-slate-500">Already have an account <Link href="/Login/employerlogin" className="font-semibold text-slate-900 hover:text-cyan-600">Login</Link></p>
             
            </form>

        </div>

        
        </main>
        
    )
}