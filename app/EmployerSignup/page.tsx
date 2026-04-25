"use client"
import { useState } from "react"
export default function page(){
    const [form, setForm]= useState({
        CompanyName:"",
        Email:"",

    });
    
    return(
        <>
        <main className="bg-slate-50 text-slate-900">
            <h2>Register </h2>
            <form>
                <div className="">
                    <label>CompanyName</label>
                    <input
                    type=""
                    name=""
                
                    />
                </div>
                <div className="">
                    <label>email</label>
                    <input 
                    type=""
                    name=""
                    id=""/>
                </div>
                <div className="">

                </div>
            </form>




            
        </main>
        </>
    )
}