export default function AboutMe() {
    return (
       
    <div className="bg-gray-800 relative py-10">
        <div className="mx-auto flex items-center w-9/12 mt-0">
            <div>
                <div className="flex place-items-center mt-5">
                    <svg className="stroke-gray-400 stroke-2 h-5 w-5">
                        <line x1="0" y1="10px" x2="10px" y2="10px"/>
                    </svg>
                    <h2 className="uppercase text-xs font-extralight tracking-widest text-white">
                        About me
                    </h2>
                </div>
                <div className="mb-10">
                    <p className="font-light mr-3">
                        I graduated from Biology Udayana University, i have interest for coding and now i'm still learing to developing a website. I dont have any coding expirience, i start from bottom. 
                    </p>
                </div>
                <div className="flex justify-center items-center">
                <h3 className="font-bold text-3xl text-white">CORE SKILL</h3>                  
                </div>
                <div className="grid grid-cols-3 gap-10 py-10">
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img className="w-full" src="javascript.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                JAVASCRIPT
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                Scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else
                            </p>
                        </div>
                    </div>
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img src="css.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                CSS
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                Computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).
                            </p>
                        </div>
                    </div>
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img src="html.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                HTML
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                Programming language that defines the structure and meaning of content on a web page. It's the foundation of the web, and is used by all major web browsers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}