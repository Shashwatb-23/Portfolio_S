import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { SiNetlify } from "react-icons/si";

export default function Home(){
    return(
        
        <div id="home" className=" flex justify-center items-center">
            <div className=" my-2.5 mx-2 px-24 py-10">
                <img src="/Images/profile photo/IMG-20230121-WA0110.jpg" alt="profile-pic" className=" w-64 rounded-2xl grayscale hover:grayscale-0 transition-all" />
            </div>

            <div className=" p-4 m-2 rounded-lg bg-zinc-900  text-xl hover:scale-105 transition-all">
                <div className=" flex text-center flex-col justify-center gap-2">
                <h3 className="text-base">Hello I&#39;m</h3>
                <h2 className=" text-2xl">Shashwat Bhardwaj</h2>
                <h1 className=" text-4xl">Frontend Web Developer</h1>
                </div>

                <div className=" flex mt-5 justify-evenly text-4xl ">
                    <div className=" cursor-pointer bg-gradient-to-r from-blue-600 to-blue-950 p-3 rounded-lg">
                        <a href="https://www.linkedin.com/in/shashwat-bhardwaj-73591b20b/"><FaLinkedin /></a> 
                    </div>
                    <div className=" cursor-pointer bg-gradient-to-r from-gray-400 to-gray-800 p-3 rounded-lg">
                        <a href="https://github.com/Shashwatb-23"><FaGithub /></a>    
                    </div>
                    <div className=" cursor-pointer bg-gradient-to-r  from-green-500 to-green-900 p-3 rounded-lg">
                        <a href=""><SiHackerrank /></a>    
                    </div>
                    <div className=" cursor-pointer bg-gradient-to-r from-cyan-300 to-teal-800 p-3 rounded-lg">
                        <a href="https://app.netlify.com/teams/shashwatb-23/overview"><SiNetlify /></a>    
                    </div>

                </div>

            </div>

        </div>
    )
}