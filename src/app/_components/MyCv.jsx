import React from "react";
import {
  achievements,
  experience,
  professionalExperience,
} from "../lib/myDescription";

const MyCv = () => {
  return (
    <div className="relative top-0 z-0 bg-white text-gray-500 px-4 sm:px-10 lg:px-20 py-10 sm:py-20 rounded-[40px] transition-custom-long">
      <div className="flex flex-col">
        <section className="pb-10">
          <h1 className="text-4xl sm:text-4xl lg:text-8xl text-center font-semibold text-black">
            Curriculum Vitae
          </h1>
          <p className="text-center pt-5 text-xl">A Deeper dive in my world</p>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <section className="sm:w-1/3">
            <div className="sticky top-5 border-t border-gray-400 pt-5">
              <p className="text-sm text-gray-600">01.</p>
              <h1 className="font-semibold text-gray-950 text-5xl pb-5">
                Currently Working
              </h1>
            </div>
          </section>
          <section className="sm:w-2/3">
            <div className="flex flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400">
              <div className="mb-2 sm:mb-0 w-[80%] hover:text-black transition-all duration-200 ">
                <h1 className="font-medium text-gray-950 text-xl sm:text-2xl">
                  Kyndryl - Senior manager UX Design
                </h1>
                <p className="py-5 pr-10">
                  Responsible for leading the user experience strategy and
                  execution across multiple products, ensuring alignment with
                  business goals. My role involves managing and mentoring a team
                  of UX/UI designers, overseeing the design lifecycle from
                  concept to delivery, and fostering collaboration with product,
                  engineering, and other stakeholders. Key responsibilities
                  include developing a UX vision, implementing design systems,
                  conducting user research, and driving innovation in design
                  practices
                </p>
                {/* <div className="flex flex-wrap">
                    {exp.tech.map((techItem, techIndex) => (
                      <TechPill key={techIndex} tech={techItem} />
                    ))}
                  </div> */}
              </div>
              <div className="w-[20%] ">
                <p className="text-sm bg-black text-center rounded-lg text-white">July 2024 - Present</p>
              </div>
            </div>
          </section>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <section className="sm:w-1/3">
            <div className="sticky top-5 border-t border-gray-400 pt-5">
              <p className="text-sm text-gray-600">02.</p>
              <h1 className="font-semibold text-gray-950 text-5xl ">Education</h1>
            </div>
          </section>
          <section className="sm:w-2/3">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col  md:flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400"
              >
                <div className="mb-2 sm:mb-0 w-[80%] hover:text-black transition-all duration-200 ">
                  <h1 className="font-medium text-gray-950 text-xl sm:text-2xl">
                    {exp.title}
                  </h1>
                  <p className="py-5 pr-10">{exp.description}</p>
                  <div className="flex flex-wrap">
                    {exp.tech.map((techItem, techIndex) => (
                      <TechPill key={techIndex} tech={techItem} />
                    ))}
                  </div>
                </div>
                <div className="md:w-[20%]">
                  <p className="text-sm">{exp.year}</p>
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
        {/* this is another degment  */}
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10">
          <section className="sm:w-1/3">
            <div className="sticky top-5 border-t border-gray-400 pt-5">
              <p className="text-sm text-gray-600">03.</p>
              <h1 className="font-semibold text-gray-950 text-5xl ">
                Experience
              </h1>
            </div>
          </section>
          <section className="sm:w-2/3">
            {professionalExperience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col  md:flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400"
              >
                <div className="mb-2 sm:mb-0 w-[80%] hover:text-black transition-all duration-200 ">
                  <h1 className="font-medium text-gray-950 text-xl sm:text-2xl">
                    {exp.title}
                  </h1>
                  <p className="py-5 pr-10">{exp.description}</p>
                  <div className="flex flex-wrap">
                    {exp.tech.map((techItem, techIndex) => (
                      <TechPill key={techIndex} tech={techItem} />
                    ))}
                  </div>
                </div>
                <div className="md:w-[20%]">
                  <p className="text-sm">{exp.year}</p>
                  <p>{exp.company}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10">
          <section className="sm:w-1/3">
            <div className="sticky top-5 border-t border-gray-400 pt-5">
              <p className="text-sm text-gray-600">04.</p>
              <h1 className="font-semibold text-gray-950  text-5xl">
                Achievements
              </h1>
            </div>
          </section>
          <section className="sm:w-2/3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between py-6 sm:py-10 border-t hover:border-gray-800 transition border-gray-400"
              >
                <div className="flex flex-col gap-5">
                  <h1 className="font-medium text-gray-950 text-xl sm:text-2xl">
                    {achievement.title}
                  </h1>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
                <div className="pt-4 md:text-end">
                  <p className="text-sm text-gray-600">{achievement.year}</p>
                  <p className="text-gray-600 text-sm">
                    {achievement.category}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default MyCv;

const TechPill = ({ tech }) => {
  return (
    <div className="bg-gray-800 rounded-full text-sm px-4 py-2 font-medium text-gray-50 m-1">
      {tech}
    </div>
  );
};
