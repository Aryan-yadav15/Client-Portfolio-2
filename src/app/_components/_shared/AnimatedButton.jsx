"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // Import next/link for internal navigation

const AnimatedButton = ({
  href,
  firstName,
  secondName,
  bgColor = "bg-blue-500",  // Default background color
  textColor = "text-white", // Default text color
  borderColor = "", // Default border color
  borderWidth = "border-2", // Default border width
  isExternal = false, // Flag to handle external links
}) => {
  return (
    <div
      className={`${borderWidth} ${borderColor} ${textColor} text-lg sm:text-xl lg:text-2xl rounded-full py-1 px-4 sm:px-6 lg:px-8 relative h-12 overflow-hidden ${bgColor}`}
    >
      {isExternal ? (
        // For external links or downloads
        <Link href={href} target="_blank" rel="noopener noreferrer" className="overflow-hidden block">
          <motion.div
            className="cursor-pointer flex flex-col justify-center items-center"
            initial={{ y: 0 }}
            whileHover={{ y: -38 }} // Adjust height based on button size
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="w-full text-center">{firstName}</p>
            <p className="w-full text-center pt-1 sm:pt-2">{secondName}</p>
          </motion.div>
        </Link>
      ) : (
        // For internal links
        <Link href={href}>
          <div className="overflow-hidden block">
            <motion.div
              className="cursor-pointer flex flex-col justify-center items-center"
              initial={{ y: 0 }}
              whileHover={{ y: -38 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <p className="w-full text-center">{firstName}</p>
              <p className="w-full text-center pt-1 sm:pt-2">{secondName}</p>
            </motion.div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default AnimatedButton;
