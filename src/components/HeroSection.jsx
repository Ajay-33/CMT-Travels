import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = () => {
  const particlesInit = async (main) => {
    await loadFull(main); // Load the full tsparticles engine
  };

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
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5.0rem)] bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 text-white text-center overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: window.innerWidth <= 768 ? 25 : 60 }, // Reduce particles on mobile
              size: { value: window.innerWidth <= 768 ? 2 : 4 }, // Smaller particles on mobile
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                outModes: { default: "out" },
              },
              links: {
                enable: window.innerWidth <= 768 ? false : true,
                // enable:false,
                color: "#FFFFFF",
                distance: 200,
              },
              opacity: {
                value: 0.3,
                anim: { enable: true, speed: 1, opacity_min: 0.1 },
              },
            },
            fullScreen: { enable: window.innerWidth <= 768 ? true : false },
          }}
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-shadow-lg">
          Welcome to <span className="text-[#FACC15]">CMT Travels</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 animate-fade-in-delay">
          "Your journey, our priority."
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#FFD700] text-blue-900 px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Book Your Adventure
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
