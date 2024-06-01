import { FaLaptopCode } from "react-icons/fa6";
import { BiLogoReact } from "react-icons/bi";

export default function About(){
    return(
        <>
            <div className="flex justify-center">
                <h1 className="inline-block mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer">About Me</h1>
            </div>

{/* ===================================================================================================================================== */}

            <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md hover:scale-105 transition-all">
                <div>
                    <h1 className="text-5xl text-sky-500 font-semibold cursor-pointer">Frontend</h1>
                    <h1 className="text-5xl text-sky-500 font-semibold cursor-pointer">Developer.</h1>
                </div>
                <div className="flex justify-between gap-10">
                    <div>
                        <p className="mt-4 pr-10 mr-9 font-light cursor-default">
                        I am a skilled professional with a strong passion for software development, I&apos;ve studied intensively about advanced front-end technologies like <b className="font-bold text-cyan-300">ReactJS</b> and <b className="font-bold text-cyan-300">JavaScript (ES6+)</b>. My course in Computer Science and Information Technology has driven me to grip my expertise in <b className="font-bold text-cyan-300">HTML</b>, <b className="font-bold text-cyan-300">CSS</b>, and <b className="font-bold text-cyan-300">Tailwind CSS</b> to create an effective web applications. I posses strong skills like <b className="font-bold text-cyan-300">ReactJS</b>, <b className="font-bold text-cyan-300">JavaScript</b> , <b className="font-bold text-cyan-300">Python</b>, Django, <b className="font-bold text-cyan-300">GIT</b>, <b className="font-bold text-cyan-300">GitHub</b>, and Firebase (Database). Additionally, I know HTML, CSS (Tailwind CSS & Bootstrap), cross-browser compatibility, data structures and algorithms, RESTful APIs, debugging/testing, and using build tools and package managers. and I am deeply interested in advanced front-end development, full-stack development, and engaging in innovative projects that challenge my problem-solving skills. I am passionate about learning new technologies and mentoring others, aiming to develop applications that are functional, intuitive, and engaging, blending creativity with technical expertise. 
                        </p>
                    </div>
                    
                    <div>
                        <img src="public/Images/profile photo/2.jpg" alt="profile_pic" className="w-10/12 rounded-md ml-5 "/>
                    </div>

                </div>
            </div>

                    <h3 className="ml-28 mt-14 text-4xl font-medium cursor-pointer hover:text-blue-400">What I&apos;m Doing</h3>

            <div className="grid justify-center justify-items-center grid-cols-1 ">
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                        <FaLaptopCode className="h-24 w-24 "/>
                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">Web Development</h2>
                        <p className="">High-quality development of sites at professional level.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                        <BiLogoReact className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">React Development</h2>
                        <p className="">My role is to create a responsive webstie using React.js as react is the most widely used JavaScript library.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                        <BiLogoReact className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">React Development</h2>
                        <p className="">My role is to create a responsive webstie using React.js as react is the most widely used JavaScript library.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                        <BiLogoReact className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">React Development</h2>
                        <p className="">My role is to create a responsive webstie using React.js as react is the most widely used JavaScript library.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                        <BiLogoReact className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">React Development</h2>
                        <p className="">My role is to create a responsive webstie using React.js as react is the most widely used JavaScript library.</p>
                    </div>
                </div>
            </div>
        </>
    )
}