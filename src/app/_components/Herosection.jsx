import React from "react";
import AnimatedButton from "./_shared/AnimatedButton";

const Herosection = ({ myCvRef }) => {
  const buttonProps = {
    href: "#contact",
    firstName: "Explore My",
    secondName: "CV",
    bgColor: "bg-gray-800",
  };
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white rounded-3xl py-10 flex flex-col items-center justify-center">
      <div className="flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-1">
          <h1 className="text-center text-xl sm:text-2xl font-medium text-black">
            Hello, I am{" "}
          </h1>
          <h1 className="text-center text-xl sm:text-2xl font-semibold text-black">
            Puneet
          </h1>
        </div>

        {/* Responsive large heading */}
        <h1 className="font-[family-name:var(--font-manrope)] text-center text-4xl sm:text-5xl lg:text-7xl font-semibold text-gray-700 px-4 sm:px-10 lg:px-20 tracking-tighter">
          I am creating impactful solutions that drive growth.
        </h1>

        {/* Responsive subheading */}
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-light text-gray-700 px-5 sm:px-20 lg:px-72 pt-6 sm:pt-8 lg:pt-10">
          I create digital products that focus on the users needs and fit the
          product strategy.
        </h2>
      </div>

      {/* Button responsive width */}
      <div className="w-48 sm:w-60 lg:w-72 pt-5">
        <a onClick={() => scrollToSection(myCvRef)}>
          <AnimatedButton {...buttonProps} />
        </a>
      </div>
    </div>
  );
};

export default Herosection;
