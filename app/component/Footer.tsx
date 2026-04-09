import Link  from  "next/link";
export default function Footer(){
    return(
         <footer className="w-full bg-green-950 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4">Recruitiq</h3>
                        <p className="text-gray-300 text-sm">
                   
                        </p>
                    </div>

              
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li> <Link href='/' className="text-gray-300 hover:text-white"> Home</Link></li>
                             <li> <Link href='/signin' className="text-gray-300 hover:text-white">Sign Up</Link></li>
                            <li> <Link href='/about' className="text-gray-300 hover:text-white">About</Link></li>
                            <li><Link href="#" className="text-gray-300 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                   
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <p className="text-gray-300 text-sm mb-2">Email: info@Recruitiq.com</p>
                        <p className="text-gray-300 text-sm">Phone: + (237 650148156)
                        </p>
                    </div>
                </div>

               
                <div className="border-t border-gray-700 pt-6">
                    <p className="text-center text-gray-400 text-sm">
                        &copy; 2026 Recruitiq. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

    

