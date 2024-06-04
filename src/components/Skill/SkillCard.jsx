const SkillCard = () => {
    
    return(
        <>
        {/* =================================== Frontend Dev Card ===================================*/}    

        <div className=" flex">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-4 m-3 ">
                        <div className="flex justify-center">
                            <h3 className="text-4xl font-bold p-2 underline cursor-pointer">FRONTEND DEVELOPMENT</h3>
                            <img src="/Images/icons/UI.png" alt="" className="w-16 p-2"/>
                        </div>
                        <ul className="">
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Javascript</li>
                                <span className="justify-items-center"><img src="/Images/icons/5 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">React JS</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Tailwind CSS</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Bootstrap</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">HTML, CSS</li>
                                <span className="justify-items-center"><img src="/Images/icons/5 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="mt-4 flex bg-gradient-to-r from-blue-600 to-blue-950 p-2 rounded-xl flex-col">
                                <h4 className="cursor-default text-lg font-semibold underline flex justify-center">Other Technologies:</h4>
                                <p className="p-1 cursor-pointer">Git, Github, NPM, Vite, Parcel, Babel, ESlint, Webpack, Netlify, Yarn.</p>
                            </div>
                        </ul>
            </div>

        {/* =================================== Backend Dev Card ===================================*/}    

            <div className="bg-gradient-to-tl from-slate-300 to-slate-500 rounded-3xl p-4 m-3 ">
                        <div className="flex justify-center">
                            <h3 className="text-4xl font-bold p-2 underline cursor-pointer">BACKEND DEVELOPMENT</h3>
                            <img src="/Images/icons/backend.png" alt="" className="w-20 p-2"/>
                        </div>
                        <ul className="">
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Python</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Node JS</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Django</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">C, C++</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Javascript</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="mt-4 flex bg-gradient-to-r from-blue-600 to-blue-950 p-2 rounded-xl flex-col">
                                <h4 className="cursor-default text-lg font-semibold underline flex justify-center">Other Technologies:</h4>
                                <p className="p-1 cursor-pointer">Rest API, Deno JS, GraphQL, MongoDB, MVC.</p>
                            </div>
                        </ul>
            </div>
        
        {/* =================================== Database Dev Card ===================================*/}    

            <div className="bg-gradient-to-r from-stone-500 to-stone-700 rounded-3xl p-4 m-3 ">
                        <div className="flex justify-center">
                            <h3 className="text-4xl font-bold p-2 underline cursor-pointer">Database Technologies</h3>
                            <img src="public/Images/icons/database.png" alt="" className="w-16 p-2"/>
                        </div>
                        <ul className="">
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">MySQL</li>
                                <span className="justify-items-center"><img src="/Images/icons/5 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Firebase</li>
                                <span className="justify-items-center"><img src="/Images/icons/4 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">MongoDB</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">Postgre SQL</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            <div className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between m-3 hover:scale-105 transition-all hover:bg-black cursor-pointer">
                                <li className="list-[square] ml-6 text-xl p-1 font-medium">GraphQL</li>
                                <span className="justify-items-center"><img src="/Images/icons/3 star.png" alt="star" className="w-32 p-2"/></span>
                            </div>
                            
                        </ul>
            </div>

        </div>
    </>
    )
}


export default SkillCard;