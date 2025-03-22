'use client';

import { useState, useEffect } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import background1 from "../assets/sliderimages/image2.webp";
import Button from "@mui/material/Button";
import Link from 'next/link';
import img1 from '../assets/sliderimages/image.webp';

const Slide1 = ({ isActive }) => {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-yellow-200"
        style={{
          // backgroundImage: `url(${background1})`,
        }}
      />
      {/* Content */}
      <div className="relative h-full flex items-center justify-end">
        <div className="container mx-auto px-4 md:px-6 w-full flex justify-end">
          <div className="max-w-3xl space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#010d14] leading-snug font-playfair">
              Industrial Safety Meets Proven Expertise.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#333] max-w-2xl leading-7 sm:leading-8 text-justify font-semibold font-robot">
              Custom industrial safety solutions with four decades of expertise, ensuring reliability, reducing downtime, and protecting operations worldwide.
            </p>
            <Link href="/about">
              <Button
                variant="contained"
                className="!bg-[#fdd92f] !rounded-none hover:bg-[#010d14] !text-[#010d14] hover:text-white !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] cursor-pointer z-[99]"
              >
                LEARN MORE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide2 = ({ isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000  ${isActive ? "opacity-100" : "opacity-0"}`}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-opacity-50  bg-yellow-300"
      style={{
        // backgroundImage: `url(${img1})`,
        // backgroundColor:"white"
      }}
    />
    {/* Content */}
    <div className="relative h-full flex items-center justify-start">
      <div className="container mx-auto px-4 md:px-6 w-full flex justify-start">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#010d14] leading-snug font-playfair">
            What We Bring to the Table
          </h1>
          <div className="flex flex-col gap-3 font-robot">
            <div>
              <span className="text-xl sm:text-2xl font-bold">Part Development </span>
              <span className="text-lg sm:text-xl text-[#333] font-medium leading-relaxed">
                integrates advanced elastomeric materials to create high-performance, reliable, and durable components for industrial applications.
              </span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold">Part Development Consultancy </span>
              <span className="text-lg sm:text-xl text-[#333] font-medium leading-relaxed">
                offers tailored elastomer and mechanical engineering expertise to drive innovation and optimize product performance.
              </span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold">Part Manufacturing </span>
              <span className="text-lg sm:text-xl text-[#333] font-medium leading-relaxed">
                ensures precision-built parts using state-of-the-art facilities and premium elastomeric materials for maximum durability and quality.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FullPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // 10 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-[calc(100vh-155px)] w-full overflow-hidden">
      {/* Slides */}
      <Slide1 isActive={currentSlide === 0} />
      <Slide2 isActive={currentSlide === 1} />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
        aria-label="Previous slide"
      >
        <ChevronLeftRoundedIcon className="!text-[28px]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
        aria-label="Next slide"
      >
        <ChevronRightRoundedIcon className="!text-[28px]" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-[#ffda31]" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageSlider;
