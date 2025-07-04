import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import zomatoImg from "../assets/projects/zomato1.png";
import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import clockImg from "../assets/projects/clock.png";
import popupImg from "../assets/projects/popup.png";
import webpageImg from "../assets/projects/webpage.png";
import ResumeMakerImg from "../assets/projects/ResumeMakerImg.png";

const projects = [
  {
    id: 1,
    title: "Delivery app with login verification",
    image: zomatoImg,
    link: "https://zomato-clone-client.onrender.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: portfolioImg,
    link: "https://portfolio-client-xj4n.onrender.com",
  },
  {
    id: 3,
    title: "Digital Calculator",
    image: calculatorImg,
    link: "https://gun-gugan.github.io/Calculator/",
  },
  {
    id: 4,
    title: "Resume Maker",
    image: ResumeMakerImg,
    link: "https://gun-gugan.github.io/ResumeMaker/",
  },
  {
    id: 5,
    title: "Digital Clock",
    image: clockImg,
    link: "https://gun-gugan.github.io/Digital-Clock/",
  },
  {
    id: 6,
    title: "Task Manager App",
    image: popupImg,
    link: "https://gun-gugan.github.io/Pop-Up/",
  },
  {
    id: 7,
    title: "Single Web Page",
    image: webpageImg,
    link: "https://gun-gugan.github.io/Projects",
  },
];

const Carousel = () => {
  return (
    <section id="projects" className="mt-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        <span className="text-blue-500">My</span> Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Hover Overlay with Title */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white text-center px-2 animate-fadeIn">
                  {project.title}
                </h3>
              </div>

              {/* Always Visible Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-black text-white hover:text-blue-600 px-6 py-1 rounded-md text-sm font-semibold shadow-md transition-all duration-300 text-center opacity-60 hover:opacity-100"



              >
                View Project →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;

