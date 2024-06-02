const Contact = () => {
    return(
        <>
                <h1 className="font-bold text-3xl flex justify-center mt-5 hover:text-blue-400">Contact </h1>
            
            <div className="bg-slate-400 bg-opacity-50 mx-40 rounded-2xl">
                <div className="grid justify-center border-cyan-400 bg-slate-400 rounded-md mx-60 mt-3 py-5 bg-opacity-0">
                    <h3 className="bg-black rounded-md p-2 my-3 bg-opacity-60 ">Email: shashwatbhardwaj3@gmail.com</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60904.86590445068!2d78.39522586953123!3d17.433172913760796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e889c2d9f5%3A0x83149deb17b1a517!2sNew%20SBH%20Colony%2C%20Himayatnagar%2C%20Hyderabad%2C%20Telangana%20500029!5e0!3m2!1sen!2sin!4v1717340763956!5m2!1sen!2sin" width="600" height="450" loading="lazy" className=" rounded-2xl"></iframe>
                </div>
            </div>
                <div className="bg-blue-400 mx-48 rounded-xl bg-opacity-40 my-8">
                    <h2 className="text-2xl font-bold pl-10 mt-6 pt-5 cursor-default">Contact Form</h2>
                        <div className="flex justify-center gap-10 pb-5">
                            <input type="text" placeholder="Name" className="text-black p-2 rounded-md"/>
                            <input type="text" placeholder="Email" className="text-black p-2 rounded-md"/>
                        </div>
                    
                        <div className="flex justify-center gap-10 pb-5 ">
                            <textarea placeholder="Your Message" className="text-black px-48 pb-20 border-none border-2 rounded-md"></textarea>
                        </div>
                </div>
        
        </>
    )
}

export default Contact;