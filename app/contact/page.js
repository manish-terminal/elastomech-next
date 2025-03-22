'use client';

import React from "react";
import ContactForm from "../components/ContactForm";
import InfoTopBar from "../components/InfoTopBar";
import NavBar from "../components/Navbar";
import { Breadcrumbs } from "@mui/material";
import Footer from "../components/Footer";
import WhatsAppIcon from "../assets/whatsapp.webp";
import Image from "next/image";

const ContactPage = () => {
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
      <Breadcrumbs page_header_details={page_header_details} />
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

export default ContactPage;
