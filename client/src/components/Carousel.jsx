import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import zomatoImg from "../assets/projects/zomato1.png";
import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import zomato2Img from "../assets/projects/zomato2.png";
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
    link: "https://your-portfolio-site.com",
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
    <section className="mt-20 px-4">
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
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project`}
                  className="mt-2 inline-block text-sm text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;

