'use client';

import React, { useState, useEffect } from 'react';
import NavBar from "../components/Navbar";
import InfoTopBar from "../components/InfoTopBar";
import Footer from "../components/Footer";
import FeaturedServices from '../components/FeaturedServices';
import EngagementProcess from '../components/EngagementSteps';
import WhatsAppIcon from "../assets/whatsapp.webp";
import logo from '../assets/logo-nobg.webp';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    const [showButton, setShowButton] = useState(false);

    // Handle scroll event to toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Show button after scrolling down 300px
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

    const page_header_details = {
        header_name: "About Us",
        header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
        header_current_page_name: "About Us"
    }

    return (
        <div className="flex flex-col min-h-screen">
            <InfoTopBar />
            <NavBar />
            <div className="bg-white pb-[120px] px-4 md:px-[80px] lg:px-[120px] flex flex-col md:flex-row items-center justify-between max-w-full">
                {/* Image Section */}
                <div className="flex-1 relative mb-6 md:mb-0">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={logo}
                            alt="Elastomech"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="flex-1 md:ml-8 lg:ml-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-[#333] mb-6 md:mb-8">
                        Committed to quality, innovation, and excellence since 1985.
                    </h2>
                    <p className="text-[#333] leading-relaxed mb-4 text-sm md:text-base">
                        Established in 1985, our ISO 9001-2015 certified organization has been dedicated to manufacturing specialty molding and specialized conveyor belts. With a commitment to perfect systems in manufacturing, testing, and administration standards, we have steadily grown to intrude the export and local markets.
                    </p>
                    <p className="text-[#333] leading-relaxed text-sm md:text-base">
                        Our company is well known for its commitment to excellence in quality, focusing equally on any new development to render the best services to our local and international clients. Over the years, we have expanded our offerings by developing a wide range of safety parts such as Dock Bumpers, Hose Ramps, Fenders, Kerbs, and gaskets, among others. With a range of 500+ parts developed for exports and local markets, we continue to prioritize quality, innovation, and customer satisfaction in all our endeavors.
                    </p>
                </div>
            </div>
            <div className="bg-yellow-500 py-16 px-6 md:px-12 lg:px-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
                    Ready to Create Your Custom Product?
                </h2>
                <p className="text-lg sm:text-xl text-black mb-8 max-w-3xl mx-auto">
                    Our team is ready to bring your ideas to life with tailor-made solutions. Get in touch today to get started!
                </p>
                <Link href="/contact">
                    <button className="bg-black text-yellow-500 py-3 px-6 rounded-full text-xl hover:bg-yellow-600 hover:text-black transition-colors">
                        Request Your Custom Product
                    </button>
                </Link>
            </div>
            
            <FeaturedServices />
            <EngagementProcess />

            <Footer />
            
            {/* WhatsApp Floating Icon */}
            <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className="fixed bottom-4 right-4 cursor-pointer z-50">
                <Image src={WhatsAppIcon} alt="whatsapp" height={50} width={50} />
            </a>

            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-[5rem] right-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg"
                    aria-label="Scroll to top"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default About;
