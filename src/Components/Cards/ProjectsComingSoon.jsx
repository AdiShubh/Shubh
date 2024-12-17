

const ProjectsComingSoon =()=> {

    return (
        <div className=" p-10 rounded-3xl bg-gray-50 mb-10  border-2 border-yellow-400">
            <img
                src={"https://res.cloudinary.com/myblogs/image/upload/v1734457860/rb_5070_l1cllc.png"}
                alt={"comingSoonImage"}
                className="w-full h-60 object-fit rounded-2xl border border-gray-200"
            />

            <h1 className="text-2xl text-yellow-500 text-center my-2 mb-20 text-wrap ">More Projects Coming Soon......</h1>

            {/*<div className="flex flex-wrap justify-center gap-4 my-3">*/}
            {/*    {project.tech.map((tag, index) => (*/}
            {/*        <div key={index}>*/}
            {/*            <img src={tag.icon} alt="test" className="w-8 h-8"/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            {/* <p className="text-gray-500 text-justify h-44 border">
            {project.description}
             </p> */}
            {/*<div className="flex justify-center gap-8">*/}
            {/*    <button*/}
            {/*        onClick={() => window.open(project.link, "_blank")}*/}
            {/*        className=" border-2 border-yellow-300 rounded-3xl   hover:bg-yellow-300 hover:text-white hover:font-semibold text-gray-700 px-4 py-2 w-40  mt-4"*/}
            {/*    >*/}
            {/*        Live Demo*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        className="border-2 border-yellow-300 hover:bg-yellow-300 hover:text-white hover:font-semibold text-gray-700 px-4 py-2 w-40  mt-4 rounded-3xl">*/}
            {/*        Github*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>)

}

export default ProjectsComingSoon;