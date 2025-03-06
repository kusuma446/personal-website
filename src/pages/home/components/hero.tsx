export default function Hero() {
    return (

    <div className="bg-gray-950 relative">
        <div className="mx-auto flex h-screen items-center w-9/12">   
            <div className="basis-1/2">
                <div className="flex items-center">
                    <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                        <line x1="0" y1="10px" x2="10px" y2="10px"/>
                    </svg>
                    <h2 className="uppercase text-xs font-extralight tracking-widest">
                        My name is
                    </h2>
                </div>
                <h3 className="font-bold text-3xl text-white">Dewa Bagus Antha Kusuma.</h3>
                <p className="font-light mr-3">
                    Creative web developer, still junior cant do anything, but i will keep push myself to become profesional someday. Learning in HTML, Tailwind CSS, NextJS, ReactJS, Jacascript, and Typescript. Passionate in gaming and have a lot of cats
                </p>
                <div className="flex flex-row mt-5 space-x-3">
                    <img className="w-6 h-6" src="/Github.svg" alt="github"/>
                    <img className="w-6 h-6" src="/Instagram.svg" alt="instagram"/>
                    <img className="w-6 h-6" src="/Twitter.svg" alt="twitter"/>
                </div>
            </div>
            <div className="basis-1/2">
                <img className="mx-auto" src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt="My Foto-lah"/>
            </div>
        </div>
    </div>
    )
}