import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroSection = (navbarHeight) => {
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
      className="relative min-h-[calc(100vh-4.5rem)] bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 text-white text-center overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 80 },
              size: { value: 4 },
              move: {
                enable: true, // Enable movement
                speed: 1.5, // Set speed
                direction: "none", // Random movement
                outModes: {
                  default: "out", // Particles should go out of bounds and re-enter
                },
              },
              links: {
                enable: true,
                color: "#FFFFFF",
                distance: 200,
              },
              opacity: {
                value: 0.3,
                anim: { enable: true, speed: 1, opacity_min: 0.1 },
              },
            },
            fullScreen: {
              enable: false, // Disable fullscreen to restrict to the parent container
            },
          }}
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in text-shadow-lg">
          Welcome to <span className="text-[#FACC15]">CMT Travels</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 animate-fade-in-delay">
          "Your journey, our priority."
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-[#FFD700] text-blue-900 px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Book Your Adventure
        </button>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "https://media.istockphoto.com/id/1371319562/photo/blue-bus-moving-on-the-road-in-city-in-early-morning.jpg?s=612x612&w=0&k=20&c=RGBmQewRifbqaZg92Noup-Dp0JkF7cy7fIyav3Z6Ekg=",
        }}
      ></div>

      {/* Wave Effect */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
