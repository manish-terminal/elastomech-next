'use client';

import React from "react";
import ContactForm from "../Components/ContactForm";
import InfoTopBar from "../Components/InfoTopBar";
import NavBar from "../Components/Navbar";
import { Breadcrumbs } from "@mui/material";
import Footer from "../Components/Footer";
import WhatsAppIcon from "../assets/whatsapp.webp";
import Link from "next/link";
import { Build, CheckCircle, Construction, Settings } from "@mui/icons-material";
import Image from "next/image";

const CustomProduct = () => {
  const page_header_details = {
    header_name: "Contact Us",
    header_dec:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "About Us",
  };
  return (
    <div className="flex flex-col min-h-screen">
      <InfoTopBar />
      <NavBar />
      {/* <Breadcrumbs page_header_details={page_header_details} /> */}
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mb-12 mt-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-600 mb-4">
            Custom Rubber Products
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10 max-w-4xl mx-auto">
            We specialize in creating custom rubber products to meet your exact specifications.
            Our team ensures the highest quality and durability, tailored to your unique needs.
          </p>
        </div>

        {/* Process Section */}
        <div className="bg-yellow-100 py-16 px-6 md:px-12 lg:px-20 text-black flex-grow">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-black mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Step 1: Inquiry */}
            <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                <Construction className="text-4xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Step 1: Inquiry</h2>
              <p className="text-sm sm:text-base text-white">
                Start by contacting us with your product requirements. Our team will work with you to gather details and understand your exact needs.
              </p>
            </div>

            {/* Step 2: Technical Consultation */}
            <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                <Settings className="text-4xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Step 2: Technical Consultation</h2>
              <p className="text-sm sm:text-base text-white">
                Our experienced engineers will provide technical consultations to ensure the product fits your exact needs.
              </p>
            </div>

            {/* Step 3: Production */}
            <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center mb-4">
                <Build className="text-4xl" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Step 3: Production</h2>
              <p className="text-sm sm:text-base text-white">
                Once the technical is finalized, we begin production. We use state-of-the-art machinery and materials to ensure top-quality results.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section - Black Background */}
        <div className="bg-black py-16 px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-yellow-400 mb-6">
            Need Assistance with Your Custom Product?
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            Our customer support is available to help you at every step of the process. We're here to assist you in technicaling the perfect product.
          </p>
          <Link href="/contact">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-yellow-500 text-black py-3 px-6 rounded-full text-xl hover:bg-yellow-600 transition-colors">
              Contact Us Now
            </button>
          </Link>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20 text-black">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center text-yellow-600 mb-8">
            Why Choose Us?
          </h2>
          <p className="text-lg sm:text-xl text-center text-black mb-8 max-w-3xl mx-auto">
            We are committed to delivering high-quality, durable, and cost-effective rubber products.
            Our tailor-made solutions ensure that your specific requirements are met with precision and care.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="text-yellow-600" />
              <span className="text-lg sm:text-xl text-black">High-Quality Materials</span>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="text-yellow-600" />
              <span className="text-lg sm:text-xl text-black">Tailored to Your Needs</span>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="text-yellow-600" />
              <span className="text-lg sm:text-xl text-black">Durability Guaranteed</span>
            </div>
          </div>
        </div>

        {/* CTA Section - Yellow Background */}
        <div className="bg-yellow-500 py-16 px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
            Ready to Create Your Custom Product?
          </h2>
          <p className="text-lg sm:text-xl text-black mb-8 max-w-3xl mx-auto">
            Our team is ready to bring your ideas to life with tailor-made solutions. Get in touch today to get started!
          </p>
          <Link href="/contact">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bg-black text-yellow-500 py-3 px-6 rounded-full text-xl hover:bg-yellow-600 hover:text-black transition-colors">
              Request Your Custom Product
            </button>
          </Link>
        </div>
      </div>
      <ContactForm />
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=9075358795&text=Hello"
        className="fixed bottom-4 right-3 cursor-pointer"
      >
        <Image src={WhatsAppIcon} alt="whatsapp" height={45} width={45} />
      </a>
    </div>
  );
};

export default CustomProduct;
