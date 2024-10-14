import Image from "next/image";
import React from "react";
import LinkBox from "./_shared/LinkBox";

const Footer = ({ aboutRef, myWorkRef, myCvRef, expRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="w-full bg-gray-950 flex flex-col p-10 justify-center items-center rounded-t-[24px]">
      <h1 className="text-center text-5xl md:text-6xl text-white">
        Ready to Collaborate
      </h1>
      <p className="p-4 text-lg md:text-xl text-white">
        Lets drop your idea here
      </p>
      <div className="w-[90%] max-w-[20rem] mr-6 rounded-xl flex items-center pl-4">
        <LinkBox
          imageUrl="/yahoo.png"
          text="Mail me"
          href="mailto:puneetverma1@yahoo.com?subject=Contact&body=Hello!" // Customize the email address, subject, and body
        />
      </div>
      <div className="flex flex-col text-center lg:flex-row pt-10 text-white gap-10 text-lg md:text-xl">
        <a onClick={() => scrollToSection(aboutRef)}>
          <p className="hover:text-gray-400 cursor-pointer">About</p>
        </a>
        <a onClick={() => scrollToSection(myCvRef)}>
          <p className="hover:text-gray-400 cursor-pointer">Insight</p>
        </a>
        <a onClick={() => scrollToSection(expRef)}>
          <p className="hover:text-gray-400 cursor-pointer">Experience</p>
        </a>
        <a onClick={() => scrollToSection(myWorkRef)}>
          <p className="hover:text-gray-400 cursor-pointer">Work</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
