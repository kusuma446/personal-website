export default function AboutMe() {
    return (
       
    <div id="Me" className="bg-gray-800 relative py-10">
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
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img className="w-full" src="nextjs2.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                NEXT JS
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                Next.js is a framework built on top of React, a JavaScript library for building user interfaces. It provides a foundation for creating web applications, handling tooling, configuration, and offering additional features and optimizations. 
                            </p>
                        </div>
                    </div>
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img className="w-full" src="typescript.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                TYPESCRIPT
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="shadow-lg">
                        <div className="flex flex-col items-center py-10">
                            <div className="h-10 w-10">
                                <img className="w-full" src="react.svg"/>
                            </div>
                            <h4 className="mt-5 text-white">
                                REACT
                            </h4>
                            <p className="text-center font-extralight text-sm mt-2">
                                React also known as React.js or ReactJS is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}