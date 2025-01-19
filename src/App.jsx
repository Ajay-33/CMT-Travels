import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import BusGallery from "./components/BusGallery";
import FloatingWhatsAppIcon from "./components/FloatingWhatsAppIcon";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm"; // Added ContactForm
import './App.css';
import "animate.css";
import Services from "./components/Services";
import FloatingCallNowIcon from "./components/FloatingCallNowIcon";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <Services/>
      <BusGallery />
      <ContactForm /> 
      <Footer />
      <FloatingWhatsAppIcon />
      <FloatingCallNowIcon/>
    </div>
  );
}

export default App;
