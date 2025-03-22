import Link from 'next/link';
import Image from 'next/image';
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FooterBg from '../assets/footer.webp';
import logo from '../assets/logo-nobg.webp';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className="bg-cover bg-center pt-10 md:pt-16 lg:pt-20"
      style={{ backgroundImage: `url(${FooterBg.src})` }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6 md:mb-10 lg:mb-12">
        <Image
          className="h-12 md:h-16 lg:h-20 w-auto"
          src={logo}
          alt="Elastomech Logo"
          width={80}
          height={80}
          priority
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between text-white w-full px-6 md:px-12 lg:px-20 xl:px-[300px] gap-8 md:gap-12">
        
        {/* Address Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Address</div>
          <div className="md:w-72 lg:w-80">
            <p className="flex items-start">
              <LocationOnOutlinedIcon sx={{ color: "#ffd930", marginRight: "8px" }} />
              ELASTOMECH Plot No. A, 28, Anand Nagar, Additional M.I.D.C, Ambernath, Maharashtra 421506
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Products</div>
          <ul className="flex flex-col gap-1 w-full cursor-pointer">
            {[
              { name: "Dock Fenders", path: "/products/dock-fenders" },
              { name: "Dock Bumpers", path: "/products/dock-bumpers" },
              { name: "Wheel Chockers", path: "/products/wheel-chokers" },
              { name: "Speed Breakers", path: "/products/speed-breakers" },
              { name: "Hose Ramps", path: "/products/hose-ramps" },
              { name: "Cable Protectors", path: "/products/cable-protectors" },
              { name: "Rubber Buffers/Stoppers", path: "/products/rubber-stoppers" },
              { name: "Tipper-Pads", path: "/products/tipper-pads" },
              { name: "Wall/Corner Guards", path: "/products/corner-guards" },
              { name: "Custom Products", path: "/custom-product" },
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center text-white transition-all duration-300 text-[14px] md:text-[16px] hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <Link
                  href={item.path}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">FAQ's</div>
          <ul className="flex flex-col gap-1 w-full cursor-pointer">
            {[
              { name: "Dock Fenders", path: "/faq/dock-fenders" },
              { name: "Dock Bumpers", path: "/faq/dock-bumpers" },
              { name: "Wheel Chockers", path: "/faq/wheel-chokers" },
              { name: "Speed Breakers", path: "/faq/speed-breakers" },
              { name: "Hose Ramps", path: "/faq/hose-ramps" },
              { name: "Cable Protectors", path: "/faq/cable-protectors" },
              { name: "Rubber Buffers/Stoppers", path: "/faq/rubber-stoppers" },
              { name: "Tipper-Pads", path: "/faq/tipper-pads" },
              { name: "Wall/Corner Guards", path: "/faq/corner-guards" },
              { name: "Custom Products", path: "/custom-product" },
            ].map((item, index) => (
              <li key={index} className="flex gap-2 items-center text-white transition-all duration-300 text-[14px] md:text-[16px] hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <Link
                  href={item.path}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <div className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Contact Us</div>
          <ul className="flex flex-col gap-2 md:gap-3">
            <li className="flex gap-2 items-center hover:text-[#ffd930] text-sm md:text-base lg:text-lg">
              <ForwardToInboxIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="mailto:sales.elastomech@gmail.com">sales.elastomech@gmail.com</a>
            </li>
            <li className="flex gap-2 items-center hover:text-[#ffd930] text-sm md:text-base lg:text-lg">
              <CallOutlinedIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="tel:+91 90753 58795">+91 90753 58795</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#333] mt-10 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between text-white">
        <span className="text-center text-sm md:text-base">
          © ELASTOMECH, All Rights Reserved.
        </span>
        <span className="mt-2 md:mt-0 text-center text-sm md:text-base">
          Website designed with ❤️ by <a href="https://webatlantis.in" target="_blank" rel="noopener noreferrer" className="text-[#ffda31] hover:underline">Team WebAtlantis</a>|Mohit Kumar
        </span>
      </div>
    </div>
  );
};

export default Footer;
