"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Users,
  FileText,
  Lightbulb,
  Search,
  GitPullRequest,
  BarChart,
  PenTool,
  Briefcase,
  Building,
  Palette,
} from "lucide-react";

const getIconForTask = (title) => {
  switch (title.toLowerCase()) {
    case "leadership & coordination":
      return <Users className="w-8 h-8 mr-2 text-black pl-2" />;
    case "content management & quality":
      return <FileText className="w-8 h-8 mr-2 text-black pl-2" />;
    case "brainstorming sessions":
      return <Lightbulb className="w-8 h-8 mr-2 text-black pl-2" />;
    case "user research & design":
      return <Search className="w-8 h-8 mr-2 text-black pl-2" />;
    case "workflow definition & usability testing":
      return <GitPullRequest className="w-8 h-8 mr-2 text-black pl-2" />;
    case "implementations":
      return <BarChart className="w-8 h-8 mr-2 text-black pl-2" />;
    case "cross team collaboration":
      return <Users className="w-8 h-8 mr-2 text-black pl-2" />;
    default:
      return <Briefcase className="w-8 h-8 mr-2 text-black pl-2" />;
  }
};

const TaskCard = ({ title, description }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const updateMousePosition = (ev) => {
      const rect = card.getBoundingClientRect();
      setMousePosition({
        x: ev.clientX - rect.left,
        y: ev.clientY - rect.top,
      });
    };

    card.addEventListener("mousemove", updateMousePosition);

    return () => {
      card.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800 group md:gap-8 hover:border-zinc-400 border-zinc-600 bg-zinc-900"
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
        <div
          className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
          style={{
            maskImage: `radial-gradient(240px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
          }}
        ></div>
        <div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={{
            maskImage: `radial-gradient(240px at ${mousePosition.x}px ${mousePosition.y}px, white, transparent)`,
          }}
        ></div>
      </div>
      <section className="p-4 md:p-8">
        <div className="fledx flex-col gap-2 justify-center items-center">
          <h2 className="flex flex-row items-center z-20 text-xl font-medium duration-1000 lg:text-2xl group-hover:text-white  ">
            <div className=" bg-white rounded-xl p-2">{getIconForTask(title)}</div>
          </h2>
          <h2 className="flex flex-row items-center z-20 text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display pt-2">
            {title}
          </h2>
        </div>
        <p
          className="z-20 mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200 text-pretty"
          style={{ maxWidth: "40rem" }}
        >
          {description}
        </p>
      </section>
    </div>
  );
};

export default TaskCard;
