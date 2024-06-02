import Card from "./Card"
import data from "./data";
export default function About(){
    return(
        <>
            <div className="flex justify-center">
                <h1 className="inline-block mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer">About Me</h1>
            </div>

{/* ===================================================================================================================================== */}

            <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md hover:scale-105 transition-all ">
                <div>
                    <h1 className="text-5xl text-sky-500 font-semibold cursor-pointer">Frontend</h1>
                    <h1 className="text-5xl text-sky-500 font-semibold cursor-pointer">Developer.</h1>
                </div>
                <div className="flex justify-between gap-10">
                    <div>
                        <p className="mt-4 pr-10 mr-9 font-light cursor-default">
                        I am a skilled professional with a strong passion for software development, I&apos;ve studied intensively about advanced front-end technologies like <b className="font-bold text-cyan-300">ReactJS</b> and <b className="font-bold text-cyan-300">JavaScript (ES6+)</b>. My course in Computer Science and Information Technology has driven me to grip my expertise in <b className="font-bold text-cyan-300">HTML</b>, <b className="font-bold text-cyan-300">CSS</b>, and <b className="font-bold text-cyan-300">Tailwind CSS</b> to create an effective web applications. I posses strong skills like <b className="font-bold text-cyan-300">ReactJS</b>, <b className="font-bold text-cyan-300">JavaScript</b> , <b className="font-bold text-cyan-300">Python</b>, Django, <b className="font-bold text-cyan-300">GIT</b>, <b className="font-bold text-cyan-300">GitHub</b>, and Firebase (Database). Additionally, I know HTML, CSS (Tailwind CSS & Bootstrap), cross-browser compatibility, data structures and algorithms, RESTful APIs, debugging/testing, and using build tools and package managers.</p> 
                        <p className="mt-4 pr-10 mr-9 font-light cursor-default">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. 
                        </p>
                    </div>
                    
                    <div>
                        <img src="/Images/profile photo/2.jpg" alt="profile_pic" className="w-10/12 rounded-md ml-5 "/>
                    </div>

                </div>
            </div>

                    <h3 className="ml-28 mt-14 text-4xl font-medium cursor-pointer hover:text-blue-400">What I&apos;m Doing</h3>

            <div >

            {
            data.map((d, idx)=>{
                return(
                    <Card key={idx} img={d.img} title={d.title} desc={d.desc}/>
                )
            })}

            </div>
        </>
    )
}