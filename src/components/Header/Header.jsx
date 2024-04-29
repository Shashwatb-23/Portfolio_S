export default function Header(){
    return(
        <nav  className="head p-3 w-full bg-zinc-900 bg-opacity-85">
            <div className="heading_content">
                <ul className="nav-links flex justify-evenly align-middle">
                    <li className="nav-list"><a href="#home">Home</a></li>
                    <li className="nav-list"><a href="#about">About </a></li>
                    <li className="nav-list"><a href="#skills">Skills</a></li>
                    <li className="nav-list"><a href="#projects">Projects</a></li>
                    <li className="nav-list"><a href="#contact">Contact </a></li>
                </ul>
            </div>
        </nav>
    )
}