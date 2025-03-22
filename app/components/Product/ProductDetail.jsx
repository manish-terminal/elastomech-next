'use client';

import React from "react";
import { Products } from "../Data/Products";
import SideBar from "./SideBar";
import Variety from "./Variety";
import Technical from "./Technical";
import Description from "./Description";
import Application from "./Application";
import NavBar from "../Navbar";
import InfoTopBar from "../InfoTopBar";
import Image from "next/image";
import WhatsAppIcon from "../../assets/whatsapp.webp";
import Footer from "../Footer";
import NotFound from "../../not-found";

const ProductDetail = ({ productUrl }) => {
  const product = Products.find((p) => p.url === productUrl);

  if (!product) {
    return <NotFound />
  }

  const page_header_details = {
    header_name: "Products",
    header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: product.title, // Dynamic title
  };

  return (
    <div className="flex flex-col min-h-screen">
      <InfoTopBar />
      <NavBar />
      {/* <Breadcrumbs page_header_details={page_header_details} /> */}

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 xl:w-1/5 bg-white shadow-sm p-6 lg:sticky lg:top-0">
          <SideBar selectedProductId={product.id} />
        </div>

        {/* Main Content */}
        <div className="flex-grow w-full lg:w-3/4 xl:w-4/5 p-6">
          <Description product={product.id} />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 flex-wrap">
              <Application product={product.id} />
              <Technical product={product.id} />
            </div>
            <Variety product={product.id} />
          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a href="https://api.whatsapp.com/send?phone=9075358795&text=Hello" className="fixed bottom-4 right-3 cursor-pointer">
        <Image src={WhatsAppIcon} alt="whatsapp" height={45} width={45} />
      </a>

      <Footer />
    </div>
  );
};

export default ProductDetail;
