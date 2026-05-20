import { LayoutDashboard, Users, Briefcase} from "lucide-react"
import Link from "next/link"
export default function EmployerSideBar(){
    return(
        <>
     <aside className="w-64 h-screen bg-slate-50 border-r text-slate-900 p-5">
      
      <nav className="space-y-4">
        <Link href="/employer" className="flex items-center  gap-2">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/employer/jobs" className="flex items-center gap-2">
          <Briefcase size={18} />
          Jobs
        </Link>

        <Link href="/employer/candidates" className="flex items-center gap-2">
          <Users size={18} />
          Candidates
        </Link>
      </nav>
    </aside>
    </>
    )

}