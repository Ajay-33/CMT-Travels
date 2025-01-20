import React from "react";
import { motion } from "framer-motion";
import { FaBus, FaMapMarkedAlt, FaClock, FaHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <section
      id="services"
      className="py-12 px-6 md:px-12 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 flex flex-col justify-evenly text-white min-h-[calc(100vh-4.5rem)]"
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
        {/* Service 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center text-center bg-blue-900 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80"
        >
          <div className="bg-[#FACC15] text-blue-900 p-6 rounded-full mb-6">
            <FaBus size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15]">
            Luxury Bus Tours
          </h3>
          <p className="text-lg sm:text-xl text-gray-200">
            Explore new destinations in style and comfort with our luxury buses,
            designed to make your travel experience unforgettable.
          </p>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center text-center bg-blue-900 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80"
        >
          <div className="bg-[#FACC15] text-blue-900 p-6 rounded-full mb-6">
            <FaMapMarkedAlt size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15]">
            Customized Itineraries
          </h3>
          <p className="text-lg sm:text-xl text-gray-200">
            Tailored itineraries for groups and solo travelers to ensure you
            experience the best of every destination.
          </p>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center text-center bg-blue-900 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80"
        >
          <div className="bg-[#FACC15] text-blue-900 p-6 rounded-full mb-6">
            <FaClock size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15]">
            On-Time Service
          </h3>
          <p className="text-lg sm:text-xl text-gray-200">
            We value your time. Enjoy punctual and reliable service with every
            tour, ensuring a hassle-free experience.
          </p>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center text-center bg-blue-900 p-8 rounded-lg shadow-lg w-full sm:w-80 md:w-72 lg:w-80"
        >
          <div className="bg-[#FACC15] text-blue-900 p-6 rounded-full mb-6">
            <FaHandshake size={40} />
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#FACC15]">
            Customer Satisfaction
          </h3>
          <p className="text-lg sm:text-xl text-gray-200">
            We prioritize customer satisfaction with our top-notch services and
            attention to every detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
