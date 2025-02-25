import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { IMAGES } from "../constants/constants";
import { FaTimes } from "react-icons/fa";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut", delay },
  }),
};

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const BusGallery = () => {
  const [rows, setRows] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const updateRows = () => {
    const width = window.innerWidth;
    if (width >= 1920) {
      setRows(3); // Very large screens, 3 items per row
    } else if (width >= 1440) {
      setRows(2); // Large screens, 2 items per row
    } else if (width >= 1024) {
      setRows(2); // Medium screens, 2 items per row
    }
  };

  useEffect(() => {
    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  const groupedImages = [];
  for (let i = 0; i < IMAGES.length; i += rows) {
    groupedImages.push(IMAGES.slice(i, i + rows));
  }

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = selectedImage;
      link.download = selectedImage.split("/").pop();
      link.click();
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <section
      id="gallery"
      className="py-12 mx-auto px-4 sm:px-6 md:px-8 text-center flex flex-col justify-evenly bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 text-white min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5.0rem)]"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FACC15] mb-12"
      >
        Our Fleet of Luxury Buses
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={galleryVariants}
      >
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={2}
          autoHeight={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {groupedImages.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 gap-4">
                {group.map((src, subIndex) => (
                  <motion.div
                    key={subIndex}
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={subIndex * 0.2} // Custom delay for each image
                    className="relative overflow-hidden rounded-xl shadow-lg group"
                  >
                    <img
                      src={src}
                      alt={`Bus ${index * 2 + subIndex + 1}`}
                      className="w-full h-48 2xl:h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                      onClick={() => handleImageClick(src)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-lg sm:text-xl text-center">
                        Image {index * 2 + subIndex + 1}
                      </p>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                        <button
                          onClick={() => handleImageClick(src)}
                          className="bg-[#FFD700] text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300"
                        >
                          View Full
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {modalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative bg-white p-4 md:p-6 lg:p-8 rounded-xl max-w-2xl sm:max-w-lg w-full mx-2 shadow-2xl overflow-hidden my-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 z-20 bg-[#FFD700] text-blue-900 rounded-full transition-all duration-300"
            >
              <FaTimes className="h-6 w-6" />
            </button>

            {/* Image Display */}
            <div className="relative shadow-lg max-w-full max-h-[60vh] sm:max-h-[70vh] overflow-hidden flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Download Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleDownload}
                className="bg-[#FFD700] text-blue-900 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Download Image
              </button>
            </div>
          </div>
        </motion.div>
      )}
      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #facc15;
          font-size: 2rem;
          z-index: 10;
          position: absolute;
          top: 50%;
          background-color: rgba(0, 0, 0, 0.85);
          transition: opacity 0.3s ease, transform 0.3s ease;
          padding: 15px;
          border-radius: 10%;
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: inherit;
          transition: transform 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            font-size: 1.8rem;
            top: 50%;
            padding: 10px;
          }
        }

        @media (min-width: 1440px) {
          .swiper-button-next,
          .swiper-button-prev {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            top: 50%;
            padding: 15px;
          }
        }

        @media (max-width: 480px) {
          .swiper-button-next,
          .swiper-button-prev {
            top: 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default BusGallery;
