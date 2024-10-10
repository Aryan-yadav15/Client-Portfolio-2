"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const LinkBox = ({ imageUrl, text }) => {
  return (
    <motion.div
      className="flex-1 bg-white rounded-xl h-16 flex flex-row justify-center overflow-hidden items-center  gap-6" // Added gap-6 for spacing
      whileHover="hover" // Hover state trigger
      transition={{ duration: 0.3 }}
    >
      {/* Motion div for the images */}
      <div className="mt-16 flex flex-row justify-center items-center gap-6 overflow-hidden">
        <motion.div
          className="flex flex-col items-center space-y-10"
          initial={{ y: 0 }} // Initial state with no movement
          variants={{
            hover: { y: -60 }, // Move images up on hover
          }}
        >
          <Image src={imageUrl} alt="Image1" width={30} height={30} />
          <Image src={imageUrl} alt="Image2" width={30} height={30} />
        </motion.div>

        {/* Motion div for the text */}
        <motion.div
          className="text-center text-2xl flex flex-col space-y-10"
          initial={{ y: -70 }} // Initial state with no movement
          variants={{
            hover: { y: 10 }, // Move text down on hover
          }}
        >
          <p>{text}</p>
          <p>"hi"</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LinkBox;
