import { Link } from "react-router-dom";
const Contact = () => {
    return(
    <>
            <h1 className="font-bold text-4xl flex justify-center mt-10 hover:text-blue-400">Contact </h1>
        
        <div className="bg-slate-400 bg-opacity-50 mx-40 rounded-2xl mt-3">
            <div className="grid justify-center border-cyan-400 bg-slate-400 rounded-md mx-60 mt-3 py-5 bg-opacity-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.86590445068!2d78.39522586953123!3d17.433172913760796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e889c2d9f5%3A0x83149deb17b1a517!2sNew%20SBH%20Colony%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500029!5e0!3m2!1sen!2sin!4v1717340763956!5m2!1sen!2sin" width="500" height="350" loading="lazy" className=" rounded-3xl grayscale -z-10 "></iframe>
            </div>
                    <div className="flex justify-center gap-10 pb-5 text-4xl">
                        
                        <div className=" cursor-pointer bg-gradient-to-r from-blue-600 to-blue-950 p-3 rounded-lg hover:scale-110 transition-all">
                        <Link to="https://www.linkedin.com/in/shashwat-bhardwaj-73591b20b/" target="_blank" ><img src="/Images/icons/linkedin.png" alt="linkedin" className="inline-block w-10 rounded-full" /><span className="text-xl">  LinkedIn</span></Link> 
                        </div>
                        <div className="cursor-pointer hover:scale-110 bg-gradient-to-r from-pink-950 to-gray-600 rounded-lg p-3 transition-all">
                            <Link to="mailto:shashwatbhardwaj3@gmail.com" ><img src="/Images/icons/email.jfif" alt="email" className="inline-block w-10 rounded-lg"/><span className="text-xl"> Gmail</span></Link>
                        </div>
                    </div>
        </div>
            
    
    </>
    )
}

export default Contact;