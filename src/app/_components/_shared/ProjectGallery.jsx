"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const ProjectGallery = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(projects[0].imageUrl)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const projectRefs = useRef([])

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768) // Adjust the width threshold as needed
    }

    // Add event listener for screen resizing
    window.addEventListener("resize", checkScreenSize)
    checkScreenSize() // Check initial screen size

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = projectRefs.current.indexOf(entry.target)
            setActiveProject(projects[projectIndex].imageUrl)
          }
        })
      },
      { threshold: 1 }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [projects])

  // Function to render the layout conditionally
  const renderLayout = () => {
    if (isSmallScreen) {
      return (
        <div className="flex flex-col gap-10 py-10">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col gap-4">
              <div className="relative w-full h-64 bg-gray-100 shadow-2xl rounded-[24px]">
                <Image
                  src={project.imageUrl}
                  alt="Project Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[24px]"
                />
              </div>
              <div
                ref={(el) => (projectRefs.current[index] = el)}
                className="bg-white rounded-[24px] shadow-xl px-2 py-5"
              >
                <div className="flex flex-col justify-between p-4">
                  <div className="flex flex-row justify-between font-medium items-center">
                    <p>{project.topic}</p>
                    <p className="text-xl">{project.year}</p>
                  </div>
                  <div className="text-xl">{project.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    }

    // Default large screen layout
    return (
      <div className="flex gap-10 py-10">
        <div className="w-1/2 h-[30rem] sticky top-14 flex items-center justify-center rounded-[24px] bg-gray-100 shadow-2xl">
          <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ y: 100, opacity: 0.3 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0.3 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject}
                  alt="Project Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[24px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-1/2 overflow-y-auto flex flex-col gap-10 scrollable-div pb-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="h-[50vh] bg-white rounded-[24px] shadow-xl px-2 py-5 overflow-hidden transition-all duration-300"
            >
              <div className="flex flex-col justify-end gap-10 p-4 bg-white overflow-hidden">
                <div className="flex flex-row justify-between font-medium items-center">
                  <p>{project.topic}</p>
                  <p className="text-xl">{project.year}</p>
                </div>
                <motion.div className="flex flex-col " initial="initial" whileHover="hover">
                  <motion.div
                    className="relative w-full"
                    variants={{
                      initial: { height: "5rem" },
                      hover: { height: "6.5rem" },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="whitespace-nowrap absolute left-0 py-1"
                      variants={{
                        initial: { x: "0%", fontSize: "2.5rem" },
                        hover: {
                          x: "-100%",
                          fontSize: "7rem",
                          transition: {
                            x: { repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" },
                            fontSize: { duration: 0.3 },
                          },
                        },
                      }}
                    >
                      <span className="font-semibold">{project.title}</span>
                      <motion.span
                        className="font-semibold"
                        variants={{
                          initial: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {` \u00A0 ${project.title}`}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-xl"
                    variants={{
                      initial: { opacity: 1 },
                      hover: { opacity: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <>{renderLayout()}</>
}

export default ProjectGallery
