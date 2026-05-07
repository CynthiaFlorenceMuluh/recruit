export default function Post(){
    return (
        <div className="">
            <form>
                <div className="">
                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                    Title
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
            </form>
        </div>
    )
}