import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactIcons = () => {
  // Default message to be sent for WhatsApp
  const defaultMessage =
    "Hello, I would like to book a tour. Can you assist me with the process?";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const phoneNumberWhatsApp = "919848190564";
  const phoneNumberCall = "+91 9848190564";

  return (
    <div className="fixed bottom-8 right-4 sm:right-6 md:bottom-8 md:right-8 flex flex-col space-y-4 z-50">
      {/* WhatsApp Icon */}
      <a
        href={`https://wa.me/${phoneNumberWhatsApp}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl border-4 border-yellow-300"
        style={{
          animation: "pulse 1.5s infinite",
        }}
      >
        <FaWhatsapp className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </a>

      {/* Call Now Icon */}
      <a
        href={`tel:${phoneNumberCall}`}
        className="bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl border-4 border-yellow-300"
        style={{
          animation: "pulse 1.5s infinite",
        }}
      >
        <FaPhoneAlt className="text-blue-900 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
