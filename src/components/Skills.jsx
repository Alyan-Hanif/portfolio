"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: [
        "Python",
        "SQL",
        "C++",
        "Java",
        "Typescript",
        "JavaScript",
        "Git",
        "Postman",
        "Docker",
        "Firebase",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "Flask",
        "Bootstrap",
        "jQuery",
        "TailwindCSS",
        "Framer Motion",
        "GSAP",
      ],
    },
    {
      title: "Core CS Concepts",
      skills: ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"],
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
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
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-16 space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-gray-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.05,
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gray-800 hover:bg-gray-700 transition-colors p-4 rounded-lg text-center">
                      <span className="text-lg font-medium group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
