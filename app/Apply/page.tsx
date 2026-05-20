export default function Apply(){
    return(
        <div className="flex items-center justify-center bg-slate-900 border-gray-700 gap-8 text-gray-700">
            <div className="bg-white rounded-2xl w-full max-w-md p-8 m-10">
            <h2> Apply By filling the form to apply for Role</h2>
            <form className="flex flex-col gap-4">
                <div className="">
                    <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                    </label>
                      <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="text"
                        id=""
                        name=""
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2" >
                        Email
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                        type="email"
                        id=""
                        name=""
                        required
                        />
                </div>
                <div className="">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    />
                </div>
                <div className="">
                    
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                        Resume Upload
                    </label>
                    <input className="h-10 w-full border-2 border-slate-900 rounded-2xl p-5"
                    type="file"
                    id="resume"
                    name="resume"
                  
                    />
                   
                </div>
                <div className="">
                    <label htmlFor="cover letter" className="block text-sm font-semibold text-gray-700 mb-2">
                        Cover Letter
                    </label> 
                    <textarea className="h-20 w-full border-2 border-slate-900 rounded-2xl p-5"
                    id="cover letter"
                    name="cover letter"
                    />   
                </div>
                <div className="">
                    <button>Submit Application</button>
                </div>
            </form>
            </div>
        </div>
    )
}