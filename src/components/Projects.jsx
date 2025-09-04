"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Modern Marketing Website",
      category: "NURA",
      type: "Development",
      year: "2025",
    },
    {
      title: "Full-Stack Recruitment Platform",
      category: "Job Portal",
      type: "Development",
      year: "2025",
    },
    {
      title: "SAAS Platform",
      category: "Productivity SAAS",
      type: "Development",
      year: "2025",
    },
    {
      title: "ML Recommendation Engine",
      category: "CineRec",
      type: "Development",
      year: "2025",
    },
    {
      title: "Code-to-Image Tool",
      category: "Code2Img",
      type: "Development",
      year: "2025",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen bg-[#080807] text-[#D1D1D7] px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[4rem] sm:text-[6rem] font-extrabold leading-none tracking-tight">
            SELECTED WORKS <span className="text-gray-500">/</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          <div>
            <span className="text-sm uppercase tracking-wider text-gray-400">
              (PROJECTS)
            </span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Thoughtfully crafted digital experiences that blend utility and
            aesthetics into something functional, memorable, and refined.
          </p>
        </motion.div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 mb-8"
        >
          <div className="flex items-center gap-4 text-6xl font-bold text-gray-400">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between py-6 border-b border-gray-700 hover:border-gray-500 transition-colors">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.type}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-6xl font-bold text-gray-400 mb-4">DEVELOPER</h3>
          <h3 className="text-6xl font-bold text-gray-400 mb-4">DESIGNER</h3>
          <h3 className="text-6xl font-bold text-gray-400">
            CREATOR<span className="text-gray-500">/</span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
