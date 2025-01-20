import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";

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
          {/* Call Us Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-yellow-400 text-3xl sm:text-4xl" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Call Us:</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              <a
                href="tel:+919059357315"
                className="hover:underline hover:text-yellow-300"
              >
                +91 9059357315
              </a>
              <br />
              <a
                href="tel:+919328338811"
                className="hover:underline hover:text-yellow-300"
              >
                +91 8328338811
              </a>
              <br />
              <a
                href="tel:+919030656205"
                className="hover:underline hover:text-yellow-300"
              >
                +91 9030656205
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-yellow-400 text-3xl sm:text-4xl" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Mail:</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              <a
                href="mailto:chandanamotorstoursandtravels@gmail.com"
                className="hover:text-yellow-300"
              >
                chandanamotorstoursandtravels@gmail.com
              </a>
              <br />
              <a
                href="mailto:santoshdornala@gmail.com"
                className="hover:text-yellow-300"
              >
                santoshdornala@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media & Connect Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <MdOutlinePeople className="text-yellow-400 text-3xl sm:text-4xl" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Connect With Us:
              </h3>
            </div>
            <div className="flex space-x-8 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100008401005192"
                className="text-3xl sm:text-4xl text-gray-300 hover:text-yellow-300 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008401005192"
                className="text-3xl sm:text-4xl text-gray-300 hover:text-yellow-300 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008401005192"
                className="text-3xl sm:text-4xl text-gray-300 hover:text-yellow-300 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
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
