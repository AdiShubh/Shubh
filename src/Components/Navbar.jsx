// import React, { useState, useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const scrollY = window.scrollY; // Get current vertical scroll position
//     if (scrollY > 50) {
//       // If scrolled more than 50px
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`  ${
//         isScrolled
//           ? "sticky z-20 top-0  left-0 right-0 shadow-lg opacity-90  "
//           : "relative"
//       }  w-full mx-auto  bg-gray-100 shadow-md     text-gray-800 px-4 py-8  `}
//     >
//       <div className="container border border-red-700  mx-auto text-2xl   flex justify-between items-center">
//         <div className=" md:ml-20 ">
//           <ScrollLink to="hero" smooth={true}>
//             <p className="font-script   text-5xl text-yellow-500 font-medium">
//               Shubham
//             </p>
//           </ScrollLink>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             //className="focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <ul
//           className={`md:flex space-x-8 justify-center  items-center ${
//             isOpen ? "" : "hidden"
//           }`}
//         >
//           <li>
//             <ScrollLink
//               to="projects"
//               className="hover:text-yellow-500 hover:cursor-pointer "
//               smooth={true}
//             >
//               Projects
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="skills"
//               className="hover:text-yellow-500 hover:cursor-pointer"
//               smooth={true}
//             >
//               Skills
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="experience"
//               className="  hover:text-yellow-500 hover:cursor-pointer"
//               smooth={true}
//             >
//               Experience
//             </ScrollLink>
//           </li>
//           {/* <li>
//             <ScrollLink to="education" className="hover:text-blue-400">
//               Education
//             </ScrollLink>
//           </li> */}
//           <li>
//             <ScrollLink
//               to="contact"
//               className="hover:text-yellow-500 hover:cursor-pointer"
//               smooth={true}
//             >
//               Contact
//             </ScrollLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// by chat
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current vertical scroll position
    if (scrollY > 50) {
      // If scrolled more than 50px
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "sticky z-20 top-0 left-0 right-0 shadow-lg opacity-90"
          : "relative"
      } w-full bg-gray-100 text-gray-800 px-4 py-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl md:ml-20">
          <ScrollLink to="hero" smooth={true}>
            <p className="font-script text-5xl text-yellow-500 font-medium">
              Shubham
            </p>
          </ScrollLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-gray-100 md:static md:w-auto md:flex md:space-x-8 md:items-center`}
        >
          <li className="border-b border-gray-300 md:border-none">
            <ScrollLink
              to="projects"
              className="block px-4 py-2 hover:text-yellow-500 hover:cursor-pointer"
              smooth={true}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="border-b border-gray-300 md:border-none">
            <ScrollLink
              to="skills"
              className="block px-4 py-2 hover:text-yellow-500 hover:cursor-pointer"
              smooth={true}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </ScrollLink>
          </li>
          <li className="border-b border-gray-300 md:border-none">
            <ScrollLink
              to="experience"
              className="block px-4 py-2 hover:text-yellow-500 hover:cursor-pointer"
              smooth={true}
              onClick={() => setIsOpen(false)}
            >
              Experience
            </ScrollLink>
          </li>
          <li className="border-b border-gray-300 md:border-none">
            <ScrollLink
              to="contact"
              className="block px-4 py-2 hover:text-yellow-500 hover:cursor-pointer"
              smooth={true}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
