import { BsFillMoonStarsFill } from "react-icons/bs"

export default function Header(){
    return(
        <nav  className="head p-3 w-full bg-zinc-900 bg-opacity-85">
            <div className="heading_content ">
                <ul className="nav-links flex justify-evenly align-middle">
                    <li className=" text-lg font-bold  hover:scale-150 transition-all"><a href="#home">Home</a></li>
                    <li className=" text-lg font-bold  hover:scale-150 transition-all"><a href="#about">About </a></li>
                    <li className=" text-lg font-bold  hover:scale-150 transition-all"><a href="#skills">Skills</a></li>
                    <li className=" text-lg font-bold  hover:scale-150 transition-all"><a href="#projects">Projects</a></li>
                    <li className=" text-lg font-bold  hover:scale-150 transition-all"><a href="#contact">Contact </a></li>
                    <li className=" text-lg font-bold cursor-pointer pt-1 hover:scale-150 transition-all "><BsFillMoonStarsFill /></li>
                </ul>
            </div>
        </nav>
    )
}