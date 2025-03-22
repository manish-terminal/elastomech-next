'use client';

import React, { useState, useEffect } from "react";
import { Products } from "../Data/Products";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import icons for navigation
import Image from "next/image";

const Variety = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="bg-gray-50 shadow-sm border border-gray-200 rounded-sm p-4 sm:p-6 w-full">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-700">Types Available</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedProduct.variety.map((variety, index) => (
          <div
            key={index}
            className="relative bg-white hover:shadow-sm border border-gray-200 rounded-md overflow-hidden transition-shadow duration-300"
          >
            {/* Image Carousel */}
            <VarietyCarousel images={variety.image} name={variety.name} />

            <div className="p-3 sm:p-4">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{variety.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VarietyCarousel = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-48 sm:h-64 md:h-72">
      {/* Carousel Image */}
      <Image
        src={images[currentIndex]}
        alt={`${name} image`}
        fill
        className="object-cover transition-opacity duration-500"
      />
      
      {/* Carousel Navigation (Only show if more than one image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full text-sm sm:text-base"
          >
            <ArrowBack />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full text-sm sm:text-base"
          >
            <ArrowForward />
          </button>
        </>
      )}
      
      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              idx === currentIndex ? "bg-[#ffda31]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Variety;
