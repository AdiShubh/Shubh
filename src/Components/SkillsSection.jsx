import React from "react";
import SkillCard from "./Cards/SkillCard";
import { Skills } from "../Data/data";

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-100 py-5">
      <div className="container   mx-auto text-center   px-4  ">
        <p className="text-2xl">Explore my </p>
        <h2 className="text-5xl font-semibold mb-4">Skills</h2>
        <div className="w-11/12 mx-auto  rounded-lg  flex flex-wrap justify-center gap-6 md:gap-8 p-11 ">
          <SkillCard skills={Skills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
