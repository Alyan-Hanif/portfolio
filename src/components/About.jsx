"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen bg-[#080807] text-[#D1D1D7] px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">Just an Image.</span>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              I'm a software engineer driven by a passion for turning ideas into
              clean, intuitive digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-sm uppercase tracking-wider text-gray-400">
                (About Me)
              </span>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                I am a passionate Software Engineer with a knack for building
                full-stack web applications using modern technologies like
                Next.js and TailwindCSS. My journey in tech began with a
                curiosity for solving real-world problems through innovative
                solutions, which evolved into a love for crafting user-centric
                digital experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Beyond coding, I thrive in collaborative environments and enjoy
                tackling challenging problems with creative solutions. I aim to
                contribute to impactful projects that make a difference in
                users' lives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
