import Card from "./Card";
import data from "./data";

    export default function About() {
    return (
        <>
            {/* Title Section */}
            <div className="flex justify-center">
                <h1 className="inline-block mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer">
                About Me
                </h1>
            </div>

            {/* About Section */}
            <div className="bg-slate-600 mx-4 md:mx-20 p-5 md:p-8 mt-8 bg-opacity-80 rounded-md">
                <div>
                <h1 className="text-4xl md:text-5xl text-sky-500 font-semibold cursor-pointer">
                    Frontend Developer.
                </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 mt-6">
            
                    <div>
                        <p className="mt-4 pr-2 md:pr-10 font-light cursor-default">
                        I am a skilled professional with a strong passion for software development. I've studied intensively about advanced front-end technologies like{" "}
                        <b className="font-bold text-cyan-300">ReactJS</b> and{" "}
                        <b className="font-bold text-cyan-300">JavaScript (ES6+)</b>. My
                        course in Computer Science and Information Technology has driven
                        me to grip my expertise in{" "}
                        <b className="font-bold text-cyan-300">HTML</b>,{" "}
                        <b className="font-bold text-cyan-300">CSS</b>, and{" "}
                        <b className="font-bold text-cyan-300">Tailwind CSS</b> to create
                        effective web applications. I possess strong skills like{" "}
                        <b className="font-bold text-cyan-300">ReactJS</b>,{" "}
                        <b className="font-bold text-cyan-300">JavaScript</b>,{" "}
                        <b className="font-bold text-cyan-300">Python</b>, Django,{" "}
                        <b className="font-bold text-cyan-300">GIT</b>,{" "}
                        <b className="font-bold text-cyan-300">GitHub</b>, and Firebase
                        (Database). Additionally, I know HTML, CSS (Tailwind CSS &
                        Bootstrap), cross-browser compatibility, data structures and
                        algorithms, RESTful APIs, debugging/testing, and using build
                        tools and package managers.
                        </p>
                        <p className="mt-4 pr-2 md:pr-10 font-light cursor-default">
                        My job is to build your website so that it is functional and
                        user-friendly but at the same time attractive. Moreover, I add a
                        personal touch to your product and make sure it is eye-catching
                        and easy to use. My aim is to bring across your message and
                        identity in the most creative way.
                        </p>
                    </div>

                    <div>
                        <img
                        src="/Images/profile photo/2.jpg"
                        alt="profile_pic"
                        className="w-full md:w-10/12 rounded-md mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* What I'm Doing Section */}
            <h3 className="text-center mt-14 text-4xl font-bold cursor-pointer hover:text-blue-400">
                What I&apos;m Doing
            </h3>

            {/* Custom Carousel */}
            <div className="w-full md:w-4/5 mx-auto mt-10 flex overflow-x-auto gap-6 py-4 px-6">
                {data.map((d, idx) => (
                    <div
                    key={idx}
                    className="min-w-[250px] md:min-w-[300px] w-min bg-slate-700 rounded-lg shadow-lg p-4 flex-shrink-0"
                    >
                    <img
                        src={d.img}
                        alt={d.title}
                        className="h-40 w-24 object-contain m-auto rounded-md"
                    />
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{d.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{d.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
    }
