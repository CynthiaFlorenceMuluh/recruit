import Link from "next/link";
export default function Post(){
    return (
        <div className="">
            <form className="flex flex-col gap-4">
                <div className="">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                    Title
                    </label>
                
                </div>
                <div className="">
                    <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
                        Type
                    </label>
                    <select
                    id="type"
                    name="type">
                        <option value="onsite">Onsite</option>
                        <option value="remote">Remote</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company
                    </label>
                </div>
                <div className="">
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                        Description
                    </label>
                </div>
                <div className="">
                    <label htmlFor="Location" className="block text-sm font-semibold text-gray-700 mb-2">
                        Location
                    </label>
                </div>
                <div className="">
                    <label htmlFor="salary" className="block text-sm font-semibold text-gray-700 mb-2">
                        Salary
                    </label>
                    <select
                        id="salary"
                        name="salary">
                            <option value="0-50k">0-50k</option>
                            <option value="50k-100k">50k-100k</option>
                            <option value="100k-150k">100k-150k</option>
                            <option value="150k+">150k+</option>
                        </select>
                </div>
                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl" type="submit">
                    <Link href="/Job">
                        Publish job
                    </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}