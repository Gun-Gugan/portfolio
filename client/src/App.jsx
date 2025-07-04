import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-teal-900 to-blue-900 flex flex-col items-center justify-center overflow-hidden relative">
        {/* Wave Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="wave"></div>
          <div className="wave wave-2"></div>
        </div>

        {/* Spinning Line Loader */}
        <div className="w-12 h-12 border-t-4 border-teal-400 rounded-full animate-spin mb-6"></div>

        {/* Sliding Text */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300 text-center animate-slide-in">
          Explore My Work
        </h1>

        <style jsx="true">{`
          .wave {
            position: absolute;
            width: 200%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%, rgba(45, 212, 191, 0.15), transparent);
            animation: waveMove 6s ease-in-out infinite alternate;
            transform: translateX(-50%);
            border-radius: 40%;
          }

          .wave-2 {
            animation-delay: 1.5s;
            opacity: 0.15;
          }

          @keyframes waveMove {
            0% {
              transform: translateX(-50%) translateY(0) scale(1);
            }
            100% {
              transform: translateX(-45%) translateY(-60px) scale(1.2);
            }
          }

          .animate-slide-in {
            animation: slideIn 1.2s ease-out forwards;
          }

          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <Navbar />
      <Header />
      <Skills />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
