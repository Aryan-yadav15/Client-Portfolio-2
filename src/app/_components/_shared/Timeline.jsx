"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 75%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans px-4 sm:px-6 md:px-10 text-white rounded-[48px] relative overflow-hidden"
      ref={containerRef}
    >
      
      <div className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 gap-6 md:gap-10 relative"
          >
            {/* Left Side - Company Details */}
            <div className="sticky flex flex-col items-start  md:flex-row z-40 top-40 max-w-full md:max-w-xs lg:max-w-sm w-full md:w-auto">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-purple-300 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <div className=" pl-14 md:pl-20 flex flex-col gap-4 items-start">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={80}
                  height={80}
                />
                <h3 className="text-lg sm:text-xl md:text-4xl font-bold text-neutral-500 dark:text-white">
                  {item.company}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-neutral-400 dark:text-neutral-400">
                  {item.role}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-neutral-400 dark:text-neutral-400">
                  {item.duration}
                </p>
              </div>
            </div>

            {/* Right Side - Task Details */}
            <div className="relative pl-12 sm:pl-16 md:pl-20 pr-4 w-full">
              <div>
                {item.tasks.map((task, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="text-base sm:text-lg md:text-2xl font-semibold text-neutral-600 dark:text-neutral-300">
                      {task.title}
                    </h4>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-500 dark:text-neutral-400">
                      {task.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Styling */}
        <div
          style={{
            height: `calc(${containerHeight}px - 5rem)`,
          }}
          className="absolute left-8 top-0 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-gray-400 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
