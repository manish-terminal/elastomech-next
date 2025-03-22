'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clientLogo from "../assets/companyimages/logo.webp";
import ModalDesign from "./Modal";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (path) => pathname === path;

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="menu-area sticky top-0 bg-white shadow z-[999]">
        <div className="container mx-auto flex justify-between items-center py-4 md:py-6 px-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="logo-area" onClick={scrollToTop}>
              <Image
                className="normal-logo h-[50px] md:h-[70px]"
                src={clientLogo}
                alt="logo"
                width={70}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* Navigation Menu (Desktop) */}
          <nav className="flex-1 hidden md:flex justify-center space-x-6 text-black font-medium">
            <Link 
              href="/"
              onClick={scrollToTop}
              className={`text-[17px] md:text-[19px] font-ubuntu ${
                isActive("/") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              onClick={scrollToTop}
              className={`text-[17px] md:text-[19px] font-ubuntu ${
                isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              About
            </Link>
            <Link 
              href="/products"
              onClick={scrollToTop}
              className={`text-[17px] md:text-[19px] font-ubuntu ${
                isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Products
            </Link>
            <Link 
              href="/contact"
              onClick={scrollToTop}
              className={`text-[17px] md:text-[19px] font-ubuntu ${
                isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-400"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section (Desktop) */}
          <div className="flex items-center space-x-3">
            {/* Button */}
            <Link href="/custom-product" onClick={scrollToTop}>
              <div className="hidden md:block bg-[#ffda31] text-black font-semibold cursor-pointer px-6 py-2 text-[14px] shadow-none hover:bg-black rounded-none hover:text-white font-ubuntu">
                Custom Products
              </div>
            </Link>
            <div
              onClick={handleOpen}
              className="hidden md:block bg-[#ffda31] text-black font-semibold cursor-pointer px-6 py-2 text-[14px] shadow-none hover:bg-black rounded-none hover:text-white font-ubuntu"
            >
              Find A Distributor
            </div>

            {/* Hamburger Icon (Mobile) */}
            <button
              id="nav-expander"
              title="navbar-expander"
              className="md:hidden flex items-center justify-center font-ubuntu"
              onClick={toggleMenu}
            >
              <span className="text-black">
                <MenuIcon />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal for Find A Distributor Button */}
      {open && (
        <ModalDesign
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}

      {/* Mobile Menu (Modal or Dropdown for smaller screens) */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center">
          <div className="bg-black p-6 rounded-lg w-11/12">
            <nav className="flex flex-col space-y-4 text-center text-white font-ubuntu">
              <Link 
                href="/"
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
                className={`text-[19px] ${
                  isActive("/") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
                className={`text-[19px] font-ubuntu ${
                  isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                About
              </Link>
              <Link 
                href="/products"
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
                className={`text-[19px] font-ubuntu ${
                  isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Products
              </Link>
              <Link
                href="/custom-product"
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
                className={`text-[19px] font-ubuntu ${
                  isActive("/custom-product") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Custom Products
              </Link>
              <Link
                href="/contact"
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
                className={`text-[19px] font-ubuntu ${
                  isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-400"
                }`}
              >
                Contact
              </Link>
              {/* Close button */}
              <button
                onClick={toggleMenu}
                className="mt-4 font-ubuntu py-2 px-4 bg-[#ffda31] text-[#010d14] font-medium rounded-lg hover:bg-black hover:text-white"
              >
                Close Menu
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
