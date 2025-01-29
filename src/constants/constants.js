import {
  FaBus,
  FaClock,
  FaHandshake,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdOutlinePeople } from "react-icons/md";

export const IMAGES = [
  `${process.env.PUBLIC_URL}/images/buses/Type1.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type1-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type1-3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Door.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type2-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Interior-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type2-3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Seats-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Seats-3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type4.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type4-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Seats.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type4-3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Type5.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Bus_Seats.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Bus_Seats-2.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Interior.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Interior-3.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Mini.jpeg`,
  `${process.env.PUBLIC_URL}/images/buses/Mini-2.jpeg`,
];

export const ABOUT_TEXT = `
  At <span class="font-bold text-[#FACC15]">CMT Travels</span>, we provide luxurious and affordable travel solutions. 
  Whether you're planning a family vacation, a honeymoon, or a corporate event, we ensure a seamless and memorable experience from start to finish. 
  Let us take care of the details while you focus on creating memories!
`;

export const SERVICES_DATA = [
  {
    title: "Luxury Bus Tours",
    description:
      "Explore new destinations in style and comfort with our luxury buses, designed to make your travel experience unforgettable.",
    icon: <FaBus size={40} />,
  },
  {
    title: "Customized Itineraries",
    description:
      "Tailored itineraries for groups and solo travelers to ensure you experience the best of every destination.",
    icon: <FaMapMarkedAlt size={40} />,
  },
  {
    title: "On-Time Service",
    description:
      "We value your time. Enjoy punctual and reliable service with every tour, ensuring a hassle-free experience.",
    icon: <FaClock size={40} />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize customer satisfaction with our top-notch services and attention to every detail.",
    icon: <FaHandshake size={40} />,
  },
];

export const CONTACT_INFO = [
  {
    icon: FaPhoneAlt,
    title: "Call Us:",
    items: [
      { text: "+91 9059357315", href: "tel:+919059357315" },
      { text: "+91 8328338811", href: "tel:+919328338811" },
      { text: "+91 9030656205", href: "tel:+919030656205" },
    ],
  },
  {
    icon: FaEnvelope,
    title: "Mail:",
    items: [
      {
        text: "chandanamotorstoursandtravels@gmail.com",
        href: "mailto:chandanamotorstoursandtravels@gmail.com",
      },
      {
        text: "santoshdornala@gmail.com",
        href: "mailto:santoshdornala@gmail.com",
      },
    ],
  },
  {
    icon: MdOutlinePeople,
    title: "Connect With Us:",
    items: [
      {
        icon: FaFacebookF,
        href: "https://www.facebook.com/profile.php?id=100008401005192",
      },
      {
        icon: FaTwitter,
        href: "https://www.facebook.com/profile.php?id=100008401005192",
      },
      {
        icon: FaLinkedinIn,
        href: "https://www.facebook.com/profile.php?id=100008401005192",
      },
    ],
  },
];
