import React from "react";
import AnimatedButton from "./_shared/AnimatedButton";

const Herosection = () => {
  const buttonProps = {
    href: "#contact",
    firstName: "Explore My",
    secondName: "Projects",
    bgColor: "bg-gray-800",
  };

  return (
    <div className="bg-white rounded-3xl py-10 flex flex-col items-center justify-center">
      <div className="flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-1">
          <h1 className="text-center text-2xl font-medium text-black">
            Hello, I'm{" "}
          </h1>
          <h1 className="text-center text-2xl font-semibold text-black">
            Puneet
          </h1>
        </div>
        <h1 className="font-[family-name:var(--font-manrope)] text-center text-7xl font-semibold text-gray-700 px-20  tracking-tighter">
          I'm creating impactful solutions that drive growth .
        </h1>
        <h2 className="text-center text-2xl font-light text-gray-700 px-72 pt-10">
          I create digital products that focus on the user’s needs and fit the
          product strategy.
        </h2>
      </div>
      <div className="w-72 pt-5">
        <AnimatedButton {...buttonProps} />
      </div>
    </div>
  );
};

export default Herosection;
