"use client"; 

import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./_shared/AnimatedButton";

const Header = () => {
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
    <div className="w-full bg-white pl-4 pr-4 py-2 h-20 rounded-full flex justify-between items-center">
      <div className="flex1 flex justify-center items-center">
        <div
          className="bg-gray-800 rounded-full text-white flex pl-1 w-14 h-14 gap-0 flex-col justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <motion.p
            className="text-3xl mb-[-25px] font-sans"
            initial={{ rotate: 90 }} 
            animate={{ rotate: isCross ? 45 : 90 }} 
            transition={{ duration: 0.3 }} 
          >
            |
          </motion.p>
          <motion.p
            className="text-3xl mt-[-25px] font-sans"
            initial={{ rotate: 90 }} 
            animate={{ rotate: isCross ? 135 : 90 }} 
            transition={{ duration: 0.3 }} 
            style={{ marginTop: isCross ? "-5px" : "0" }} 
          >
            |
          </motion.p>
        </div>
      </div>
      <div className="flex1 text-4xl pl-28">PuneetVerma</div>
      <div className="flex1">
        <AnimatedButton {...buttonProps} />
      </div>
    </div>
  );
};

export default Header;
