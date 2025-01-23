import React from "react";
import { ABOUT_TEXT } from "../constants/constants";
import { motion } from "framer-motion";

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

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-12 px-6 md:px-12 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 flex flex-col justify-evenly text-white min-h-[calc(100vh-4.5rem)]"
    >
      {/* Title */}
      <div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FACC15] mb-12 text-center"
        >
          About Us
        </motion.h2>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:space-y-0 flex-grow w-full">
        {/* Left Side: About Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left px-4"
        >
          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
          />

          {/* Call to Action Button */}
          <div className="mt-6">
            <button
              onClick={() => scrollToSection("services")}
              className="bg-[#FFD700] text-blue-900 px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Explore Our Services
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center md:justify-end px-4"
        >
          <img
            src="https://buscdn.cardekho.com/in/ashok-leyland/oyster-tourist-bus/ashok-leyland-oyster-tourist-bus.jpg"
            alt="Travel"
            className="w-full mb-4 lg:mb-0 md:w-full lg:w-3/4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
