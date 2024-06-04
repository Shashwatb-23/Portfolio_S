
import SkillCard from "./SkillCard";
const Skill= () =>{
    return(
    <>
        <div className="flex justify-center">
            <h1 className="mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer"> Skills</h1>
        </div>
        {/*=================================== Frontend Dev. ===================================*/}
        <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-80 rounded-md grid">
                {/* <div className="bg-slate-200 p-3 rounded-xl bg-opacity-40 grid justify-center grid-cols-2 "> */}
                    

                        <SkillCard/>
                    
                {/* </div> */}
        </div>
    </>
    )
}

export default Skill;