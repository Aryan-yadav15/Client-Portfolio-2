"use client"; 

import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ href, firstName, secondName, bgColor }) => {
  return (
    <div
      className={`border-2 text-white text-2xl rounded-full py-1 px-4 relative h-14 overflow-hidden ${bgColor}`}
    >
      <a href={href} className="h-8 mt-[4px] overflow-hidden block">
        <motion.div
          className="cursor-pointer flex flex-col justify-center items-center"
          initial={{ y: 0 }}
          whileHover={{ y: -38 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Added spring effect
        >
          <p className="w-full text-center">{firstName}</p>
          <p className="w-full text-center pt-2">{secondName}</p>
        </motion.div>
      </a>
    </div>
  );
};

export default AnimatedButton;
