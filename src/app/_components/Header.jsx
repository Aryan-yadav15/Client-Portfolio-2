"use client"; 

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./_shared/AnimatedButton";

const Header = ({ aboutRef, myWorkRef, myCvRef, expRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const buttonProps = {
    href: "#contact",
    firstName: "Contact Me",
    secondName: "Today",
    bgColor: "bg-gray-800", 
  };

  const [isCross, setIsCross] = useState(false);

  const handleClick = () => {
    setIsCross(!isCross);
  };

  return (
    <div className="relative w-full bg-white px-4 py-2 h-20 rounded-full flex justify-between items-center ">
      {/* Left side with clickable icon */}
      <div className="flex justify-center items-center">
        <div
          className="bg-gray-800 rounded-full text-white flex w-12 h-12 sm:w-14 sm:h-14 gap-0 flex-col justify-center items-center cursor-pointer "
          onClick={handleClick}
        >
          <motion.p
            className="text-2xl sm:text-3xl mb-[-20px] sm:mb-[-25px] font-sans ml-2"
            initial={{ rotate: 90 }} 
            animate={{ rotate: isCross ? 45 : 90 }} 
            transition={{ duration: 0.3 }} 
          >
            |
          </motion.p>
          <motion.p
            className="text-2xl sm:text-3xl mt-[-20px] sm:mt-[-25px] font-sans ml-2"
            initial={{ rotate: 90 }} 
            animate={{ rotate: isCross ? 135 : 90 }} 
            transition={{ duration: 0.3 }} 
            style={{ marginTop: isCross ? "-5px" : "0" }} 
          >
            |
          </motion.p>
        </div>

        {/* Modal that opens when cross is clicked */}
        <AnimatePresence>
          {isCross && (
            <motion.div
              className="absolute top-20 left-0 bg-gray-900 text-white w-[12rem] h-[20rem] p-4 rounded-md shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-5 text-3xl ">
                <li>
                  <a
                    onClick={() => scrollToSection(aboutRef)}
                    className="hover:underline cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection(myWorkRef)}
                    className="hover:underline cursor-pointer"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection(myCvRef)}
                    className="hover:underline cursor-pointer"
                  >
                    My CV
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection(expRef)}
                    className="hover:underline cursor-pointer"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Center with name */}
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin ml-20 text-center flex-1">
        PuneetVerma
      </div>

      {/* Right side with button */}
      <div className="hidden sm:flex"> {/* Hide the button on very small screens */}
        <AnimatedButton {...buttonProps} />
      </div>
    </div>
  );
};

export default Header;
