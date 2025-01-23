import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-blue-900 mx-auto flex justify-between items-center py-4 px-6 sticky top-0 z-50 shadow-xl text-white">
      {/* Logo Section */}
      <div>
        <img
          src="/images/logos/logo2.png"
          alt="CMT Travels Logo"
          className="h-10 w-auto sm:h-12 md:ml-6 object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:mr-6 space-x-8 text-sm sm:text-base md:text-lg lg:text-xl">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:underline hover:text-yellow-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:underline hover:text-yellow-300"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:underline hover:text-yellow-300"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:underline hover:text-yellow-300"
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:underline hover:text-yellow-300"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-white h-6 w-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-16 left-0 right-0 mt-2 bg-blue-900 text-white py-6 flex flex-col items-center space-y-4 md:hidden border-t border-yellow-300 rounded-b-lg shadow-lg"
        >
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="hover:underline hover:text-yellow-300"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:underline hover:text-yellow-300"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:underline hover:text-yellow-300"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:underline hover:text-yellow-300"
            >
              Gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:underline hover:text-yellow-300"
            >
              Contact Us
            </button>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
