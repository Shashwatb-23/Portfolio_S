import { FaLaptopCode } from "react-icons/fa6";
import { BiLogoReact } from "react-icons/bi";
import { DiDatabase } from "react-icons/di";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrTestDesktop } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";


function Card() {
    return(
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
                    <GrTestDesktop className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">Software Testing</h2>
                        <p className="">I used to test pre-build softwares and check whether software is ready for launch or not.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                    <HiMiniDevicePhoneMobile className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">Mobile Apps</h2>
                        <p className="">Professional development of applications for android.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                    <MdDesignServices className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">Web Designing  </h2>
                        <p className="">The most modern and high-quality design made at a professional level.</p>
                    </div>
                </div>
                <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                    <div className="flex justify-center">
                    <DiDatabase className="h-24 w-24 "/>

                    </div>

                    <div className="grid justify-items-center">
                        <h2 className="text-2xl font-bold text-blue-400">Database Administration</h2>
                        <p className="">Managing, securing, and taking care of the database systems is a prime responsibility.</p>
                    </div>
                </div>
        </div>
    )
}

export default Card;