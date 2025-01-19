import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FloatingCallNowIcon = () => {
  return (
    <a
      href="tel:+9848190564"
      className="fixed bottom-8 right-8 bg-white p-4 z-50 rounded-full shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl border-4 border-yellow-300"
      style={{
        animation: "pulse 1.5s infinite",
      }}
    >
      <FaPhoneAlt className="text-blue-900 w-8 h-8" />
    </a>
  );
};

export default FloatingCallNowIcon;
