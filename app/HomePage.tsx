const popularJobs = [
  {
    title: "Fullstack Developer",
    company: "JongoHub",
    location: "Hybrid",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    company: "Creative",
    location: "Hybrid",
    type: "Contract",
  },
  {
    title: "Sales Manager",
    company: "V-Group",
    location: "On-site",
    type: "Full-time",
  },
  {
    title: "Virtual Assitance",
    company: "EdTech",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "digital Marketer",
    company: "Buyam",
    location: "On-site",
    type: "Full-time",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Create an account",
    description: "Signup and set up you professional profile.",
  },
  {
    step: "02",
    title: "Browse Jobs",
    description: "Explore opportunities that match your skills and interests.",
  },
  {
    step: "03",
    title: "Apply with Ease",
    description: "Submit application in just a few clicks.",
  },
   {
    step: "04",
    title: "Get Hired Faster",
    description: "connect with employers and land your dream job.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-cyan-700 px-6 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Hire smarter. Find work faster.
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Find your dream role and connect with recruiters at Recruitiq.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-200 sm:text-lg">
              Recruitiq helps professionals discover opportunities, submit applications, and grow their careers with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/Users/Job.tsx" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
                Browse Jobs
              </a>
              <a href="/Users/candidateSignup" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Sign up as Candidate
              </a>
            </div>
          </div>
          <div className="rounded-4xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-10">
            <div className="mb-6 rounded-3xl bg-slate-950/80 p-6 text-white shadow-lg shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Top Categories</p>
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                <span className="rounded-2xl bg-slate-900/70 px-4 py-3">Engineering</span>
                <span className="rounded-2xl bg-slate-900/70 px-4 py-3">Design</span>
                <span className="rounded-2xl bg-slate-900/70 px-4 py-3">Sales</span>
                <span className="rounded-2xl bg-slate-900/70 px-4 py-3">Marketing</span>
                 <span className="rounded-2xl bg-slate-900/70 px-4 py-3">virtual Assistance</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-white/95 p-5 shadow-lg shadow-slate-900/5">
                <p className="text-sm font-semibold text-slate-900">Search jobs</p>
                <p className="mt-2 text-sm text-slate-600">Find relevant openings by title, company or location.</p>
              </div>
              <div className="rounded-3xl bg-white/95 p-5 shadow-lg shadow-slate-900/5">
                <p className="text-sm font-semibold text-slate-900">Create a profile</p>
                <p className="mt-2 text-sm text-slate-600">Showcase your experience and get noticed by hiring teams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-jobs" className="max-w-6xl px-6 py-16 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Popular jobs</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">Open roles you can apply for today</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {popularJobs.map((job) => (
            <div key={job.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">{job.type}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{job.title}</h3>
              <p className="mt-2 text-slate-500">{job.company}</p>
              <p className="mt-4 text-sm text-slate-600">{job.location}</p>
              <button className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
             <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-600">How it works</p>
            
          <div className="grid gap-8 lg:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-900 font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl px-6 py-16 mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Why choose us</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Recruitiq makes hiring and job search easier.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">From posting roles to evaluating candidates, Recruitiq provides the tools recruiters need and the visibility candidates want.</p>
            <ul className="mt-8 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-cyan-600" />
                <span>Personalized job matches based on your skills and goals.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-cyan-600" />
                <span>Fast, secure application tracking for every stage.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-cyan-600" />
                <span>Support for recruiters and candidates</span>
              </li>
            </ul>
          </div>
         
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to find your next opportunity?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cyan-100 sm:text-lg">
            Join Recruitiq today and get matched with the right company, role, and team faster.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/Users/candidateSignup" className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
              Get started
            </a>
            <a href="/Users/EmployeeSignup" className="inline-flex rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Post a job
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
