const Skill= () =>{
    return(
    <>
        <div className="flex justify-center">
            <h1 className="mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer"> Skills</h1>
        </div>
        {/*=================================== Frontend Dev. ===================================*/}
        <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-80 rounded-md">
                <div className="bg-slate-200 p-3 rounded-xl bg-opacity-40 grid justify-center ">
                    <div className="bg-gradient-to-tr from-sky-600 to-red-500 rounded-3xl p-4   ">
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
                            <div className="mt-4 flex bg-gradient-to-r from-blue-600 to-blue-950 p-2 rounded-xl">
                                <h4 className="cursor-default text-lg font-semibold underline">Other Technologies:</h4>
                                <p className="p-1 cursor-pointer">Git, Github, NPM, Vite, Parcel, Babel, ESlint, Webpack, Netlify, Yarn.</p>
                            </div>
                        </ul>
                    </div>
                </div>
        </div>
    </>
    )
}

export default Skill;