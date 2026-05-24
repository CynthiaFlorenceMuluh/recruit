"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  FolderKanban,
  FileText,
  Settings,
  Pencil,
  Upload,
} from "lucide-react";

export default function CandidateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-1 bg-white rounded-3xl shadow-sm p-6">
          <div className="flex flex-col items-center text-center">
       
            <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={70} className="text-gray-500" />
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              Cynthia Florence
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Frontend Developer
            </p>

            <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
              <MapPin size={16} />
              <span>Buea, Cameroon</span>
            </div>

            <div className="w-full mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Profile Completion</span>
                <span>75%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-slate-900 h-3 rounded-full w-3/4"></div>
              </div>
            </div>

         
            <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
              Edit Profile
            </button>

            <button className="mt-3 w-full border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <Upload size={18} />
              Upload Resume
            </button>
          </div>

          <div className="mt-8 space-y-3">
            <SidebarItem icon={<User size={18} />} title="About" />
            <SidebarItem icon={<Briefcase size={18} />} title="Experience" />
            <SidebarItem
              icon={<GraduationCap size={18} />}
              title="Education"
            />
            <SidebarItem
              icon={<FolderKanban size={18} />}
              title="Projects"
            />
            <SidebarItem icon={<FileText size={18} />} title="Resume" />
            <SidebarItem icon={<Settings size={18} />} title="Settings" />
          </div>
        </div>

       
        <div className="lg:col-span-3 space-y-6">
         
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">About Me</h3>

              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Pencil size={18} />
              </button>
            </div>

            <p className="text-gray-600 mt-4 leading-7">
              Passionate frontend developer focused on building clean,
              responsive, and user-friendly applications using React,
              Next.js, and modern web technologies.
            </p>

        
            <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mt-6">
              
              <InfoCard
                icon={<Mail size={18} />}
                title="Email"
                value="cynthia@gmail.com"
              />

              <InfoCard
                icon={<Phone size={18} />}
                title="Phone"
                value="+237 6XX XXX XXX"
              />

              <InfoCard
                icon={<MapPin size={18} />}
                title="Location"
                value="Buea, Cameroon"
              />

              <InfoCard
                icon={<Briefcase size={18} />}
                title="Role"
                value="Frontend Developer"
              />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h3 className="text-xl text-slate-900 font-bold">Skills</h3>

            <div className="flex flex-wrap gap-3 mt-5">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Node.js",
                "UI/UX",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-slate-900 rounded-full text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

       
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-slate-900">Experience</h3>

            <div className="mt-5 border-l-2 border-slate-700 pl-5">
              <h4 className="font-semibold text-lg">
                MTN Cameroon
              </h4>

              <p className="text-gray-500">
                Intern • 2024
              </p>

              <p className="text-gray-600 mt-3">
                Assisted in technical support and digital operations.
              </p>
            </div>
          </div>

       
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h3 className="text-xl font-bold">Education</h3>

            <div className="mt-5 border-l-2 border-slate-700 pl-5">
              <h4 className="font-semibold text-lg">
                University of Buea
              </h4>

              <p className="text-gray-500">
                BSc Computer Science • Present
              </p>
            </div>
          </div>

       
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h3 className="text-xl font-bold">Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              
              <ProjectCard
                title="RecruitIQ"
                description="AI-powered recruitment platform."
              />

              <ProjectCard
                title="Farm-to-Table Platform"
                description="Connecting local farmers with consumers."
              />

              <ProjectCard
                title="Restaurant Website"
                description="Responsive restaurant website design."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition">
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
}


function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4">
      <div className="flex items-center gap-2 text-gray-500">
        {icon}
        <span className="text-sm">{title}</span>
      </div>

      <p className="font-medium mt-2">{value}</p>
    </div>
  );
}

function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
      <h4 className="font-semibold text-lg">{title}</h4>

      <p className="text-gray-600 mt-3 text-sm leading-6">
        {description}
      </p>

      <button className="mt-5 text-blue-600 font-medium text-sm">
        View Project →
      </button>
    </div>
  );
}