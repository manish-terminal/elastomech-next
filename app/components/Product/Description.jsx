import React, { useState } from "react";
import { Products } from "../Data/Products";
import DirectionsRoundedIcon from '@mui/icons-material/DirectionsRounded';

const Description = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border relative border-gray-200 shadow-sm p-6 mb-4 rounded-md bg-white">
      {/* Reposition the button with some top margin to avoid overlap with the product title */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="rounded-sm !bg-[#ffda31] text-[#010d14] !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black hover:text-[#fff] z-10"
      >
        <DirectionsRoundedIcon className="mr-2" /> Need Customization?
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">{selectedProduct.title}</h2>
      <p className="text-gray-700 text-md font-medium">{selectedProduct.description}</p>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-[1000] p-3 top-0 overflow-y-auto">
          {/* Modal Container */}
          <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-6 relative transform transition-all duration-300 scale-100 overflow-y-auto max-h-screen z-60">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 text-xl z-70"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-800">How does it work?</h2>
              <p className="text-gray-500 mt-2">
                Explore the steps below to understand the process in a simple way.
              </p>
            </div>

            {/* Steps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  📝
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 1: Request a Quote</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Contact us to get an initial quote for your rubber product needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  🛠️
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 2: Discuss Specifications</h3>
                <p className="text-gray-500 text-sm mt-1">
                  We'll work together to finalize the specifications and design of your rubber products.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-yellow-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  🔧
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 3: Manufacturing</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Once everything is set, we'll begin manufacturing your rubber products to your specifications.
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 flex items-center justify-center rounded-full mx-auto shadow-md mb-3">
                  📦
                </div>
                <h3 className="font-semibold text-lg text-gray-800">STEP 4: Delivery</h3>
                <p className="text-gray-500 text-sm mt-1">
                  After manufacturing, your rubber products are ready for delivery or pickup.
                </p>
              </div>

              {/* Contact Button */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-4 text-center mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Description;
