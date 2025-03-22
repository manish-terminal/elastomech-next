'use client';

import Hcr_4 from "../assets/Products/HCR_4.webp";
import df_2 from "../assets/Products/DFender/2by2.webp";
import wheel_choker_8 from "../assets/Products/wheel_choker_8.webp";
import black_speed_breaker from "../assets/Products/black_speed_breaker.webp";
import dock_bumper_13x10x4 from "../assets/Products/dock_bumper_13x10x4.webp";
import core_cable_protector from "../assets/Products/2_core_cable_protector.webp";
import {
  Construction,
  Build,
  DesignServices,
  Engineering,
  HomeRepairService,
  Architecture,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const ProductShowcase = () => {
  const services = [
    {
      title: "Dock Fenders",
      description:
        "Innovating Dock Fenders and a comprehensive line of Rubber Products, ensuring superior protection for marine infrastructure worldwide.",
      image: df_2,
      icon: <Construction className="text-4xl text-black-500" />,
      link: "dock-fenders"
    },
    {
      title: "Dock Bumpers",
      description:
        "At Elastomech, we proudly offer a comprehensive range of high-performance Dock Bumpers, designed to safeguard your docks and vessels with unmatched durability.",
      image: dock_bumper_13x10x4,
      icon: <HomeRepairService className="text-4xl text-black-500" />,
      link: "dock-bumpers"
    },
    {
      title: "Wheel Chokers",
      description:
        "Wheel chokers are practical devices designed to secure wheels, preventing unintended movement of vehicles or machinery. Crafted from durable materials.",
      image: wheel_choker_8,
      icon: <Engineering className="text-4xl text-black-500" />,
      link: "wheel-chokers"
    },
    {
      title: "Speed Breakers",
      description:
        "High-quality, durable speed breakers designed to enhance road safety and manage traffic effectively. Built with robust materials.",
      image: black_speed_breaker,
      icon: <DesignServices className="text-4xl text-black-500" />,
      link: "speed-breakers"
    },
    {
      title: "Hose Ramps",
      description:
        "At Elastomech, we design and manufacture high-quality hose ramps, providing durable solutions for accessibility and convenience.",
      image: Hcr_4,
      icon: <Build className="text-4xl text-black-500" />,
      link: "hose-ramps"
    },
    {
      title: "Cable Protectors",
      description:
        "Durable and reliable cable protectors designed to safeguard wires and prevent tripping hazards, ensuring safety in high-traffic areas.",
      image: core_cable_protector,
      icon: <Architecture className="text-4xl text-black-500" />,
      link: "cable-protectors"
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 md:py-20 md:px-12 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Products</h2>
        <p className="text-lg text-gray-600 mb-8">Explore our premium range of high-quality rubber products tailored for a variety of industries.</p>

        {/* Custom Product Button */}
        <div className="mb-12">
          <Link
            href="/custom-product"
            className="bg-yellow-300 text-black px-6 py-3 rounded-full text-lg font-semibold hover:text-gray-400 transition-all duration-300"
          >
            Request a Custom Product
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative h-60">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="services-content p-4">
              <div className="service-inner flex items-center gap-4 justify-between w-full">
                <div className="services-titles">
                  <h3 className="text-xl font-semibold mb-2 text-[#010d14]">
                    <Link
                      href={`/products/${service.link}`}
                      className="hover:text-blue-500 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h3>
                </div>
                <div className="icon-image">{service.icon}</div>
              </div>
            </div>
            <div className="service-description p-4">
              <p className="services-txt text-black mb-4">{service.description}</p>
              <div className="services-btn">
                <Link
                  href={`/products/${service.link}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read more about {service.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
