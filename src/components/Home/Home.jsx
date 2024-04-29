export default function Home(){
    return(
        
        <div id="home" className=" flex justify-center items-center">
            <div className="profile-container my-2.5 mx-2 px-24 py-10">
                <img src="/Images/profile photo/IMG-20230121-WA0110.jpg" alt="profile-pic" className="profile-pic w-64 rounded-2xl grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="intro p-4 m-2 rounded-lg ">
                <div className="myself">
                <h3>Hello I&#39;m</h3>
                <h2>Shashwat Bhardwaj</h2>
                <h1>Frontend Developer</h1>
                </div>
                <div className="social">
                    
                </div>
            </div>
        </div>
    )
}