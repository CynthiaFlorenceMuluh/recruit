"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function CandidateLoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
    }; 
    return(

        <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
            
            <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <h2 className="font-semibold text-gray-700">Login here</h2> 
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        />
                        </div>
                        <div className="">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                            type="password"
                            id="password"
                            onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <button type="submit" className="px-20 py-3 bg-slate-900 rounded-2xl text-white"><Link href="Profile">Login</Link></button>
                        </div>
                </form>
            </div>
        </div>
    )
}