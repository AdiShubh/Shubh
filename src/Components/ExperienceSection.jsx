import React from "react";
import { experienceElements } from "../Data/data";
import { ReactComponent as WorkIcon } from "../assets/icons/work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceSection = () => {
  console.log(experienceElements);
  return (
    <section id="experience" className="bg-gray-100 py-5 ">
      <div className="container mx-auto  p-2">
        <p className="text-center text-2xl">Explore my recent</p>
        <h2 className="text-5xl font-semibold text-center mb-8">Experience</h2>

        {/* Experience items */}
        <div>
          <VerticalTimeline lineColor="#9ca3af">
            {experienceElements.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={<WorkIcon />}
                className="vertical-timeline-element--work "
                contentStyle={{
                  backgroundColor: "white",
                  border: "#9ca3af 1px solid",
                }}
                iconStyle={{
                  backgroundColor: "#d1d5db",
                }}
                contentArrowStyle={{ borderRight: "7px solid  #9ca3af" }}
              >
                <h3 className="vertical-timeline-element-title text-2xl">
                  {experience.title}
                </h3>

                <h3 className="vertical-timeline-element-title  text-xl">
                  {experience.company}
                </h3>

                <h5 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h5>
                {/* <p id="description">{experience.description}</p> */}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
