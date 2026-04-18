import Link from "next/link";
export default function page(){
    return(
      <div className="">
         <form className="">
            <p>Are you seeking for a role ? </p>
            <h2>Register here</h2>
              <div>
                 <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                 </label> 
                 <input 
                 type="text"
                 id="fullName"
                 name="fullName"
                 ></input> 
                 </div>
                 <div className="">
                    <label htmlFor="Email" className="">
                    Email
                    </label>
                    <input 
                    type="email"
                    id="Email"
                    name="Email"
                    />
                    </div>
                    <div className="">
                        <label htmlFor="Password" className="block text-sm font-semibold text-gray-700 mb-2">
                        Password</label>
                        <input
                        type="password"
                        id="Password"
                        name="Password"
                        ></input>

                    </div>
                    <div className="">
                        <label htmlFor="ConfirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password</label>
                        <input
                        type="password"
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        ></input>
                    </div>
                <div className="">
                    <button className="" >SignUp</button>
                </div>
                <p>Already have an account  <Link href="/Users/candidateLogin" passHref>Signin</Link></p>
                </form>    
                    
            </div>             
                 
                  
              
                  
                       
            
       
    
    )
}
