export default function Navbar() {
    return (
        <header className="bg-gray-500 py-2 sticky top-0 z-50 shadow-md">
            <nav className="w-9/12 flex flex-wrap items-center justify-between mx-auto px-0">
                <div className="uppercase text-lg basis-1/4 px-0 mx-auto">
                    <a className="font-extrabold" href="#Hero">
                        <span className="text-white">Kusuma</span>
                        <span className="text-gray-900">Bagus</span>
                    </a>
                </div>
                <div className="basis-1/2 flex items-center justify-evenly mx-auto">
                    <a href="#Me"><span className="font-extrabold">Skills</span></a>
                    <a href="#Portfolio"><span className="font-extrabold">Portofolio</span></a>
                    <a href="#Experience"><span className="font-extrabold">Experience</span></a>
                    <a href="#Testimonial"><span className="font-extrabold">Testimonial</span></a>
                    <a href="#Contact"><span className="font-extrabold">Contact</span></a>
                </div>
                <div className="basis-1/4 flex justify-center items-center mx-auto px-0">
                    <img className="w-[10%] h-1[10%] rounded-[50%]" src="catPT.jpg" alt="logo"/>
                </div>
            </nav>
        </header>
    )
}