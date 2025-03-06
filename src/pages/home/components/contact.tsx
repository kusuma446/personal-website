export default function Contact() {
    return (

        <div className="bg-gray-200 relative py-10">
            <div className="mx-auto flex flex-row items-center w-9/12 mt-0">
                <div className="basis-1/2">
                    <div className="flex place-items-center mt-5">
                        <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                            <line x1="0" y1="10px" x2="10px" y2="10px"/>
                        </svg>
                        <h2 className="uppercase text-xs font-extralight tracking-widest">
                            Contact
                        </h2>
                    </div>
                    <h3 className="font-bold text-3xl text-gray-800">
                        Message me
                    </h3>
                    <form action="#" className="max-w-md mt-10">
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold">Name</label>
                            <input className="bg-blue-200 rounded-md px-4 py-2 w-full" type="text"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold">Email</label>
                            <input className="bg-blue-200 rounded-md px-4 py-2 w-full" type="email"></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold">Message</label>
                            <textarea className="bg-blue-200 rounded-md px-4 py-2 w-full" typeof="text" cols={30} rows={4}/>
                        </div>
                    <div>
                        <button className="bg-gray-700 font-semibold py-2 px-4 rounded-md text-white" type="submit">Send Email</button>
                    </div>
                </form>
                </div>
                <div className="basis-1/2 ml-10">
                    <div className="flex flex-row gap-5 p-5">
                        <div className="w-10 h-10 p-2">
                            <img className="w-full" src="pin.png"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Addres</h4>
                            <h5 className="font-thin">Jalan Sedapmalam no.24, Denpasar, Bali, Indonesia</h5>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 p-5">
                        <div className="w-10 h-10 p-2">
                            <img className="w-full" src="phone.png"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Phone Call</h4>
                            <h5 className="font-thin">(+62) 812398763</h5>
                        </div>
                    </div>
                    <div className="flex flex-row gap-5 p-5">
                        <div className="w-10 h-10 p-2">
                            <img className="w-full" src="email.png"/>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">E-mail</h4>
                            <h5 className="font-thin">kusuma.kusuma123@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}