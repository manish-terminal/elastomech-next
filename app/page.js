'use client';

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Clients from "./components/Clients";
import InfoTopBar from "./components/InfoTopBar";
import AboutSection from "./components/AboutSection";
import FullPageSlider from "./components/FullPageSlider";
import CounterSection from "./components/CounterSection";
import FeaturedServices from "./components/FeaturedServices";
import EngagementSteps from "./components/EngagementSteps";
import ProductShowcase from "./components/ProductShowcase";
import WhatsAppIcon from "./assets/whatsapp.webp";
import ContactForm from "./components/ContactForm";
import Image from "next/image";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
      setShowButton(scrollPosition > 300); // Show button after scrolling down 300px
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <InfoTopBar />
      <Navbar />
      <div>
        <FullPageSlider />
        <AboutSection />
        <FeaturedServices />
        <EngagementSteps />
        <ProductShowcase />
        <CounterSection />
        <Clients />
        <ContactForm />
      </div>
      <Footer />

      <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className="fixed bottom-4 right-3 cursor-pointer">
        <Image src={WhatsAppIcon} alt="whatsapp" height={45} width={45} />
      </a>
      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          title="scrolltop"
          className="fixed bottom-[5rem] right-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
