import Link from "next/link";
export default function page(){
    return(
      <div className="grid ">
        <div className="h-200 gap-8 lg:grid-cols-3 lg:items-center text-center my-5 rounded-4xl  w-100  border-white/10 bg-white p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10 items-center">
         <form className=" ">
            <h2 className="font-semibold  text-gray-700">Register here</h2>
              <div className="py-10">
                 <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                 </label> 
                 <input 
                 type="text"
                 id="fullName"
                 name="fullName"
                 ></input> 
                 </div>
                 <div className="py-10">
                    <label htmlFor="Email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                    </label>
                    <input 
                    type="email"
                    id="Email"
                    name="Email"
                    />
                    </div>
                    <div className="py-10">
                        <label htmlFor="Password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Password</label>
                        <input
                        type="password"
                        id="Password"
                        name="Password"
                        ></input>

                    </div>
                    <div className="py-10">
                        <label htmlFor="ConfirmPassword" className="block text-sm font-semibold text-gray-800 mb-2">
                        Confirm Password</label>
                        <input
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        ></input>
                    </div>
                <div className="">
                    <button className=" px-20 py-3 bg-slate-900 rounded-2xl" >SignUp</button>
                </div>
                <p className="py-10">Already have an account  <Link href="/Users/candidateLogin" passHref>Signin</Link></p>
                </form> 
             </div>      
                    
            </div>             
                 
                  
              
                  
                       
            
       
    
    )
}
