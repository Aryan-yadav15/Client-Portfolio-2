"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({
  href,
  firstName,
  secondName,
  bgColor = "bg-blue-500",  // Default background color
  textColor = "text-white", // Default text color
  borderColor = "", // Default border color
  borderWidth = "border-2", // Default border width
}) => {
  return (
    <div
      className={`${borderWidth} ${borderColor} ${textColor} text-lg sm:text-xl lg:text-2xl rounded-full py-1 px-4 sm:px-6 lg:px-8 relative h-12 overflow-hidden ${bgColor}`}
    >
      <a href={href} className="overflow-hidden block">
        <motion.div
          className="cursor-pointer flex flex-col justify-center items-center"
          initial={{ y: 0 }}
          whileHover={{ y: -38 }} // Keep this consistent with the button's height
          transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring effect for smooth transitions
        >
          <p className="w-full text-center">{firstName}</p>
          <p className="w-full text-center pt-1 sm:pt-2">{secondName}</p>
        </motion.div>
      </a>
    </div>
  );
};

export default AnimatedButton;
