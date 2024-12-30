import projects from "./P_data";

const ProjectCard = ({ title, p_img, description, link }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className=" text-gray-800 text-xl font-bold mb-2 cursor-default underline">{title}</h3>
            <img src={p_img}  alt="" className="h-28 w-28 text-white rounded-md  mx-auto my-2"/>
            <p className="text-gray-600 mb-4 cursor-default">{description}</p>
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-300"
            >
            View Project
            </a>
        </div>
        );
    };
    
    const Projects = () => {
        return (
        <>
            <h2 className=" mt-10 text-4xl font-bold hover:text-blue-400 cursor-pointer flex justify-center">My Projects</h2>
        
            <section className=" bg-slate-600 mx-20 p-5 pl-7 mt-8 bg-opacity-80 rounded-md">
                <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        p_img={project.p_img}
                        description={project.description}
                        link={project.link}
                    />
                    ))}
                </div>
                </div>
            </section>
        </>
        );
    };

export default Projects;