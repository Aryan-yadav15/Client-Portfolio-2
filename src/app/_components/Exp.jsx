// pages/index.js
import React from "react";
import WorkExperience from "./_shared/WorkExp";
import { workExperiences } from "../lib/myExp";

export default function Exp() {
  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <h1 className="text-5xl lg:text-7xl text-center font-semibold mt-10">Work Experience</h1>
      <p className="py-3 text-xl text-center max-w-2xl">
        Here is a brief overview of my professional journey, showcasing the roles and experiences that have shaped my career.
      </p>
      <div className="bg-white rounded-[48px] shadow-lg py-10 px-4 w-full">
        {workExperiences.length > 0 ? (
          workExperiences.map((experienceData, index) => (
            <WorkExperience
              key={index}
              logo={experienceData.logo}
              company={experienceData.company}
              role={experienceData.role}
              duration={experienceData.duration}
              location={experienceData.location}
              startDate={experienceData.startDate}
              endDate={experienceData.endDate}
              tasks={experienceData.tasks} // Passing tasks
            />
          ))
        ) : (
          <p>No experience data available</p>
        )}
      </div>
    </div>
  );
}
