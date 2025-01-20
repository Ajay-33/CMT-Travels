import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // to disable button
  const [responseMessage, setResponseMessage] = useState(""); // to store success or error message

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Name is required.";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }
    else if (!/^\+?\d{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid Phone number";
    }
    
    
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    setErrors({});
    setIsSubmitting(true); // Start submitting
    emailjs
      .sendForm(
        "service_j99ja7c",
        "template_sx16hok",
        e.target,
        "ebKZhWCmpYszhM6QL"
      )
      .then(
        (result) => {
          setResponseMessage(
            "Your message has been sent successfully! We will contact you soon."
          );
        },
        (error) => {
          setResponseMessage(
            "Unable to send your request at this moment. Please contact us at [<a href='tel:+91 9959170817' class='text-yellow-300 underline'>+91 9959170817</a>]."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false); // End submitting
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      sendEmail(e);
      console.log("Form Submitted", formData);
    } else {
      setErrors(formErrors);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-800 text-white min-h-[calc(100vh-4.25rem)] flex flex-col"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FACC15] mb-8 text-center"
      >
        Get in Touch
      </motion.h2>
      <div className="mx-auto flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-32 h-auto flex-grow">
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={formVariants}
        >
          {/* Name Fields */}
          <div className="flex space-x-4">
            <motion.div className="w-1/2" variants={formVariants}>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2 text-gray-900"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </motion.div>
            <motion.div className="w-1/2" variants={formVariants}>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2 text-gray-900"
              />
            </motion.div>
          </div>
          {/* Email Field */}
          <motion.div variants={formVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2 text-gray-900"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </motion.div>
          {/* Phone Field */}
          <motion.div variants={formVariants}>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2 text-gray-900"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </motion.div>
          {/* Message Field */}
          <motion.div variants={formVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary mt-2 text-gray-900"
            ></textarea>
          </motion.div>
          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#FFD700] text-blue-900 py-3 rounded-md hover:bg-yellow-400 transition-all duration-300 mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={isSubmitting} // Disable button when submitting
          >
            {isSubmitting ? "Submitting..." : "Enquire Now"}
          </motion.button>
        </motion.form>
        {/* Response Message */}
        {responseMessage && (
          <p
            className={`mt-4 text-center text-lg ${
              responseMessage.includes("successfully")
                ? "text-yellow-300"
                : "text-red-500"
            }`}
            dangerouslySetInnerHTML={{ __html: responseMessage }}
          ></p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;