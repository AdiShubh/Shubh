import React from "react";
import ParticleBackground from "./Particle/ParticleBackground";

const HeroSection = () => {
  return (
    <>
      <section id="hero" className=" md:h-[90vh] z-40 py-8   ">
        <ParticleBackground />
        <div className=" flex  container      mx-auto  h-full ">
          <div className="flex flex-col px-10   md:flex-row gap-4   md:items-center md:justify-between ">
            <div className="md:ml-8 mx-auto md:w-[50%] z-50    ">
              <h1 className="text-3xl font-semibold mb-2">Hi there, I'm </h1>
              <p className="text-6xl font-semibold mb-4">Shubham Chourasia</p>
              {/* <p className="text-3xl mb-4">Front End React Developer</p> */}
              <p className="text-2xl mt-2 mb-2">
                A passionate <span>Front End React Developer</span> with a focus
                on creating beautiful and user-friendly websites.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded mt-4">
                Download Resume
              </button>
            </div>
            <div className="md:mr-8 mx-auto  md:w-[40%]   ">
              <img
                src="profileimg02.png"
                alt="Your Image"
                className="rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] border-4 w-[95%]  bg-yellow-200 z-50   border-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
