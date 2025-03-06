export default function Experience() {
    return (

        <div className="bg-gray-800 relative py-10">
            <div className="mx-auto flex flex-row items-center w-9/12 mt-0">
                <div>
                    <div className="flex place-items-center mt-5">
                        <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                            <line x1="0" y1="10px" x2="10px" y2="10px"/>
                        </svg>
                        <h2 className="uppercase text-xs font-extralight tracking-widest">
                            Career
                        </h2>
                    </div>
                    <h3 className="font-bold text-4xl text-white">
                        Experience
                    </h3>
                    <div className="grid grid-cols-2 py-10">
                        <div>
                            <p className="flex flex-row justify-between bg-white w-60 p-3 rounded"><span>2023</span><img className="h-5 w-5" src="arrow.png"/></p>
                        </div>
                        <div>
                            <p className="flex flex-row w-full rounded">Graduate from Biology Udayana University. Have no Expirience in bacis or advance coding.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 py-10">
                        <div>
                            <p className="flex flex-row justify-between bg-white w-60 p-3 rounded"><span>2024</span><img className="h-5 w-5" src="arrow.png"/></p>
                        </div>
                        <div>
                            <p className="flex flex-row w-full rounded">Learning full stack javascript web development at Purwadhika. Not yet Graduate, still learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}