'use client';

import React from "react";
import { Products } from "../components/Data/Products";
import NavBar from "../components/Navbar";
import InfoTopBar from "../components/InfoTopBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <InfoTopBar />
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.url}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                  <p className="text-gray-600">{product.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
