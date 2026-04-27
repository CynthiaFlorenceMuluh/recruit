"use client"
import { useState } from "react";
import Link from "next/link";

export default function page(){
    const [form, setForm]=useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
})
const handleChange =(e)=>{
    setForm({
        ...form, [e.target.fullName]: e.target.value,
    });
};
const handleSubmit =async (e) =>{
    e.preventDefault();
}
    return(
      <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700 ">
         <div className=" bg-white rounded-2xl w-100 p-8 m-10">
         <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <h2 className="font-semibold  text-gray-700">Register here</h2>
              <div className="">
                 <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                 </label> 
                 <input 
                 className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                 type="text"
                 id="fullName"
                 name="fullName"
                 required
                 onChange={handleChange}
                 ></input> 
                 </div>
                 <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ">
                    Email
                    </label>
                    <input 
                     className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                    type="email"
                    id="Email"
                    name="Email"
                    required
                    onChange={handleChange}
                    />
                    </div>
                    <div className="">
                        <label htmlFor="Password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Password</label>
                        <input
                         className="h-10 border-2 border-slate-900 rounded-2xl p-5"
                        type="password"
                        id="Password"
                        name="Password"
                        required
                        onChange={handleChange}
                        ></input>

                    </div>
                    <div className="">
                        <label htmlFor="ConfirmPassword" className="block text-sm font-semibold text-gray-800 mb-2">
                        Confirm Password</label>
                        <input
                         className="h-10 border-2 rounded-2xl border-slate-900 p-5"
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        onChange={handleChange}
                        required
                        ></input>
                    </div>
                <div className="">
                    <button className=" px-20 py-3 bg-slate-900 rounded-2xl text-white" >SignUp</button>
                </div>
                <p className="py-10">Already have an account  <Link href="/candidateLogin" passHref>Signin</Link></p>
                </form> 
            </div>   
        </div>                        
    
    )

}
