export default function Testimonial() {
    return (

    <div id="Testimonial" className="bg-gray-950 relative py-10">
        <div className="mx-auto flex items-center w-9/12">   
            <div className="basis-1/2">
                <div className="flex items-center">
                    <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                        <line x1="0" y1="10px" x2="10px" y2="10px"/>
                    </svg>
                    <h2 className="uppercase text-xs font-extralight tracking-widest">
                        Testimonial
                    </h2>
                </div>
                <div>
                    <h3 className="font-bold text-3xl text-white">
                        Laksmi Candra Dewi
                    </h3>
                </div>
                <div className="flex flex-row mt-0 mb-10 space-x-3 text-white">
                    <h4>
                        A Friend
                    </h4>
                </div>
                <p className="font-light mr-10">
                    Creative person, still basic but vas potensial. I like his design, for someone is not profesional his works still good.
                </p>
            </div>
            <div className="basis-1/2 py-10">
                <img className="mx-auto w-[50%] h-[50%] rounded-[50%]" src="catPT2.jpeg" alt="My Foto-lah"/>
            </div>
        </div>
        <div className="mx-auto flex items-center w-9/12">
            <div className="basis-1/2 py-10">
                <img className="mx-auto w-[50%] h-[50%] rounded-[50%]" src="catPT3.jpg" alt="My Foto-lah"/>
            </div>
            <div className="basis-1/2">
                <div>
                    <h3 className="font-bold text-3xl text-white">
                        Surya Rujak Pedas
                    </h3>
                </div>
                <div className="flex flex-row mt-0 mb-10 space-x-3 text-white">
                    <h4>
                        A Friend
                    </h4>
                </div>
                <p className="font-light mr-10">
                    Creative person, still basic but vas potensial. I like his design, for someone is not profesional his works still good.
                </p>
            </div>
        </div>  
    </div>
    )
}