import { Link } from "react-router-dom"
export default function Header(){
    return(
        <nav  className="head p-3 w-full bg-zinc-900 bg-opacity-85 sticky top-0">
            <div className="heading_content ">
                <ul className="nav-links flex justify-evenly align-middle">
                    <Link to="/">
                        <li className=" text-lg font-bold  hover:scale-150 transition-all">
                                Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className=" text-lg font-bold  hover:scale-150 transition-all">
                                About
                        </li>   
                    </Link>
                    <Link to="/skill">
                        <li className=" text-lg font-bold  hover:scale-150 transition-all">
                                Skills
                        </li>
                    </Link>
                    <Link to="/project">
                        <li className=" text-lg font-bold  hover:scale-150 transition-all">
                                Projects
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className=" text-lg font-bold  hover:scale-150 transition-all">
                                Contact
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}