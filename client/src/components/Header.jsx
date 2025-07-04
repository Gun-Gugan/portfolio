import React from "react";
import profileImg from "../assets/profile.jpg";
import Resume from "../resume/Resume.pdf";
import { motion } from "framer-motion";

function Header() {
  return (
    <section section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 to-gray-900 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-5"
          >
            GUGANRAJ R
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="text-xl sm:text-2xl text-white mt-3"
          >
            Full Stack Developer | Frontend Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="text-gray-400 max-w-xl mt-4"
          >
            Building seamless and visually stunning web applications with a passion for intuitive design and robust functionality.
          </motion.p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-2 px-8 rounded-full shadow-lg hover:shadow-blue-500/50 hover:brightness-110 transition duration-300"
            >
              Get in Touch
            </motion.a>

            <motion.a
              href={Resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-8 rounded-full shadow-lg hover:shadow-blue-400/50 hover:brightness-110 transition duration-300"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]"
        >
          <img
            src={profileImg}
            alt="Gugan Raj"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Header;
