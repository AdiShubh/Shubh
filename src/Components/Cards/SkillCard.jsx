import React from "react";

const SkillCard = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center   border border-gray-500 gap-2 py-4 px-8 rounded-lg  hover:bg-gray-200 transition duration-300"
        >
          <img
            src={skill.icon}
            alt="test"
            className="w-20 h-20 object-contain  "
          />

          <p className="text-lg text-center  font-medium max-w-28 mt-2">
            {skill.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default SkillCard;
