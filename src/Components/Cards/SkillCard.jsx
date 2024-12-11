import React from "react";

const SkillCard = ({ skills }) => {
  return (
    <>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center border border-gray-500 gap-2 py-4 px-8 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          {/* Fixed size container for icons */}
          <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain"
            />
          </div>

          <p className="text-lg text-center font-medium max-w-24 mt-2 ">
            {skill.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default SkillCard;
