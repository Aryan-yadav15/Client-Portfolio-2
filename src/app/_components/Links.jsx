import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Links = () => {
  return (
    <div className="flex flex-row gap-5 ">
      <LinkBox imageUrl="/path/to/image1.jpg" text="Text 1" />
      <div className="flex-2 bg-white rounded-xl">ji</div>
      <LinkBox imageUrl="/path/to/image3.jpg" text="Text 3" />
    </div>
  );
};

const LinkBox = ({ imageUrl, text }) => {
  return (
    <div className="flex-1 bg-white rounded-xl h-16 flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 0 }}
        whileHover={{ y: -10 }} // Move image up on hover
        transition={{ duration: 0.3 }} // Adjust duration as needed
      >
        <Image src={imageUrl} alt={text} width={40} height={40} />
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ y: 0 }}
        whileHover={{ y: 10 }} // Move text down on hover
        transition={{ duration: 0.3 }} // Adjust duration as needed
      >
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default Links;
