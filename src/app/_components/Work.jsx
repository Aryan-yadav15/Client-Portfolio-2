import React from "react";
import { Timeline } from "./_shared/Timeline";
import { workExperiences } from "../lib/myExp";

export const TimelineWrapper = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl lg:text-7xl text-center font-semibold mt-10">
          Work Experience
        </h1>
        <p className="py-3 text-xl text-center max-w-2xl">
          Here is a brief overview of my professional journey, showcasing the
          roles and experiences that have shaped my career.
        </p>
      </div>
      <Timeline data={workExperiences} />
    </div>
  );
};
