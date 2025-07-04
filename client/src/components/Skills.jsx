import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

// Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", glow: "shadow-blue-500" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-cyan-400", glow: "shadow-cyan-400" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500", glow: "shadow-purple-500" },
  { name: "React.js", icon: <FaReact />, color: "text-blue-400", glow: "shadow-blue-400" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-600", glow: "shadow-purple-600" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "shadow-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-400", glow: "shadow-gray-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400", glow: "shadow-green-400" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        My Skillset
      </motion.h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2} // Reduced for mobile to give more space per slide
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Adjusted for very small screens
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }}
        className="mt-10 max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gray-900 px-4 py-4 rounded-xl text-white font-medium shadow-md flex flex-col items-center gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:${skills[index].glow} w-full max-w-[150px]`}
            >
              <span className={`text-4xl sm:text-5xl ${skills[index].color}`}>{skill.icon}</span>
              <span className="mt-1 text-sm sm:text-base text-center truncate max-w-full">
                {skill.name}
              </span>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
