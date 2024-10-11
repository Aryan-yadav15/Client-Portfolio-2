import Image from "next/image";
import React from "react";
import AnimatedButton from "./_shared/AnimatedButton";
import { InfiniteMovingCards } from "./_shared/InfiniteMovingCards";
import { clients } from "../lib/movingIcons";

const About = () => {
  const buttonProps = {
    href: "#contact",
    firstName: "My resume",
    secondName: "Download",
    bgColor: "bg-gray-100",
    textColor: "text-gray-600",
  };
  return (
    <div className="flex flex-col px-10 gap-5">
      <div className="text-center pt-10 pb-4 flex flex-col gap-4">
        <h1 className="text-7xl font-semibold">About Me</h1>
        <p className="text-2xl">UX and Web design leader</p>
      </div>
      <section>
        <div className="flex flex-row gap-5">
          <div className="flex flex-col bg-gray-800 w-3/5 p-10 rounded-[24px] ">
            <h1 className="text-3xl font-medium text-gray-300">
              I'm <span className="font-bold text-gray-100">Puneet Verma </span>{" "}
              , a seasoned{" "}
              <span className="font-extrabold  text-gray-100">
                {" "}
                UX and Web design{" "}
              </span>{" "}
              leader creating great digital experiences.
            </h1>
            <p className="text-gray-200 font-light pt-10">
              Throughout my career, I've led diverse teams and delivered
              impactful solutions that prioritize user needs and business goals.
              I am working as India Content Delivery Leader in EY and has over
              17 years of experience in the areas of web development, graphic
              design, wed design and user experience. Has been with EY for over
              10 years, driving functional priorities and leading key design
              projects
            </p>
            <div className="w-1/2 pt-8">
              <AnimatedButton {...buttonProps} />
            </div>
          </div>
          <div className="w-2/5">
            <div className="relative h-[30rem] drop-shadow-2xl">
              <Image
                src="/me.jpg"
                alt="Puneet Verma"
                className="rounded-[24px] object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-row gap-5">
          <div className="w-1/3  bg-white flex flex-col gap-3 text-center justify-center items-center text-5xl rounded-[24px] text-gray-700 font-bold">
            <p>My Design</p>
            <p>Philosophy</p>
          </div>
          <div className="w-2/3 bg-gray-800 rounded-[24px] ">
            <p className=" text-gray-200 font-regular p-10">
              At the core of my design philosophy is empathy. I believe in
              deeply understanding users' behaviors, motivations, and pain
              points to create intuitive and meaningful experiences. My approach
              is iterative, collaborative, and driven by data, ensuring that
              every design decision is grounded in user insights. I'm poficient
              in Adobe Creative Suite, including Photoshop, Illustrator, and
              InDesign. I am also skilled in HTML, CSS, and JavaScript.
              Additionally, I have experience with content management systems
              like SharePoint and Adobe Enterprise Manager.
            </p>
          </div>
        </div>
      </section>
      <InfiniteMovingCards items={clients}/>
    </div>
  );
};

export default About;
