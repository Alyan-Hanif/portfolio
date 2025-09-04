"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="services"
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
            What I Do <span className="text-gray-500">/</span>
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
              (Services)
            </span>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in building full-stack web applications that are fast,
            reliable, and user-friendly. With a solid foundation in both
            frontend and backend technologies, I help bring ideas to life
            whether it's for a business, a startup, or a product team.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="border-t border-gray-700 my-12"
        />

        {/* Service Item 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12"
        >
          <span className="text-3xl font-bold text-gray-400">(01)</span>
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Full-Stack Development
            </h3>
            <p className="text-gray-400 mb-6">
              From frontend interactions to backend APIs, I build complete web
              solutions. I work with modern stacks to deliver apps that are
              scalable, maintainable, and ready for real-world users.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">01</span> React, Node.js,
                Express.js
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">02</span> REST APIs, Firebase,
                Docker
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">03</span> Git, GitHub, Postman
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-gray-700 my-12"
        />

        {/* Service Item 2 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12"
        >
          <span className="text-3xl font-bold text-gray-400">(02)</span>
          <div>
            <h3 className="text-3xl font-semibold mb-4">UI/UX & Frontend</h3>
            <p className="text-gray-400 mb-6">
              Design is more than looks — it's about clarity and connection. I
              design and develop clean, responsive interfaces that feel
              intuitive across devices. My focus is on clarity, accessibility,
              and seamless user experiences.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">01</span> NextJs, TailwindCSS,
                GSAP
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">02</span> Figma to Code
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">03</span> HTML, CSS, JavaScript
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="border-t border-gray-700 my-12"
        />

        {/* Service Item 3 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          <span className="text-3xl font-bold text-gray-400">(03)</span>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Optimization</h3>
            <p className="text-gray-400 mb-6">
              Beyond handling data, I'm driven by the challenge of turning
              complex raw inputs into reliable, usable systems. I enjoy
              designing pipelines that power insights and apply core CS
              principles to build for scale, speed, and stability.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">01</span> Data Structures &
                Algorithms
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">02</span> DBMS, OOP, OS
                Fundamentals
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">03</span> Data Pipelines, ETL,
                and Scalability
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
