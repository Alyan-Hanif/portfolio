"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-[#080807] text-[#D1D1D7] px-6 sm:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[4rem] sm:text-[6rem] font-extrabold leading-none tracking-tight mb-8">
            Let's Make It Happen
          </h2>
          <h3 className="text-4xl font-bold text-gray-400">Say Hello</h3>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors py-4 text-lg outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Send Message"
                rows={6}
                className="w-full bg-transparent border-b border-gray-700 focus:border-white transition-colors py-4 text-lg outline-none resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-black py-4 px-8 font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Menu */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <div className="space-y-2">
              {["Home", "Services", "Works", "About", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 10 }}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Socials</h4>
            <div className="space-y-2">
              {["Linkedin", "Instagram", "Github"].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ x: 10 }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Local Time */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center text-gray-400"
        >
          <p>Local time Loading...</p>
        </motion.div>
      </div>
    </section>
  );
}
