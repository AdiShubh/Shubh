import React from "react";
import IconCloud from "@/components/ui/icon-cloud";
import { slugs } from "./../Data/IconSlugs";

import Typewriter from "typewriter-effect";
import { resumeURL } from "../Data/data";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section id="hero" className=" md:h-[90vh] z-40 py-8   ">
        {/* <ParticleBackground /> */}
        <div className=" flex  container      mx-auto  h-full ">
          <div className="flex flex-col px-10   md:flex-row gap-4   md:items-center md:justify-between ">
            <div className="md:ml-8 mx-auto md:w-[50%]  bg-white    ">
              <h1 className="text-3xl font-semibold mb-2 text-gray-600">
                Hi there, I'm{" "}
              </h1>

              <p className="text-6xl  font-semibold mb-4">
                <Typewriter
                  options={{
                    strings: ["Shubham Chourasia"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </p>

              <p className=" text-2xl mt-2  mb-2 text-gray-500">
                A passionate
                <span className=" text-yellow-400 text-2xl mx-2 font-semibold">
                  Front End React Developer
                </span>
                with a focus on creating beautiful and user-friendly
                web-applications.
              </p>
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 font-semibold hover:bg-yellow-500 text-xl text-white px-6 py-4 rounded-xl mt-4 inline-block"
              >
                Check Resume
              </a>
            </div>
            <div className="md:mr-8 mx-auto  md:w-[40%]   ">
              {/* <img
                src="profileimg02.png"
                alt="Your Image"
                className="rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] border-4  w-[87%]  bg-yellow-200 z-50   border-yellow-500"
              /> */}
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
