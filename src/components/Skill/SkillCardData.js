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
        otherTechnologies: "Git, GitHub, NPM, Vite, Parcel, Babel, ESlint, Webpack, Netlify, Yarn.",
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

    };

export default Skills;
