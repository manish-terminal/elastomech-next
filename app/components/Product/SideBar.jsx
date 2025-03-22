'use client';

import React from "react";
import Link from "next/link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Products } from "../Data/Products";

const SideBar = ({ selectedProductId }) => {
  return (
    <div className="w-auto min-w-[200px] h-full border-r bg-white shadow-sm p-6 overflow-y-auto">
      <h1 className="text-xl font-semibold mb-6 text-gray-700">Type of Products</h1>
      <div className="space-y-4">
        {/* Product Links */}
        {Products.map((product) => (
          <Link
            key={product.id}
            title={product.title}
            href={`/products/${product.url}`}
            className={`flex justify-between items-center py-3 px-5 rounded-sm cursor-pointer transition-all duration-200 font-medium shadow-sm
            ${selectedProductId === product.id
              ? "bg-[#ffda31] text-black shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="truncate">{product.title}</span>
            <ChevronRightRoundedIcon
              className={`${selectedProductId === product.id ? "text-black" : "text-gray-500"}`}
            />
          </Link>
        ))}
        
        {/* Custom Product Link */}
        <Link
          href="/custom-product"
          className={`flex justify-between items-center py-3 px-5 rounded-sm cursor-pointer transition-all duration-200 font-medium shadow-sm
            ${selectedProductId === "custom" ? "bg-[#ffda31] text-black shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          <span className="truncate">Custom Products</span>
          <ChevronRightRoundedIcon
            className={`${selectedProductId === "custom" ? "text-black" : "text-gray-500"}`}
          />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
