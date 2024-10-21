import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section id="contact" className=" py-16">
      <div className="container mx-auto px-4">
        <p className=" text-center text-2xl">Get in Touch</p>
        <h2 className="text-5xl font-semibold text-center mb-8">Contact Me</h2>
        <div className=" w-fit mx-auto flex flex-col md:flex-row items-center justify-center p-8 gap-8 rounded-xl  border-2 border-gray-400">
          <div className=" flex justify-center  items-center gap-2  ">
            <AiTwotoneMail className="text-2xl" />
            <span className="text-xl text-gray-700">
              chourasia.shubham29@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2  ">
            <FiPhone className="text-2xl" />
            <span className="text-xl text-gray-700">+91-9028867126</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
