const SkillCard = ({ title, icon, skills, otherTechnologies, gradient }) => {
    return (
        <div
            className={`rounded-3xl p-4 w-full md:w-1/3 shadow-lg ${gradient} mx-auto`}
        >
            <div className="flex flex-col items-center md:flex-row justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold underline text-center text-white">
                {title}
            </h3>
            <img
                src={icon}
                alt={`${title} Icon`}
                className="w-12 md:w-16 mt-2 md:mt-0"
            />
            </div>
            <ul>
            {skills.map(({ skill, rating }, idx) => (
                <div
                key={idx}
                className="bg-slate-400 bg-opacity-60 rounded-md flex justify-between items-center m-3 p-2 hover:scale-105 transition-transform hover:bg-black cursor-pointer"
                >
                <li className="list-[square] ml-2 text-sm md:text-base text-white">
                    {skill}
                </li>
                <img
                    src={`/Images/icons/${rating}`}
                    alt={skill}
                    className="w-16 md:w-20"
                />
                </div>
            ))}
            {otherTechnologies && (
                <div className="mt-4 bg-gradient-to-r from-blue-600 to-blue-950 p-2 rounded-xl">
                <h4 className="text-center text-white font-semibold underline mb-2 text-sm md:text-lg">
                    Other Technologies:
                </h4>
                <p className="text-xs md:text-sm text-white text-center">
                    {otherTechnologies}
                </p>
                </div>
            )}
            </ul>
        </div>
        );
    };
    
    const Skills = () => {
        const skillData = [
        {
            title: "Frontend Development",
            icon: "/Images/icons/UI.png",
            gradient: "bg-gradient-to-r from-slate-900 to-slate-700",
            skills: [
            { skill: "Javascript", rating: "5 star.png" },
            { skill: "React JS", rating: "4 star.png" },
            { skill: "Tailwind CSS", rating: "4 star.png" },
            { skill: "Bootstrap", rating: "3 star.png" },
            { skill: "HTML, CSS", rating: "5 star.png" },
            ],
            otherTechnologies:
            "Git, GitHub, NPM, Vite, Parcel, Babel, ESlint, Webpack, Netlify, Yarn.",
        },
        {
            title: "Backend Development",
            icon: "/Images/icons/backend.png",
            gradient: "bg-gradient-to-tl from-slate-300 to-slate-500",
            skills: [
            { skill: "Python", rating: "4 star.png" },
            { skill: "Node JS", rating: "3 star.png" },
            { skill: "Django", rating: "3 star.png" },
            { skill: "C, C++", rating: "4 star.png" },
            { skill: "Javascript", rating: "4 star.png" },
            ],
            otherTechnologies: "Rest API, Deno JS, GraphQL, MongoDB, MVC.",
        },
        {
            title: "Database Technologies",
            icon: "/Images/icons/database.png",
            gradient: "bg-gradient-to-r from-stone-500 to-stone-700",
            skills: [
            { skill: "MySQL", rating: "5 star.png" },
            { skill: "Firebase", rating: "4 star.png" },
            { skill: "MongoDB", rating: "3 star.png" },
            { skill: "Postgre SQL", rating: "3 star.png" },
            { skill: "GraphQL", rating: "3 star.png" },
            ],
        },
        ];
    
        return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {skillData.map((data, idx) => (
            <SkillCard key={idx} {...data} />
            ))}
        </div>
        );
    };
    
export default Skills;
