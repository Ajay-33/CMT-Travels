import React from "react";
import { CONTACT_INFO } from "../constants/constants";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 sm:py-10 border-t">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6 sm:mb-8">
          For Bookings and Queries
        </h2>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTACT_INFO.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start space-y-4"
            >
              {/* Title */}
              <div className="flex items-center space-x-3">
                <section.icon className="text-yellow-400 text-3xl sm:text-4xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {section.title}
                </h3>
              </div>

              {/* Items */}
              {section.title === "Connect With Us:" ? (
                <div className="flex space-x-8 justify-center sm:justify-start">
                  {section.items.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="text-3xl sm:text-4xl text-gray-300 hover:text-yellow-300 transition duration-300"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-300 text-sm sm:text-base">
                  {section.items.map((item, itemIndex) => (
                    <span key={itemIndex}>
                      <a
                        href={item.href}
                        className="hover:underline hover:text-yellow-300"
                      >
                        {item.text}
                      </a>
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            &copy; 2024 CMT Travels. All Rights Reserved. Designed by {""}
            <a href="/" className="text-blue-400 hover:underline">
              Me
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
