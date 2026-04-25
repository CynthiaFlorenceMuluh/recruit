import Link from "next/link";
import Image from "next/image"; 

export default function Navbar() {
  return (
    <nav className="w-full bg-white h-30 border-b">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10">
        <Link href="/" className="text-lg font-bold text-slate-900" passHref>
         <Image src="/image/Logo1.jpg" alt="logo" width={100} height={70} /></Link>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
          <Link href="/" className="transition hover:text-cyan-600" passHref>
           Home 
          </Link>
          <Link href="/candidateSignup" className="transition hover:text-cyan-600" passHref>
          Candidate Signup 
          </Link>
          <Link href="/EmployerSignup" className="transition hover:text-cyan-600" passHref>
           Recruiter Signup
          </Link>
          <Link href="/Post" className="transition hover:text-cyan-600" passHref>Post</Link>
          <Link href="/Job" className="transition hover:text-cyan-600" passHref>
           Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
}
