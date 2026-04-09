import Link  from  "next/link";
export default function Navbar(){
    return(
        <>
      
        <nav className="w-full bg-white border-b h-30 rounded-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="Homepage">Home</Link>
                <Link href="candidateSignup">Signup as a candidate</Link>
                <Link href="EmployeeSignup">Signup as Recruiter</Link>
                <Link href="">About</Link>
                <Link href="">Jobs</Link> 
                
            </div>
                    
                
        </nav>
        </>
    )
}