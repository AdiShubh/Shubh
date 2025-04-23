import React from "react";
import { projects } from "../Data/data";
import ProjectCard from "./Cards/ProjectCard";
import ProjectsComingSoon from "@/Components/Cards/ProjectsComingSoon.jsx";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container mx-auto  ">
        <p className="text-center text-2xl">Explore my recent</p>
        <h2 className="text-5xl font-semibold text-center mb-8">Projects</h2>

        {/* Flex container to hold project cards */}
        <div className=" flex flex-col md:flex-row md:flex-wrap  md:gap-4    ">
          {projects.map((project, index) => (
            <div key={project.id} className=" w-11/12 md:w-[30%] mx-auto ">
              <ProjectCard project={project} />
            </div>
          ))}
          <div className=" w-11/12 md:w-[30%] mx-auto ">
            {" "}
            <ProjectsComingSoon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
