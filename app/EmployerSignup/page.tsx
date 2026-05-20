"use client"
import Link from "next/link";
import { useState } from "react"
export default function page(){
    const [form, setForm]= useState({
        CompanyName:"",
        Email:"",

    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) =>{
        setForm({
            ...form, 
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    return(
        
        <main className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700 ">
        <div className=" bg-white rounded-2xl w-full max-w-md p-8 m-10 ">
            <h2 className="text-center font-semibold  text-gray-700 ">Register </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="companyname" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                    <input className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                    type="text"
                    name="CompanyName"
                    onChange={handleChange}
                
                    />
                </div>
                <div className="">
                    <label htmlFor="companyemail" className="block text-sm font-semibold text-gray-700 mb-2">Company Email</label>
                    <input className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                    type="email"
                    name="Email"
                    id=""
                    onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                    type="password"
                    name="Password"
                    id=""
                    onChange={handleChange}
                    />

                </div>
                <div className="">
                    <label htmlFor="confirmpassword" className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                    <input className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                    type="password"
                    name="ConfirmPassword "
                    id=""
                    onChange={handleChange}
                    />

                </div>
                <div className="">
                    <button className=" px-20 py-3 bg-slate-900 rounded-2xl text-white">SignUp</button>
                </div>
                <div className="">
                    <p className="py-10 text-center text-sm text-slate-500">Already have an account <Link href="/Login/recruiterlogin " className="font-semibold text-slate-900 hover:text-cyan-600">Login</Link></p>
                </div>
            </form>

        </div>


            
        </main>
        
    )
}