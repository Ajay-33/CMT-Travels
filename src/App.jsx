import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import BusGallery from "./components/BusGallery";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import "./App.css";
import "animate.css";
import Services from "./components/Services";
import FloatingContactIcons from "./components/FloatingContactIcons";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <BusGallery />
      <ContactForm />
      <Footer />
      <FloatingContactIcons />
    </div>
  );
}

export default App;
