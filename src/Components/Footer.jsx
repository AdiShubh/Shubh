import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center text-xl p-4 bg-gray-200">
      <p>
        Made with
        <FaHeart className="text-red-600 inline-block mx-1" /> by Shubham
        Chourasia
      </p>
    </div>
  );
};

export default Footer;
