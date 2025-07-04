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
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-teal-800 to-slate-900 flex flex-col items-center justify-center overflow-hidden relative p-8">
        <div className="w-12 h-12 border-4 border-cyan-300 border-t-transparent border-dashed rounded-full animate-spin mb-4"></div>
        <p className="text-cyan-200 text-lg font-medium animate-pulse">Loading...</p>
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
