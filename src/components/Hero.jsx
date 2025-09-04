"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Transform scroll position to opacity and scale values for individual components
  const titleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const titleScale = useTransform(scrollY, [0, 200], [1, 0.9]);
  const titleY = useTransform(scrollY, [0, 200], [0, -50]);

  const leftSectionOpacity = useTransform(scrollY, [100, 300], [1, 0]);
  const leftSectionX = useTransform(scrollY, [100, 300], [0, -100]);

  const imageOpacity = useTransform(scrollY, [150, 350], [1, 0]);
  const imageScale = useTransform(scrollY, [150, 350], [1, 0.7]);

  const rightSectionOpacity = useTransform(scrollY, [200, 400], [1, 0]);
  const rightSectionY = useTransform(scrollY, [200, 400], [0, 50]);

  return (
    <>
      {/* Black Overlay Animation - Covers entire viewport including navbar */}
      <motion.div
        initial={{ y: 0, clipPath: "circle(100% at 50% 100%)" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="fixed inset-0 bg-black z-50"
      />

      <section className="min-h-screen flex bg-[#e7e8e2] px-4 sm:px-6 md:px-8 flex-col relative overflow-hidden">
        {/* Header */}
        <div className="w-full h-[60%] flex items-end justify-center pt-20 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-extrabold tracking-tighter text-center h-full
                     text-[#171717] text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-[15.625rem] leading-none"
            style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
          >
            ALYAN HANIF
          </motion.h1>
        </div>

        <div className="w-full h-[40%] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 px-4 sm:px-6 md:px-8 py-8 lg:py-0">
          {/* Left Section - Text and Button */}
          <div className="w-full lg:w-1/3 h-full flex flex-col items-start lg:items-start justify-center space-y-4 lg:space-y-6 order-2 lg:order-1">
            {/* Arrow Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-[#3f3f3d] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ opacity: leftSectionOpacity, x: leftSectionX }}
            >
              ↘
            </motion.div>

            {/* Descriptive Text */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="text-[#3f3f3d] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-full lg:max-w-xs"
              style={{ opacity: leftSectionOpacity, x: leftSectionX }}
            >
              Open to job opportunities worldwide. Passionate about building
              polished, intuitive, and thoughtful digital experiences that leave
              a mark.
            </motion.p>

            {/* Contact Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="bg-[#3f3f3d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-[#2a2a28] transition-colors flex items-center gap-2 text-sm sm:text-base lg:text-lg"
              style={{ opacity: leftSectionOpacity, x: leftSectionX }}
            >
              CONTACT
              <span className="text-white">→</span>
            </motion.button>
          </div>

          {/* Middle Section - Image */}
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.3 }}
              className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-64 lg:h-80 bg-gray-300 rounded-lg shadow-lg border border-gray-200 flex items-center justify-center"
              style={{ opacity: imageOpacity, scale: imageScale }}
            >
              <span className="text-[#3f3f3d] text-sm sm:text-base lg:text-lg text-center px-2">
                Your Photo Here
              </span>
            </motion.div>
          </div>

          {/* Right Section - Availability Info */}
          <div className="w-full lg:w-1/3 h-full flex flex-col lg:items-end justify-center lg:justify-end p-4 sm:p-8 lg:p-20 order-3 lg:order-3">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="text-[#3f3f3d] text-lg sm:text-xl md:text-2xl uppercase tracking-tight text-center lg:text-right"
              style={{ opacity: rightSectionOpacity, y: rightSectionY }}
            >
              Available for work
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="text-[#3f3f3d] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center lg:text-right"
              style={{ opacity: rightSectionOpacity, y: rightSectionY }}
            >
              JUN'25
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
