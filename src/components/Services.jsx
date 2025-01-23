import React from "react";
import { motion } from "framer-motion";
import { SERVICES_DATA } from "../constants/constants"; // Import the services data

const Services = () => {
  return (
    <section
      id="services"
      className="py-12 px-6 md:px-12 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 flex flex-col justify-evenly text-white min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5.0rem)]"
    >
      {/* Title */}
      <div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FACC15] text-center mb-12"
        >
          Our Services
        </motion.h2>
      </div>

      {/* Services Content */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 xl:gap-16">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center text-center bg-blue-900 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80"
          >
            <div className="bg-[#FACC15] text-blue-900 p-6 rounded-full mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FACC15]">
              {service.title}
            </h3>
            <p className="text-lg sm:text-xl text-gray-200">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
