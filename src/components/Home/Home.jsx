import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom"
export default function Home(){
    return(
    <>    
        <div id="home" className="flex flex-col lg:flex-row justify-center items-center">
    <div className="my-10 mx-2 px-8 md:px-16 lg:px-24 py-10">
        <img
        src="/Images/profile photo/IMG-20230121-WA0110.jpg"
        alt="profile-pic"
        className="w-32 md:w-48 lg:w-64 rounded-2xl grayscale hover:grayscale-0 transition-all"
        />
    </div>

    <div className="p-4 m-2 rounded-lg bg-zinc-900 text-lg md:text-xl">
        <div className="flex text-center flex-col justify-center gap-2">
        <h3 className="text-sm md:text-base">Hello I&#39;m</h3>
        <h2 className="text-lg md:text-2xl">Shashwat Bhardwaj</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Frontend Web Developer</h1>
        </div>

        <div className="flex mt-5 justify-evenly text-3xl md:text-4xl">
        <div className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-950 p-2 md:p-3 rounded-lg hover:scale-110 transition-all">
            <Link to="https://www.linkedin.com/in/shashwat-bhardwaj-73591b20b/" target="_blank">
            <FaLinkedin />
            </Link>
        </div>
        <div className="cursor-pointer bg-gradient-to-r from-gray-400 to-gray-800 p-2 md:p-3 rounded-lg hover:scale-110 transition-all">
            <Link to="https://github.com/Shashwatb-23" target="_blank">
            <FaGithub />
            </Link>
        </div>
        <div className="cursor-pointer bg-gradient-to-r from-green-500 to-green-900 p-2 md:p-3 rounded-lg hover:scale-110 transition-all">
            <Link to="https://www.hackerrank.com/profile/shashwatbhardwa1" target="_blank">
            <SiHackerrank />
            </Link>
        </div>
        <div className="cursor-pointer bg-gradient-to-r from-cyan-300 to-teal-800 p-2 md:p-3 rounded-lg hover:scale-110 transition-all">
            <Link to="https://app.netlify.com/teams/shashwatb-23/overview" target="_blank">
            <SiNetlify />
            </Link>
        </div>
        </div>
    </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-center gap-5 md:gap-10 mx-auto mt-10 bg-gradient-to-r from-blue-600 to-blue-950 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 py-3 opacity-80 rounded-lg">
    <button className="m-1 p-1.5 px-3 sm:px-5 text-black font-bold bg-gradient-to-tl from-white to-cyan-950 rounded-lg hover:scale-110 transition-all">
        <a
        href="https://drive.google.com/file/d/1HhMWdkRJ2faAn4d-L6tQXoZTWfXkns5s/view?usp=sharing"
        target="_blank"
        >
        Resume
        </a>
    </button>
    <button className="m-1 p-1.5 px-3 sm:px-5 text-black font-bold bg-gradient-to-tl from-white to-cyan-950 rounded-lg hover:scale-110 transition-all">
        <Link to="/contact">Contact-Info</Link>
    </button>
    </div>


    </>
    )
}