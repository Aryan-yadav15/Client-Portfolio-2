"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinkBox = ({ imageUrl, text }) => {
  return (
    <motion.div
      className="flex-1 bg-white rounded-2xl h-16 flex flex-row justify-center overflow-hidden items-center  gap-6" // Added gap-6 for spacing
      whileHover="hover" // Hover state trigger
      transition={{ duration: 0.3 }}
    >
      {/* Motion div for the images */}
      <Link href="/">
        <div className="mt-16 flex flex-row justify-center items-center gap-6 overflow-hidden">
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ y: -4 }} // Initial state with no movement
            variants={{
              hover: { y: -60 }, // Move images up on hover
            }}
          >
            <Image src={imageUrl} alt="Image1" width={30} height={30} />
            <Image
              src="/arrow.svg"
              alt="Image2"
              width={30}
              height={30}
              className="text-black "
            />
          </motion.div>

          {/* Motion div for the text */}
          <motion.div
            className="text-center text-2xl flex flex-col space-y-12 pb-1"
            initial={{ y: -70 }} // Initial state with no movement
            variants={{
              hover: { y: 10 }, // Move text down on hover
            }}
          >
            <p>Visit Link</p>
            <p>{text}</p>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LinkBox;
