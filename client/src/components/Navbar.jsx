import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="text-white py-6 px-10 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-end">
        {/* Toggle Menu Button */}
        <button 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-white text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-8 text-3xl font-semibold text-white">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

