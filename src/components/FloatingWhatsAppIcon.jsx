import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppIcon = () => {
  // Default message to be sent
  const defaultMessage =
    "Hello, I would like to book a tour. Can you assist me with the process?";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const phoneNumber = "919848190564";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 sm:right-6 md:bottom-8 md:right-8 bg-green-500 p-4 z-50 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl border-4 border-yellow-300"
      style={{
        animation: "pulse 1.5s infinite",
      }}
    >
      <FaWhatsapp className="text-white w-8 h-8 sm:w-6 sm:h-6 md:w-8 md:h-8" />
    </a>
  );
};

export default FloatingWhatsAppIcon;
