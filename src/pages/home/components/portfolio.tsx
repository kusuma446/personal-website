export default function Portfolio() {
    return (

        <div id="Portfolio" className="bg-gray-950 relative py-10">
            <div className="mx-auto flex items-center w-9/12 mt-0">
                <div>
                    <div className="flex place-items-center mt-5">
                        <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                            <line x1="0" y1="10px" x2="10px" y2="10px"/>
                        </svg>
                        <h2 className="uppercase text-xs font-extralight tracking-widest">
                            Portfolio
                        </h2>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <h3 className="font-bold text-3xl text-white">
                            My Works
                        </h3>                  
                    </div>
                    <div className="grid grid-cols-3 gap-10 py-10">
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="cafe.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Cafe Menu
                                </h4>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="nutlist.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Nutrition List
                                </h4>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="potogal.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Photo Gallery
                                </h4>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="survey.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Survey Form
                                </h4>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="ballance.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Balance Sheet
                                </h4>
                            </div>
                        </div>
                        <div className="shadow-lg">
                            <div className="flex flex-col items-center py-10 bg-gray-700 rounded-md">
                                <div className="h-100 w-100">
                                    <img className="h-[300px] w-[400px] opacity-50" src="quiz.png"/>
                                </div>
                                <h4 className="mt-5 text-white">
                                    Quiz Form
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}