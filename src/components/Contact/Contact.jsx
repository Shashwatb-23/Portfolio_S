import { Link } from "react-router-dom";
const Contact = () => {
    return(
    <>
            <h1 className="font-bold text-4xl flex justify-center mt-10 hover:text-blue-400">Contact</h1>

<div className=" mx-6 md:mx-40 rounded-2xl mt-3">
    {/* Map Section */}
    <div className=" justify-center bg-slate-400 rounded-md p-5 md:mx-60 mt-3 bg-opacity-0 w-max contents">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.86590445068!2d78.39522586953123!3d17.433172913760796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e889c2d9f5%3A0x83149deb17b1a517!2sNew%20SBH%20Colony%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500029!5e0!3m2!1sen!2sin!4v1717340763956!5m2!1sen!2sin"
            width="100%"
            height="350"
            loading="lazy"
            className="rounded-3xl grayscale"
        ></iframe>
    </div>

    {/* Contact Links Section */}
    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 py-5 text-xl md:text-2xl">
        {/* LinkedIn */}
        <div className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-950 p-3 rounded-lg hover:scale-110 transition-all flex items-center justify-center">
            <Link
                to="https://www.linkedin.com/in/shashwat-bhardwaj-73591b20b/"
                target="_blank"
                className="flex items-center"
            >
                <img
                    src="/Images/icons/linkedin.png"
                    alt="linkedin"
                    className="inline-block w-8 md:w-10 rounded-full"
                />
                <span className="ml-2">LinkedIn</span>
            </Link>
        </div>

        {/* Gmail */}
        <div className="cursor-pointer hover:scale-110 bg-gradient-to-r from-pink-950 to-gray-600 rounded-lg p-3 transition-all flex items-center justify-center">
            <Link
                to="mailto:shashwatbhardwaj3@gmail.com"
                className="flex items-center"
            >
                <img
                    src="/Images/icons/email.jfif"
                    alt="email"
                    className="inline-block w-8 md:w-10 rounded-lg"
                />
                <span className="ml-2">Gmail</span>
            </Link>
        </div>
    </div>
</div>

            
    
    </>
    )
}

export default Contact;