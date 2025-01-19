import React, { useState } from "react";

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
    <nav className="bg-blue-900 mx-auto flex justify-between items-center py-4 px-6 sticky top-0 z-50 shadow-lg text-white">
      {/* Logo Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          CMT Travels
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center">
        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 text-sm sm:text-base md:text-lg lg:text-xl`}
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
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-blue-900 text-white py-4 flex flex-col items-center space-y-6 md:hidden">
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
      )}
    </nav>
  );
};

export default Navbar;
