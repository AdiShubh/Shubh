const ProjectCard = ({ project, className }) => {
  return (
    <div className=" p-10 rounded-3xl bg-gray-50 mb-10  border-2 border-gray-200">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-60 object-fit rounded-2xl border border-gray-200"
      />
      <h1 className="text-2xl text-center my-2">{project.name}</h1>
      <div className="flex flex-wrap justify-center h-20 gap-4 my-3">
        {project.tech.map((tag, index) => (
          <div key={index} className="relative group">
            <img src={tag.icon} alt={tag.name} className="w-8 h-8" />
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {tag.name}
            </div>
          </div>
        ))}
      </div>

      {/* <p className="text-gray-500 text-justify h-44 border">
        {project.description}
      </p> */}
      <div className="flex justify-center gap-8">
        <button
          onClick={() => window.open(project.link, "_blank")}
          className=" border-2 border-yellow-300 rounded-3xl   hover:bg-yellow-300 hover:text-white hover:font-semibold text-gray-700 px-4 py-2 w-40  mt-4"
        >
          Live Demo
        </button>
        <button className="border-2 border-yellow-300 hover:bg-yellow-300 hover:text-white hover:font-semibold text-gray-700 px-4 py-2 w-40  mt-4 rounded-3xl">
          Github
        </button>
      </div>
    </div>
    //</div>
  );
};

export default ProjectCard;
